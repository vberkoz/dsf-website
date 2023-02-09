import { Layout } from "@/components/Layout";

import { HeroTabs } from "@/components/HeroTabs";
import { HeroTabsData } from "@/components/About/HeroTabsData";

import { Content121 } from "@/components/Content121";
import { Content121Data } from "@/components/OnDemandEconomy/Content121Data";

import { NextSteps } from "@/components/NextSteps/NextSteps";

export default function OnDemandEconomy() {
  return (
    <Layout>
      <HeroTabs data={HeroTabsData} current={2} />
      <Content121 content={Content121Data} />
      <NextSteps />
    </Layout>
  )
}