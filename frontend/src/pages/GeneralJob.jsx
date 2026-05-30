// import React from "react";
// import { GlobeAltIcon, BriefcaseIcon, AcademicCapIcon, BuildingOffice2Icon, RocketLaunchIcon } from "@heroicons/react/24/outline";

// const portals = [
//   {
//     name: "Naukri",
//     url: "https://www.naukri.com",
//     icon: BriefcaseIcon,
//     tag: "Popular",
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/jobs/",
//     icon: GlobeAltIcon,
//     tag: "Professional",
//   },
//   {
//     name: "Indeed",
//     url: "https://www.indeed.com",
//     icon: BuildingOffice2Icon,
//     tag: "Trusted",
//   },
//   {
//     name: "Unstop",
//     url: "https://unstop.com/job-portal",
//     icon: AcademicCapIcon,
//     tag: "Student",
//   },
//   {
//     name: "Internshala",
//     url: "https://internshala.com/internships",
//     icon: RocketLaunchIcon,
//     tag: "Internships",
//   },
// ];

// function GeneralJob() {
//   return (
//     <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] min-h-screen py-16 px-6 text-center">
//       <h1 className="text-3xl sm:text-4xl font-bold text-[#384959] mb-10">
//         General Job Portals
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {portals.map((portal, index) => {
//           const Icon = portal.icon;
//           return (
//             <a
//               key={index}
//               href={portal.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative bg-white border border-[#6A89A7] rounded-xl p-5 text-left shadow-sm hover:shadow-md transition hover:scale-[1.02] duration-200 group"
//             >
//               {/* Watermark Icon */}
//               <div className="absolute bottom-2 right-2 opacity-10 text-[#6A89A7]">
//                 <Icon className="w-14 h-14" />
//               </div>

//               <div className="flex items-center gap-4 z-10 relative">
//                 <Icon className="w-8 h-8 text-[#6A89A7]" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#1D4ED8] group-hover:underline">
//                     {portal.name}
//                   </h3>
//                   <p className="text-sm text-slate-600">{portal.tag}</p>
//                 </div>
//               </div>

//               <span className="mt-4 inline-block text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max">
//                 Visit Now
//               </span>
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default GeneralJob;



import React, { useState } from "react";
import {
  BriefcaseIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const portals = [
  {
    name: "Naukri",
    url: "https://www.naukri.com",
    icon: BriefcaseIcon,
    description: "India's top job portal for professionals.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/jobs/",
    icon: GlobeAltIcon,
    description: "Global platform for jobs and networking.",
  },
  {
    name: "Indeed",
    url: "https://www.indeed.com",
    icon: BuildingOffice2Icon,
    description: "Search millions of jobs worldwide.",
  },
  {
    name: "Unstop",
    url: "https://unstop.com/job-portal",
    icon: AcademicCapIcon,
    description: "Challenges, jobs, and internships for students.",
  },
  {
    name: "Internshala",
    url: "https://internshala.com/internships",
    icon: RocketLaunchIcon,
    description: "Find internships and fresher jobs.",
  },
  {
    name: "Glassdoor",
    url: "https://www.glassdoor.com/index.htm",
    icon: ArrowTrendingUpIcon,
    description: "Company reviews and salary insights.",
  },
];

const GeneralJob = () => {
  const [search, setSearch] = useState("");

  const filteredPortals = portals.filter((portal) =>
    portal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] min-h-screen py-16 px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#384959] mb-10">
        General Job Portals
      </h1>

      {/* Search Box with Icon */}
      <div className="relative max-w-md mx-auto mb-10">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search portal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-[#6A89A7]"
        />
      </div>

      {/* Portal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {filteredPortals.map((portal, index) => {
          const Icon = portal.icon;
          return (
            <a
              key={index}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-xl p-16 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-[#6A89A7] hover:border-[#384959] cursor-pointer"
            >
              {/* Watermark Icon */}
              <div className="absolute bottom-3 right-3 opacity-10 text-[#6A89A7]">
                <Icon className="w-16 h-16" />
              </div>

              {/* Foreground Icon and Text */}
              <div className="z-10 relative">
                <Icon className="h-8 w-8 text-[#6A89A7] mb-4" />
                <h3 className="text-lg font-semibold text-[#384959]">
                  {portal.name}
                </h3>
                <p className="text-sm text-[#6A89A7] mt-1">{portal.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralJob;
