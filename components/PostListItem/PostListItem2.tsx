import Link from "next/link";
import Date from "@/components/Date";

type Props = {
  data: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
  };
};

export default function PostListItem2({ data }: Props) {
  return (
    <Link
      href={`/blog/${data.id}`}
      className="
      post-list-element
      flex h-full flex-col 
      bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700
      outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
      "
    >
      <div
        style={{
          backgroundImage: `url(/blog/${data.image}.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="post-image h-32 w-full lg:h-1/2"
      ></div>
      <div className="p-3 xl:p-6">
        <h2 className="mb-2 text-2xl font-light text-gray-700 dark:text-gray-200">
          {data.title}
        </h2>
        <p className="mb-2 text-sm text-gray-500">By: {data.author}</p>
        <p className="mb-2 text-sm text-gray-500">6 min read</p>
        <p className="text-gray-600 dark:text-gray-400">{data.excerpt}</p>
      </div>
      <div className="grow"></div>
      <div className="flex w-full p-3 xl:p-6">
        <p className="text-sm text-gray-500">
          <Date dateString={data.date} />
        </p>
        <div className="grow"></div>
        <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
          <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
        </svg>
      </div>
    </Link>
  );
}
