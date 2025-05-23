import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import ship from "@/public/industry_focus/ship.webp";
import robot from "@/public/industry_focus/robot.webp";

export const HighValueSolutions = {
  title: "High value solutions",
  slug: "high-value-solutions",
  pageset: "industry-focus",
  isPrimary: false,
  description1: [
    [
      "Enterprise Solutions",
      "Analytics",
      "Gaming",
      "Customer Engagement",
      "Labor Management",
    ],
  ],
  description2: [
    [
      "Greenfield / Brownfield",
      "Optimizing Tools",
      "Planning-Executing-Forecasting",
      "Consulting",
    ],
  ],
  image: ship.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: ["Strategic Selling"],
      title: "High-Value Solutions Selling",
      svg: null,
      content: [
        "Prospecting is Sales when your solution is $100K or better.",
        "Many of our customers have $100K to $1M+ solutions. These offerings typically require a Sales skill set - Strategic Selling skills to properly Identify the Buyer and to go Deep and Broad.",
        "Enterprise Sales require an understanding of Strategic Selling, where one needs to understand that there is not one Economic Buyer, rather, there are many buyers.",
        "Most of Distributed Sales Force's High-Value Solutions customers have enterprise salespeople and expect Enterprise Sales Prospecting.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "High-Value Solutions Markets",
      svg: null,
      content: [
        [
          "Robotics & Automation",
          "Manufacturing",
          "Advanced Planning & Scheduling",
          "Automation & Packaging",
          "Remote Worker Solutions",
          "Healthcare",
          "Security",
          "Telecommunications",
          "Solutions for Critical Infrastructure",
          "Analytics Solutions",
        ],
      ],
      link: "",
      href: "#",
      image: robot,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Distributed Sales Force Supports Vendors",
      svg: null,
      content: [
        "DSF is involved in Business Development activity for High-Value Solution Providers.",
        "Our differentiator is that we are not trying to be all things to all people.",
        "Most of our customers have solutions that start at $100K and upwards to $1M+, as well as those with Enterprise-Level Subscriber/Cloud Solutions.",
        "Our customers have web pages, case studies, testimonials, and the need for both Professional Sales and Marketing teams. Many times, they have a longer sales cycle. Most of Distributed Sales Force's customers have technology-based business solutions.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
