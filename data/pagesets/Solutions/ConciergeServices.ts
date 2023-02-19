import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import leaves from "@/public/solutions/leaves.webp";

export const ConciergeServices = {
  title: "Concierge services",
  slug: "concierge-services",
  pageset: "solutions",
  isPrimary: false,
  description: "A Premier Approach for High Value Technology and Business Solutions companies",
  image: leaves.src,
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
