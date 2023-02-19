import { HeroTabs } from "@/components/HeroTabs";
import { Layout } from "@/components/Layout";
import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Leadership } from "@/data/pagesets/Leadership";

export default function LeadershipPage() {
  return (
    <Layout>
      {Leadership.sections.map((section, key) => {
        switch (section.id) {
          case "HeroTabs":
            return (
              <HeroTabs
                key={key}
                title={Leadership.title}
                description={Leadership.description}
                image={Leadership.image}
              />
            );
          case "NextSteps":
            return <NextSteps data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  )
}