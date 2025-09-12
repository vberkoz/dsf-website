import Link from "next/link";
import { Pages, AdditionalPages } from "@/data/data";

export default function Footer() {
  const pagesets = Pages.filter((page) => page.isPrimary);
  const menuItems = pagesets.map((item) => {
    const subpages = Pages.filter(
      (page) => page.pageset === item.pageset && !page.isPrimary
    );
    const subitems = subpages.map((page) => ({
      title: page.title,
      href: page.slug,
    }));

    if (subitems.length) {
      return {
        title: item.title,
        href: item.slug,
        subitems: subitems,
      };
    } else {
      return {
        title: item.title,
        href: item.slug,
      };
    }
  });

  const additionalPages = AdditionalPages.map((page) => ({
    title: page.title,
    href: page.slug,
  }));

  const pageset = (pageset: {
    href: string;
    title: string;
    subitems?: { href: string; title: string }[];
  }) => (
    <div className="flex flex-col pl-3 xl:pl-6">
      <div>
        <Link
          href={`/${pageset.href}`}
          className="
          font-bold hover:underline 
          outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400"
        >
          {pageset.title}
        </Link>
      </div>
      {pageset.subitems?.map((item, key) => (
        <div key={key}>
          <Link
            href={`/${item.href}`}
            className="
            hover:underline
            text-gray-600 dark:text-gray-400
            outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
            "
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );

  const pages = (pages: { href: string; title: string }[]) => (
    <div className="flex flex-col pl-3 xl:pl-6">
      {pages.map((item, key) => (
        <div key={key}>
          <Link
            href={`/${item.href}`}
            className="
            hover:underline
            text-gray-600 dark:text-gray-400 
            outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
            "
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div 
      className="
        lg:pl-14 xl:pr-[108px]
        bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100
      "
    >
      <div className="flex flex-col py-8 leading-8">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="pl-3 sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <Link
              href="/"
              className="
                font-bold hover:underline 
                outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
              "
            >Distributed Sales Force</Link>
          </div>
          {pageset(menuItems[2])}
          {pageset(menuItems[3])}
          {pageset(menuItems[1])}
          <div className="hidden xl:block"></div>
          {pageset(menuItems[0])}
          {pages(additionalPages)}
          <div className="flex flex-col pl-3 xl:pl-6">
            <div>
              <Link
                href="https://www.linkedin.com/company/distributed-sales-force/"
                className="
                  flex mb-4 leading-4 hover:underline
                  text-gray-600 dark:text-gray-400 
                  outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
                "
              >
                <svg className="mr-2" viewBox="0 0 640 640" fill="currentColor" width="16" height="16">
                  <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
                </svg>
                Distributed Sales Force
              </Link>
            </div>

            <div>
              <Link
                href="https://www.linkedin.com/in/robert-sinclair/"
                className="
                  flex mb-4 leading-4 hover:underline
                  text-gray-600 dark:text-gray-400 
                  outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
                "
              >
                <svg className="mr-2" viewBox="0 0 640 640" fill="currentColor" width="16" height="16">
                  <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
                </svg>
                Robert Sinclair
              </Link>
            </div>
          </div>

          <div className="hidden xl:block"></div>
          <div className="border-t-2 border-gray-200 dark:border-gray-700 sm:col-span-2 lg:col-span-3 xl:col-span-3"></div>
          <div className="hidden xl:block"></div>
          <div className="flex justify-between pl-3 xl:pl-6 sm:col-span-2 lg:col-span-3 xl:col-span-3">
            <span>© Distributed Sales Force, LLC</span>
            <span>
              <span className="text-gray-600 dark:text-gray-400">Created by </span>
              <Link
                href="https://vberkoz.com/"
                className="
                w-fit
                hover:underline
                outline-none focus:ring-2 ring-green-600 dark:ring-yellow-400
                "
              >
                vberkoz.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
