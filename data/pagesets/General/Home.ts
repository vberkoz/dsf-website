import nyc from "@/public/home/nyc.webp";
import map from "@/public/home/map.webp";
import road from "@/public/home/road.webp";

export const Home = {
  title: "Home",
  slug: "",
  pageset: "home",
  isPrimary: true,
  sections: [
    {
      id: "Slides",
      slides: [
        {
          image: nyc.src,
          title: "The On-Demand Economy",
          description: "VO Sales Group offers a full suite of Lead Generation Solutions, Sales Development, Digital Marketing and Channel Solutions.",
          button: "VO Solutions",
          href: "#",
        },
        {
          image: map.src,
          title: "Sales Prospecting",
          description: "VO Sales Group offers a unique sales approach to generate high quality opportunities for your organization.",
          button: "Learn More",
          href: "#",
        },
        {
          image: road.src,
          title: "The Gig Economy",
          description: "The On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives.",
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
      index: 0,
    },
    {
      id: "Benefits",
    },
    {
      id: "Hero",
      index: 1,
    },
    {
      id: "NextSteps",
      steps: [
        {
          title: "Contact us",
          description: "Send your questions through our contact form and we'll find the best solution for you"
        },
        {
          title: "Submit GIG",
          description: "Looking for Sales Prospecting that actually works? Tired of hiring amateur, scripted telemarketers? Looking for Professionals that can find real, revenue-producing leads? Let's talk."
        },
        {
          title: "Join our team",
          description: "On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives"
        }
      ]
    },
  ],
};
