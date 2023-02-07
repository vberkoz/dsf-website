import { Carousel } from "@/components/Home/Carousel/Carousel";
import { Features } from "@/components/Home/Features/Features";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Features />
    </Layout>
  );
}
