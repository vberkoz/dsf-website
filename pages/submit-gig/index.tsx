import HeroTabs from "@/components/HeroTabs";
import Layout from "@/components/Layout";
import NextSteps3 from "@/components/NextSteps3";
import SectionCTTE from "@/components/SectionCTTE";
import { SubmitGig } from "@/data/pagesets/SubmitGig";

export default function SubmitGigPage() {
  return (
    <Layout>
      {SubmitGig.sections.map((section: any, key: any) => {
        switch (section.id) {
          case "HeroTabs":
            return (
              <HeroTabs
                key={key}
                title={SubmitGig.title}
                description1={SubmitGig.description1}
                description2={SubmitGig.description2}
                image={SubmitGig.image}
              />
            );
          case "SectionCTTE":
            return <SectionCTTE content={section.data} key={key} />;
          case "NextSteps3":
            return <NextSteps3 data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  )
}