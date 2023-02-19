import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import woman from "@/public/solutions/woman.webp";

export const VettedSalesStaffing = {
  title: "Vetted sales staffing",
  slug: "vetted-sales-staffing",
  pageset: "solutions",
  isPrimary: false,
  description: "A Sales Company offering Sales Giggers a Hybrid Approach to Generating  Sales and Sales Leads",
  image: woman.src,
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
