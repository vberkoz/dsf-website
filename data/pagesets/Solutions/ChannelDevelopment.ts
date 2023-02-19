import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import meeting from "@/public/solutions/meeting.webp";

export const ChannelDevelopment = {
  title: "Channel development",
  slug: "channel-development",
  pageset: "solutions",
  isPrimary: false,
  description: "VO Sales Group can help you Grow your Channel",
  image: meeting.src,
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
