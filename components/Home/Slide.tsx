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
      <div className="p-3 h-80">
        <h1 className="text-4xl sm:text-5xl mb-4 font-light">{title}</h1>

        <div className="grid xl:grid-cols-4">
          <p className="xl:col-span-2 md:w-[29rem]">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 h-32">
        <div className="md:col-span-3"></div>
        <Link
          href={href}
          className="flex flex-col bg-yellow-300 hover:bg-yellow-400 text-black p-3 cursor-pointer"
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
)