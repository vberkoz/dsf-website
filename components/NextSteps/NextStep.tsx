import Link from "next/link";

type Props = {
  item: {
    title: string;
    description: string;
    href: string;
  };
};

export const NextStep = ({ item }: Props) => (
  <Link
    href={item.href}
    className="flex h-[60vw] flex-col bg-gray-800 p-3 hover:bg-gray-700 sm:h-[50vw] lg:h-[33vw] xl:h-[25vw] xl:p-6"
  >
    <h2 className="mb-4 text-3xl">{item.title}</h2>
    <p className="text-gray-400">{item.description}</p>
    <div className="grow"></div>
    <svg className="self-end" fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
      <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
    </svg>
  </Link>
);
