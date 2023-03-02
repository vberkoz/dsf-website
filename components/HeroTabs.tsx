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

export const HeroTabs = ({ title, description1, description2, image, tabs }: Props) => {
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
        <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white/80 lg:to-gray-900/0">
          <div className="h-80 lg:p-14">
            <div className="p-3">
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">{title}</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white/80">
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
          className="sticky top-12 max-h-[50px] whitespace-nowrap border-b-2 border-gray-800 bg-gray-900"
        >
          <div className="flex overflow-x-scroll text-white lg:ml-14">
            {tabs.map((tab, key) => (
              <Link
                key={key}
                href={tab.slug ? tab.slug.toString() : "/"}
                className={`${
                  tab.slug === router.asPath.substring(1) &&
                  "border-b-2 border-yellow-400 bg-gray-700"
                } p-3 hover:bg-gray-700`}
              >
                {tab.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
