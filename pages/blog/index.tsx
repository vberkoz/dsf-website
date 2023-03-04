import Link from "next/link";

import empathy from "@/public/blog/empathy.webp";

import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/Date";
import { DefaultNextSteps } from "@/data/DefaultNextSteps";

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
  }[];
}) {
  return (
    <Layout>
      <div 
        className="
        grid grid-cols-1 gap-px pb-[1px] md:grid-cols-2 lg:grid-cols-3 lg:pl-14 xl:grid-cols-4 xl:pr-[108px]
        bg-gray-100 dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        "
      >
        {allPostsData.map(
          ({ id, image, title, author, excerpt, date }, key) => {
            switch (key) {
              case 0:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="
                    post-list-element
                    col-span-1 row-span-1 flex flex-col md:col-span-2 lg:h-[60vw] xl:row-span-2 xl:h-[70vw]
                    bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
                    "
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="post-image h-32 w-full md:h-64 lg:h-1/3"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-700 dark:text-gray-200 md:mb-4 md:text-5xl">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500 md:mb-4">
                        By: {author}
                      </p>
                      <p className="mb-2 text-sm text-gray-500 md:mb-4">
                        6 min read
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );
              case 1:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="
                    post-list-element
                    flex h-full flex-col 
                    bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
                    "
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="post-image h-32 w-full lg:h-1/2"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-700 dark:text-gray-200">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500">By: {author}</p>
                      <p className="mb-2 text-sm text-gray-500">6 min read</p>
                      <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );

              default:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="
                    post-list-element
                    flex h-full flex-col 
                    bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
                    outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
                    "
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="post-image h-32 w-full xl:h-1/2"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-700 dark:text-gray-200">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500">By: {author}</p>
                      <p className="mb-2 text-sm text-gray-500">6 min read</p>
                      <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );
            }
          }
        )}
      </div>
      <NextSteps data={DefaultNextSteps} />
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
