import NextSteps3 from "@/components/NextSteps3";
import Layout from "@/components/Layout";

import { getSortedPostsData } from "@/lib/posts";
import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import PostListItem1 from "@/components/PostListItem/PostListItem1";
import PostListItem2 from "@/components/PostListItem/PostListItem2";
import PostListItemN from "@/components/PostListItem/PostListItemN";

type Props = {
  allPostsData: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
  }[];
}

export default function Posts({ allPostsData }: Props) {
  return (
    <Layout>
      <div 
        className="
        grid grid-cols-1 gap-px pb-[1px] md:grid-cols-2 lg:grid-cols-3 lg:pl-14 xl:grid-cols-4 xl:pr-[108px]
        bg-gray-100 dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        "
      >
        {allPostsData.map((data, key) => {
          switch (key) {
            case 0: return <PostListItem1 data={data} key={key} />
            case 1: return <PostListItem2 data={data} key={key} />
            default: return <PostListItemN data={data} key={key} />
          }
        })}
      </div>
      <NextSteps3 data={DefaultNextSteps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
