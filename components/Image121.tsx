import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  data: {
    caption: string;
    title: string;
    image: StaticImageData;
  };
};

/*

{
  id: "Image121",
  caption: "Image121",
  title: "Title",
  image: funnel,
},
*/

export const Image121 = ({ data }: Props) => {
  return (
    <div className="bg-gray-900 py-8 lg:pl-14 xl:pr-[108px]">
      <div className="mb-16 grid text-gray-400 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold text-white">{data.caption}</div>
        <div className="grid gap-4 lg:col-span-2">
          <div className="text-3xl text-white">{data.title}</div>

          {data.image && (
            <div className="flex flex-col justify-end md:col-span-3 xl:col-span-2">
              <Image src={data.image} alt={""} className="w-full" />
            </div>
          )}
        </div>
        <div className={`${!data.image && "hidden"} xl:hidden`}></div>
      </div>
    </div>
  );
};
