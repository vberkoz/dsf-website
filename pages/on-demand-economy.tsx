import { Layout } from "@/components/Layout";

import { HeroTabs } from "@/components/HeroTabs";
import { HeroTabsData } from "@/components/About/HeroTabsData";

import { NextSteps } from "@/components/NextSteps/NextSteps";

export default function OnDemandEconomy() {
  return (
    <Layout>
      <HeroTabs data={HeroTabsData} current={2} />
      <NextSteps />
    </Layout>
  )
}