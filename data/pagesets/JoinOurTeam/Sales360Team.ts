import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import writing from "@/public/join_our_team/writing.webp";

export const Sales360Team = {
  title: "Sales 360 team",
  slug: "sales-360-team",
  pageset: "join-our-team",
  isPrimary: false,
  description: "VO Group allows an environment for the professional to have the Gig Life",
  image: writing.src,
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
