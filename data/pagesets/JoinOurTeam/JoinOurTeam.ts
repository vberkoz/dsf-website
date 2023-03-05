import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import iphone from "@/public/join_our_team/iphone.webp";
import colorado from "@/public/join_our_team/colorado.webp";
import orlando from "@/public/join_our_team/orlando.webp";
import toronto from "@/public/join_our_team/toronto.webp";
import philadelphia from "@/public/join_our_team/philadelphia.webp";

export const JoinOurTeam = {
  title: "Join our team",
  slug: "join-our-team",
  pageset: "join-our-team",
  isPrimary: true,
  description1: ["On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives"],
  description2: [],
  image: iphone.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "Testimonials",
      data: [
        {
          body: "What I like about Gigging with VO is the ability it gives me to hone my sales and prospecting skills, as well as the variety of campaigns that I engage in.",
          location: "Colorado",
          position: "Enterprise Sales Team Member",
          image: colorado.src,
        },
        {
          body: "What I enjoy the most about my work with VO is the constantly changing campaigns that I work on and all the cool, emerging technologies I now know about.",
          location: "Orlando, FL",
          position: "Enterprise Sales Team Member",
          image: orlando.src,
        },
        {
          body: "One of my favorite things about working with VO is the support of the team. We are available for one another and provide support for each other. Even though we are all virtual, we are able to create that team environment.",
          location: "Toronto, Canada",
          position: "Enterprise Sales Team Member",
          image: toronto.src,
        },
        {
          body: "After being a road warrior and networking maven for a number of years, I needed the ability to create my own schedule while using my sales skills. I love the flexibility that my VO Gigs give me to structure my schedule as I see fit.",
          location: "Philadelphia, PA",
          position: "Enterprise Sales Team Member",
          image: philadelphia.src,
        },
      ]
    },
    {
      id: "SectionC2TI",
      caption: ["Who we are looking for"],
      title: "Qualifications",
      svg: null,
      content: [
        [
          "Minimum 10 years in business solutions sales, if for the Sales team",
          "Minimum 5 years of digital marketing, if for a Marketing contractor",
          "Professional home office setup to meet our expectations",
          "If you are looking for a Sales Gig please contact us",
          "Self-motivated and performance-driven",
          "Computer and Internet literate",
        ]
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Minimum Requirements",
      svg: null,
      content: [
        [
          "Landline for phone calls (Cell Phone/VoIP is not acceptable)",
          "Familiarity with CRM, Google Docs, MS Office, or OpenOffice",
          "Familiarity with Spreadsheets is a must",
          "Dedicated business computer system",
          "Broadband Internet access",
          "Professional voice mail",
        ]
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: ["Interview"],
      title: "Application and Interview Process",
      svg: null,
      content: [
        [
          "Submit a resume or bio with a brief outline of product knowledge focus",
          "Phone interview with VO management; there may be several",
          "Review of the VO Agent Contract and NDA that needs to be signed and accepted",
          "Once invited to the VO Sales Group sales team, it may take some time to place you on a project",
          "You are always welcome to bring projects to the team, and VO Sales Group management will assist in closing the new client",
        ]
      ],
      link: "Request interview",
      href: "/request-interview",
      image: null,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps
    },
  ],
};
