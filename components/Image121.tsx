import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  content: {
    caption: string;
    title: string;
    image?: StaticImageData;
  }[];
};

export const Image121 = ({ content }: Props) => {
  return (
    <div className="bg-gray-900 py-8 lg:pl-14 xl:pr-[108px]">
      {content.map((item, key) => {
        return (
          <div
            key={key}
            className="mb-16 grid text-gray-400 lg:grid-cols-3 xl:grid-cols-4"
          >
            <div className="font-bold text-white">{item.caption}</div>
            <div className="grid gap-4 lg:col-span-2">
              <div className="text-3xl text-white">{item.title}</div>

              {item.image && (
                <div className="flex flex-col justify-end md:col-span-3 xl:col-span-2">
                  <Image src={item.image} alt={""} className="w-full" />
                </div>
              )}
            </div>
            <div className={`${!item.image && "hidden"} xl:hidden`}></div>
          </div>
        );
      })}
    </div>
  );
}
