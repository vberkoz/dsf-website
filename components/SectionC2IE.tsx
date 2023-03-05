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
  id: "SectionC2IE",
  caption: "",
  title: "",
  image: null,
},
*/

export default function SectionC2IE({ data }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 lg:pl-14 xl:pr-[108px]">
      <div className="mb-16 grid text-gray-600 dark:text-gray-400 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold text-gray-900 dark:text-gray-100">{data.caption}</div>
        <div className="grid gap-4 lg:col-span-2">
          <div className="text-3xl text-gray-900 dark:text-gray-100">{data.title}</div>
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
