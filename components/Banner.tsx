import Link from "next/link";

export const Banner = () => (
  <div className="w-full bg-red-600 text-gray-100 lg:pl-14">
    <div className="p-3">
      <Link
        href="/join-our-team"
        className="outline-none ring-gray-100 focus:ring-2 hover:underline"
      >
        <span className="font-bold">Now hiring!</span> We are currently looking
        for new people to grow our business
        <svg
          fill="currentColor"
          width="16"
          height="16"
          viewBox="0 0 20 20"
          className="ml-2 mb-1 inline"
        >
          <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
        </svg>
      </Link>
    </div>
  </div>
);
