import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import hands from "@/public/about/hands.webp";

export const OurTeamSStoryAvatars = {
  title: "Our team's story - avatars",
  slug: "our-teams-story-avatars",
  pageset: "about-us",
  isPrimary: false,
  description1: ["Explore experience of our people"],
  description2: [],
  image: hands.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionCTTE",
      data: {
        caption: "Our values",
        title1: "Our Story",
        title2: "Our Team",
        col1: [
          "VO Sales Group is a Virtual Organization of sales professionals.",
          "A collaborative community of people with great backgrounds.",
          "We are the Giggers, the Taskers. We are Parents. We are Professionals that you can hire On Demand, as needed, by the Project.",
        ],
        col2: [
          "Learn how our Enterprise Sales Development team members provide our customers with qualified Sales Opportunities and valuable market intelligence.",
          "A collaborative community of people with great backgrounds.",
          "Click on each avatar in the map below to hear each Salesperson's story.",
        ],
      },
    },
    {
      id: "Map",
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
