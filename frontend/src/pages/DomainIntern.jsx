// // import React from "react";

// // const domains = [
// //   "Web Development",
// //   "App Development",
// //   "Machine Learning",
// //   "Data Science",
// //   "Cybersecurity",
// //   "Cloud Computing",
// //   "UI/UX Design",
// //   "DevOps",
// //   "Blockchain",
// //   "Embedded Systems",
// // ];

// // const DomainIntern = () => {
// //   return (
// //     <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen py-16 px-6">
// //       <h1 className="text-3xl font-bold text-center text-[#1e293b] mb-10">
// //         Domain Based Internships
// //       </h1>

// //       <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
// //         <ul className="space-y-4">
// //           {domains.map((domain, index) => (
// //             <li
// //               key={index}
// //               className="p-4 bg-[#f1f5f9] rounded-md border-l-4 border-[#6A89A7] hover:border-[#1d4ed8] hover:bg-[#e2e8f0] transition-all duration-200 text-[#0f172a] font-medium"
// //             >
// //               {domain}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DomainIntern;








// import { useState } from "react";
// import { BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import {
//   CodeBracketIcon,
//   CpuChipIcon,
//   PaintBrushIcon,
//   ChartBarIcon,
//   ShieldCheckIcon,
//   CloudIcon,
//   SparklesIcon,
//   ServerStackIcon,
//   RocketLaunchIcon,
//   GlobeAltIcon,
// } from "@heroicons/react/24/outline";

// const domainInternships = [
//   {
//     title: "Web Development Internship",
//     domain: "Web Development",
//     url: "https://example.com/web-dev",
//     tag: "Frontend/Backend",
//     icon: CodeBracketIcon,
//   },
//   {
//     title: "Machine Learning Internship",
//     domain: "Machine Learning",
//     url: "https://example.com/ml",
//     tag: "ML/AI",
//     icon: CpuChipIcon,
//   },
//   {
//     title: "UI/UX Design Internship",
//     domain: "UI/UX Design",
//     url: "https://example.com/uiux",
//     tag: "Design",
//     icon: PaintBrushIcon,
//   },
//   {
//     title: "Data Science Internship",
//     domain: "Data Science",
//     url: "https://example.com/data-science",
//     tag: "Analytics",
//     icon: ChartBarIcon,
//   },
//   {
//     title: "Cybersecurity Internship",
//     domain: "Cybersecurity",
//     url: "https://example.com/cyber",
//     tag: "Security",
//     icon: ShieldCheckIcon,
//   },
//   {
//     title: "Cloud Computing Internship",
//     domain: "Cloud Computing",
//     url: "https://example.com/cloud",
//     tag: "AWS/Azure",
//     icon: CloudIcon,
//   },
//   {
//     title: "AI Internship",
//     domain: "Artificial Intelligence",
//     url: "https://example.com/ai",
//     tag: "Deep Learning",
//     icon: SparklesIcon,
//   },
//   {
//     title: "DevOps Internship",
//     domain: "DevOps",
//     url: "https://example.com/devops",
//     tag: "Automation",
//     icon: ServerStackIcon,
//   },
//   {
//     title: "Blockchain Internship",
//     domain: "Blockchain",
//     url: "https://example.com/blockchain",
//     tag: "Crypto",
//     icon: RocketLaunchIcon,
//   },
//   {
//     title: "AR/VR Internship",
//     domain: "AR/VR",
//     url: "https://example.com/arvr",
//     tag: "Immersive Tech",
//     icon: GlobeAltIcon,
//   },
// ];

// const DomainIntern = () => {
//   const [search, setSearch] = useState("");
//   const [saved, setSaved] = useState([]);

//   const toggleSave = (title) => {
//     setSaved((prev) =>
//       prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
//     );
//   };

//   const filteredInterns = domainInternships.filter((intern) =>
//     intern.domain.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
//       <h2 className="text-3xl font-bold text-slate-800 mb-8">
//         Domain-Based Internships
//       </h2>

//       {/* Search Box */}
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

//       {/* Internship Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {filteredInterns.map((intern, index) => {
//           const Icon = intern.icon;
//           return (
//             <div
//               key={index}
//               className="bg-white relative rounded-xl p-5 h-34 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition duration-200 border border-[#6A89A7]"
//             >
//               {/* Watermark Icon */}
//               <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
//                 <Icon className="w-16 h-16" />
//               </div>

//               <div className="flex items-center gap-3 z-10">
//                 <Icon className="h-8 w-8 text-[#6A89A7]" />
//                 <div className="flex-1">
//                   <a
//                     href={intern.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-lg font-semibold text-[#1D4ED8] hover:underline"
//                   >
//                     {intern.title}
//                   </a>
//                   <p className="text-slate-600 text-sm">{intern.domain}</p>
//                 </div>
//                 <BookmarkIcon
//                   className={`h-6 w-6 cursor-pointer transition duration-150 ${
//                     saved.includes(intern.title)
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                   onClick={() => toggleSave(intern.title)}
//                 />
//               </div>

//               <span className="text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max mt-2">
//                 {intern.tag}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default DomainIntern;

















// import { useState } from "react";
// import { BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import {
//   CodeBracketIcon,
//   CpuChipIcon,
//   PaintBrushIcon,
//   ChartBarIcon,
//   ShieldCheckIcon,
//   CloudIcon,
//   SparklesIcon,
//   ServerStackIcon,
//   RocketLaunchIcon,
//   GlobeAltIcon,
// } from "@heroicons/react/24/outline";

// const internDataByDomain = {
//   "Web Development": [
//     { company: "Google", role: "Frontend Intern", location: "Remote" },
//     { company: "Meta", role: "React Developer Intern", location: "Bangalore" },
//   ],
//   "Machine Learning": [
//     { company: "OpenAI", role: "ML Intern", location: "Remote" },
//     { company: "Amazon", role: "NLP Intern", location: "Hyderabad" },
//   ],
//   "UI/UX Design": [
//     { company: "Adobe", role: "UI Intern", location: "Mumbai" },
//     { company: "Canva", role: "UX Intern", location: "Remote" },
//   ],
//   "Data Science": [
//     { company: "LinkedIn", role: "Data Analyst Intern", location: "Gurgaon" },
//     { company: "Zomato", role: "Data Science Intern", location: "Remote" },
//   ],
//   "Cybersecurity": [
//     { company: "Cisco", role: "Security Intern", location: "Chennai" },
//     { company: "TCS", role: "Cybersecurity Intern", location: "Pune" },
//   ],
//   "Cloud Computing": [
//     { company: "Microsoft", role: "Azure Cloud Intern", location: "Noida" },
//     { company: "Infosys", role: "Cloud Dev Intern", location: "Remote" },
//   ],
//   "Artificial Intelligence": [
//     { company: "IBM", role: "AI Research Intern", location: "Bangalore" },
//     { company: "NVIDIA", role: "AI Model Intern", location: "Remote" },
//   ],
//   "DevOps": [
//     { company: "Red Hat", role: "DevOps Intern", location: "Remote" },
//     { company: "Zoho", role: "CI/CD Intern", location: "Chennai" },
//   ],
//   "Blockchain": [
//     { company: "Polygon", role: "Blockchain Intern", location: "Remote" },
//     { company: "WazirX", role: "Crypto Intern", location: "Mumbai" },
//   ],
//   "AR/VR": [
//     { company: "Unity", role: "AR/VR Intern", location: "Remote" },
//     { company: "TCS", role: "XR Intern", location: "Bangalore" },
//   ],
// };

// const domainInternships = Object.keys(internDataByDomain).map((domain, index) => {
//   const icons = [
//     CodeBracketIcon,
//     CpuChipIcon,
//     PaintBrushIcon,
//     ChartBarIcon,
//     ShieldCheckIcon,
//     CloudIcon,
//     SparklesIcon,
//     ServerStackIcon,
//     RocketLaunchIcon,
//     GlobeAltIcon,
//   ];
//   return {
//     title: `${domain} Internship`,
//     domain,
//     tag: domain.split(" ")[0],
//     icon: icons[index],
//   };
// });

// const DomainIntern = () => {
//   const [search, setSearch] = useState("");
//   const [saved, setSaved] = useState([]);
//   const [selectedDomain, setSelectedDomain] = useState(null);

//   const toggleSave = (title) => {
//     setSaved((prev) =>
//       prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
//     );
//   };

//   const filteredInterns = domainInternships.filter((intern) =>
//     intern.domain.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-16 px-6 min-h-screen text-center">
//       <h2 className="text-3xl font-bold text-slate-800 mb-8">
//         Domain-Based Internships
//       </h2>

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
//           {filteredInterns.map((intern, index) => {
//             const Icon = intern.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white relative rounded-xl p-11 h-46 flex flex-col justify-between text-left shadow-md hover:shadow-lg transition duration-200 border border-[#6A89A7] cursor-pointer"
//                 onClick={() => setSelectedDomain(intern.domain)}
//               >
//                 <div className="absolute right-2 bottom-2 opacity-10 text-[#6A89A7]">
//                   <Icon className="w-16 h-16" />
//                 </div>

//                 <div className="flex items-center gap-3 z-10">
//                   <Icon className="h-8 w-8 text-[#6A89A7]" />
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-[#1D4ED8] hover:underline">
//                       {intern.title}
//                     </h3>
//                     <p className="text-slate-600 text-sm">{intern.domain}</p>
//                   </div>
//                   <BookmarkIcon
//                     className={`h-6 w-6 cursor-pointer transition duration-150 ${
//                       saved.includes(intern.title)
//                         ? "text-yellow-500"
//                         : "text-gray-400"
//                     }`}
//                     onClick={() => toggleSave(intern.title)}
//                   />
//                 </div>

//                 <span className="text-xs bg-[#6A89A7]/10 text-[#6A89A7] font-medium px-2 py-1 rounded-full w-max mt-2">
//                   {intern.tag}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="max-w-3xl mx-auto text-left">
//           <h3 className="text-2xl font-semibold text-slate-800 mb-6">
//             {selectedDomain} Internship Listings
//           </h3>
//           <ul className="space-y-4">
//             {internDataByDomain[selectedDomain].map((data, idx) => (
//               <li
//                 key={idx}
//                 className="bg-white p-4 rounded-md border-l-4 border-[#6A89A7] shadow-sm"
//               >
//                 <p className="font-medium text-slate-700">
//                   {data.company} - {data.role}
//                 </p>
//                 <p className="text-sm text-slate-500">Location: {data.location}</p>
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

// export default DomainIntern;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import domainData from "../data/DomainInternData.json";

const DomainIntern = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract domain from query params
  const queryParams = new URLSearchParams(location.search);
  const selectedDomain = queryParams.get("domain");

  const domains = Object.keys(domainData); // ["Fullstack", "AI/ML", ...]

  const handleDomainClick = (domain) => {
    navigate(`/domainintern?domain=${domain}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {selectedDomain ? `${selectedDomain} Internships` : "Select a Domain"}
      </h1>

      {/* If no domain selected → show domain cards */}
      {!selectedDomain && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain}
              onClick={() => handleDomainClick(domain)}
              className="cursor-pointer border p-6 rounded-xl shadow hover:bg-gray-100 text-center font-semibold"
            >
              {domain}
            </div>
          ))}
        </div>
      )}

      {/* If domain selected → show internships */}
      {selectedDomain && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(domainData[selectedDomain] || []).length > 0 ? (
            domainData[selectedDomain].map((intern, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 shadow-md bg-white"
              >
                <h2 className="text-xl font-bold mb-2">
                  {intern["Internship Title / Role"]}
                </h2>
                <p className="mb-1">
                  <strong>Skills:</strong> {intern["Required Skills / Technologies"].join(", ")}
                </p>
                <p className="mb-1">
                  <strong>Stipend:</strong> {intern["Stipend / Pay"]}
                </p>
                <p className="mb-1">
                  <strong>Location:</strong> {intern["Location / Mode"]}
                </p>
                <p className="mb-1">
                  <strong>Duration:</strong> {intern["Duration"]}
                </p>
                <a
                  href={intern["Apply Link"]}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-blue-600 hover:underline"
                >
                  Apply Now →
                </a>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No internships found for this domain.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DomainIntern;
