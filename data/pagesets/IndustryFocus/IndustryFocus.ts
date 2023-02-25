import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import gears from "@/public/industry_focus/gears.webp";

export const IndustryFocus = {
  title: "Industry focus",
  slug: "industry-focus",
  pageset: "industry-focus",
  isPrimary: true,
  description:
    "Our approach allows us to cross many industries by utilizing strategic selling styles and questioning techniques to find opportunities",
  image: gears.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content1111",
      data: {
        caption: "Campaign portfolio",
        title1: "Industry",
        title2: "Solution",
        col1: [
          [
            "Manufacturing",
            "Retail",
            "Healthcare",
            "Supply Chain",
            "Wholesale Distribution",
            "Transportation",
            "Energy",
            "Pharma",
            "Telcos, Utilities, Cable TV",
          ],
        ],
        col2: [
          [
            "Advanced Planning & Scheduling",
            "Automation and Robotics",
            "High Value Solutions",
            "Supply Chain",
            "Security",
            "POS/Mobile POS",
            "Cloud Computing - SaaS, MaaS, PaaS",
            "Managed Services",
            "Unified Communications - IP Telephony and BYOD",
          ],
        ],
      },
    },
    {
      id: "Content121",
      caption: [],
      title: "Enterprise Sales Prospecting",
      content: [
        "Our approach allows us to cross many industries by utilizing strategic selling styles and questioning techniques to find opportunities.",
        "While most use what we call WE Statements to establish their credibility, our style is to Ask Pertinent Questions to Establish our Credibility and to get a Stranger to admit to another Stranger that they indeed have some compelling reason to talk to a salesperson.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps,
    },
  ],
};
