import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  image: string;
  tabs?: {
    title: string;
    slug: string | null;
  }[];
};

export const HeroTabs = ({ title, description, image, tabs }: Props) => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=""
      >
        <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white/80 lg:to-gray-900/0">
          <div className="h-80 lg:p-14">
            <div className="p-3">
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">{title}</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <p className="text-white/80">{description}</p>
              </div>
            </div>
          </div>

          {tabs && <div className="max-h-[50px] whitespace-nowrap border-b-2 border-gray-900">
            <div className="flex overflow-x-scroll text-white lg:ml-14">
              {tabs.map((tab, key) => (
                <Link
                  key={key}
                  href={tab.slug ? tab.slug.toString() : "/"}
                  className={`${
                    tab.slug === router.asPath.substring(1) &&
                    "border-t-2 border-yellow-400 bg-gray-900"
                  } p-3 hover:bg-gray-700`}
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};
