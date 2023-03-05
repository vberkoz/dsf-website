import Link from "next/link";

type Props = {
  item: {
    image: string;
    title: string;
    description: string;
    button: string;
    href: string;
  };
  k: number;
  isActive: boolean;
  length: number;
  onShow: Function;
};

export default function Slide({ item, k, isActive, length, onShow }: Props) {
  const rows = [];
  for (let i = 0; i < length; i++) {
    rows.push(
      <Link
        href="#"
        key={i}
        className={`
            ${k === i && "pt-4"} mr-1 px-3 
            bg-green-600 hover:bg-green-500 dark:bg-yellow-400 dark:hover:bg-yellow-500
            outline-none focus:ring-[1px] ring-inset ring-gray-100 dark:ring-gray-900
            border-[3px] border-green-600 hover:border-green-500 dark:border-yellow-400 hover:dark:border-yellow-500
          `
        }
        onClick={() => onShow(i)}
        onKeyUp={(e) => {
          return e.key === "Enter" && onShow(i)
        }}
      ></Link>
    );
  }
  return (
    <div
      style={{
        backgroundImage: `url('${item.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${isActive ? "block" : "hidden"}`}
    >
      <div 
        className="
          text-left xl:pr-[108px]
          text-gray-900 dark:text-gray-100
          bg-gradient-to-r from-gray-100/100 to-gray-100/0 dark:from-gray-900/100 dark:to-gray-900/0
        "
      >
        <div className="lg:p-14">
          <div className="h-80 p-3">
            <h1 className="mb-4 text-4xl font-light sm:text-5xl">
              {item.title}
            </h1>
            <div className="grid xl:grid-cols-4">
              <p className="md:w-[29rem] xl:col-span-2">{item.description}</p>
            </div>
          </div>
        </div>

        <div className="grid h-32 grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col justify-end md:col-span-3">
            <div className="lg:pl-14">
              <nav className="p-3">{rows}</nav>
            </div>
          </div>
          <Link
            href={item.href}
            className="
              flex cursor-pointer flex-col p-3
              text-gray-100 dark:text-gray-900 text-xl
              bg-green-600 hover:bg-green-500 dark:bg-yellow-400 dark:hover:bg-yellow-500
              outline-none focus:ring-[1px] ring-inset ring-gray-100 dark:ring-gray-900
              border-[3px] border-green-600 hover:border-green-500 dark:border-yellow-400 hover:dark:border-yellow-500
            "
          >
            {item.button}
            <div className="grow"></div>
            <svg className="self-end" fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
