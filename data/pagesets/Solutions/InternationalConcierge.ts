import flag from "@/public/solutions/flag.webp";

export const InternationalConcierge = {
  title: "International concierge",
  slug: "international-concierge",
  pageset: "solutions",
  isPrimary: false,
  description: "Concierge Service for International Companies Looking for Sales in the US",
  image: flag.src,
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
