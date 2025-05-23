import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import flag from "@/public/solutions/flag.webp";

export const InternationalConcierge = {
  title: "International concierge",
  slug: "international-concierge",
  pageset: "solutions",
  isPrimary: false,
  description1: ["Concierge Service for International Companies Looking for Sales in the US"],
  description2: [],
  image: flag.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: ["International services"],
      title: "Services Offered to International Companies",
      svg: null,
      content: [
        [
          "Build the Sales Channel (Sales Development)",
          "Setting up Your Legal Corporate Structure",
          "Setting up Banking",
          "Translation of Sales/Marketing Material",
          "Translation of Web Pages",
          "Help with Logistics / Warehousing / Product Distribution",
          "Order Fulfillment",
          "Customer Service",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [""],
      title: "Companies that Work with Distributed Sales Force",
      svg: null,
      content: [
        [
          "International Companies that need Sales Growth in the United States",
          "International Companies that have never done business in the United States and need business guidance for legal issues, banking, sales, and distribution",
          "International Companies that need an Outsourced Contract Sales Team",
          "International Companies that need Logistics and Supply Chain solutions for sales, as well as distribution in the U.S.",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [""],
      title: "DSF Revenue Model",
      svg: null,
      content: [
        "18 Months to Revenue: For international companies, we work toward a model that allows for sustainable revenue in an 18-month period.",
        "Client-Assisted Commission Model: In our proposal, we will present a creative way to go to market. This method allows for a Commitment Fee by you, but a movement to commissions by us.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [""],
      title: "International Concierge",
      svg: null,
      content: [
        "Distributed Sales Force is a professional organization of Senior Level Sales Development Professionals that can help a international company with the expansion of its sales into the United States.",
        "Our mission is to consult with international companies on how to do business in the U.S. and assist with what is needed to establish a business entity in the U.S.",
        "Our main mission is to grow your international company to sustainable revenue in the U.S.",
        "If you are coming to the United States for a Trade Show or an event, let Distributed Sales Force be your host.",
        "We will provide comfort for your business visit and be there for any questions, scheduling, and logistics to make your visit productive as well as comfortable.",
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
