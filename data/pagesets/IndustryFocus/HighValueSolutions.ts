import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import ship from "@/public/industry_focus/ship.webp";
import robot from "@/public/industry_focus/robot.webp";

export const HighValueSolutions = {
  title: "High value solutions",
  slug: "high-value-solutions",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Enterprise Solutions, Analytics, Gaming, Customer Engagement, Labor Management, Greenfield/Brownfield, Optimizing Tools, Planning-Executing-Forecasting, Consulting",
  image: ship.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content121",
      caption: ["Strategic Selling"],
      title: "High-Value Solutions Selling",
      content: [
        "Prospecting is Sales when your solution is $100K or better.",
        "Many of our customers have $100K to $1M+ solutions. These offerings typically require a Sales skill set - Strategic Selling skills to properly Identify the Buyer and to go Deep and Broad.",
        "Enterprise Sales require an understanding of Strategic Selling, where one needs to understand that there is not one Economic Buyer, rather, there are many buyers.",
        "Most of VO Sales Group's High-Value Solutions customers have enterprise salespeople and expect Enterprise Sales Prospecting.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "Content121",
      caption: [],
      title: "High-Value Solutions Markets",
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
        ]
      ],
      link: "",
      href: "#",
      image: robot,
    },
    {
      id: "Content121",
      caption: [],
      title: "VO Sales Group Supports Vendors",
      content: [
        "VO is involved in Business Development activity for High-Value Solution Providers.",
        "Our differentiator is that we are not trying to be all things to all people.",
        "Most of our customers have solutions that start at $100K and upwards to $1M+, as well as those with Enterprise-Level Subscriber/Cloud Solutions.",
        "Our customers have web pages, case studies, testimonials, and the need for both Professional Sales and Marketing teams. Many times, they have a longer sales cycle. Most of VO Sales Group's customers have technology-based business solutions.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps
    },
  ],
};
