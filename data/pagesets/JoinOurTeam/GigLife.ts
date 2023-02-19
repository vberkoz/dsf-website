import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import idea from "@/public/join_our_team/idea.webp";

export const GigLife = {
  title: "Gig life",
  slug: "gig-life",
  pageset: "join-our-team",
  isPrimary: false,
  description: "A community of taskers or giggers that have chosen the anti-corporation route to make a living in the On-Demand economy",
  image: idea.src,
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
