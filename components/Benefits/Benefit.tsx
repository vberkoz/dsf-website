import Link from "next/link";
import Image from "next/image";

type Props = {
  benefit: {
    title: string;
    image: string;
    content: { p: string }[];
    link: string;
    href: string;
  };
};

export const Benefit = ({ benefit }: Props) => (
  <div className="flex flex-col text-gray-400">
    <div className="h-20 text-3xl font-light text-white">{benefit.title}</div>

    <div className="grid grid-cols-1 gap-4">
      <div className="flex h-16 flex-col">
        <Image
          src={benefit.image}
          alt={benefit.title}
          width={50}
          height={50}
          className="mt-auto"
        />
      </div>

      {benefit.content.map((item, key) => (
        <div key={key}>{item.p}</div>
      ))}
    </div>

    <div className="grow"></div>

    <Link
      href={benefit.href}
      className="mt-4 flex w-fit cursor-pointer text-yellow-400 hover:underline"
    >
      <span className="mr-4 leading-[1.2rem]">{benefit.link}</span>

      <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
      </svg>
    </Link>
  </div>
);
