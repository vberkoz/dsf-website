import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import iphone from "@/public/join_our_team/iphone.webp";

export const JoinOurTeam = {
  title: "Join our team",
  slug: "join-our-team",
  pageset: "join-our-team",
  isPrimary: true,
  description: "On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives",
  image: iphone.src,
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
