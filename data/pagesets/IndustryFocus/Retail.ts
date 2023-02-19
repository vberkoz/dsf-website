import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import mall from "@/public/industry_focus/mall.webp";

export const Retail = {
  title: "Retail",
  slug: "retail",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Inventory, Demand Forecasting, Security, POS, BOPUS/BOPIS, Supply Chain, Mobile Payment, Logistics, Customer Engagement, Traffic Counting, Electronic Shelf Labels",
  image: mall.src,
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
