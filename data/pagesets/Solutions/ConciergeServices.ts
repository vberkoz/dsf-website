import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import leaves from "@/public/solutions/leaves.webp";
import salesPlan from "@/public/solutions/salesPlan.webp";
import business from "@/public/solutions/business.webp";
import diagram from "@/public/solutions/diagram.webp";

export const ConciergeServices = {
  title: "Concierge services",
  slug: "concierge-services",
  pageset: "solutions",
  isPrimary: false,
  description:
    "A Premier Approach for High Value Technology and Business Solutions companies",
  image: leaves.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content121",
      data: [
        {
          caption: ["Premier approach"],
          title: "Sales Development Solutions",
          content: [
            "A Premier Approach for High Value Technology and Business Solutions companies. VO Sales Group’s goals are to Generate Qualified Sales Opportunities that are revenue producing.",
            "Our Professional Sales Prospecting Services are to be revenue producing as opposed to being just a marketing expense as other marketing activity. Our focus on high value solutions where there are many points of contacts to penetrate a company to identify the buying team and the sales opportunities within.",
          ],
          image: salesPlan,
        },
        {
          caption: [],
          title: "VO Sales Group Concierge",
          content: [
            "VO Concierge is a “white glove” Sales Prospecting/Demand Generation service.",
            [
              "You will be assigned a Team Manager and a Project Leader",
              "We will build a Sales Plan that includes Revenue Goals",
              "A Value Proposition Exercise is held to review your offering",
              "Call List Services are available",
              "A Professional Salesperson is assigned to your account",
              "A Customer Satisfaction and Delivery Manager is assigned to your campaign",
              "We do everything for you. We manage the whole process",
            ],
          ],
        },
        {
          caption: [],
          title: "On-Demand Sales Professionals",
          content: [
            "Outsourcing with VO allows you to have a contract Virtual Sales Team by creating a Virtual Organization (VO) of professional salespeople generating prospects and sales opportunities for you. VO becomes your on-demand sales workforce.",
            "VO Sales Group's Concierge Sales Team professionals run their own campaigns, have a proven track record with VO Sales Group, and report directly to you.",
            "The salesperson assigned to your account is held accountable for your project, as you would expect a salesperson to be held accountable.",
          ],
        },
      ],
    },
    {
      id: "Content1111",
      data: {
        caption: "",
        title1: "Industry Focus",
        title2: "",
        col1: [
          [
            "All Things Enterprise",
            "Supply Chain",
            "Factory Automation",
            "Robotics",
            "Enterprise Mobility",
            "High Value Solutions",
          ],
        ],
        col2: [
          [
            "Retail",
            "Healthcare",
            "Software Solutions",
            "Cloud Computing",
            "Professional Services",
          ],
        ],
      },
    },
    {
      id: "Hero",
      image: business.src,
      title: "Outsourced Sales Prospecting",
      content: [
        [
          "Fractional Ownership of a Sales Prospecting Professional",
          "Contract Sales/Revenue Development",
          "LEAD Generation - Demand Generation",
          "Sales Plan Strategy/Sales Process Defined",
          "SFA (sales force automation) Development",
          "Sales Channel Development - Acquisition and Retention Strategies",
          "Jump-Starting the Channel - Refocus the Channel",
        ],
      ],
      link: "",
      href: "#",
    },
    {
      id: "Content121",
      data: [
        {
          caption: ["Benefits"],
          title: "Why Engage VO Concierge?",
          content: [
            [
              "We reduce your cost per sales call",
              'Hire us as you need us - "Fractional Ownership" of a Professional Sales Team',
              "We accelerate your market penetration",
              "Our clients recognize that Prospecting is a separate skill set from Selling",
            ],
          ],
        },
        {
          caption: [],
          title: "Benefits of VO Concierge",
          content: [
            [
              "We prospect - You sell",
              "We are hired to complement sales teams and should be hired by your sales team",
              "We will enhance your current sales message and effort",
              "In many cases, we actually re-shape your technical message to get the attention of the prospect to at least lead us to an executive-level conversation",
              "Many companies use VO Sales Group to augment their Sales Retention efforts",
            ],
          ],
        },
        {
          caption: [],
          title: "Strategic Sales Partner",
          content: [
            "As your Strategic Sales Partner, we work with you to provide solutions that Integrate with your current organization - whether or not you have a current salesforce or use a sales channel.",
            "We are senior-level people working for you.",
            "Let VO Sales Group start Prospecting today for net new revenue.",
          ],
        },
      ],
    },
    {
      id: "Hero1",
      image: diagram.src,
      title: "Outsourced Sales Prospecting",
      content: [
        [
          "Reduce your Sales Risk",
          "Find new actionable business",
          "Support a new territor",
          "Support a new product offering",
          "Gain access to top executive",
          "Lower the cost per sales call",
          "Provide more effective Prospecting",
          "Support a new sales rep",
          "Allow your salespeople to sell",
          "Lower your cost of sales calls if you have road warriors",
        ],
      ],
      link: "",
      href: "#",
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps,
    },
  ],
};
