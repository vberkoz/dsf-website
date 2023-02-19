import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import gears from "@/public/industry_focus/gears.webp";

export const IndustryFocus = {
  title: "Industry focus",
  slug: "industry-focus",
  pageset: "industry-focus",
  isPrimary: true,
  description: "Our approach allows us to cross many industries by utilizing strategic selling styles and questioning techniques to find opportunities",
  image: gears.src,
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
