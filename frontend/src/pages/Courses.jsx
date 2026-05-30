

// import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseCards = [
    {
      title: "Domain Based Learning",
      desc: "Explore courses categorized by domains such as AI, Web Development, and Data Science.",
      link: "/courses/domain",
      borderColor: "#6A89A7",
    },
    {
      title: " Company Based Learning",
      desc: "Learn skills and technologies based on company requirements and projects.",
      link: "/courses/company",
      borderColor: "#6A89A7",
    },
    {
      title: " Mini Projects",
      desc: "Practice your skills with mini projects and coding challenges.",
      link: "/courses/mini-project",
      borderColor: "#6A89A7",
    },
    {
      title: "Practice Code",
      desc: "Sharpen your coding skills with interactive problems and challenges.",
      link: "/courses/practice",
      borderColor: "#6A89A7",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC] ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-[#384959] text-center"
      >
        Explore <span className="text-[#6A89A7]">Courses</span> to Learn & Build
      </motion.h1><br/>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-18">
        {courseCards.map((card, index) => (
          <motion.div
  key={index}
  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-l-4"
  style={{ borderLeftColor: card.borderColor }}
  whileInView={{ opacity: 1, scale: 1 }}
  initial={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>
  <h2 className="text-xl font-bold text-[#384959] mb-2">{card.title}</h2>
  <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
  <Link
    to={card.link}
    className="block mt-2 text-black bg-[#f9fafc] px-4 py-2 rounded-lg hover:bg-[#c4cad0] transition mx-auto text-center"
  >
    Explore Now →
  </Link>
</motion.div>

        ))}
      </div>
    </div>
  );
};

export default Courses;
