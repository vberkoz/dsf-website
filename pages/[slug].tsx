import dynamic from "next/dynamic";

import { Pages } from "@/data/data";

import { Layout } from "@/components/Layout";
import { HeroTabs } from "@/components/HeroTabs";
import { Content121 } from "@/components/Content121";
import { OurValues } from "@/components/OurValues/OurValues";
import { NextSteps } from "@/components/NextSteps/NextSteps";

export default function Page({ page }: any) {
  return (
    <Layout>
      {page.sections.map((section: any) => {
        switch (section.id) {
          case "HeroTabs":
            const pages = Pages.filter((item) => page.pageset === item.pageset);
            const pageset = pages.map((item) => ({
              title: item.title,
              slug: item.slug,
            }));
            return (
              <HeroTabs
                title={page.title}
                description={page.description}
                image={page.image}
                tabs={pageset}
              />
            );
          case "Content121":
            return <Content121 content={section.data} />;
          case "OurValues":
            return <OurValues data={section.data} />;
          case "Map":
            const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
              ssr: false,
            });
            return (
              <div className="grid bg-gray-900 xl:grid-cols-4 lg:pl-14">
                <div></div>
                <div className="col-span-2">
                  <MapWithNoSSR />
                </div>
                <div></div>
              </div>
            );
          case "NextSteps":
            return <NextSteps data={section.steps} />;
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

type Params = {
  params: { slug: string };
};

export async function getStaticProps({ params }: Params) {
  const page = Pages.find((page) => page.slug === params.slug);
  return { props: { page } };
}
