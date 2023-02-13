import hands from "@/public/about/hands.webp";

export const OurTeamSStoryAvatars = {
  title: "Our team's story - avatars",
  slug: "our-teams-story-avatars",
  pageset: "about-us",
  isPrimary: false,
  description: "Explore experience of our people",
  image: hands.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "OurValues",
      data: [
        {
          title: "Our Story",
          content: [
            {p: "VO Sales Group is a Virtual Organization of sales professionals."},
            {p: "A collaborative community of people with great backgrounds."},
            {p: "We are the Giggers, the Taskers. We are Parents. We are Professionals that you can hire On Demand, as needed, by the Project."}
          ],
        },
        {
          title: "Our Team",
          content: [
            {p: "Learn how our Enterprise Sales Development team members provide our customers with qualified Sales Opportunities and valuable market intelligence."},
            {p: "A collaborative community of people with great backgrounds."},
            {p: "Click on each avatar in the map below to hear each Salesperson’s story."}
          ],
        }
      ]
    },
    {
      id: "Map",
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
  ]
};
