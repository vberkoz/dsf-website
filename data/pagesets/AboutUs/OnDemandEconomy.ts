import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import demand from "@/public/about/demand.webp";

export const OnDemandEconomy = {
  title: "On-demand economy",
  slug: "on-demand-economy",
  pageset: "about-us",
  isPrimary: false,
  description1: ["Provides flexible approaches to gain result"],
  description2: [],
  image: demand.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: ["VO Sales Group"],
      title: "The On-Demand Economy",
      svg: null,
      content: [
        "Virtual Organization that embraces the On-Demand Economy for Sales and Marketing as it relates to Lead Generation.",
        "The On-Demand Economy is also known as the Project-Based Economy for Services.",
        "Given the challenges for corporations with finding, hiring, and keeping good people, VO Sales Group has embraced the On-Demand movement for you, the Vendor.",
        "We vet our team members, and we have strict interview processes, to provide our customers with top-level resources, as needed.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: ["Marketing Projects"],
      title: "Submit a Project",
      svg: null,
      content: [
        "VO Sales Group caters to vendors that need Sales, Sales Leads, Appointments, Traffic, Revenue, and all the Internet Marketing that leads up to that.",
        "We have a qualified team of independent contractors, Giggers, and Taskers for you to hire, as needed, ON DEMAND.",
        "If you have a Sales or Marketing project, click on the Submit Gig button below to tell us about your project.",
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
