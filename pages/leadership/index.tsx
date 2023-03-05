import SectionC2TI from "@/components/SectionC2TI";
import HeroTabs from "@/components/HeroTabs";
import Layout from "@/components/Layout";
import LinksC2DE from "@/components/LinksC2DE";
import NextSteps3 from "@/components/NextSteps3";
import { Leadership } from "@/data/pagesets/Leadership";

export default function LeadershipPage() {
  return (
    <Layout>
      {Leadership.sections.map((section: any, key: number) => {
        switch (section.id) {
          case "HeroTabs":
            return (
              <HeroTabs
                key={key}
                title={Leadership.title}
                description1={Leadership.description1}
                description2={Leadership.description2}
                image={Leadership.image}
              />
            );
          case "SectionC2TI":
            return <SectionC2TI data={section} key={key} />;
          case "LinksC2DE":
            return <LinksC2DE data={section} key={key} />;
          case "NextSteps3":
            return <NextSteps3 data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  );
}
