// import consultants from "../data/consultants";

// const Consulting = () => {
//   return (
//     <div className="px-4 sm:px-8 lg:px-16 py-10 min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
//       <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#384959]">
//         Consulting <span className="text-[#6A89A7]">Services</span>
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {consultants.map((consultant) => (
//           <div
//             key={consultant.id}
//             className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xl transition"
//           >
//             <img
//               src={consultant.photo}
//               alt={consultant.name}
//               className="w-24 h-24 rounded-full object-cover mb-4 border-4"
//               style={{ borderColor: '#BDDDFC' }}
//             />
//             <h3 className="text-lg font-semibold text-[#384959]">
//               {consultant.name}
//             </h3>
//             <p className="text-sm text-gray-600">
//               <strong>Age:</strong> {consultant.age}
//             </p>
//             <p className="text-sm text-gray-600">
//               <strong>Designation:</strong> {consultant.designation}
//             </p>
//             <p className="text-sm text-gray-600 mt-1">
//               <strong>About:</strong> {consultant.about}
//             </p>
//             <p className="text-sm text-gray-600">
//               <strong>Session:</strong> {consultant.session}
//             </p>
//             <a
//               href={`mailto:${consultant.email}`}
//               className="mt-3 text-[#6A89A7] underline hover:text-[#384959]"
//             >
//               Email: {consultant.email}
//             </a>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#384959]">
//           Upcoming <span className="text-[#6A89A7]">Sessions</span>
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               date: "April 25, 2025",
//               time: "2:00 PM",
//               link: "https://zoom.us/j/123456789",
//             },
//             {
//               date: "April 28, 2025",
//               time: "11:00 AM",
//               link: "https://zoom.us/j/987654321",
//             },
//             {
//               date: "May 2, 2025",
//               time: "4:30 PM",
//               link: "https://zoom.us/j/456789123",
//             },
//           ].map((session, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md p-6 rounded-xl border-l-4"
//               style={{ borderColor: '#88BDF2' }}
//             >
//               <p className="text-gray-700">
//                 <strong>Session Date:</strong> {session.date}
//               </p>
//               <p className="text-gray-700">
//                 <strong>Time:</strong> {session.time}
//               </p>
//               <a
//                 href={session.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-3 text-white px-4 py-2 rounded-lg transition"
//                 style={{
//                   backgroundColor: '#6A89A7',
//                 }}
//               >
//                 Join Session
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Consulting;



import React from "react";
import { useNavigate } from "react-router-dom";

const domains = [
  { name: "Fullstack", slug: "fullstack" },
  { name: "Data Science", slug: "data-science" },
  { name: "Machine Learning", slug: "machine-learning" },
  { name: "Cyber Security", slug: "cyber-security" },
  { name: "UI & UX Design", slug: "ui-ux" },
  { name: "DevOps", slug: "devops" },
];

const Consulting = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-10 min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <h1 className="text-3xl sm:text-4xl font-bold mb-18 text-center text-[#384959]">
        Choose a <span className="text-[#6A89A7]">Domain</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {domains.map((domain) => (
          <div
            key={domain.slug}
            onClick={() => navigate(`/consulting/${domain.slug}`)}
            className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-[#384959]">{domain.name}</h2>
          </div>
        ))}
      </div>

      {/* Sessions Section */}
      <div className="mt-46">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#384959]">
          Upcoming <span className="text-[#6A89A7]">Sessions</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              date: "April 25, 2025",
              time: "2:00 PM",
              link: "https://zoom.us/j/123456789",
            },
            {
              date: "April 28, 2025",
              time: "11:00 AM",
              link: "https://zoom.us/j/987654321",
            },
            {
              date: "May 2, 2025",
              time: "4:30 PM",
              link: "https://zoom.us/j/456789123",
            },
          ].map((session, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl border-l-4"
              style={{ borderColor: '#88BDF2' }}
            >
              <p className="text-gray-700">
                <strong>Session Date:</strong> {session.date}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {session.time}
              </p>
              <a
                href={session.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-white px-4 py-2 rounded-lg transition"
                style={{
                  backgroundColor: '#6A89A7',
                }}
              >
                Join Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
