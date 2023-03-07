import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import notes from "@/public/join_our_team/notes.webp";

export const RequestInterview = {
  title: "Request interview",
  slug: "request-interview",
  pageset: "join-our-team",
  isPrimary: false,
  description1: ["Start your career with VO Group"],
  description2: [],
  image: notes.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "RequestInterviewForm",
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps
    },
  ],
};
