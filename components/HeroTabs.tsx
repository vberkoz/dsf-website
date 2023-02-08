import Link from "next/link";
import sunset from "@/public/about/sunset.webp";

export const HeroTabs = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${sunset.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r from-gray-900/100 to-gray-900/50 text-left text-white/80 lg:to-gray-900/0">
          <div className="lg:p-14">
            <div className="p-3">
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">About Us</h1>
              <div className="grid pb-40 md:grid-cols-2 lg:grid-cols-3">
                <p className="text-white/80"></p>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-gray-800 max-h-[50px] whitespace-nowrap">
            <div className="lg:ml-14 flex text-white overflow-x-scroll">
              <Link
                href="#"
                className="border-t-2 border-yellow-400 bg-gray-800 p-3 hover:bg-gray-700"
              >
                About us
              </Link>
              <Link href="#" className="p-3 hover:bg-gray-700">
                Our team&apos;s story
              </Link>
              <Link href="#" className="p-3 hover:bg-gray-700">
                On-demand economy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
