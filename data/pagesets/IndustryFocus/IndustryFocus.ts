import gears from "@/public/industry_focus/gears.webp";

export const IndustryFocus = {
  title: "Industry focus",
  slug: "industry-focus",
  pageset: "industry-focus",
  isPrimary: true,
  description: "Our approach allows us to cross many industries by utilizing strategic selling styles and questioning techniques to find opportunities",
  image: gears.src,
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
