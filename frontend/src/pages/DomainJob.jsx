// import React, { useState } from "react";
// import {
//   BriefcaseIcon,
//   CodeBracketIcon,
//   ChartBarIcon,
//   PaintBrushIcon,
//   CpuChipIcon,
//   GlobeAltIcon,
//   LightBulbIcon,
//   WrenchScrewdriverIcon,
//   AcademicCapIcon,
//   BuildingOffice2Icon,
//   ShieldCheckIcon,
//   RocketLaunchIcon,
//   BookmarkIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const domainJobs = [
//   {
//     icon: CodeBracketIcon,
//     domain: "Software Development",
//     title: "Full Stack Developer",
//     url: "https://www.example.com/software-dev-jobs",
//     tag: "Remote",
//   },
//   {
//     icon: ChartBarIcon,
//     domain: "Data Science",
//     title: "Data Analyst Intern",
//     url: "https://www.example.com/data-science-jobs",
//     tag: "Internship",
//   },
//   {
//     icon: GlobeAltIcon,
//     domain: "Digital Marketing",
//     title: "SEO Specialist",
//     url: "https://www.example.com/digital-marketing-jobs",
//     tag: "Entry Level",
//   },
//   {
//     icon: PaintBrushIcon,
//     domain: "Design",
//     title: "UI/UX Designer",
//     url: "https://www.example.com/design-jobs",
//     tag: "Creative",
//   },
//   {
//     icon: CpuChipIcon,
//     domain: "AI & ML",
//     title: "Machine Learning Engineer",
//     url: "https://www.example.com/ai-ml-jobs",
//     tag: "Remote",
//   },
//   {
//     icon: BriefcaseIcon,
//     domain: "Product Management",
//     title: "Product Manager Intern",
//     url: "https://www.example.com/product-management-jobs",
//     tag: "Internship",
//   },
//   {
//     icon: LightBulbIcon,
//     domain: "Business Analysis",
//     title: "Business Analyst",
//     url: "https://www.example.com/business-analyst-jobs",
//     tag: "Remote",
//   },
//   {
//     icon: WrenchScrewdriverIcon,
//     domain: "Mechanical Engineering",
//     title: "Design Engineer",
//     url: "https://www.example.com/mechanical-jobs",
//     tag: "On-site",
//   },
//   {
//     icon: AcademicCapIcon,
//     domain: "Education Technology",
//     title: "Content Developer",
//     url: "https://www.example.com/edtech-jobs",
//     tag: "Part Time",
//   },
//   {
//     icon: BuildingOffice2Icon,
//     domain: "HR & Recruitment",
//     title: "HR Coordinator",
//     url: "https://www.example.com/hr-jobs",
//     tag: "Full Time",
//   },
//   {
//     icon: ShieldCheckIcon,
//     domain: "Cybersecurity",
//     title: "Security Analyst",
//     url: "https://www.example.com/cyber-jobs",
//     tag: "Entry Level",
//   },
//   {
//     icon: RocketLaunchIcon,
//     domain: "Aerospace",
//     title: "Avionics Engineer",
//     url: "https://www.example.com/aerospace-jobs",
//     tag: "On-site",
//   },
// ];

// const DomainJob = () => {
//   const [search, setSearch] = useState("");
//   const [saved, setSaved] = useState([]);

//   const toggleSave = (title) => {
//     setSaved((prev) =>
//       prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
//     );
//   };

//   const filteredJobs = domainJobs.filter((job) =>
//     job.domain.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
//       <h2 className="text-3xl font-bold text-slate-800 mb-8">
//       Domain-Based Jobs
//       </h2>

//       {/* Search Box with Icon */}
//       <div className="relative max-w-md mx-auto mb-10">
//         <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
//         <input
//           type="text"
//           placeholder="Search domain..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Job Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {filteredJobs.map((job, index) => {
//           const Icon = job.icon;
//           return (
//             <div
//               key={index}
//               className="bg-white relative rounded-xl p-5 h-34 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition duration-200 border border-[#6A89A7]"
//             >
//               {/* Watermark-style Icon */}
//               <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
//                 <Icon className="w-16 h-16" />
//               </div>

//               <div className="flex items-center gap-3 z-10">
//                 <Icon className="h-8 w-8 text-[#6A89A7]" />
//                 <div className="flex-1">
//                   <a
//                     href={job.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-lg font-semibold text-[#1D4ED8] hover:underline"
//                   >
//                     {job.title}
//                   </a>
//                   <p className="text-slate-600 text-sm">{job.domain}</p>
//                 </div>
//                 <BookmarkIcon
//                   className={`h-6 w-6 cursor-pointer transition duration-150 ${
//                     saved.includes(job.title)
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                   onClick={() => toggleSave(job.title)}
//                 />
//               </div>

//               <span className="text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max mt-2">
//                 {job.tag}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default DomainJob;






















// import React, { useState } from "react";
// import {
//   BriefcaseIcon,
//   CodeBracketIcon,
//   ChartBarIcon,
//   PaintBrushIcon,
//   CpuChipIcon,
//   GlobeAltIcon,
//   LightBulbIcon,
//   WrenchScrewdriverIcon,
//   AcademicCapIcon,
//   BuildingOffice2Icon,
//   ShieldCheckIcon,
//   RocketLaunchIcon,
//   BookmarkIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const jobDataByDomain = {
//   "Software Development": [
//     { company: "Infosys", role: "Full Stack Developer", location: "Remote" },
//     { company: "TCS", role: "Java Developer", location: "Hyderabad" },
//   ],
//   "Data Science": [
//     { company: "Deloitte", role: "Data Analyst", location: "Gurgaon" },
//     { company: "EY", role: "Business Intelligence Analyst", location: "Remote" },
//   ],
//   "Digital Marketing": [
//     { company: "Zoho", role: "SEO Executive", location: "Chennai" },
//     { company: "Swiggy", role: "Content Strategist", location: "Bangalore" },
//   ],
//   "Design": [
//     { company: "Adobe", role: "UI/UX Designer", location: "Remote" },
//     { company: "Dribbble", role: "Visual Designer", location: "Remote" },
//   ],
//   "AI & ML": [
//     { company: "Amazon", role: "ML Engineer", location: "Hyderabad" },
//     { company: "OpenAI", role: "AI Research Assistant", location: "Remote" },
//   ],
//   "Product Management": [
//     { company: "Flipkart", role: "Associate Product Manager", location: "Bangalore" },
//     { company: "Meesho", role: "PM Intern", location: "Remote" },
//   ],
//   "Business Analysis": [
//     { company: "Accenture", role: "Business Analyst", location: "Pune" },
//     { company: "Capgemini", role: "Strategy Intern", location: "Noida" },
//   ],
//   "Mechanical Engineering": [
//     { company: "L&T", role: "Mechanical Design Engineer", location: "Mumbai" },
//     { company: "Bosch", role: "CAD Analyst", location: "Coimbatore" },
//   ],
//   "Education Technology": [
//     { company: "Byju's", role: "Content Developer", location: "Remote" },
//     { company: "Unacademy", role: "Academic Associate", location: "Bangalore" },
//   ],
//   "HR & Recruitment": [
//     { company: "Wipro", role: "HR Assistant", location: "Delhi" },
//     { company: "Zoho", role: "Recruitment Intern", location: "Chennai" },
//   ],
//   "Cybersecurity": [
//     { company: "Cisco", role: "Security Analyst", location: "Remote" },
//     { company: "HCL", role: "SOC Intern", location: "Noida" },
//   ],
//   "Aerospace": [
//     { company: "ISRO", role: "Avionics Engineer", location: "Bangalore" },
//     { company: "HAL", role: "Systems Engineer", location: "Hyderabad" },
//   ],
// };

// const domainJobs = Object.keys(jobDataByDomain).map((domain, index) => {
//   const icons = [
//     CodeBracketIcon,
//     ChartBarIcon,
//     GlobeAltIcon,
//     PaintBrushIcon,
//     CpuChipIcon,
//     BriefcaseIcon,
//     LightBulbIcon,
//     WrenchScrewdriverIcon,
//     AcademicCapIcon,
//     BuildingOffice2Icon,
//     ShieldCheckIcon,
//     RocketLaunchIcon,
//   ];
//   return {
//     icon: icons[index],
//     domain,
//     title: `${domain} Roles`,
//     tag: "Explore",
//   };
// });

// const DomainJob = () => {
//   const [search, setSearch] = useState("");
//   const [saved, setSaved] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);

//   const toggleSave = (title) => {
//     setSaved((prev) =>
//       prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
//     );
//   };

//   const filteredJobs = domainJobs.filter((job) =>
//     job.domain.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
//       <h2 className="text-3xl font-bold text-slate-800 mb-8">Domain-Based Jobs</h2>

//       <div className="relative max-w-md mx-auto mb-10">
//         <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
//         <input
//           type="text"
//           placeholder="Search domain..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {!selectedDomain ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {filteredJobs.map((job, index) => {
//             const Icon = job.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white relative rounded-xl p-11 h-46 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition duration-200 border border-[#6A89A7] cursor-pointer"
//                 onClick={() => setSelectedDomain(job.domain)}
//               >
//                 <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
//                   <Icon className="w-16 h-16" />
//                 </div>

//                 <div className="flex items-center gap-3 z-10">
//                   <Icon className="h-8 w-8 text-[#6A89A7]" />
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-[#1D4ED8] hover:underline">
//                       {job.title}
//                     </h3>
//                     <p className="text-slate-600 text-sm">{job.domain}</p>
//                   </div>
//                   <BookmarkIcon
//                     className={`h-6 w-6 cursor-pointer transition duration-150 ${
//                       saved.includes(job.title)
//                         ? "text-yellow-500"
//                         : "text-gray-400"
//                     }`}
//                     onClick={() => toggleSave(job.title)}
//                   />
//                 </div>

//                 <span className="text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max mt-2">
//                   {job.tag}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="max-w-3xl mx-auto text-left">
//           <h3 className="text-2xl font-semibold text-slate-800 mb-6">
//             {selectedDomain} Job Listings
//           </h3>
//           <ul className="space-y-4">
//             {jobDataByDomain[selectedDomain].map((job, idx) => (
//               <li
//                 key={idx}
//                 className="bg-white p-4 rounded-md border-l-4 border-[#6A89A7] shadow-sm"
//               >
//                 <p className="font-medium text-slate-700">
//                   {job.company} - {job.role}
//                 </p>
//                 <p className="text-sm text-slate-500">Location: {job.location}</p>
//               </li>
//             ))}
//           </ul>
//           <button
//             className="mt-6 text-blue-600 hover:underline"
//             onClick={() => setSelectedDomain(null)}
//           >
//             ← Back to Domains
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DomainJob;



import React, { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

/**
 * DomainJob.jsx
 * Fetches classified jobs from backend /api/jobs/classified
 * and displays domain cards + job listings per domain.
 *
 * Ensure backend is running at http://localhost:8000 (or change BASE_URL).
 */

const BASE_URL = "http://localhost:8000"; // change if backend deployed elsewhere

const ICONS = [
  CodeBracketIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  CpuChipIcon,
  BriefcaseIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  RocketLaunchIcon,
];

const DomainJob = () => {
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [domainsData, setDomainsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchClassified() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${BASE_URL}/api/jobs/classified`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        // data expected as { "Software Development": [jobObj,...], "Data Science": [...], ... }
        setDomainsData(data);
      } catch (err) {
        console.error("Error fetching classified jobs:", err);
        setError(err.message || "Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    }
    fetchClassified();
  }, []);

  const toggleSave = (title) => {
    setSaved((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">Loading jobs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center text-red-600">Error: {error}</div>
      </div>
    );
  }

  // Build domain list from fetched data (stable ordering)
  const domainNames = domainsData ? Object.keys(domainsData) : [];

  // Create an array similar to original domainJobs (with icons)
  const domainJobs = domainNames.map((domain, index) => {
    const icon = ICONS[index % ICONS.length] || CodeBracketIcon;
    return {
      icon,
      domain,
      title: `${domain} Roles`,
      tag: "Explore",
      count: (domainsData[domain] || []).length,
    };
  });

  const filtered = domainJobs.filter((job) =>
    job.domain.toLowerCase().includes(search.toLowerCase())
  );

  // Detail view: show jobs for selected domain
  if (selectedDomain) {
    const jobs = domainsData[selectedDomain] || [];
    return (
      <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
        <div className="max-w-3xl mx-auto text-left">
          <button
            className="mb-6 text-blue-600 hover:underline"
            onClick={() => setSelectedDomain(null)}
          >
            ← Back to Domains
          </button>

          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            {selectedDomain} Job Listings ({jobs.length})
          </h3>

          <ul className="space-y-4">
            {jobs.map((job, idx) => (
              <li
                key={job.id || `${selectedDomain}_${idx}`}
                className="bg-white p-4 rounded-md border-l-4 border-[#6A89A7] shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-700">
                      {job.title || job["Job Title / Role"] || "Untitled Role"}
                    </p>
                    <p className="text-sm text-slate-500">
                      {job.company || job["Company Name"] || "Unknown Company"}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {job.location || job["Location / Work Mode"] || "Location not provided"}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Skills:{" "}
                      {(job.skills && job.skills.length ? job.skills : job["Required Skills / Technologies"] || [])
                        .join(", ")}
                    </p>
                  </div>

                  <div className="text-right flex flex-col items-end gap-2">
                    {job.apply_link || job["Apply Link"] ? (
                      <a
                        href={job.apply_link || job["Apply Link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-md bg-[#88BDF2] text-white text-sm hover:bg-[#6A89A7]"
                      >
                        Apply
                      </a>
                    ) : null}
                    <span className="text-xs text-slate-400">
                      {job.confidence ? `Conf: ${(job.confidence * 100).toFixed(0)}%` : ""}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Main domain grid view
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Domain-Based Jobs</h2>

      <div className="relative max-w-md mx-auto mb-10">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search domain..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((job, index) => {
          const Icon = job.icon;
          return (
            <div
              key={job.domain}
              className="bg-white relative rounded-xl p-11 h-46 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition duration-200 border border-[#6A89A7] cursor-pointer"
              onClick={() => setSelectedDomain(job.domain)}
            >
              <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
                <Icon className="w-16 h-16" />
              </div>

              <div className="flex items-center gap-3 z-10">
                <Icon className="h-8 w-8 text-[#6A89A7]" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1D4ED8] hover:underline">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{job.domain}</p>
                </div>
                <BookmarkIcon
                  className={`h-6 w-6 cursor-pointer transition duration-150 ${
                    saved.includes(job.title) ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(job.title);
                  }}
                />
              </div>

              <span className="text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max mt-2">
                {job.tag} • {job.count} jobs
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DomainJob;
