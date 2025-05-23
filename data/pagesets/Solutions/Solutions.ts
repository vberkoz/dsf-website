import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import plants from "@/public/solutions/plants.webp";
import funnel from "@/public/solutions/funnel.webp";

export const Solutions = {
  title: "Solutions",
  slug: "solutions",
  pageset: "solutions",
  isPrimary: true,
  description1: ["Distributed Sales Force offers a full suite of Sales Prospecting, Lead Generation & Channel Development Solutions"],
  description2: [],
  image: plants.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: ["Revenue Producing"],
      title: "Distributed Sales Force Solutions",
      svg: null,
      content: [
        [
          "International Sales Development for non-US companies",
          "Vetted Sales Staffing",
          "Channel Development",
          "Sales Prospecting",
          "Marketing 2.0"
        ],
        "If you are a company looking for Revenue Producing Sales Leads, our Sales and Marketing Solutions are meant for you.",
        "You can submit a Sales or Marketing Project on each of the Solutions pages above or contact us to work with an account manager.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2IE",
      caption: "",
      title: "",
      image: funnel,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
