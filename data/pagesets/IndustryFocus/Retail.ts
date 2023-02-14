import mall from "@/public/industry_focus/mall.webp";

export const Retail = {
  title: "Retail",
  slug: "retail",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Inventory, Demand Forecasting, Security, POS, BOPUS/BOPIS, Supply Chain, Mobile Payment, Logistics, Customer Engagement, Traffic Counting, Electronic Shelf Labels",
  image: mall.src,
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
