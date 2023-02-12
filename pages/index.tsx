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
      {page.sections.map((section) => {
        switch (section.id) {
          case "Slides":
            return <Slides />;
          case "Features":
            return <Features />;
          case "Hero":
            return <Hero index={section.index || 0} />;
          case "Benefits":
            return <Benefits />;
          case "NextSteps":
            return <NextSteps />;
        }
      })}
      {/* <Slides />
      <Features />
      <Hero index={0} />
      <Benefits />
      <Hero index={1} />
      <NextSteps /> */}
    </Layout>
  );
}
