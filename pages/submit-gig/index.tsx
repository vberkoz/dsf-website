import HeroTabs from "@/components/HeroTabs";
import Layout from "@/components/Layout";
import NextSteps3 from "@/components/NextSteps3";
import { SubmitGig } from "@/data/pagesets/SubmitGig";

export default function SubmitGigPage() {
  return (
    <Layout>
      {SubmitGig.sections.map((section, key) => {
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
          case "NextSteps3":
            return <NextSteps3 data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  )
}