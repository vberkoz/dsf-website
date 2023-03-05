import { Home as page } from "@/data/pagesets/Home";

import Slides from "@/components/Slides/Slides";
import Hero from "@/components/Hero";
import NextSteps3 from "@/components/NextSteps3";
import Layout from "@/components/Layout";

import SectionCTTTx2 from "@/components/SectionCTTTx2";
import SectionC2TI from "@/components/SectionC2TI";

export default function Home() {
  return (
    <Layout>
      {page.sections.map((section: any, key: number) => {
        switch (section.id) {
          case "Slides":
            return <Slides data={section.slides} key={key} />;
          case "SectionC2TI":
            return <SectionC2TI data={section} key={key} />;
          case "SectionCTTTx2":
            return <SectionCTTTx2 section={section} key={key} />;
          case "Hero":
            return <Hero data={section} key={key} />;
          case "NextSteps3":
            return <NextSteps3 data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  );
}
