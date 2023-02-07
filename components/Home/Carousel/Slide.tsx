import Link from "next/link";

type Props = {
  image: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

export const Slide = ({ image, title, description, button, href }: Props) => (
  <li
    style={{
      backgroundImage: `url('${image}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/0 text-left text-white/80">
      <div className="p-14">
        <div className="h-80 p-3">
          <h1 className="mb-4 text-4xl font-light sm:text-5xl">{title}</h1>

          <div className="grid xl:grid-cols-4">
            <p className="md:w-[29rem] xl:col-span-2">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid h-32 grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-3"></div>
        <Link
          href={href}
          className="flex cursor-pointer flex-col bg-yellow-300 p-3 text-black hover:bg-yellow-400"
        >
          {button}
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
  </li>
);
