import Link from "next/link";

type NextSteps4Props = {
  data: {
    title: string;
    description: string;
    href: string;
  }[];
};

export default function NextSteps4({ data }: NextSteps4Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 lg:pl-14 xl:pr-[108px]">
      <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="col-span-1 mb-8 mt-8 p-3 font-bold sm:col-span-2 lg:col-span-1 xl:mt-0">
          Next steps
        </div>
        <NextStep item={data[0]} />
        <NextStep item={data[1]} />
        <div className="hidden xl:block"></div>
        <div className="hidden lg:block"></div>
        <NextStep item={data[2]} />
        <NextStep item={data[3]} />
      </div>
    </div>
  );
}

type NextStepProps = {
  item: {
    title: string;
    description: string;
    href: string;
  };
};

const NextStep = ({ item }: NextStepProps) => (
  <Link
    href={`/${item.href}`}
    className="flex h-[60vw] flex-col bg-gray-200 dark:bg-gray-800 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 sm:h-[50vw] lg:h-[33vw] xl:h-[25vw] xl:p-6"
  >
    <h2 className="mb-4 text-3xl">{item.title}</h2>
    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
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
);
