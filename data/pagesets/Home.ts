import nyc from "@/public/home/nyc.webp";
import map from "@/public/home/map.webp";
import road from "@/public/home/road.webp";
import bb1 from "@/public/home/brooklyn-bridge-1.webp";
import bb2 from "@/public/home/brooklyn-bridge-2.jpeg";
import { DefaultNextSteps } from "../DefaultNextSteps";

export const Home = {
  title: "Home",
  slug: "",
  pageset: "general",
  isPrimary: true,
  sections: [
    {
      id: "Slides",
      slides: [
        {
          image: nyc.src,
          title: "The On-Demand Economy",
          description:
            "VO Sales Group offers a full suite of Lead Generation Solutions, Sales Development, Digital Marketing and Channel Solutions.",
          button: "VO Solutions",
          href: "#",
        },
        {
          image: map.src,
          title: "Sales Prospecting",
          description:
            "VO Sales Group offers a unique sales approach to generate high quality opportunities for your organization.",
          button: "Learn More",
          href: "#",
        },
        {
          image: road.src,
          title: "The Gig Economy",
          description:
            "The On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives.",
          button: "Sales Prospecting",
          href: "#",
        },
      ],
    },
    {
      id: "Features",
    },
    {
      id: "Hero",
      image: bb1.src,
      title: "Comprehensive Solutions",
      content: [
        "VO Sales Group Prospecting integrates the various facets of a Sales and Marketing strategy for our customers, including Strategic Sales Prospecting, Demand Generation, Email Campaigns, and Digital Marketing.",
      ],
      link: "Learn more",
      href: "/concierge-services",
    },
    {
      id: "Benefits",
    },
    {
      id: "Hero",
      image: bb2.src,
      title: "Strategic Sales Partner",
      content: [
        "As your Strategic Sales Partner, we work together to provide you with integrated solutions - integrated with your current organization, whether you have a current sales force or not, and whether you use a sales channel or not.",
        "VO Sales Group offers a suite of Comprehensive Sales Solutions for our customers. We are senior-level people working for you.",
      ],
      link: "Learn more",
      href: "/solutions",
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps,
    },
  ],
};
