import factory from "@/public/industry_focus/factory.webp";

export const FactoryAutomation = {
  title: "Factory automation",
  slug: "factory-automation",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Demand Planning, Robotics, Cobots, Material Handling, Kitting, Labor Management, Packaging, RPA, IIoT, MRP, MES",
  image: factory.src,
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
