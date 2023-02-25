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
      id: "Content121",
      caption: ["Features"],
      title: "Professional Sales Prospecting and Demand Generation Group",
      content: [
        "VO Sales Group offers a 360 degree Sales approach for Vendors to Generate Quality Sales Opportunities. Outsourcing your Sales and Marketing efforts to VO allows you to have an On-Demand partner for these skill sets.",
        "Your Sales Prospecting, Demand Generation and Marketing efforts will be performed by industry professionals. The VO Sales 360 and Marketing 2.0 teams have a deep understanding across verticals and markets.",
        "You can hire us for a longer term campaign or by the project. Our expertise will put you a year ahead of any new hire.",
      ],
      link: "VO Sales Group",
      href: "/concierge-services",
      image: null,
    },
    {
      id: "Content121",
      caption: [],
      title: "Unique business approach",
      content: [
        "VO Sales Group is a Sales Development company started by Stephen Zarick. The original intent of VO Sales Group was to create an environment for self-employed sales professionals to work in a virtual atmosphere with a virtual team.",
        "VO Sales Group is a unique organization which prides itself on being capitalistic, as opposed to opportunistic, as many of our competitors are. Our style is profoundly unique and represents an early adoption of the now-burgeoning freelance lifestyle.",
        "VO Sales Group utilizes the concept of an On Demand Economy, which businesses successfully leverage to put themselves in growth mode. VO Sales Group creates a collaborative virtual environment using readily available cloud and collaboration tools.",
      ],
      link: "On Demand Economy",
      href: "/on-demand-economy",
      image: null,
    },
    {
      id: "Content121",
      caption: [],
      title: "EXIT Strategies",
      content: [
        "VO Sales Group is helping those with Intellectual Property (IP) to combine Sales Development with Growth Capital and then EXIT Strategies.",
        "Many companies need a Sales and Marketing effort and need it now. VO Sale Group can quickly offer you an On-Demand Sales and Marketing team to stuff your sales pipe.",
        "With this activity, for those that qualify, we can help you prepare for an exit while raising your Valuation.",
      ],
      link: "XIT Strategies",
      href: "/xit-strategy",
      image: null,
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
