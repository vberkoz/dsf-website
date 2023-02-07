import { Benefits } from "@/components/Home/Benefits/Benefits";
import { Carousel } from "@/components/Home/Carousel/Carousel";
import { Features } from "@/components/Home/Features/Features";
import { Hero } from "@/components/Home/Hero/Hero";
import { NextSteps } from "@/components/Home/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Features />
      <Hero index={0} />
      <Benefits />
      <Hero index={1} />
      <NextSteps />
    </Layout>
  );
}
