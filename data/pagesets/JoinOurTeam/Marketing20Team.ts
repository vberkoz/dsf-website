import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import markers from "@/public/join_our_team/markers.webp";

export const Marketing20Team = {
  title: "Marketing 2.0 team",
  slug: "marketing-2-0-team",
  pageset: "join-our-team",
  isPrimary: false,
  description: "VO Sales Group offers a unique model, built around collaborative business tools that allow the self-employed Gigger or Tasker to feel part of a company, yet work individually",
  image: markers.src,
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
