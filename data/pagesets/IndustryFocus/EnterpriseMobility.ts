import trucks from "@/public/industry_focus/trucks.webp";

export const EnterpriseMobility = {
  title: "Enterprise mobility",
  slug: "enterprise-mobility",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Logistics, POD/DSD, Device Management/BYOD, YMS, Asset Tracking, TMS, GPS, Filed Service/Field Worker, Fleet Management",
  image: trucks.src,
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
