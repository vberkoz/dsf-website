import sunset from "@/public/about/sunset.webp";
import funnel from "@/public/about/funnel.webp";
import { DefaultNextSteps } from "@/data/DefaultNextSteps";

export const AboutUs = {
  title: "About us",
  slug: "about-us",
  pageset: "about-us",
  isPrimary: true,
  description: "Our mission and values",
  image: sunset.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Content121",
      data: [
        {
          caption: "Family-first environment",
          title: "A Virtual Organization",
          content: [
            {
              p: "VO Sales Group was started by Stephen Zarick when he was a single father and wanted to create a work-life balance around a family-first environment – a work-at-home environment.",
            },
            {
              p: "The original intent of VO Sales Group was to create an environment for self-employed professionals to work in a virtual atmosphere with virtual teams, fully utilizing today’s collaboration tools.",
            },
            {
              p: "Many of VO Sales Group’s early team members were professional women who were also moms.",
            },
            {
              p: "Today VO Sales Group is a Virtual Organization of Sales and Marketing professionals, most of whom have had backgrounds with major corporations.",
            },
            {
              p: "VO Sales Group offers a profoundly different company environment that is not bound by industry, not bound by geography, not bound by country.",
            },
            {
              p: "As we spread our reach, VO Sales Group will keep growing internationally.",
            },
            {
              p: "VO Sales Group allows you to hire experienced professionals On Demand, as needed.",
            },
            {
              p: "VO Sales Group is the ultimate Virtual Organization for both Sales and Marketing.",
            },
          ],
        },
        {
          caption: "Marketing solutions",
          title: "On-Demand Sales",
          content: [
            {
              p: "For our customers, Solution Vendors, VO Sales Group represents a suite of sales and marketing solutions for Lead Generation and Sales Development.",
            },
            {
              p: "VO Sales Group is a great alternative to hiring a full-time employee (FTE) to perform all your sales development and marketing functions.",
            },
            {
              p: "Even if you hire an FTE, you may end up having to outsource some of these tasks anyway in order to accommodate multiple skill sets and applications.",
            },
            {
              p: "VO Sales Group is your On-Demand Sales and Marketing partner to generate Sales Leads and Sales Revenue.",
            },
          ],
          image: funnel,
        },
        {
          caption: "Unique model",
          title: "Self-Employment Opportunity",
          content: [
            {
              p: "VO Sales Group offers a unique model, built around collaborative business tools that allow the self-employed Gigger or Tasker to feel part of a company, yet work individually.",
            },
            {
              p: "VO Sales Group’s contractors have chosen a work-at-home lifestyle for a variety of reasons and are able to effectively balance their work life with their family life.",
            },
            {
              p: "There are four teams at VO Sales Group: The Concierge team, The Sales 360 team, The Marketing 2.0 team, The geographically dispersed, commission-only Sales Agent team",
            },
            {
              p: "Every member of our team is compensated based on performance.",
            },
            {
              p: "Each member of our team is allowed to grab more of the pie while being self-employed.",
            },
            {
              p: "In today’s On-Demand Economy, VO Sales Group provides an environment for sales and marketing professionals to enjoy the Gig Life.",
            },
          ],
        },
      ],
    },
    {
      id: "NextSteps",
      steps: DefaultNextSteps
    },
  ],
};
