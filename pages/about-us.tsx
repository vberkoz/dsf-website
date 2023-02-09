import { Layout } from "@/components/Layout";

import { HeroTabs } from "@/components/HeroTabs";
import { HeroTabsData } from "@/components/About/HeroTabsData";

import { Content121 } from "@/components/About/Content121/Content121";
import { NextSteps } from "@/components/NextSteps/NextSteps";

export default function AboutUs() {
  return (
    <Layout>
      <HeroTabs data={HeroTabsData} current={0} />
      <Content121 />
      <NextSteps />
    </Layout>
  );
}
