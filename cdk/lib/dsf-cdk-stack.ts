import { Duration, RemovalPolicy, Stack, type StackProps } from "aws-cdk-lib";
import { Certificate, CertificateValidation } from "aws-cdk-lib/aws-certificatemanager";
import { Distribution, OriginAccessIdentity, ViewerProtocolPolicy, Function, FunctionCode, FunctionEventType } from "aws-cdk-lib/aws-cloudfront";
import { S3BucketOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import type { Construct } from "constructs";
import * as path from 'node:path';

interface dsfCDKStackProps extends StackProps {
    domainName: string;
    subdomain: string;
    env: {
        account: string | undefined;
        region: string | undefined;
    };
}

export class dsfCDKStack extends Stack {
    constructor(scope: Construct, id: string, props: dsfCDKStackProps) {
        super(scope, id, props);

        const domain = `${props.subdomain}.${props.domainName}`;
        const hostedZone = HostedZone.fromLookup(this, 'dsfCDKStackZone', {
            domainName: props.domainName,
        });

        const cert = new Certificate(this, 'dsfCDKStackCert', {
            domainName: domain,
            validation: CertificateValidation.fromDns(hostedZone),
        });

        const bucket = new Bucket(this, 'dsfCDKStackBucket', {
            removalPolicy: RemovalPolicy.DESTROY,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            autoDeleteObjects: true,
            publicReadAccess: false,
        });

        const oai = new OriginAccessIdentity(this, 'dsfCDKStackOAI');
        bucket.grantRead(oai);

        const cfFunction = new Function(this, 'dsfCDKStackIndexHtmlFunction', {
            code: FunctionCode.fromInline(`
              function handler(event) {
                var request = event.request;
                var uri = request.uri;
      
                if (uri.endsWith("/")) {
                  request.uri += "index.html";
                } else if (!uri.includes(".")) {
                  request.uri += "/index.html";
                }
      
                return request;
              }
            `),
        });

        const distribution = new Distribution(this, 'dsfCDKStackDistribution', {
            defaultRootObject: 'index.html',
            defaultBehavior: {
                origin: S3BucketOrigin.withOriginAccessIdentity(bucket, {
                    originAccessIdentity: oai,
                }),
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                functionAssociations: [{
                    function: cfFunction,
                    eventType: FunctionEventType.VIEWER_REQUEST,
                }],
            },
            domainNames: [domain],
            certificate: cert,
            errorResponses: [
                {
                    httpStatus: 404,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                    ttl: Duration.minutes(5)
                },
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                    ttl: Duration.minutes(5)
                },
            ],
        });

        new BucketDeployment(this, 'dsfCDKStackBucketDeployment', {
            sources: [
                Source.asset(path.join(process.cwd(), '../out')),
            ],
            destinationBucket: bucket,
            distributionPaths: ['/*'],
            distribution,
        });

        new ARecord(this, 'dsfCDKStackAliasRecord', {
            zone: hostedZone,
            recordName: props.subdomain,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        });
    }
}