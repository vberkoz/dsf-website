import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  data: {
    id: string;
    caption: (string[] | string)[];
    data: {
      title: string;
      svg: StaticImageData;
      content: (string[] | string)[];
      link: string;
      href: string;
    }[];
  };
};

/*

{
  id: "ContentCDDE",
  caption: [],
  data: [
    {
      title: "",
      svg: null,
      content: [],
      link: "",
      href: "#",
    },
    {
      title: "",
      svg: null,
      content: [],
      link: "",
      href: "#",
    },
  ],
},
*/

export default function ContentCDDE({ data }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-4 text-gray-900 dark:text-gray-100 lg:pl-14 xl:pr-[108px]">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-3 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold md:col-span-2 lg:col-span-1">
          {data.caption.map((item, pKey) => {
            if (Array.isArray(item)) {
              return (
                <ul key={pKey} className="font-normal text-gray-600 dark:text-gray-400">
                  {item.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return (
                <div
                  key={pKey}
                  className={`${pKey !== 0 && "font-normal text-gray-600 dark:text-gray-400"}`}
                >
                  {item}
                </div>
              );
            }
          })}
        </div>

        <Item data={data.data[0]} />
        <Item data={data.data[1]} />
        <div className="hidden xl:block"></div>
      </div>
    </div>
  );
}

type ItemProps = {
  data: {
    title: string;
    svg: StaticImageData;
    content: (string[] | string)[];
    link: string;
    href: string;
  };
};

const Item = ({ data }: ItemProps) => (
  <div className="flex flex-col text-gray-600 dark:text-gray-400">
    <div className="h-20 text-3xl font-light text-gray-900 dark:text-gray-100">{data.title}</div>

    <div className="grid grid-cols-1 gap-4">
      <div className="flex h-16 flex-col">
        <Image
          src={data.svg}
          alt={data.title}
          width={60}
          height={60}
          className="mt-auto"
        />
      </div>

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
    </div>

    <div className="grow pb-4"></div>

    {data.link && (
      <Link
        href={data.href}
        className="flex w-fit cursor-pointer text-green-600 dark:text-yellow-400 hover:underline"
      >
        <span className="mr-4 leading-[1.2rem]">{data.link}</span>
        {data.href.toLowerCase().includes("http") ? (
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
            <path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"></path>
            <path d="M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"></path>
            <title>Launch</title>
          </svg>
        ) : (
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
            <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
          </svg>
        )}
      </Link>
    )}
  </div>
);
