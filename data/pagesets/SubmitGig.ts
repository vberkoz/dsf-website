import submitGig from "@/public/submitGig.webp";
import { DefaultNextSteps } from "../DefaultNextSteps";

export const SubmitGig = {
  title: "Submit GIG",
  slug: "submit-gig",
  pageset: "submit-gig",
  isPrimary: true,
  description: "Looking for Sales Prospecting that actually works? Tired of hiring amateur, scripted telemarketers? Looking for Professionals that can find real, revenue-producing leads? Let's talk.",
  image: submitGig.src,
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
