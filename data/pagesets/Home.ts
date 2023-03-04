import nyc from "@/public/home/nyc.webp";
import map from "@/public/home/map.webp";
import road from "@/public/home/road.webp";

import bb1 from "@/public/home/brooklyn-bridge-1.webp";
import bb2 from "@/public/home/brooklyn-bridge-2.jpeg";

import bulb from "@/public/home/bulb.svg";
import target from "@/public/home/target.svg";
import wallet from "@/public/home/wallet.svg";
import brand from "@/public/home/brand.svg";
import speaker from "@/public/home/speaker.svg";
import key from "@/public/home/key.svg";

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
          href: "/solutions",
        },
        {
          image: map.src,
          title: "Sales Prospecting",
          description:
            "VO Sales Group offers a unique sales approach to generate high quality opportunities for your organization.",
          button: "Learn More",
          href: "/concierge-services",
        },
        {
          image: road.src,
          title: "The Gig Economy",
          description:
            "The On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives.",
          button: "Sales Prospecting",
          href: "/concierge-services",
        },
      ],
    },
    {
      id: "SectionC2TI",
      caption: ["Features"],
      title: "Professional Sales Prospecting and Demand Generation Group",
      svg: null,
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
      id: "SectionC2TI",
      caption: [],
      title: "Unique business approach",
      svg: null,
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
      id: "SectionC2TI",
      caption: [],
      title: "EXIT Strategies",
      svg: null,
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
      id: "SectionCTTTx2",
      caption: ["Benefits"],
      data: [
        {
          title: "Professional Sales Prospecting",
          image: bulb.src,
          content: [
            'VO Concierge is VO Sales Group\'s "white glove" service that incorporates all facets of the comprehensive VO Sales Group Sales Prospecting approach.',
            "With this service, you have one go-to company for all of your Demand Generation needs.",
            "You will have an account manager/project manager as we pull together a team with multiple skill sets to help you achieve your goals.",
          ],
          link: "Professional prospecting",
          href: "/concierge-services",
        },
        {
          title: "Demand generation",
          image: target.src,
          content: [
            "VO Sales Group’s Business Development Managers (BDs) are seasoned sales professionals who leverage their sales skills to achieve your lead generation and lead qualification goals in order to advance your product or service.",
            "Keywords: Sales Lead, Lead Generation, Demand Generation, Prospecting.",
          ],
          link: "Sales 360 services",
          href: "/solutions",
        },
        {
          title: "Channel Development",
          image: wallet.src,
          content: [
            "VO Sales Group has vast experience in Channel Development and Channel Management, including a software suite to allow both Development and Management.",
            "If Channel Portals and a Channel community are part of your offering VO Sales Group can help.",
          ],
          link: "Channel development",
          href: "/channel-development",
        },
        {
          title: "Brand Refresh",
          image: brand.src,
          content: [
            "VO Sales Group assists Solution providers with their Digital Marketing, including website refresh, message refresh, analysis, Search Engine Optimization (SEO), and assistance with landing page creation to provide traffic.",
            "These are all part of the VO Sales Prospecting concept, which fosters an increase in inbound leads passive leads generation.",
            "If your Solutions pages are not Mobile-Friendly, Google will not be ranking your pages.",
          ],
          link: "Marketing 2.0",
          href: "/marketing-2-0",
        },
        {
          title: "Digital Marketing",
          image: speaker.src,
          content: [
            "Digital Marketing is another key facet of the VO Sales Group suite of services and can be easily scaled up to leverage your web presence.",
            "VO Sales Group is committed to driving revenue for Solution Providers.",
            "We will design a plan for you, utilizing a multi-touch approach that includes all things internet to complement the human factor.",
          ],
          link: "Marketing 360",
          href: "/marketing-2-0",
        },
        {
          title: "All Things Sales",
          image: key.src,
          content: [
            "VO Sales Group's focus IS Sales. We are a Sales company. We are staffed with industry professionals that you can hire by the project or a set duration.",
            "With the shorter ramp-up times and less overhead, you can utilize our early adoption of the Gig Economy to your benefit and leverage our world-class sales and sales marketing team to advance your revenue.",
          ],
          link: "Professional prospecting",
          href: "/international-concierge",
        },
      ],
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
