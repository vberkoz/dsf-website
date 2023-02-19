import { DefaultNextSteps } from "@/data/DefaultNextSteps";
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
      steps: DefaultNextSteps
    },
  ],
};
