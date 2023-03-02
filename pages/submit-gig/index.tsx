import { HeroTabs } from "@/components/HeroTabs";
import { Layout } from "@/components/Layout";
import { NextSteps } from "@/components/NextSteps/NextSteps";
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
          case "NextSteps":
            return <NextSteps data={section.steps!} key={key} />;
        }
      })}
    </Layout>
  )
}