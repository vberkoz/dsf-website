#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { dsfCDKStack } from '../lib/dsf-cdk-stack';

const app = new cdk.App();
new dsfCDKStack(app, 'dsfCDKStack', {
  domainName: 'vberkoz.com',
  subdomain: 'dsf',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});