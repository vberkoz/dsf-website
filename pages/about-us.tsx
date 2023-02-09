import { Layout } from "@/components/Layout";

import { HeroTabs } from "@/components/HeroTabs";
import { HeroTabsData } from "@/components/About/HeroTabsData";

import { Content121 } from "@/components/Content121";
import { Content121Data } from "@/components/About/Content121Data";

import { NextSteps } from "@/components/NextSteps/NextSteps";

export default function AboutUs() {
  return (
    <Layout>
      <HeroTabs data={HeroTabsData} current={0} />
      <Content121 content={Content121Data} />
      <NextSteps />
    </Layout>
  );
}
