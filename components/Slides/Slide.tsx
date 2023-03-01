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

export const Slide = ({ item, k, isActive, length, onShow }: Props) => {
  const rows = [];
  for (let i = 0; i < length; i++) {
    rows.push(
      <span
        key={i}
        className={`${k === i && "pt-4"} mr-1 bg-white px-3`}
        onClick={() => onShow(i)}
      ></span>
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
      <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/0 text-left text-white/80 xl:pr-[108px]">
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
          <div className="md:col-span-3 flex flex-col justify-end">
            <div className="lg:pl-14">
              <nav className="p-3">{rows}</nav>
            </div>
          </div>
          <Link
            href={item.href}
            className="flex cursor-pointer flex-col bg-yellow-300 p-3 text-black hover:bg-yellow-400"
          >
            {item.button}
            <div className="grow"></div>
            <svg
              className="self-end"
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
  );
};
