import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import question from "@/public/join_our_team/question.webp";

export const SalesAgentFAQs = {
  title: "Sales Agent FAQs",
  slug: "sales-agent-fa-qs",
  pageset: "join-our-team",
  isPrimary: false,
  description1: ["Find answer to common question and contact us if you still have questions"],
  description2: [],
  image: question.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "FAQ",
      question: "Is there a contract to sign?",
      answer: [
        "Yes, we have a Sales Agent Contract and an NDA (Non-Disclosure Agreement) that needs to be signed and accepted by both parties.",
      ],
    },
    {
      id: "FAQ",
      question: "What are my responsibilities for a home-based office?",
      answer: [
        "We expect you to have a professional work environment. We expect professionalism at its highest level.",
        "We also expect you to have a dedicated landline with a professional voice mail that is separate from your personal voice mail. VoIP is not acceptable.",
        "You must have a business-grade computer with broadband internet access, a business-grade email address is expected. You need to have a quiet work environment. It is expected that you make calls while in front of your computer with a headset so that data is entered into our systems in real time. This is a client expectation.",
      ],
    },
    {
      id: "FAQ",
      question: "Can anyone join the VO Sales Group team?",
      answer: [
        "No. We screen and interview all candidates before they are invited onto the team.",
      ],
    },
    {
      id: "FAQ",
      question: 'Can I be "fired" from the team once I am a member?',
      answer: [
        "So to speak, yes, you can be let go or asked to leave. This is not a franchise, this is an agent program. There will be quotas and a SOW (Statement of Work).",
        "If your metrics do not warrant continuance, then you will likely be asked to leave the program. There will be a warning cycle so you know where you stand.",
        "Since the Sales Agent program is a Commission-only or Finder's Fee program, we do expect you to be out networking and selling, and bringing in business to grow your own income.",
      ],
    },
    {
      id: "FAQ",
      question: "Can I bring in any new account for VO Sales Group?",
      answer: [
        "NO. We have guidelines as to who is and who is not a good prospect/customer for VO Sales Group. We have a training program to discover more on this topic.",
      ],
    },
    {
      id: "FAQ",
      question: "Can I bring in my own people to VO Sales Group?",
      answer: [
        "NO. We expect all people on our team to be interviewed by management and invited on the team. All team members must fall under the VO Sales Group contracts and payment system. Today we are not expecting any subcontracting under you.",
        "Should this person be accepted and invited on the team, then this person could work under you as a direct report. But all team members on the VO Sales Group team are considered peers. So someone else might wish to hire that person as well.",
        "We do have projects where there is a project lead, and that person manages the project and the people. In a sense, we do not mind if you build your own business, but all delivery team members must be approved, accepted, and invited on the team by VO Sales Group management.",
      ],
    },
    {
      id: "FAQ",
      question: "Are there different pay scales?",
      answer: [
        "NO. Not for Finder's Fee and Not for Commissions, in general. If there is discounting on a sale then there will be guidelines as to what the commission discount will be.",
      ],
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
