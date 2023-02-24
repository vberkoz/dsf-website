import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  content: {
    caption: (string[] | string)[];
    title: string;
    content: (string[] | string)[];
    image?: StaticImageData;
    link?: {
      caption: string;
      href: string;
    };
  }[];
};

export const Content121 = ({ content }: Props) => {
  return (
    <div className="bg-gray-900 py-8 lg:pl-14">
      {content.map((item, key) => (
        <div
          key={key}
          className="my-8 grid grid-cols-1 p-3 text-gray-400 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div className="font-bold text-white">
            {item.caption.map((item, pKey) => {
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
                  <div key={pKey} className={`${pKey !== 0 && "font-normal text-gray-400"}`}>
                    {item}
                  </div>
                );
              }
            })}
          </div>
          <div className="grid grid-cols-1 gap-4 md:col-span-3 lg:col-span-2">
            <div className="text-3xl text-white">{item.title}</div>
            {item.content.map((item, pKey) => {
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
            {item.link && (
              <Link
                href={item.link.href}
                className="flex w-fit cursor-pointer text-yellow-400 hover:underline"
              >
                <span className="mr-4 leading-[1.2rem]">
                  {item.link.caption}
                </span>
                <svg
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                </svg>
              </Link>
            )}
          </div>
          <div className={`${!item.image && "hidden"} xl:hidden`}></div>
          {item.image && (
            <div className="flex flex-col justify-end md:col-span-3 xl:col-span-1">
              <Image src={item.image} alt={""} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
