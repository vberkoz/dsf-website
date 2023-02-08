import { Content121 } from "@/components/About/Content121/Content121";
import { HeroTabs } from "@/components/HeroTabs";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <HeroTabs />
      <Content121 />
      <NextSteps />
    </Layout>
  );
}
