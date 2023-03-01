import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  data: {
    caption: (string[] | string)[];
    title: string;
    svg: StaticImageData | null;
    content: (string[] | string)[];
    image: StaticImageData | null;
    link: string;
    href: string;
  };
};

/*

{
  id: "ContentC2DE",
  caption: [],
  title: "",
  svg: null,
  content: [],
  link: "",
  href: "#",
  image: null,
},
*/

export default function ContentC2DE({ data }: Props) {
  return (
    <div className="bg-gray-900 py-8 lg:pl-14 xl:pr-[108px]">
      <div className="grid grid-cols-1 p-3 text-gray-400 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold text-white">
          {data.caption.map((item, pKey) => {
            if (Array.isArray(item)) {
              return (
                <ul key={pKey} className="font-normal text-gray-400">
                  {item.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return (
                <div
                  key={pKey}
                  className={`${pKey !== 0 && "font-normal text-gray-400"}`}
                >
                  {item}
                </div>
              );
            }
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 pb-4 md:col-span-3 lg:col-span-2">
          <div className="text-3xl text-white">{data.title}</div>
          
          {data.svg && (
            <Image
              src={data.svg}
              alt={data.title}
              width={60}
              height={60}
              className="mt-auto"
            />
          )}

          {data.content.map((item, pKey) => {
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

          {data.link && (
            <Link
              href={data.href}
              className="flex w-fit cursor-pointer text-yellow-400 hover:underline"
            >
              <span className="mr-4 leading-[1.2rem]">{data.link}</span>
              {data.href.toLowerCase().includes("http") ? (
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path>
                  <path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path>
                  <title>Launch</title>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                </svg>
              )}
            </Link>
          )}
        </div>

        <div className={`${!data.image && "hidden"} xl:hidden`}></div>

        {data.image && (
          <div className="flex flex-col justify-end md:col-span-3 lg:col-span-2 xl:col-span-1 xl:pl-4">
            <Image src={data.image} alt={""} className="w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
