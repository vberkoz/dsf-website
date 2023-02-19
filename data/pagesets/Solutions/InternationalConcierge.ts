import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import flag from "@/public/solutions/flag.webp";

export const InternationalConcierge = {
  title: "International concierge",
  slug: "international-concierge",
  pageset: "solutions",
  isPrimary: false,
  description: "Concierge Service for International Companies Looking for Sales in the US",
  image: flag.src,
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
