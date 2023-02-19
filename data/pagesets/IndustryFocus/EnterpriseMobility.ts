import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import trucks from "@/public/industry_focus/trucks.webp";

export const EnterpriseMobility = {
  title: "Enterprise mobility",
  slug: "enterprise-mobility",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Logistics, POD/DSD, Device Management/BYOD, YMS, Asset Tracking, TMS, GPS, Filed Service/Field Worker, Fleet Management",
  image: trucks.src,
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
