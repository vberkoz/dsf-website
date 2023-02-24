import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import plants from "@/public/solutions/plants.webp";
import funnel from "@/public/solutions/funnel.webp";

export const Solutions = {
  title: "Solutions",
  slug: "solutions",
  pageset: "solutions",
  isPrimary: true,
  description:
    "VO Sales Group offers a full suite of Sales Prospecting, Lead Generation & Channel Development Solutions",
  image: plants.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content121",
      data: [
        {
          caption: ["Revenue Producing"],
          title: "VO Sales Group Solutions",
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
        },
      ],
    },
    {
      id: "Image121",
      data: [
        {
          caption: "",
          title: "",
          image: funnel,
        },
      ],
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps,
    },
  ],
};
