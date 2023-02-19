import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import ship from "@/public/industry_focus/ship.webp";

export const HighValueSolutions = {
  title: "High value solutions",
  slug: "high-value-solutions",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Enterprise Solutions, Analytics, Gaming, Customer Engagement, Labor Management, Greenfield/Brownfield, Optimizing Tools, Planning-Executing-Forecasting, Consulting",
  image: ship.src,
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
