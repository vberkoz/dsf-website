import { OurValue } from "./OurValue";

type Props = {
  data: {
    title: string;
    content: string[];
  }[];
};

export const OurValues = ({ data }: Props) => (
  <div className="bg-gray-900 py-8 text-white lg:pl-14">
    <div className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 xl:grid-cols-4">
      <div className="font-bold md:col-span-2 xl:col-span-1">Our values</div>
      {data.map((item, key) => (
        <OurValue data={item} key={key} />
      ))}
    </div>
  </div>
);
