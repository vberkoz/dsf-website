import { Home as page } from "@/data/pagesets/Home";

import { Benefits } from "@/components/Benefits/Benefits";
import { Slides } from "@/components/Slides/Slides";
import { Features } from "@/components/Features/Features";
import { Hero } from "@/components/Hero";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {page.sections.map((section: any, key: number) => {
        switch (section.id) {
          case "Slides":
            return <Slides data={section.slides} key={key} />;
          case "Features":
            return <Features key={key} />;
          case "Hero":
            return <Hero data={section} key={key} />;
          case "Benefits":
            return <Benefits key={key} />;
          case "NextSteps":
            return <NextSteps data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  );
}
