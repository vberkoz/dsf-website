import xitStrategy from "@/public/xitStrategy.webp";
import { DefaultNextSteps } from "../DefaultNextSteps";

export const XitStrategy = {
  title: "XIT Strategy",
  slug: "xit-strategy",
  pageset: "xit-strategy",
  isPrimary: true,
  description: "ALL THINGS CAPITAL: EXIT Strategies, Intellectual Property, Looking to sell your company, Stuff your Sales Pipe to Raise Capital",
  image: xitStrategy.src,
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
