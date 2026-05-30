

// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { Bell, CalendarPlus } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import TaskCalendar from "../components/TaskCalender"; // ✅ Import
// // import Notifications from "../components/Notifications";

// // const Dashboard = () => {
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showCalendarForm, setShowCalendarForm] = useState(false);

// //   return (
// //     <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC] relative">
// //       {/* Title */}
// //       <motion.h1
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="text-3xl sm:text-4xl font-bold mb-12 text-[#384959] text-center"
// //       >
// //         Welcome to <span className="text-[#6A89A7]">ThiranAI</span> Dashboard
// //       </motion.h1>

// //       <div className="max-w-7xl mx-auto space-y-14">

// //         {/* === ROW 1 === */}
// //         <div className="flex flex-col md:flex-row justify-center gap-12">
// //           {/* Roadmaps */}
// //           <div className="w-full md:w-[40%]">
// //             <motion.div
// //               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               transition={{ duration: 0.4 }}
// //             >
// //               <h2 className="text-xl font-bold text-[#384959] mb-2">📍 Roadmaps</h2>
// //               <p className="text-sm text-gray-600">Follow learning paths tailored to your goals.</p>
// //               <Link to="/roadmaps">
// //                 <button className="mt-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition">
// //                   View Roadmaps
// //                 </button>
// //               </Link>
// //             </motion.div>
// //           </div>

// //           {/* Hackathon */}
// //           <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#BDDDFC] pl-6">
// //             <motion.div
// //               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#BDDDFC]"
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               transition={{ duration: 0.4, delay: 0.1 }}
// //             >
// //               <h2 className="text-xl font-bold text-[#384959] mb-2">💻 Hackathon Calendar</h2>
// //               <p className="text-sm text-gray-600">Find and register for upcoming hackathons.</p>
// //               <button className="mt-4 bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-lg hover:bg-[#88BDF2] transition">
// //                 View Events
// //               </button>
// //             </motion.div>
// //           </div>
// //         </div>

// //         {/* === ROW 2 === */}
// //         <div className="flex flex-col md:flex-row justify-center gap-12">
// //           {/* Workshops */}
// //           <div className="w-full md:w-[40%]">
// //             <motion.div
// //               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               transition={{ duration: 0.4, delay: 0.2 }}
// //             >
// //               <h2 className="text-xl font-bold text-[#384959] mb-2">🛠️ Workshops</h2>
// //               <p className="text-sm text-gray-600">Learn from industry experts live.</p>
// //               <button className="mt-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition">
// //                 Explore Workshops
// //               </button>
// //             </motion.div>
// //           </div>

// //           {/* Paper Presentations */}
// //           <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#6A89A7] pl-6">
// //             <motion.div
// //               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#88BDF2]"
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               transition={{ duration: 0.4, delay: 0.3 }}
// //             >
// //               <h2 className="text-xl font-bold text-[#384959] mb-2">📄 Paper Presentations</h2>
// //               <p className="text-sm text-gray-600">Track deadlines and submission info.</p>
// //               <button className="mt-4 bg-[#88BDF2] text-white px-4 py-2 rounded-lg hover:bg-[#6A89A7] transition">
// //                 View Calendar
// //               </button>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* === Floating Components === */}
// //       {showCalendarForm && <TaskCalendar onClose={() => setShowCalendarForm(false)} />}

// // {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}


// //       {/* === Floating Buttons === */}
// //       <div className="fixed top-24 right-6 flex flex-col gap-4 z-50">
// //         <button
// //           onClick={() => setShowCalendarForm(!showCalendarForm)}
// //           className="w-12 h-12 rounded-full bg-[#6A89A7] shadow-lg flex items-center justify-center hover:scale-110 transition"
// //         >
// //           <CalendarPlus className="text-white" size={20} />
// //         </button>

// //         <button
// //           onClick={() => setShowNotifications(!showNotifications)}
// //           className="w-12 h-12 rounded-full bg-[#384959] shadow-lg flex items-center justify-center hover:scale-110 transition"
// //         >
// //           <Bell className="text-white" size={20} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Bell, CalendarPlus } from "lucide-react";
// import { Link } from "react-router-dom";
// import TaskCalendar from "../components/TaskCalender";
// import Notifications from "../components/Notifications";
// import axios from "axios";
// import { useAuth } from "../contexts/AuthContext";

// const Dashboard = () => {
//   const { token } = useAuth();
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showCalendarForm, setShowCalendarForm] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(0);

//   const fetchNotificationCount = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/notifications", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNotificationCount(res.data.count);
//     } catch (err) {
//       console.error("Error fetching notifications:", err);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchNotificationCount();
//     }
//   }, [token]);

//   return (
//     <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC] relative">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl sm:text-4xl font-bold mb-12 text-[#384959] text-center"
//       >
//         Welcome to <span className="text-[#6A89A7]">ThiranAI</span> Dashboard
//       </motion.h1>

//       {/* Content Cards */}
//       <div className="max-w-7xl mx-auto space-y-14">
//         {/* Row 1 */}
//         <div className="flex flex-col md:flex-row justify-center gap-12">
//           {/* Roadmaps */}
//           <div className="w-full md:w-[40%]">
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h2 className="text-xl font-bold text-[#384959] mb-2">📍 Roadmaps</h2>
//               <p className="text-sm text-gray-600">Follow learning paths tailored to your goals.</p>
//               <Link to="/roadmaps">
//                 <button className="mt-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition">
//                   View Roadmaps
//                 </button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Hackathon */}
//           <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#BDDDFC] pl-6">
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#BDDDFC]"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <h2 className="text-xl font-bold text-[#384959] mb-2">💻 Hackathon Calendar</h2>
//               <p className="text-sm text-gray-600">Find and register for upcoming hackathons.</p>
//               <button className="mt-4 bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-lg hover:bg-[#88BDF2] transition">
//                 View Events
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="flex flex-col md:flex-row justify-center gap-12">
//           {/* Workshops */}
//           <div className="w-full md:w-[40%]">
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <h2 className="text-xl font-bold text-[#384959] mb-2">🛠️ Workshops</h2>
//               <p className="text-sm text-gray-600">Learn from industry experts live.</p>
//               <button className="mt-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition">
//                 Explore Workshops
//               </button>
//             </motion.div>
//           </div>

//           {/* Paper Presentations */}
//           <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#6A89A7] pl-6">
//             <motion.div
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#88BDF2]"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.3 }}
//             >
//               <h2 className="text-xl font-bold text-[#384959] mb-2">📄 Paper Presentations</h2>
//               <p className="text-sm text-gray-600">Track deadlines and submission info.</p>
//               <button className="mt-4 bg-[#88BDF2] text-white px-4 py-2 rounded-lg hover:bg-[#6A89A7] transition">
//                 View Calendar
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* === Floating Components === */}
//       {showCalendarForm && <TaskCalendar onClose={() => setShowCalendarForm(false)} />}
//       {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}

//       {/* === Floating Buttons === */}
//       <div className="fixed top-24 right-6 flex flex-col gap-4 z-50">
//         {/* Calendar Button */}
//         <button
//           onClick={() => setShowCalendarForm(!showCalendarForm)}
//           className="w-12 h-12 rounded-full bg-[#6A89A7] shadow-lg flex items-center justify-center hover:scale-110 transition"
//         >
//           <CalendarPlus className="text-white" size={20} />
//         </button>

//         {/* Notification Bell */}
// <div className="relative">
//   <button
//     onClick={() => setShowNotifications(!showNotifications)}
//     className="w-12 h-12 rounded-full bg-[#384959] shadow-lg flex items-center justify-center hover:scale-110 transition"
//   >
//     <Bell className="text-white" size={20} />
//   </button>

//   {/* 🔴 Red notification badge with number */}
//   {notificationCount > 0 && (
//     <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
//       {notificationCount}
//     </span>
//   )}
// </div>




//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, CalendarPlus, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import TaskCalendar from "../components/TaskCalender";
import Notifications from "../components/Notifications";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

// Sample paper presentation data
const paperPresentations = [
  {
    id: 1,
    title: "Advances in Quantum Computing",
    date: "2025-09-05",
    time: "2:00 PM - 4:00 PM",
    venue: "Computer Science Auditorium",
    presenter: "Dr. Sarah Miller (MIT)",
    abstract: "Exploring the latest breakthroughs in quantum algorithms and their potential impact on cryptography and optimization problems. This session will cover both theoretical foundations and practical applications.",
    submissionDeadline: "2025-08-25",
    link: "#",
    tags: ["Quantum Computing", "Research", "Computer Science"]
  },
  {
    id: 2,
    title: "Ethical AI: Challenges and Solutions",
    date: "2025-10-12",
    time: "11:00 AM - 1:00 PM",
    venue: "Virtual (Zoom)",
    presenter: "Prof. James Wilson & Team",
    abstract: "A comprehensive discussion on the ethical implications of AI systems, bias in machine learning models, and frameworks for responsible AI development and deployment.",
    submissionDeadline: "2025-10-02",
    link: "#",
    tags: ["AI Ethics", "Machine Learning", "Responsible AI"]
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    date: "2025-11-08",
    time: "3:30 PM - 5:30 PM",
    venue: "Engineering Block - Room 203",
    presenter: "Alex Chen (Blockchain Lead, TechCorp)",
    abstract: "Exploring real-world applications of blockchain technology in supply chain management, healthcare, and digital identity verification. Case studies from industry implementations will be presented.",
    submissionDeadline: "2025-10-29",
    link: "#",
    tags: ["Blockchain", "Distributed Systems", "Innovation"]
  }
];

// Sample hackathon data
const hackathons = [
  {
    id: 1,
    name: "Hack the Future 2025",
    date: "2025-09-10",
    time: "10:00 AM - 6:00 PM",
    location: "Virtual & In-person (Bangalore)",
    organizer: "TechGiant Inc.",
    prize: "$10,000",
    description: "A 24-hour hackathon focused on building innovative solutions for a sustainable future. Open to all developers, designers, and innovators.",
    link: "#",
    tags: ["Beginner Friendly", "Web3", "AI/ML", "Blockchain"]
  },
  {
    id: 2,
    name: "Code for Good 2025",
    date: "2025-10-05",
    time: "9:00 AM - 5:00 PM",
    location: "Mumbai, India",
    organizer: "DevsForChange",
    prize: "$5,000 + Internship Opportunities",
    description: "Build tech solutions that address social and environmental challenges. Network with industry leaders and like-minded developers.",
    link: "#",
    tags: ["Social Impact", "Beginner Friendly", "Open Source"]
  },
  {
    id: 3,
    name: "AI Innovation Challenge",
    date: "2025-11-15",
    time: "8:00 AM - 8:00 PM",
    location: "Virtual",
    organizer: "AI Collective",
    prize: "$7,500 in Prizes",
    description: "A 12-hour AI/ML hackathon where participants build intelligent solutions using the latest AI technologies and frameworks.",
    link: "#",
    tags: ["AI/ML", "Python", "Data Science"]
  }
];

// Sample workshop data for SDE
const sdeWorkshops = [
  {
    id: 1,
    title: "System Design Fundamentals",
    date: "2025-08-15",
    time: "10:00 AM - 12:00 PM",
    platform: "Zoom",
    instructor: "Alex Chen (Senior Engineer, Google)",
    description: "Learn the fundamentals of designing scalable systems with real-world examples from top tech companies. Perfect for SDE I/II preparing for technical interviews.",
    link: "#",
    tags: ["System Design", "Interview Prep", "Scalability"]
  },
  {
    id: 2,
    title: "Mastering Data Structures & Algorithms",
    date: "2025-08-20",
    time: "2:00 PM - 4:00 PM",
    platform: "Microsoft Teams",
    instructor: "Priya Sharma (Ex-Meta, LeetCode Expert)",
    description: "Advanced problem-solving techniques and strategies to crack coding interviews. We'll cover the 14 most important patterns for coding interviews.",
    link: "#",
    tags: ["DSA", "Coding Interview", "Problem Solving"]
  },
  {
    id: 3,
    title: "Building Microservices with AWS",
    date: "2025-08-25",
    time: "11:00 AM - 1:00 PM",
    platform: "Google Meet",
    instructor: "James Wilson (Cloud Architect, AWS)",
    description: "Hands-on workshop on designing and deploying microservices using AWS ECS, Lambda, and API Gateway. Bring your laptop for the live coding session.",
    link: "#",
    tags: ["AWS", "Microservices", "Cloud"]
  },
  {
    id: 4,
    title: "React Performance Optimization",
    date: "2025-09-01",
    time: "3:30 PM - 5:30 PM",
    platform: "Zoom",
    instructor: "Sarah Johnson (Frontend Lead, Airbnb)",
    description: "Learn advanced React patterns and performance optimization techniques used in production at scale. We'll use React DevTools for profiling and optimization.",
    link: "#",
    tags: ["React", "Frontend", "Performance"]
  }
];

const Dashboard = () => {
  const { token } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  const [showWorkshops, setShowWorkshops] = useState(false);
  const [showHackathons, setShowHackathons] = useState(false);
  const [showPaperPresentations, setShowPaperPresentations] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);

  const fetchNotificationCount = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotificationCount(res.data.count);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchNotificationCount();
    }
  }, [token]);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC] relative">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-[#384959] text-center"
      >
        Welcome to <span className="text-[#6A89A7]">ThiranAI</span> Dashboard
      </motion.h1>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Roadmaps */}
          <div className="w-full md:w-[40%]">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-bold text-[#384959] mb-2">📍 Roadmaps</h2>
              <p className="text-sm text-gray-600">Follow learning paths tailored to your goals.</p>
              <Link to="/roadmaps">
                <button className="mt-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition">
                  View Roadmaps
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Hackathon */}
          <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#BDDDFC] pl-6">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#BDDDFC]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-[#384959] mb-2">💻 Hackathon Calendar</h2>
              <p className="text-sm text-gray-600 mb-4">Find and register for upcoming hackathons.</p>
              <button 
                onClick={() => setShowHackathons(true)}
                className="w-full bg-[#BDDDFC] text-[#384959] px-4 py-2 rounded-lg hover:bg-[#88BDF2] transition"
              >
                View Hackathons
              </button>
            </motion.div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Workshops */}
          <div className="w-full md:w-[40%]">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#6A89A7]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-[#384959] mb-2">🛠️ SDE Workshops</h2>
              <p className="text-sm text-gray-600 mb-4">Learn from industry experts live.</p>
              <button 
                onClick={() => setShowWorkshops(true)}
                className="w-full bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition"
              >
                Explore Workshops
              </button>
            </motion.div>
          </div>

          {/* Paper Presentations */}
          <div className="w-full md:w-[40%] border-l-2 border-dashed border-[#6A89A7] pl-6">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-[#88BDF2]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-[#384959] mb-2">📄 Paper Presentations</h2>
              <p className="text-sm text-gray-600 mb-4">Track deadlines and submission info.</p>
              <button 
                onClick={() => setShowPaperPresentations(true)}
                className="w-full bg-[#88BDF2] text-white px-4 py-2 rounded-lg hover:bg-[#6A89A7] transition"
              >
                View Presentations
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Floating Components === */}
      {showCalendarForm && <TaskCalendar onClose={() => setShowCalendarForm(false)} />}
      {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
      
      {/* Paper Presentations Modal */}
      <AnimatePresence>
        {(showPaperPresentations || selectedPaper) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#384959]">
                    {selectedPaper ? 'Paper Presentation Details' : 'Upcoming Paper Presentations'}
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedPaper(null);
                      setShowPaperPresentations(false);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                {selectedPaper ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{selectedPaper.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{selectedPaper.date} • {selectedPaper.time}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedPaper.venue}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Presenter</h4>
                      <p className="text-gray-700 mb-3">{selectedPaper.presenter}</p>
                      <h4 className="font-medium mb-1">Submission Deadline</h4>
                      <p className="text-gray-700">{selectedPaper.submissionDeadline}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Abstract</h4>
                      <p className="text-gray-700">{selectedPaper.abstract}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedPaper.tags.map((tag, index) => (
                        <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <a 
                        href={selectedPaper.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A73E8] hover:underline"
                      >
                        Submit Paper <ExternalLink className="ml-1" size={16} />
                      </a>
                      <button 
                        onClick={() => setSelectedPaper(null)}
                        className="ml-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition"
                      >
                        Back to List
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {paperPresentations.map((paper) => (
                      <div 
                        key={paper.id} 
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{paper.title}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                              {paper.date} • {paper.time}
                            </div>
                            <div className="text-sm text-gray-500">{paper.venue}</div>
                            <div className="text-xs text-amber-600 mt-1">
                              Submission Deadline: {paper.submissionDeadline}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {paper.tags.map((tag, index) => (
                                <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedPaper(paper)}
                            className="text-sm text-[#6A89A7] hover:underline whitespace-nowrap ml-4"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Hackathons Modal */}
      <AnimatePresence>
        {(showHackathons || selectedHackathon) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#384959]">
                    {selectedHackathon ? 'Hackathon Details' : 'Upcoming Hackathons'}
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedHackathon(null);
                      setShowHackathons(false);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                {selectedHackathon ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{selectedHackathon.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{selectedHackathon.date} • {selectedHackathon.time}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedHackathon.location}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-1">Organizer</h4>
                      <p className="text-gray-700 mb-2">{selectedHackathon.organizer}</p>
                      <h4 className="font-medium mb-1">Prize Pool</h4>
                      <p className="text-gray-700">{selectedHackathon.prize}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-gray-700">{selectedHackathon.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedHackathon.tags.map((tag, index) => (
                        <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <a 
                        href={selectedHackathon.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A73E8] hover:underline"
                      >
                        Register Now <ExternalLink className="ml-1" size={16} />
                      </a>
                      <button 
                        onClick={() => setSelectedHackathon(null)}
                        className="ml-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition"
                      >
                        Back to List
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {hackathons.map((hackathon) => (
                      <div 
                        key={hackathon.id} 
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{hackathon.name}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                              {hackathon.date} • {hackathon.time}
                            </div>
                            <div className="text-sm text-gray-500">{hackathon.location}</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {hackathon.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedHackathon(hackathon)}
                            className="text-sm text-[#6A89A7] hover:underline whitespace-nowrap ml-4"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Workshops Modal */}
      <AnimatePresence>
        {(showWorkshops || selectedWorkshop) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#384959]">
                    {selectedWorkshop ? 'Workshop Details' : 'Upcoming SDE Workshops'}
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedWorkshop(null);
                      setShowWorkshops(false);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                {selectedWorkshop ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{selectedWorkshop.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{selectedWorkshop.date} • {selectedWorkshop.time}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedWorkshop.platform}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Instructor</h4>
                      <p className="text-gray-700">{selectedWorkshop.instructor}</p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-gray-700">{selectedWorkshop.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedWorkshop.tags.map((tag, index) => (
                        <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <a 
                        href={selectedWorkshop.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#1A73E8] hover:underline"
                      >
                        Join Workshop <ExternalLink className="ml-1" size={16} />
                      </a>
                      <button 
                        onClick={() => setSelectedWorkshop(null)}
                        className="ml-4 bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition"
                      >
                        Back to List
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sdeWorkshops.map((workshop) => (
                      <div 
                        key={workshop.id} 
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{workshop.title}</h3>
                            <div className="text-sm text-gray-600 mt-1">
                              {workshop.date} • {workshop.time}
                            </div>
                            <div className="text-sm text-gray-500">{workshop.platform}</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {workshop.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="bg-[#E8F0FE] text-[#1A73E8] text-xs px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedWorkshop(workshop)}
                            className="text-sm text-[#6A89A7] hover:underline whitespace-nowrap ml-4"
                          >
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* === Floating Buttons === */}
      <div className="fixed top-24 right-6 flex flex-col gap-4 z-50">
        {/* Calendar Button */}
        <button
          onClick={() => setShowCalendarForm(!showCalendarForm)}
          className="w-12 h-12 rounded-full bg-[#6A89A7] shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <CalendarPlus className="text-white" size={20} />
        </button>

        {/* Notification Bell */}
<div className="relative">
  <button
    onClick={() => setShowNotifications(!showNotifications)}
    className="w-12 h-12 rounded-full bg-[#384959] shadow-lg flex items-center justify-center hover:scale-110 transition"
  >
    <Bell className="text-white" size={20} />
  </button>

  {/* 🔴 Red notification badge with number */}
  {notificationCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
      {notificationCount}
    </span>
  )}
</div>




      </div>
    </div>
  );
};

export default Dashboard;
