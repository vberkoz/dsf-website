import { Benefits } from "@/components/Home/Benefits/Benefits";
import { Slides } from "@/components/Home/Slides/Slides";
import { Features } from "@/components/Home/Features/Features";
import { Hero } from "@/components/Home/Hero/Hero";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Slides />
      <Features />
      <Hero index={0} />
      <Benefits />
      <Hero index={1} />
      <NextSteps />
    </Layout>
  );
}
