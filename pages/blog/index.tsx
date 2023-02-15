import Link from "next/link";

import empathy from "@/public/blog/empathy.webp";

import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

const steps = [
  {
    title: "Contact us",
    description:
      "Send your questions through our contact form and we'll find the best solution for you",
  },
  {
    title: "Submit GIG",
    description:
      "Looking for Sales Prospecting that actually works? Tired of hiring amateur, scripted telemarketers? Looking for Professionals that can find real, revenue-producing leads? Let's talk.",
  },
  {
    title: "Join our team",
    description:
      "On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives",
  },
];

export default function Blog() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-900 py-[1px] text-white lg:pl-14">
        <Link
          href="#"
          className="col-span-1 md:col-span-2 row-span-1 xl:row-span-2 flex lg:h-[60vw] xl:h-[70vw] flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div
            style={{
              backgroundImage: `url(${empathy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-32 md:h-64 lg:h-1/2 w-full"
          ></div>
          <div className="p-3 xl:p-6">
            <h2 className="mb-2 md:mb-4 text-2xl md:text-5xl font-light text-gray-200">
              Demonstrate Empathy
            </h2>
            <p className="mb-2 md:mb-4 text-sm text-gray-400">
              By: Stephen Zarick, CEO, VO Group, LLC
            </p>
            <p className="mb-2 md:mb-4 text-sm text-gray-400">6 min read</p>
            <p className="text-gray-300">
              In sales we are most times calling strangers. We are attempting to
              engage this stranger to see if they are interested in our offering
              that might solve a problem for them.
            </p>
          </div>
          <div className="grow"></div>
          <div className="flex w-full p-3 xl:p-6">
            <p className="text-sm text-gray-500">9 January 2023</p>
            <div className="grow"></div>
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </div>
        </Link>

        <Link
          href="#"
          className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div
            style={{
              backgroundImage: `url(${empathy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-32 lg:h-1/2 w-full"
          ></div>
          <div className="p-3 xl:p-6">
            <h2 className="mb-2 text-2xl font-light text-gray-200">
              Demonstrate Empathy
            </h2>
            <p className="mb-2 text-sm text-gray-400">
              By: Stephen Zarick, CEO, VO Group, LLC
            </p>
            <p className="mb-2 text-sm text-gray-400">6 min read</p>
            <p className="text-gray-300">
              In sales we are most times calling strangers. We are attempting to
              engage this stranger to see if they are interested in our offering
              that might solve a problem for them.
            </p>
          </div>
          <div className="grow"></div>
          <div className="flex w-full p-3 xl:p-6">
            <p className="text-sm text-gray-500">9 January 2023</p>
            <div className="grow"></div>
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </div>
        </Link>

        <Link
          href="#"
          className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div
            style={{
              backgroundImage: `url(${empathy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-32 xl:h-1/2 w-full"
          ></div>
          <div className="p-3 xl:p-6">
            <h2 className="mb-2 text-2xl font-light text-gray-200">
              Demonstrate Empathy
            </h2>
            <p className="mb-2 text-sm text-gray-400">
              By: Stephen Zarick, CEO, VO Group, LLC
            </p>
            <p className="mb-2 text-sm text-gray-400">6 min read</p>
            <p className="text-gray-300">
              In sales we are most times calling strangers. We are attempting to
              engage this stranger to see if they are interested in our offering
              that might solve a problem for them.
            </p>
          </div>
          <div className="grow"></div>
          <div className="flex w-full p-3 xl:p-6">
            <p className="text-sm text-gray-500">9 January 2023</p>
            <div className="grow"></div>
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </div>
        </Link>

        <Link
          href="#"
          className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div
            style={{
              backgroundImage: `url(${empathy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-32 xl:h-1/2 w-full"
          ></div>
          <div className="p-3 xl:p-6">
            <h2 className="mb-2 text-2xl font-light text-gray-200">
              Demonstrate Empathy
            </h2>
            <p className="mb-2 text-sm text-gray-400">
              By: Stephen Zarick, CEO, VO Group, LLC
            </p>
            <p className="mb-2 text-sm text-gray-400">6 min read</p>
            <p className="text-gray-300">
              In sales we are most times calling strangers. We are attempting to
              engage this stranger to see if they are interested in our offering
              that might solve a problem for them.
            </p>
          </div>
          <div className="grow"></div>
          <div className="flex w-full p-3 xl:p-6">
            <p className="text-sm text-gray-500">9 January 2023</p>
            <div className="grow"></div>
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </div>
        </Link>

        <Link
          href="#"
          className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
        >
          <div
            style={{
              backgroundImage: `url(${empathy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-32 xl:h-1/2 w-full"
          ></div>
          <div className="p-3 xl:p-6">
            <h2 className="mb-2 text-2xl font-light text-gray-200">
              Demonstrate Empathy
            </h2>
            <p className="mb-2 text-sm text-gray-400">
              By: Stephen Zarick, CEO, VO Group, LLC
            </p>
            <p className="mb-2 text-sm text-gray-400">6 min read</p>
            <p className="text-gray-300">
              In sales we are most times calling strangers. We are attempting to
              engage this stranger to see if they are interested in our offering
              that might solve a problem for them.
            </p>
          </div>
          <div className="grow"></div>
          <div className="flex w-full p-3 xl:p-6">
            <p className="text-sm text-gray-500">9 January 2023</p>
            <div className="grow"></div>
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
            </svg>
          </div>
        </Link>
      </div>
      <NextSteps data={steps} />
    </Layout>
  );
}
