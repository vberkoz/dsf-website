import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import typing from "@/public/join_our_team/typing.webp";

export const SalesTeamTestimonials = {
  title: "Sales team testimonials",
  slug: "sales-team-testimonials",
  pageset: "join-our-team",
  isPrimary: false,
  description: "Why I work at VO Sales Group",
  image: typing.src,
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
