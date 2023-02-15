import typing from "@/public/join_our_team/typing.webp";

export const SalesTeamTestimonials = {
  title: "Sales team testimonials",
  slug: "sales-team-testimonials",
  pageset: "join-our-team",
  isPrimary: false,
  description: "Why I work at VO Sales Group",
  image: typing.src,
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
