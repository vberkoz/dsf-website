import Link from "next/link";
import { HeroData } from "./HeroData";

type Prop = {
  index: number;
};

export const Hero = ({ index }: Prop) => {
  const hero = HeroData[index];
  return (
    <div
      style={{
        backgroundImage: `url(${hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white lg:to-gray-900/0">
        <div className="p-3">
          <h1 className="mb-4 pb-40 text-4xl font-light sm:text-5xl">
            {hero.title}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div>
              {hero.content.map((item, key) => (
                <p className="mt-4 text-white/80" key={key}>
                  {item.p}
                </p>
              ))}

              <Link
                href={hero.href}
                className="mt-8 flex w-fit cursor-pointer bg-yellow-300 px-4 py-3 text-black hover:bg-yellow-400"
              >
                <span className="mr-4 leading-[1.2rem]">{hero.link}</span>
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
