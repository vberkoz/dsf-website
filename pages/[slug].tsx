import dynamic from "next/dynamic";

import { Pages } from "@/data/data";

import { Layout } from "@/components/Layout";
import { HeroTabs } from "@/components/HeroTabs";
import Content121 from "@/components/Content121";
import SectionCDDD from "@/components/SectionCDDD";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Image121 } from "@/components/Image121";
import Content1111 from "@/components/Content1111";
import Testimonials from "@/components/Testimonials";
import { Hero } from "@/components/Hero";

export default function Page({ page }: any) {
  return (
    <Layout>
      {page.sections.map((section: any, key: number) => {
        switch (section.id) {
          case "HeroTabs":
            const pages = Pages.filter((item) => page.pageset === item.pageset);
            const pageset = pages.map((item) => ({
              title: item.title,
              slug: item.slug,
            }));
            if (pageset.length > 1) {
              return (
                <HeroTabs
                  key={key}
                  title={page.title}
                  description={page.description}
                  image={page.image}
                  tabs={pageset}
                />
              );
            }
            return (
              <HeroTabs
                key={key}
                title={page.title}
                description={page.description}
                image={page.image}
              />
            );
          case "Hero":
            return <Hero data={section} key={key} />;
          case "SectionCDDD":
            return <SectionCDDD section={section} key={key} />;
          case "Content121":
            return <Content121 data={section} key={key} />;
          case "Content1111":
            return <Content1111 content={section.data} key={key} />;
          case "Image121":
            return <Image121 content={section.data} key={key} />;
          case "Map":
            const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
              ssr: false,
            });
            return (
              <div
                className="grid bg-gray-900 lg:pl-14 xl:grid-cols-4"
                key={key}
              >
                <div></div>
                <div className="col-span-2">
                  <MapWithNoSSR />
                </div>
                <div></div>
              </div>
            );
          case "Testimonials":
            return <Testimonials data={section.data} key={key} />;
          case "NextSteps":
            return <NextSteps data={section.steps} key={key} />;
        }
      })}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = Pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const page = Pages.find((page) => page.slug === params.slug);
  return { props: { page } };
}
