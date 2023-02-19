import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import factory from "@/public/industry_focus/factory.webp";

export const FactoryAutomation = {
  title: "Factory automation",
  slug: "factory-automation",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Demand Planning, Robotics, Cobots, Material Handling, Kitting, Labor Management, Packaging, RPA, IIoT, MRP, MES",
  image: factory.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps
    },
  ],
};
