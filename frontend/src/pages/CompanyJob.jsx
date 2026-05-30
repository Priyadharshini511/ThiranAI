// import React, { useState } from "react";
// import {
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const companyData = {
//   Google: {
//     logo: "https://logo.clearbit.com/google.com",
//     description: "Explore roles in Google’s engineering and research teams.",
//     jobs: [
//       { title: "Software Engineer", url: "https://careers.google.com/jobs/results/?q=software+engineer" },
//       { title: "Frontend Developer", url: "https://careers.google.com/jobs/results/?q=frontend" },
//     ],
//   },
//   Microsoft: {
//     logo: "https://logo.clearbit.com/microsoft.com",
//     description: "Opportunities with Microsoft tools, cloud, and enterprise.",
//     jobs: [
//       { title: "Product Manager", url: "https://careers.microsoft.com/us/en/product-manager-jobs" },
//       { title: "Software Engineer", url: "https://careers.microsoft.com/us/en/software-engineer-jobs" },
//     ],
//   },
//   Amazon: {
//     logo: "https://logo.clearbit.com/amazon.com",
//     description: "Find jobs related to AWS and scalable backend systems.",
//     jobs: [
//       { title: "Operations Manager", url: "https://www.amazon.jobs/en/jobs/operations-manager" },
//     ],
//   },
//   Adobe: {
//     logo: "https://logo.clearbit.com/adobe.com",
//     description: "Creative opportunities in design, UX, and cloud engineering.",
//     jobs: [
//       { title: "UX Designer", url: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced" },
//     ],
//   },
//   Intel: {
//     logo: "https://logo.clearbit.com/intel.com",
//     description: "Explore roles in chip design and embedded systems.",
//     jobs: [
//       { title: "Embedded Systems Engineer", url: "https://jobs.intel.com" },
//     ],
//   },
//   Netflix: {
//     logo: "https://logo.clearbit.com/netflix.com",
//     description: "Opportunities in content tech and backend scalability.",
//     jobs: [
//       { title: "Backend Engineer", url: "https://jobs.netflix.com" },
//     ],
//   },
//   IBM: {
//     logo: "https://logo.clearbit.com/ibm.com",
//     description: "Join AI and Cloud innovation at IBM Labs.",
//     jobs: [
//       { title: "Data Scientist", url: "https://www.ibm.com/employment" },
//     ],
//   },
//   Salesforce: {
//     logo: "https://logo.clearbit.com/salesforce.com",
//     description: "Cloud computing and customer success roles.",
//     jobs: [
//       { title: "Salesforce Admin", url: "https://careers.salesforce.com/en/jobs/" },
//     ],
//   },
//   Flipkart: {
//     logo: "https://logo.clearbit.com/flipkart.com",
//     description: "E-commerce and product engineering opportunities.",
//     jobs: [
//       { title: "Product Analyst", url: "https://www.flipkartcareers.com" },
//     ],
//   },
// };

// const CompanyJob = () => {
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [search, setSearch] = useState("");

//   const handleCompanyClick = (company) => {
//     setSelectedCompany(company);
//   };

//   const handleBack = () => {
//     setSelectedCompany(null);
//     setSearch("");
//   };

//   const filteredCompanies = Object.entries(companyData).filter(([name]) =>
//     name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] py-16 px-6 min-h-screen text-center">
//       {!selectedCompany ? (
//         <>
//           <h2 className="text-3xl font-bold text-[#384959] mb-8">
//             Explore Company-Based Jobs
//           </h2>

//           {/* Search Box */}
//           <div className="relative max-w-md mx-auto mb-10">
//             <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6A89A7] h-5 w-5" />
//             <input
//               type="text"
//               placeholder="Search company..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-[#BDDDFC] rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-[#88BDF2]"
//             />
//           </div>

//           {/* Company Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {filteredCompanies.map(([company, data]) => (
//               <div
//                 key={company}
//                 className="bg-white rounded-xl p-11 flex flex-col justify-between text-left shadow-sm border border-[#6A89A7] transition-all transform hover:scale-105 hover:shadow-md hover:border-[#88BDF2] cursor-pointer"
//                 onClick={() => handleCompanyClick(company)}
//               >
//                 <img src={data.logo} alt={`${company} logo`} className="w-16 h-auto mb-4" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#384959] mb-1">{company}</h3>
//                   <p className="text-sm text-[#6A89A7]">{data.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <button
//             onClick={handleBack}
//             className="bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-lg font-medium mb-8 hover:bg-[#88BDF2] transition"
//           >
//             ← Back to Companies
//           </button>

//           <h2 className="text-3xl font-bold text-[#384959] mb-6">
//             {selectedCompany} Jobs
//           </h2>

//           {/* Job Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {companyData[selectedCompany].jobs.map((job, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 text-left shadow-sm border border-[#6A89A7] hover:shadow-md hover:border-[#88BDF2] transition"
//               >
//                 <h3 className="text-lg font-semibold text-[#384959] mb-2">
//                   {job.title}
//                 </h3>
//                 <button
//                   onClick={() => window.open(job.url, "_blank")}
//                   className="mt-2 px-4 py-2 bg-[#88BDF2] text-white rounded-md hover:bg-[#6A89A7] font-medium transition"
//                 >
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CompanyJob;

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
 * CompanyJob.jsx
 * Fetches classified jobs from backend /api/companies/ml-classified
 * and displays company cards + job listings per company.
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

const CompanyJob = () => {
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companiesData, setCompaniesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCompanyJobs() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`${BASE_URL}/api/companies/ml-classified`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        setCompaniesData(data);
      } catch (err) {
        console.error("Error fetching company jobs:", err);
        setError(err.message || "Failed to fetch company jobs");
      } finally {
        setLoading(false);
      }
    }
    fetchCompanyJobs();
  }, []);

  const toggleSave = (title) => {
    setSaved((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">Loading company jobs...</div>
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

  // Build company list from fetched data (stable ordering)
  const companyNames = companiesData ? Object.keys(companiesData) : [];

  // Create an array similar to original companyJobs (with icons)
  const companyJobs = companyNames.map((company, index) => {
    const icon = ICONS[index % ICONS.length] || CodeBracketIcon;
    return {
      icon,
      company,
      title: `${company} Roles`,
      tag: "Explore",
      count: (companiesData[company] || []).length,
    };
  });

  const filtered = companyJobs.filter((job) =>
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  // Detail view: show jobs for selected company
  if (selectedCompany) {
    const jobs = companiesData[selectedCompany] || [];
    return (
      <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
        <div className="max-w-3xl mx-auto text-left">
          <button
            onClick={() => setSelectedCompany(null)}
            className="mb-6 text-blue-600 hover:underline"
          >
            ← Back to Companies
          </button>

          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            {selectedCompany} Job Listings ({jobs.length})
          </h3>

          <ul className="space-y-4">
            {jobs.map((job, idx) => (
              <li
                key={`${selectedCompany}_${idx}`}
                className="bg-white p-4 rounded-md border-l-4 border-[#6A89A7] shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-700">{job.title || "Untitled Role"}</p>
                    <p className="text-sm text-slate-500">{job.company || selectedCompany}</p>
                    <p className="text-xs text-slate-500 mt-1">{job.location || "Location not provided"}</p>
                    <p className="text-xs text-slate-500 mt-1">Skills: {job.skills?.join(", ") || ""}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    {job.apply_link ? (
                      <a
                        href={job.apply_link}
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
            {jobs.length === 0 && <li className="text-slate-500">No roles found for {selectedCompany}.</li>}
          </ul>
        </div>
      </div>
    );
  }

  // Main company grid view
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Company-Based Jobs</h2>

      <div className="relative max-w-md mx-auto mb-10">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border border-slate-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((job) => {
          const Icon = job.icon;
          return (
            <div
              key={job.company}
              className="bg-white relative rounded-xl p-8 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-l-4 border-[#6A89A7] cursor-pointer"
              onClick={() => setSelectedCompany(job.company)}
            >
              <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
                <Icon className="w-16 h-16" />
              </div>

              <div className="flex items-center gap-3 z-10">
                <Icon className="h-8 w-8 text-[#6A89A7]" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                    {job.title}
                  </h3>
                  <p className="text-slate-600">{job.company}</p>
                </div>
                <BookmarkIcon
                  className={`h-6 w-6 cursor-pointer transition duration-150 ${
                    saved.includes(job.title) ? "text-yellow-500" : "text-slate-400"
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

export default CompanyJob;
