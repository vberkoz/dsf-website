import { Home as page } from "@/data/pagesets/Home";

import { Slides } from "@/components/Slides/Slides";
import { Hero } from "@/components/Hero";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

import Content121 from "@/components/Content121";
import SectionCDDD from "@/components/SectionCDDD";

export default function Home() {
  return (
    <Layout>
      {page.sections.map((section: any, key: number) => {
        switch (section.id) {
          case "Slides":
            return <Slides data={section.slides} key={key} />;
          case "Content121":
            return <Content121 data={section} key={key} />;
          case "SectionCDDD":
            return <SectionCDDD section={section} key={key} />;
          case "Hero":
            return <Hero data={section} key={key} />;
          case "NextSteps":
            return <NextSteps data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  );
}
