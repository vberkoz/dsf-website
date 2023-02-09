import { Layout } from "@/components/Layout";

import { HeroTabs } from "@/components/HeroTabs";
import { HeroTabsData } from "@/components/About/HeroTabsData";

import { NextSteps } from "@/components/NextSteps/NextSteps";
import dynamic from "next/dynamic";

export default function OurTeamsStoryAvatars() {
  const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  return (
    <Layout>
      <HeroTabs data={HeroTabsData} current={1} />
      <div className="lg:pl-14 grid lg:grid-cols-4 bg-gray-900">
        <div></div>
        <div className="col-span-2">
          <MapWithNoSSR />
        </div>
      </div>
      <NextSteps />
    </Layout>
  );
}
