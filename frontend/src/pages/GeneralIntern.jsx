import React, { useState } from "react";
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const internshipPortals = [
  {
    name: "Internshala",
    url: "https://internshala.com/internships",
    icon: RocketLaunchIcon,
    description: "Find internships and fresher jobs in multiple domains.",
  },
  {
    name: "LinkedIn Internships",
    url: "https://www.linkedin.com/jobs/internship-jobs/",
    icon: GlobeAltIcon,
    description: "Global platform to explore internships by companies.",
  },
  {
    name: "Unstop",
    url: "https://unstop.com/internships",
    icon: AcademicCapIcon,
    description: "Competitions, internships, and job challenges for students.",
  },
  {
    name: "LetsIntern",
    url: "https://www.letsintern.com/",
    icon: BriefcaseIcon,
    description: "Internship platform with startup and MNC roles.",
  },
  {
    name: "Glassdoor Internships",
    url: "https://www.glassdoor.co.in/Job/internship-jobs-SRCH_KO0,10.htm",
    icon: ArrowTrendingUpIcon,
    description: "Search internships with reviews and salary details.",
  },
  {
    name: "Chegg Internships",
    url: "https://www.internships.com/",
    icon: BuildingOffice2Icon,
    description: "US-based internship listings in top organizations.",
  },
];

const GeneralIntern = () => {
  const [search, setSearch] = useState("");

  const filteredPortals = internshipPortals.filter((portal) =>
    portal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] min-h-screen py-16 px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#384959] mb-10">
        General Internship Portals
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

export default GeneralIntern;
