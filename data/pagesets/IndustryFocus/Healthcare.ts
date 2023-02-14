import doctors from "@/public/industry_focus/doctors.webp";

export const Healthcare = {
  title: "Healthcare",
  slug: "healthcare",
  pageset: "industry-focus",
  isPrimary: false,
  description: "eHealth, Connected Hospital, EMR/EHR, Security, Patient Tracking, Clinical Supply Chain, Nurse Call, Patient Engagement, LAB, RCM",
  image: doctors.src,
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
