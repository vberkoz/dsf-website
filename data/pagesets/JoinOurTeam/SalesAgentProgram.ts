import map from "@/public/join_our_team/map.webp";

export const SalesAgentProgram = {
  title: "Sales agent program",
  slug: "sales-agent-program",
  pageset: "join-our-team",
  isPrimary: false,
  description: "We give you the tools to grow your own business",
  image: map.src,
  sections: [
    {
      id: "HeroTabs",
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
