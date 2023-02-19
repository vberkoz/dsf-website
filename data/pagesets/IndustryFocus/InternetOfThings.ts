import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import tower from "@/public/industry_focus/tower.webp";

export const InternetOfThings = {
  title: "Internet of things",
  slug: "internet-of-things",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Monitoring, Industry 4.0/IIoT, Asset Tracking, Metering, Billing, Fleet Management, 5G, Smart Supply Chain",
  image: tower.src,
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
