// import React, { useState } from "react";
// import {
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";

// const companyInternData = {
//   Google: {
//     logo: "https://logo.clearbit.com/google.com",
//     description: "Explore internships in Google’s engineering and research teams.",
//     internships: [
//       { title: "Software Engineering Intern", url: "https://careers.google.com/jobs/results/?q=software+engineering+intern" },
//       { title: "Research Intern", url: "https://careers.google.com/jobs/results/?q=research+intern" },
//     ],
//   },
//   Microsoft: {
//     logo: "https://logo.clearbit.com/microsoft.com",
//     description: "Internships with Microsoft tools, cloud, and enterprise solutions.",
//     internships: [
//       { title: "PM Intern", url: "https://careers.microsoft.com/us/en/internship-program" },
//       { title: "Software Intern", url: "https://careers.microsoft.com/us/en/internship-program" },
//     ],
//   },
//   Amazon: {
//     logo: "https://logo.clearbit.com/amazon.com",
//     description: "Find internships related to AWS and scalable backend systems.",
//     internships: [
//       { title: "Operations Intern", url: "https://www.amazon.jobs/en/jobs/internships" },
//     ],
//   },
//   Adobe: {
//     logo: "https://logo.clearbit.com/adobe.com",
//     description: "Creative opportunities in design and cloud engineering.",
//     internships: [
//       { title: "Design Intern", url: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced" },
//     ],
//   },
//   Intel: {
//     logo: "https://logo.clearbit.com/intel.com",
//     description: "Explore internships in chip design and embedded systems.",
//     internships: [
//       { title: "Embedded Intern", url: "https://jobs.intel.com" },
//     ],
//   },
//   Netflix: {
//     logo: "https://logo.clearbit.com/netflix.com",
//     description: "Opportunities in content tech and scalable systems.",
//     internships: [
//       { title: "Backend Intern", url: "https://jobs.netflix.com" },
//     ],
//   },
//   IBM: {
//     logo: "https://logo.clearbit.com/ibm.com",
//     description: "Join AI and Cloud innovation internships at IBM.",
//     internships: [
//       { title: "Data Science Intern", url: "https://www.ibm.com/employment" },
//     ],
//   },
//   Salesforce: {
//     logo: "https://logo.clearbit.com/salesforce.com",
//     description: "Cloud computing internships for student success.",
//     internships: [
//       { title: "Admin Intern", url: "https://careers.salesforce.com/en/jobs/" },
//     ],
//   },
//   Flipkart: {
//     logo: "https://logo.clearbit.com/flipkart.com",
//     description: "E-commerce and product engineering internships.",
//     internships: [
//       { title: "Product Analyst Intern", url: "https://www.flipkartcareers.com" },
//     ],
//   },
// };

// const CompanyIntern = () => {
//   const [selectedCompany, setSelectedCompany] = useState(null);
//   const [search, setSearch] = useState("");

//   const handleCompanyClick = (company) => {
//     setSelectedCompany(company);
//   };

//   const handleBack = () => {
//     setSelectedCompany(null);
//     setSearch("");
//   };

//   const filteredCompanies = Object.entries(companyInternData).filter(([name]) =>
//     name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] py-16 px-6 min-h-screen text-center">
//       {!selectedCompany ? (
//         <>
//           <h2 className="text-3xl font-bold text-[#384959] mb-8">
//             Explore Company-Based Internships
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
//             {selectedCompany} Internships
//           </h2>

//           {/* Internship Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {companyInternData[selectedCompany].internships.map((intern, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-5 text-left shadow-sm border border-[#6A89A7] hover:shadow-md hover:border-[#88BDF2] transition"
//               >
//                 <h3 className="text-lg font-semibold text-[#384959] mb-2">
//                   {intern.title}
//                 </h3>
//                 <button
//                   onClick={() => window.open(intern.url, "_blank")}
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

// export default CompanyIntern;




import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import companyData from "../data/CompanyInternData.json";

const CompanyIntern = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract selected company from query params
  const queryParams = new URLSearchParams(location.search);
  const selectedCompany = queryParams.get("company");

  const companies = Object.keys(companyData); // ["Google", "Microsoft", ...]

  const handleCompanyClick = (company) => {
    navigate(`/companyintern?company=${company}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {selectedCompany ? `${selectedCompany} Internships` : "Select a Company"}
      </h1>

      {/* Show company cards if none selected */}
      {!selectedCompany && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              onClick={() => handleCompanyClick(company)}
              className="cursor-pointer border p-6 rounded-xl shadow hover:bg-gray-100 text-center font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      )}

      {/* Show internships if a company is selected */}
      {selectedCompany && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(companyData[selectedCompany] || []).length > 0 ? (
            companyData[selectedCompany].map((intern, idx) => (
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
            <p className="text-center col-span-3">No internships found for this company.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanyIntern;
