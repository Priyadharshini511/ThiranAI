import React from "react";
import { Link } from "react-router-dom";
import { FileText, BarChart2 } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-10 lg:px-20 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#384959] mb-10">
        Resume <span className="text-[#6A89A7]">Tools</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">
        {/* Resume Builder */}
        <Link
          to="/resume-builder"
          className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition group"
        >
          <FileText className="mx-auto mb-4 text-[#6A89A7] group-hover:scale-110 transition" size={40} />
          <h2 className="text-xl font-semibold text-[#384959]">Resume Builder</h2>
          <p className="text-sm text-gray-600 mt-2">Create a modern, clean resume from scratch</p>
        </Link>

        {/* ATS Score Checker */}
        <Link
          to="/atschecker"
          className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition group"
        >
          <BarChart2 className="mx-auto mb-4 text-[#384959] group-hover:scale-110 transition" size={40} />
          <h2 className="text-xl font-semibold text-[#384959]">ATS Score Checker</h2>
          <p className="text-sm text-gray-600 mt-2">Check how ATS-friendly your resume is</p>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
