import { OurValue } from "./OurValue";
import { OurValuesData } from "./OurValuesData";

export const OurValues = () => (
  <div className="bg-gray-900 text-white lg:p-14">
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 px-3 py-8 md:grid-cols-2 xl:grid-cols-4">
      <div className="font-bold md:col-span-2 xl:col-span-1">Our values</div>
      <OurValue ourValue={OurValuesData[0]} />
      <OurValue ourValue={OurValuesData[1]} />
    </div>
  </div>
);
