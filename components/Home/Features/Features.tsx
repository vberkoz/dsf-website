import Link from "next/link";

import { FeatureData } from "./FeatureData";

export const Features = () => {
  const features = FeatureData;
  return (
    <div className="pb-4 bg-gray-900">
      {features.map((feature, key) => (
        <div
          key={key}
          className="pb-30 grid gap-y-4 p-3 text-gray-400 md:grid-cols-4"
        >
          <div className="font-bold text-white">{feature.caption}</div>

          <div className="grid grid-cols-1 gap-4 md:col-span-3 xl:col-span-2">
            <div className="text-3xl text-white">{feature.title}</div>

            {feature.content.map((item, pKey) => (
              <div key={pKey}>{item.p}</div>
            ))}

            <Link
              href={feature.href}
              className="flex w-fit cursor-pointer text-yellow-400 hover:underline"
            >
              <span className="mr-4 leading-[1.2rem]">{feature.link}</span>
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

          <div></div>
        </div>
      ))}
    </div>
  );
};
