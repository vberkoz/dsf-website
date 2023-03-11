import dynamic from "next/dynamic";

import { Pages } from "@/data/data";

import Layout from "@/components/Layout";
import HeroTabs from "@/components/HeroTabs";
import SectionCTTTx2 from "@/components/SectionCTTTx2";
import NextSteps3 from "@/components/NextSteps3";
import SectionC2IE from "@/components/SectionC2IE";
import SectionCTTE from "@/components/SectionCTTE";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import NextSteps4 from "@/components/NextSteps4";
import SectionC2TI from "@/components/SectionC2TI";
import SectionCDDE from "@/components/SectionCDDE";
import FAQ from "@/components/FAQ";
import ContactUsForm from "@/components/ContactUsForm";
import RequestInterviewForm from "@/components/RequestInterviewForm";

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
                  description1={page.description1}
                  description2={page.description2}
                  image={page.image}
                  tabs={pageset}
                />
              );
            }
            return (
              <HeroTabs
                key={key}
                title={page.title}
                description1={page.description1}
                description2={page.description2}
                image={page.image}
              />
            );
          case "Hero":
            return <Hero data={section} key={key} />;
          case "SectionCTTTx2":
            return <SectionCTTTx2 section={section} key={key} />;
          case "SectionC2TI":
            return <SectionC2TI data={section} key={key} />;
          case "FAQ":
            return <FAQ data={section} key={key} />;
          case "SectionCDDE":
            return <SectionCDDE data={section} key={key} />;
          case "SectionCTTE":
            return <SectionCTTE content={section.data} key={key} />;
          case "SectionC2IE":
            return <SectionC2IE data={section} key={key} />;
          case "Map":
            const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
              ssr: false,
            });
            return (
              <div
                className="bg-gray-100 dark:bg-gray-900 lg:pl-14 xl:pr-[108px]"
                key={key}
              >
                <div>
                  <MapWithNoSSR />
                </div>
                <div></div>
              </div>
            );
          case "Testimonials":
            return <Testimonials data={section.data} key={key} />;
          case "ContactUsForm":
            return <ContactUsForm />;
          case "RequestInterviewForm":
            return <RequestInterviewForm />;
          case "NextSteps3":
            return <NextSteps3 data={section.steps} key={key} />;
          case "NextSteps4":
            return <NextSteps4 data={section.steps} key={key} />;
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
