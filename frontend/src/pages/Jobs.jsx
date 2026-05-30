
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

const Jobs = () => {
  const watermarkIcons = [
    <AcademicCapIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
    <BuildingOffice2Icon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />,
    <GlobeAltIcon className="h-24 w-24 text-[#94a3b8] opacity-5 absolute right-6 top-6 -rotate-12 z-0" />
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] min-h-screen py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-[#1e293b] mb-12 tracking-wide">
        Explore Jobs
      </h1>
      {/* <p className="text-lg font-semibold text-[#334155] mb-10">
        Choose a path based on your career goals
      </p> */}

      <div className="flex flex-col gap-12 max-w-4xl mx-auto">

        {/* Card Template */}
        {[
          {
            title: "Domain Based Job",
            desc: "Jobs tailored for AI, Web Dev, Data Science, and more.",
            link: "/domain-job"
          },
          {
            title: "Company Based Job",
            desc: "Prepare for specific companies with pattern-based practice.",
            link: "/company-job"
          },
          {
            title: "General Job Portal",
            desc: "Browse jobs from a wide range of categories and domains.",
            link: "/general-job"
          }
        ].map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl px-8 py-10 shadow-lg border-l-8 border-[#94a3b8] hover:border-[#1d4ed8] hover:shadow-2xl hover:bg-[#f0f6fc] transition-all duration-300 ease-in-out text-left"
          >
            {/* Watermark Icon */}
            {watermarkIcons[index]}

            {/* Actual Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                {card.title}
              </h2>
              <p className="text-base text-[#475569] mb-6">{card.desc}</p>
              <div className="text-right">
                <Link
                  to={card.link}
                  className="text-[#1d4ed8] hover:text-[#1e40af] font-semibold underline underline-offset-4 transition"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Call to Action Button */}
      <div className="mt-12">
        <Link to="/mock-test">
          <button className="relative overflow-hidden group text-white font-semibold py-4 px-8 rounded-full bg-gradient-to-r from-[#6b8aa9] via-[#4b77a2] to-[#384959] shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#6e91b5] to-[#6c90b5] opacity-0 group-hover:opacity-30 transition duration-300 rounded-full"></span>
            <span className="relative z-10">Start Mock Interview</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
