import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import nyc from "@/public/solutions/nyc.webp";

export const Marketing20 = {
  title: "Marketing 2.0",
  slug: "marketing-2-0",
  pageset: "solutions",
  isPrimary: false,
  description: "Comprehensive Marketing Solutions. A 360-Degree Approach to Generating Quality Sales Leads.",
  image: nyc.src,
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
