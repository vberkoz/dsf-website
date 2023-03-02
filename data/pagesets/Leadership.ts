import leadership from "@/public/leadership.webp";
import { DefaultNextSteps } from "../DefaultNextSteps";

export const Leadership = {
  title: "Leadership",
  slug: "leadership",
  pageset: "leadership",
  isPrimary: true,
  description1: ["Stephen Zarick, President and Owner of VO Sales Group also runs XIT.company, a company offering Exit Strategies"],
  description2: [],
  image: leadership.src,
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
