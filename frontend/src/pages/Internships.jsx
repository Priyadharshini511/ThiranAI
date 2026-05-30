

// import { Link } from "react-router-dom";
// import {
//   AcademicCapIcon,
//   BuildingOffice2Icon,
//   GlobeAltIcon
// } from "@heroicons/react/24/outline";

// const Internships = () => {
//   const watermarkIcons = [
//     <AcademicCapIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
//     <BuildingOffice2Icon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
//     <GlobeAltIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />
//   ];

//   return (
//     <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen py-16 px-6 text-center">
//       <h1 className="text-4xl font-extrabold text-[#1e293b] mb-12 tracking-wide">
//         Explore Internships
//       </h1>

//       <div className="flex flex-col gap-12 max-w-4xl mx-auto">

//         {/* Card Template */}
//         {[
//           {
//             title: "Domain Based Internship",
//             desc: "Internships in AI, Web Dev, Data Science, Cybersecurity, and more.",
//             link: "/domain-internship"
//           },
//           {
//             title: "Company Based Internship",
//             desc: "Practice and apply for internships in top companies.",
//             link: "/company-internship"
//           },
//           {
//             title: "General Internship Portal",
//             desc: "Browse internships across multiple domains and industries.",
//             link: "/general-internship"
//           }
//         ].map((card, index) => (
//           <div
//             key={index}
//             className="relative bg-white rounded-2xl px-8 py-10 shadow-lg border-l-8 border-[#6A89A7] hover:border-[#1d4ed8] hover:shadow-2xl hover:bg-[#f0f6fc] transition-all duration-300 ease-in-out text-left"
//           >
//             {/* Watermark Icon */}
//             {watermarkIcons[index]}

//             {/* Actual Content */}
//             <div className="relative z-10">
//               <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
//                 {card.title}
//               </h2>
//               <p className="text-base text-[#475569] mb-6">{card.desc}</p>
//               <div className="text-right">
//                 <Link
//                   to={card.link}
//                   className="text-[#1d4ed8] hover:text-[#1e40af] font-semibold underline underline-offset-4 transition"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Internships;



import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Internships = () => {
  const watermarkIcons = [
    <AcademicCapIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
    <BuildingOffice2Icon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
    <GlobeAltIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
  ];

  const internshipCards = [
    {
      title: "Domain Based Internship",
      desc: "Internships in AI, Web Dev, Data Science, Cybersecurity, and more.",
      path: "/domainintern",
    },
    {
      title: "Company Based Internship",
      desc: "Practice and apply for internships in top companies.",
      path: "/companyintern",
    },
    {
      title: "General Internship Portal",
      desc: "Browse internships across multiple domains and industries.",
      path: "/general-internship",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-[#1e293b] mb-12 tracking-wide">
        Explore Internships
      </h1>

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {internshipCards.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className="relative bg-white rounded-2xl px-8 py-10 shadow-lg border-l-8 border-[#6A89A7] hover:border-[#1d4ed8] hover:shadow-2xl hover:bg-[#f0f6fc] transition-all duration-300 ease-in-out text-left block"
          >
            {watermarkIcons[index]}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                {card.title}
              </h2>
              <p className="text-base text-[#475569] mb-6">{card.desc}</p>
              <div className="text-right">
                <span className="text-[#1d4ed8] hover:text-[#1e40af] font-semibold underline underline-offset-4 transition">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Internships;
