import { Carousel } from "@/components/Home/Carousel/Carousel";
import { Features } from "@/components/Home/Features/Features";
import { Hero } from "@/components/Home/Hero/Hero";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Features />
      <Hero index={0} />
      <Hero index={1} />
    </Layout>
  );
}
