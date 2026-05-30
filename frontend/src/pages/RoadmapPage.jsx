// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const domains = [
//   { name: "Full Stack", link: "https://drive.google.com/file/d/1PndhN_C_wSl04S8KEbHuFHcq8O4MdDVy/view" },
//   { name: "AI and Data Scientist", link: "https://drive.google.com/file/d/1h_PPcB8Vlf5kqtIXEVHdws5nf99-w7B4/view" },
//   { name: "Cyber Security", link: "https://roadmap.sh/pdfs/roadmaps/cyber-security.pdf" },
//   { name: "UX Design", link: "https://drive.google.com/file/d/1ciwC7qLsLKPhU88q0HOU0jwjEDPVyvZF/view" },
//   { name: "Blockchain", link: "https://drive.google.com/file/d/1T8nqm2DVAbl1yi9vWacWcbldj5SYkk00/view" },
//   { name: "Game Developer", link: "https://drive.google.com/file/d/1nZoP7wD9Sp1N1-4r4jmwreOkzqQPQHjt/view" }
// ];

// const RoadmapPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E2ECF4] py-12 px-4 sm:px-10 lg:px-24">
//       {/* Title */}
//       <motion.h1
//         className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#384959]"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Explore Roadmaps by <span className="text-[#6A89A7]">Domain</span>
//       </motion.h1>

//       {/* Grid of cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {domains.map((domain, index) => (
//           <motion.a
//             href={domain.link}
//             key={index}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="bg-white border-l-4 border-[#6A89A7] hover:border-[#384959] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center flex flex-col justify-between"
//           >
//             <h2 className="text-lg font-semibold text-[#384959] mb-2">{domain.name}</h2>
//             <p className="text-sm text-gray-600">Click to view detailed roadmap</p>
//           </motion.a>
//         ))}
//       </div>

//       {/* Explore More Button */}
//       <div className="mt-16 flex justify-center">
//         <button
//           className="flex items-center gap-2 bg-[#6A89A7] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#384959] hover:shadow-xl transition"
//         >
//           Explore More <ArrowRight size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoadmapPage;




import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Shield, PenTool, Box, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
import { getDomainKey } from "../data/flowchartData";

const domains = [
  { name: "Full Stack", key: "full-stack", icon: Code },
  { name: "AI and Data Scientist", key: "ai-data-scientist", icon: Cpu },
  { name: "Cyber Security", key: "cyber-security", icon: Shield },
  { name: "UX Design", key: "ux-design", icon: PenTool },
  { name: "Blockchain", key: "blockchain", icon: Box },
  { name: "Game Developer", key: "game-developer", icon: Gamepad }
];

const colors = [
  "from-pink-500 to-rose-400",
  "from-indigo-500 to-blue-400",
  "from-emerald-500 to-green-400",
  "from-amber-500 to-yellow-400",
  "from-purple-500 to-violet-400",
  "from-cyan-500 to-sky-400"
];

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E2ECF4] py-10 px-4 sm:px-8 lg:px-20">
      {/* Title */}
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-10 text-center text-[#384959]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Roadmaps by <span className="text-[#6A89A7]">Domain</span>
      </motion.h1>

      {/* Grid of smaller cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {domains.map((domain, index) => {
          const IconComp = domain.icon;
          const gradient = colors[index % colors.length];

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-l-4 border-[#6A89A7] hover:border-[#384959] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between"
            >
              <Link
                to={`/roadmap/${domain.key}`}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                {/* Smaller icon badge */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md mb-3`}>
                  <IconComp size={24} className="text-white" />
                </div>

                <h2 className="text-base font-semibold text-[#384959] mb-1">{domain.name}</h2>
                <p className="text-xs text-gray-600 mb-3">Click to view detailed roadmap</p>

                <div className="mt-auto inline-flex items-center text-xs text-[#6A89A7] hover:text-[#384959]">
                  <span className="mr-1">Explore</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapPage;
