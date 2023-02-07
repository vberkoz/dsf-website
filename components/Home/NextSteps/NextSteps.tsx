import { NextStep } from "./NextStep";
import { NextStepData } from "./NextStepData";

export const NextSteps = () => (
  <div className="pl-14 bg-gray-900 text-white">
    <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="col-span-1 mb-8 p-3 font-bold lg:col-span-3 xl:col-span-1">
      Next steps
    </div>
    {NextStepData.map((item, key) => NextStep({ item, key }))}
  </div>
  </div>
);
