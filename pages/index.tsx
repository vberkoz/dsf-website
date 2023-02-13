import { Home as page } from "@/data/pagesets/General/Home";

import { Benefits } from "@/components/Benefits/Benefits";
import { Slides } from "@/components/Slides/Slides";
import { Features } from "@/components/Features/Features";
import { Hero } from "@/components/Hero/Hero";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {page.sections.map((section, key) => {
        switch (section.id) {
          case "Slides":
            return <Slides data={section.slides!} key={key} />;
          case "Features":
            return <Features key={key} />;
          case "Hero":
            return <Hero index={section.index || 0} key={key} />;
          case "Benefits":
            return <Benefits key={key} />;
          case "NextSteps":
            return <NextSteps data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  );
}
