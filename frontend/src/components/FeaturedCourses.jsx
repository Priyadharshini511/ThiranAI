import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/search-courses?q=data science&top_n=5")
      .then((res) => {
        setCourses(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching courses", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#BDDDFC] py-10 px-5">
      <h2 className="text-3xl font-bold text-[#384959] mb-6">Featured Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x200?text=Course+Image"
              alt="Course placeholder"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-[#88BDF2]">
              <h3 className="text-xl font-semibold text-[#384959] mb-2">{course.title || "Untitled Course"}</h3>
              <p className="text-sm text-white">{course.description || "No description provided."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
