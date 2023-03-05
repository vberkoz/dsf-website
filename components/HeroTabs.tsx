import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description1: (string[] | string)[];
  description2: (string[] | string)[];
  image: string;
  tabs?: {
    title: string;
    slug: string | null;
  }[];
};

export default function HeroTabs({ title, description1, description2, image, tabs }: Props) {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div 
          className="
            text-left 
            text-gray-900/80 dark:text-gray-100/80
            bg-gradient-to-r from-gray-100/100 to-gray-50/50 dark:from-gray-900/100 dark:to-gray-900/50 
            lg:to-gray-100/0 lg:dark:to-gray-900/0
          "
        >
          <div className="h-80 lg:p-14">
            <div className="p-3">
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">{title}</h1>
              <div className="grid text-gray-900/80 dark:text-gray-100/80 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="grid gap-4">
                  {description1.map((item, pKey) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul key={pKey}>
                          {item.map((li, lKey) => (
                            <li key={lKey}>{li}</li>
                          ))}
                        </ul>
                      );
                    } else {
                      return <div key={pKey}>{item}</div>;
                    }
                  })}
                </div>
                <div className="grid gap-4">
                  {description2.map((item, pKey) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul key={pKey}>
                          {item.map((li, lKey) => (
                            <li key={lKey}>{li}</li>
                          ))}
                        </ul>
                      );
                    } else {
                      return <div key={pKey}>{item}</div>;
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {tabs && (
        <div
          style={{ zIndex: 2000 }}
          className="
            sticky top-[50px] max-h-[50px] whitespace-nowrap 
            border-b-2 border-gray-200 dark:border-gray-800 
            bg-gray-100 dark:bg-gray-900
          "
        >
          <div className="flex overflow-x-scroll text-gray-900 dark:text-gray-100 lg:ml-14">
            {tabs.map((tab, key) => (
              <Link
                key={key}
                href={tab.slug ? tab.slug.toString() : "/"}
                className={`
                  ${ tab.slug === router.asPath.substring(1) && "bg-gray-200 dark:bg-gray-700" } 
                  p-3 
                  hover:bg-gray-200 dark:hover:bg-gray-700 
                  outline-none focus:ring-2 ring-inset ring-green-600 dark:ring-yellow-400
                `}
              >{tab.title}</Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
