import Link from "next/link";

import { BenefitData } from "./BenefitData";
import { Benefit } from "./Benefit";

export const Benefits = () => {
  const benefits = BenefitData;

  return (
    <div className="p-14 bg-gray-900 text-white">
      <div className="grid grid-cols-1 gap-x-8 gap-y-20 px-3 py-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="font-bold md:col-span-2 xl:col-span-1">Benefits</div>
        <Benefit benefit={benefits[0]} />
        <Benefit benefit={benefits[1]} />
        <div className="col-span-2 hidden border-t border-gray-700 md:block xl:hidden"></div>
        <Benefit benefit={benefits[2]} />
        <div className="hidden xl:block"></div>
        <div className="col-span-3 hidden border-t border-gray-700 xl:block"></div>
        <div className="hidden xl:block"></div>
        <Benefit benefit={benefits[3]} />
        <div className="col-span-2 hidden border-t border-gray-700 md:block xl:hidden"></div>
        <Benefit benefit={benefits[4]} />
        <Benefit benefit={benefits[5]} />
      </div>
    </div>
  );
};
