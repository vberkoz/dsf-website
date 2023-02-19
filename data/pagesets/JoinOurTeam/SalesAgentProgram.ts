import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import map from "@/public/join_our_team/map.webp";

export const SalesAgentProgram = {
  title: "Sales agent program",
  slug: "sales-agent-program",
  pageset: "join-our-team",
  isPrimary: false,
  description: "We give you the tools to grow your own business",
  image: map.src,
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
