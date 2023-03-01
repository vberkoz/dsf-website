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
      id: "Content121",
      caption: [],
      title: "Looking to work for VO Sales Group?",
      content: [
        "Learn about what it's like to be part of the VO Sales Group Team. Click on each avatar in the map below to hear our Sales team's stories.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "Map",
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps
    },
  ],
};
