import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import nyc from "@/public/solutions/nyc.webp";

import bulb from "@/public/home/bulb.svg";

import folder from "@/public/solutions/folder.svg";
import email from "@/public/solutions/email.svg";
import message from "@/public/solutions/message.svg";
import smartphone from "@/public/solutions/smartphone.svg";
import list from "@/public/solutions/list.svg";
import diagram from "@/public/solutions/diagram.svg";

export const Marketing20 = {
  title: "Marketing 2.0",
  slug: "marketing-2-0",
  pageset: "solutions",
  isPrimary: false,
  description:
    "Comprehensive Marketing Solutions. A 360-Degree Approach to Generating Quality Sales Leads.",
  image: nyc.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content121",
      caption: ["Services"],
      title: "Branding, Positioning & Strategic Marketing",
      content: [
        "If you want to change the look of your company, your logo, your brand, your positioning and seemingly have an inconsistent message, VO can help.",
        "Our team includes professionals who have worked with large and small companies in the field of strategic marketing or CMO On-Demand.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "Content121",
      caption: [],
      title: "Website Refresh",
      content: [
        "VO recognizes that a website is a tool that every company needs in today's digital world.",
        "A company website can act as a salesperson, delivering information 24/7.",
        "Websites must be responsive on a variety of devices, visually engaging, and able to be easily found by the various search engines.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "Content121",
      caption: [],
      title: "Search Engine Optimization",
      content: [
        "VO understands and embraces the new marketing landscape.",
        "A healthy Digital Marketing Strategy must incorporate Search Engine Optimization (SEO).",
        "With a particular focus on Organic SEO to drive business to your website, VO can help simplify the process for your company and help your company be found online.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionCDDD",
      caption: ["Features"],
      data: [
        {
          title: "Tactful Marketing Solutions",
          image: folder.src,
          content: [
            "We can help you with all of your Tactful Marketing solutions",
            [
              "eMailing",
              "SEO and Landing Pages",
              "Lead Management",
              "Trade Show Invites and more",
              "Even Recruiting",
            ],
          ],
          link: "",
          href: "#",
        },
        {
          title: "Email Solutions",
          image: email.src,
          content: [
            "VO will assist with the implementation, design, and management of your Email Marketing Campaigns.",
            "If you use Marketo, Pardot, or Mailchimp and do not have the time or resources to handle your Marketing Campaigns, VO Sales Group can step in and manage the process for you.",
          ],
          link: "",
          href: "#",
        },
        {
          title: "Messaging",
          image: message.src,
          content: [
            "VO Marketing offers Messaging assistance and has special expertise in assisting Start Up Companies and Emerging Technology Vendors to fine tune their message in order to make it more impactful and relevant.",
          ],
          link: "",
          href: "#",
        },
        {
          title: "All Things Digital Marketing",
          image: smartphone.src,
          content: [
            "VO can help you implement an Internet Marketing Strategy for Lead Generation.",
            "Areas where we can help are:",
            [
              "SEO/SEM",
              "Getting Inbound requests to integrate with your CRM",
              "Designing Landing Page Strategy for both natural and paid search",
              "Making sure your Web Solutions are mobile ready",
              "Assistance with Buyer's Guide Publishing",
              "And more",
            ],
            "We can even offer Software Development for all things Web.",
          ],
          link: "",
          href: "#",
        },
        {
          title: "VO Call List Services",
          image: list.src,
          content: [
            "Any Sales Prospecting effort should start with understanding the target audience.",
            "The most effective Sales Campaigns that VO runs are industry-focused campaigns.",
            "Many times this type of campaign requires us to build a Niche Call List because no such list exists to be purchased.",
            "Niche Lists are where VO blends data, using technology plus human resources, to build lists that you normally cannot find.",
            "We can create both verified or unverified email lists, with or without contact information.",
          ],
          link: "",
          href: "#",
        },
        {
          title: "Sales Force Automation",
          image: diagram.src,
          content: [
            "VO Sales Group can design a manageable Closed Loop Sales and Marketing system.",
            "Whether using SalesForce.com (SFDC) or another Sales Force Automation (SFA) tool, we can help implement and then manage the SFA effort.",
            "Our goal is not only to implement but to utilize an SFA strategy for the benefit of producing actionable sales leads.",
            "Allow VO to assist you in making your Sales Processes measurable.",
          ],
          link: "",
          href: "#",
        },
      ],
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps,
    },
  ],
};
