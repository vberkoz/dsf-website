import { HeroTabs } from "@/components/HeroTabs";
import { NextSteps } from "@/components/Home/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <HeroTabs />
      <NextSteps />
    </Layout>
  );
}
