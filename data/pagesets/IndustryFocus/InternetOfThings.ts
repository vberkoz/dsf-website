import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import tower from "@/public/industry_focus/tower.webp";
import tablet from "@/public/industry_focus/tablet.webp";

export const InternetOfThings = {
  title: "Internet of things",
  slug: "internet-of-things",
  pageset: "industry-focus",
  isPrimary: false,
  description1: [
    [
      "Monitoring",
      "Industry 4.0 / IIoT",
      "Asset Tracking",
      "Metering",
    ],
  ],
  description2: [
    [
      "Billing",
      "Fleet Management",
      "5G",
      "Smart Supply Chain",
    ],
  ],
  image: tower.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "M2M - IIoT Sales Prospecting",
      svg: null,
      content: [
        "Industrial Internet of Things (IIoT) and M2M are in all business solutions that are tracking assets and asset activity.",
        [
          "Industrial IoT - IIoT",
          "Factory Automation",
          "Fleet Management",
          "Asset Tracking",
          "Vehicular Tracking",
          "Billing Situations, such as Utility Metering, Parking Meters, and more",
          "mHealth - Mobile Healthcare",
          "Cloud Computing",
          "Asset Reporting",
          "Smart Kiosks",
          "Usage-Based Insurance",
          "Remote Monitoring, Service, and Dispatch",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "IoT Solutions",
      svg: null,
      content: [
        "Industrial Internet of Things - IIoT",
        "M2M, IoT, and IIoT will be found in all aspects of our lives, in all industries, both consumer and business.",
        "VO is involved with IoT/M2M manufacturers, M2M developers, M2M integrators, and solution providers.",
        "IoT represents over 7 billion potential users, devices, machines, or subscribers for cellular companies over the next several years.",
      ],
      link: "",
      href: "#",
      image: tablet,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "IoT Sales Development",
      svg: null,
      content: [
        "With IoT still being fairly new to the market, VO finds itself involved in Business Development activity, as well as Sales Channel Development for our customers.",
        "VO is focused on Sales Planning and Sales Development to push an emerging company to the next level, and maybe to the level of gaining investments, or even a liquidity event.",
        "VO can represent either the investor making the investment or acquisition, or the company that owns the IP (intellectual property) looking for investors or a liquidity event.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
