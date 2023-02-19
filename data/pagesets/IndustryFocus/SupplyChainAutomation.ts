import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import port from "@/public/industry_focus/port.webp";

export const SupplyChainAutomation = {
  title: "Supply chain & automation",
  slug: "supply-chain-automation",
  pageset: "industry-focus",
  isPrimary: false,
  description: "Distribution, Robotics, Picking Solutions, Material Handling, AS/RS, Autonomus Vehicles, Packaging, Logistics, WMS, BOPUS/BOPIS, AGV/AMR/SGV, DTC",
  image: port.src,
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
