import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  data: {
    title: string;
    description: string;
    href: string;
    image: string;
  }[];
  current: number;
};

export const HeroTabs = ({ data, current }: Props) => {
  const router = useRouter();
  console.log(router.asPath.substring(1));
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${data[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=""
      >
        <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white/80 lg:to-gray-900/0">
          <div className="h-80 lg:p-14">
            <div className="p-3">
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">
                {data[current].title}
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <p className="text-white/80">{data[current].description}</p>
              </div>
            </div>
          </div>

          <div className="max-h-[50px] whitespace-nowrap border-b-2 border-gray-800">
            <div className="flex overflow-x-scroll text-white lg:ml-14">
              {data.map((tab, key) => (
                <Link
                  key={key}
                  href={tab.href}
                  className={`${
                    tab.href === router.asPath.substring(1) &&
                    "border-t-2 border-yellow-400 bg-gray-800"
                  } p-3 hover:bg-gray-700`}
                >
                  {tab.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
