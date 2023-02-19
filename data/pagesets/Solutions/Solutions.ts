import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import plants from "@/public/solutions/plants.webp";

export const Solutions = {
  title: "Solutions",
  slug: "solutions",
  pageset: "solutions",
  isPrimary: true,
  description: "VO Sales Group offers a full suite of Sales Prospecting, Lead Generation & Channel Development Solutions",
  image: plants.src,
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
