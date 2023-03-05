import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import mall from "@/public/industry_focus/mall.webp";

export const Retail = {
  title: "Retail",
  slug: "retail",
  pageset: "industry-focus",
  isPrimary: false,
  description1: [
    [
      "Inventory",
      "Demand Forecasting",
      "Security",
      "POS",
      "BOPUS / BOPIS",
      "Supply Chain",
    ],
  ],
  description2: [
    [
      "Mobile Payment",
      "Logistics",
      "Customer Engagement",
      "Traffic Counting",
      "Electronic Shelf Labels",
    ],
  ],
  image: mall.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Retail Sales Prospecting",
      svg: null,
      content: [
        "VO offers Sales Prospecting in all facets of Retail:",
        [
          "Point of Sale",
          "Mobile POS",
          "Mobile Payment",
          "Inventory Control",
          "Supply Chain",
          "Hosted POS Solutions",
          "Grocery & C-Store Prospecting",
          "Marketing Loyalty Solutions",
          "All Things Supply Chain/ Transportation/Distribution",
          "Self-Check Out/Self-Shopping Kiosks",
          "Workforce Management",
          "Retail Sales Leads",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Retail Direct to Consumer",
      svg: null,
      content: [
        "VO is actively involved in Retail Sales Development and Retail Sales Prospecting for All Things Retail.",
        [
          "Micro Fulfillment Solutions",
          "AMR, AVG, SGV",
          "AS/RS for Grocers",
          "Direct to Consumer",
          "BOPIS Lockers",
          "BOPUS",
          "Curbside Pickup Solutions",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "VO Retail Solutions",
      svg: null,
      content: [
        "Retail Sales Leads. NRF Sales Leads. It is our job to help you identify the buyer and then probe for compelling reasons to talk to your sales team. We Prospect. You Sell.",
        "Partner with VO to Stuff your Sales Pipe for Retail Solutions and sales strategies to grow your Retail sales business.",
        "Stuff the Sales Pipe with Revenue Producing Sales Opportunities to raise capital.",
        "All Things Retail - VO Retail Sales Leads",
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
