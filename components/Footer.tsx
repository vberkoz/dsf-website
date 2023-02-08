import Link from "next/link";

export const Footer = () => (
  <div className="lg:pl-14 bg-gray-900 text-gray-300">
    <div className="flex flex-col pl-3 py-8 leading-8">
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/"
          className="font-bold text-white hover:text-white hover:underline md:col-span-2 lg:col-span-1"
        >
          VO Sales Group
        </Link>

        <div className="flex flex-col">
          <Link
            href="#"
            className="font-bold text-white hover:text-white hover:underline"
          >
            Solutions
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            International Concierge
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Channel Development
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Vetted Sales Staffing
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Concierge Services
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Marketing 2.0
          </Link>
        </div>

        <div className="flex flex-col">
          <Link
            href="#"
            className="font-bold text-white hover:text-white hover:underline"
          >
            Industry Focus
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Supply Chain & Automation
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            High-Value Solutions
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Factory Automation
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Enterprise Mobility
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Healthcare
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Retail
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            IoT
          </Link>
        </div>

        <div className="flex flex-col">
          <Link
            href="#"
            className="font-bold text-white hover:text-white hover:underline"
          >
            Join Our Team
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Sales Agent Program
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Marketing 2.0 Team
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Request Interview
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Gig Life
          </Link>
        </div>

        <div className="hidden lg:block"></div>

        <div className="flex flex-col">
          <Link
            href="/about"
            className="font-bold text-white hover:text-white hover:underline"
          >
            About Us
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            On-Demand Economy
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Our Team's Story
          </Link>
        </div>

        <div className="flex flex-col">
          <Link href="#" className="hover:text-white hover:underline">
            Submit GIG
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Leadership
          </Link>
          <Link href="#" className="hover:text-white hover:underline">
            Blog
          </Link>
        </div>

        <div className="flex flex-col">
          <Link
            href="#"
            className="mb-4 flex leading-4 hover:text-white hover:underline"
          >
            <svg
              viewBox="0 0 640 640"
              fill="currentColor"
              width="16"
              height="16"
              className="mr-2"
            >
              <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
            </svg>
            VO Sales Group
          </Link>
          <Link
            href="#"
            className="flex leading-4 hover:text-white hover:underline"
          >
            <svg
              viewBox="0 0 640 640"
              fill="currentColor"
              width="16"
              height="16"
              className="mr-2"
            >
              <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
            </svg>
            Stephen Zarick
          </Link>
        </div>

        <div className="hidden lg:block"></div>
        <div className="border-t border-gray-700 md:col-span-2 lg:col-span-3"></div>
        <div className="hidden lg:block"></div>
        <div className="flex flex-col">© VO Group, LLC</div>
      </div>
    </div>
  </div>
);
