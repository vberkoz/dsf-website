import Link from "next/link";

export const Footer = () => (
  <div className="px-3 py-8 bg-gray-900 flex flex-col text-gray-300 leading-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
      <Link href="#" className="font-bold text-white hover:underline hover:text-white md:col-span-2 lg:col-span-1">VO Sales Group</Link>

      <div className="flex flex-col">
        <Link href="#" className="font-bold text-white hover:underline hover:text-white">Solutions</Link>
        <Link href="#" className="hover:underline hover:text-white">International Concierge</Link>
        <Link href="#" className="hover:underline hover:text-white">Channel Development</Link>
        <Link href="#" className="hover:underline hover:text-white">Vetted Sales Staffing</Link>
        <Link href="#" className="hover:underline hover:text-white">Concierge Services</Link>
        <Link href="#" className="hover:underline hover:text-white">Marketing 2.0</Link>
      </div>

      <div className="flex flex-col">
        <Link href="#" className="font-bold text-white hover:underline hover:text-white">Industry Focus</Link>
        <Link href="#" className="hover:underline hover:text-white">Supply Chain & Automation</Link>
        <Link href="#" className="hover:underline hover:text-white">High-Value Solutions</Link>
        <Link href="#" className="hover:underline hover:text-white">Factory Automation</Link>
        <Link href="#" className="hover:underline hover:text-white">Enterprise Mobility</Link>
        <Link href="#" className="hover:underline hover:text-white">Healthcare</Link>
        <Link href="#" className="hover:underline hover:text-white">Retail</Link>
        <Link href="#" className="hover:underline hover:text-white">IoT</Link>
      </div>

      <div className="flex flex-col">
        <Link href="#" className="font-bold text-white hover:underline hover:text-white">Join Our Team</Link>
        <Link href="#" className="hover:underline hover:text-white">Sales Agent Program</Link>
        <Link href="#" className="hover:underline hover:text-white">Marketing 2.0 Team</Link>
        <Link href="#" className="hover:underline hover:text-white">Request Interview</Link>
        <Link href="#" className="hover:underline hover:text-white">Gig Life</Link>
      </div>

      <div className="hidden lg:block"></div>

      <div className="flex flex-col">
        <Link href="#" className="font-bold text-white hover:underline hover:text-white">About Us</Link>
        <Link href="#" className="hover:underline hover:text-white">On-Demand Economy</Link>
        <Link href="#" className="hover:underline hover:text-white">Our Team's Story</Link>
      </div>

      <div className="flex flex-col">
        <Link href="#" className="hover:underline hover:text-white">Submit GIG</Link>
        <Link href="#" className="hover:underline hover:text-white">Leadership</Link>
        <Link href="#" className="hover:underline hover:text-white">Blog</Link>
      </div>

      <div className="flex flex-col">
        <Link href="#" className="flex leading-4 hover:underline hover:text-white mb-4">
          <svg viewBox="0 0 640 640" fill="currentColor" width="16" height="16" className="mr-2">
            <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
          </svg>
          VO Sales Group
        </Link>
        <Link href="#" className="flex leading-4 hover:underline hover:text-white">
          <svg viewBox="0 0 640 640" fill="currentColor" width="16" height="16" className="mr-2">
            <path d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z"></path>
          </svg>
          Stephen Zarick
        </Link>
      </div>

      <div className="hidden lg:block"></div>
      <div className="md:col-span-2 lg:col-span-3 border-t border-gray-700"></div>
      <div className="hidden lg:block"></div>
      <div className="flex flex-col">© VO Group, LLC</div>
    </div>
  </div>
);
