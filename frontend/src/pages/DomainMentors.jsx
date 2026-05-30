// src/pages/DomainMentors.jsx

import React from "react";
import { useParams } from "react-router-dom";
import consultants from "../data/consultants";

const DomainMentors = () => {
  const { domain } = useParams();
  const filteredConsultants = consultants.filter((c) => c.domain === domain);

  return (
    <div className="px-4 py-10 min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#384959]">
        Mentors for <span className="text-[#6A89A7] capitalize">{domain.replace("-", " ")}</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredConsultants.length > 0 ? (
          filteredConsultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <img
                src={consultant.photo}
                alt={consultant.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4"
                style={{ borderColor: '#BDDDFC' }}
              />
              <h3 className="text-lg font-semibold text-[#384959]">
                {consultant.name}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Age:</strong> {consultant.age}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Designation:</strong> {consultant.designation}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>About:</strong> {consultant.about}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Session:</strong> {consultant.session}
              </p>
              <a
                href={`mailto:${consultant.email}`}
                className="mt-3 text-[#6A89A7] underline hover:text-[#384959]"
              >
                Email: {consultant.email}
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No mentors found for this domain.
          </p>
        )}
      </div>
    </div>
  );
};

export default DomainMentors;
