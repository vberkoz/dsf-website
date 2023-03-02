import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/posts";
import { DefaultNextSteps } from "@/data/DefaultNextSteps";

export default function Post({
  postData,
}: {
  postData: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
    contentHtml: string;
    prev: string;
    prevCap: string;
    next: string;
    nextCap: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div
        style={{
          backgroundImage: `url(/blog/${postData.image}.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r from-gray-100/100 to-gray-100/50 dark:from-gray-900/100 dark:to-gray-900/50 text-left text-gray-900 dark:text-gray-100 lg:to-gray-100/0 dark:lg:to-gray-900/0">
          <div className="grid lg:p-14 xl:grid-cols-4 xl:pr-[108px]">
            <div></div>
            <div className="col-span-2 flex flex-col p-3">
              <h1 className="mb-4 pb-16 text-5xl font-medium sm:text-5xl">
                {postData.title}
              </h1>

              <div className="grow"></div>
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <Date dateString={postData.date} /> 6 min read
              </p>
              <p className="mb-2 text-sm text-gray-800 dark:text-gray-200 md:mb-4">
                By: {postData.author}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="grid bg-gray-100 dark:bg-gray-900 lg:grid-cols-3 lg:p-14 xl:grid-cols-4 xl:pr-[108px]">
        <div className="flex">
          <div className="flex lg:flex-col">
            <Link
              href="https://www.facebook.com/VO-Group-137855302900377/"
              className="m-3 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M26.67,4H5.33A1.34,1.34,0,0,0,4,5.33V26.67A1.34,1.34,0,0,0,5.33,28H16.82V18.72H13.7V15.09h3.12V12.42c0-3.1,1.89-4.79,4.67-4.79.93,0,1.86,0,2.79.14V11H22.37c-1.51,0-1.8.72-1.8,1.77v2.31h3.6l-.47,3.63H20.57V28h6.1A1.34,1.34,0,0,0,28,26.67V5.33A1.34,1.34,0,0,0,26.67,4Z"></path>
                <title>Logo Facebook</title>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/244169?trk=vsrp_companies_res_name&trkInfo=VSRPsearchId%3A680837921446585156063%2CVSRPtargetId%3A244169%2CVSRPcmpt%3Aprimary"
              className="m-3 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4 H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3 H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path>
                <title>Logo LinkedIn</title>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/StephenZarick"
              className="m-3 text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg
                fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M11.5475,25.7523c9.0566,0,14.0102-7.5034,14.0102-14.0102,0-.2131,0-.4253-.0144-.6365,.9637-.697,1.7955-1.5601,2.4566-2.5488-.8987,.3982-1.852,.6594-2.8282,.7747,1.0279-.6154,1.7972-1.5833,2.1648-2.7235-.9666,.5736-2.024,.9778-3.1267,1.1952-1.8648-1.9829-4.984-2.0786-6.9669-.2138-1.2788,1.2026-1.8214,2.9947-1.4245,4.7047-3.9591-.1985-7.6479-2.0685-10.1482-5.1446-1.3069,2.2499-.6394,5.1282,1.5245,6.5731-.7836-.0232-1.5501-.2346-2.2349-.6163v.0624c.0006,2.3439,1.6529,4.3628,3.9504,4.8269-.7249,.1977-1.4855,.2266-2.2234,.0845,.6451,2.0058,2.4937,3.38,4.6003,3.4195-1.7436,1.3703-3.8975,2.1142-6.1152,2.112-.3918-.0008-.7832-.0245-1.1722-.071,2.2518,1.4451,4.8719,2.2116,7.5475,2.208"></path>
                <title>Logo Twitter</title>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-span-2 p-3 text-gray-900 dark:text-gray-100">
          <h2 className="mb-6 text-2xl">{postData.excerpt}</h2>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </div>

      <div className="grid gap-px bg-gray-100 dark:bg-gray-900 pb-[1px] md:grid-cols-2 lg:grid-cols-3 lg:pl-14 xl:grid-cols-4 xl:pr-[108px]">
        <div className="hidden lg:block"></div>
        <Link
          href={`/blog/${postData.prev}`}
          className="col-span-1 flex h-32 flex-col bg-gray-200 dark:bg-gray-800 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 xl:pl-6"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">Previous</p>
          <p className="text-2xl text-gray-800 dark:text-gray-200">{postData.prevCap}</p>
        </Link>
        <Link
          href={`/blog/${postData.next}`}
          className="col-span-1 flex h-32 flex-col bg-gray-200 dark:bg-gray-800 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 xl:pl-6"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">Next</p>
          <p className="text-2xl text-gray-800 dark:text-gray-200">{postData.nextCap}</p>
        </Link>
        <div className="hidden xl:block"></div>
      </div>

      <NextSteps data={DefaultNextSteps} />
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
