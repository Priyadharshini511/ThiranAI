import React, { useState } from 'react';
import { useEffect } from "react";

import {
  BriefcaseIcon,
  CodeBracketIcon,
  ChartBarIcon,
  PaintBrushIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
const image_url = "https://as2.ftcdn.net/v2/jpg/01/95/96/13/1000_F_195961367_NNLBno8lv2hkt73tX4IRqo3P0u7EloUy.jpg"; // or use import if in src/assets

// const domainIcons = {
//   'AI': LightBulbIcon,
//   'Web Dev': CodeBracketIcon,
//   'Data Science': ChartBarIcon,
//   'Cloud Computing': GlobeAltIcon,
//   'Cybersecurity': ShieldCheckIcon,
//   // 'Mobile Development': RocketLaunchIcon,
//   'DevOps': WrenchScrewdriverIcon,
//   // 'Blockchain': CpuChipIcon,
//   'UI/UX Design': PaintBrushIcon,
//   // 'Game Development': AcademicCapIcon,
// };

const domainIcons = {
  'Machine Learning': LightBulbIcon,
  'Software Development': CodeBracketIcon,
  'Data Science': ChartBarIcon,
  'Cybersecurity': ShieldCheckIcon,
  'DevOps': WrenchScrewdriverIcon,
  'UI/UX Design': PaintBrushIcon,
};



// const domainData = {
//   AI: {
//     description: 'Learn AI concepts like ML, Deep Learning, and NLP',
//     courses: {
//       recommended: [
//         { title: 'AI Fundamentals', description: 'Learn the basics of AI and its applications.', image: image_url, courseUrl: 'https://www.udemy.com/course/ai-fundamentals/' },
//         { title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts.', image: image_url, courseUrl: 'https://www.coursera.org/learn/machine-learning' },
//       ],
//       free: [
//         { title: 'Intro to AI', description: 'Free introductory course on AI.', image: image_url, courseUrl: 'https://www.udemy.com/course/intro-to-ai-free/' },
//       ],
//       paid: [
//         { title: 'Advanced AI Techniques', description: 'Deep dive into advanced AI topics.', image: image_url, courseUrl: 'https://www.coursera.org/learn/advanced-ai' },
//       ],
//     },
//   },
//   'Web Dev': {
//     description: 'Explore frontend and backend development tools',
//     courses: {
//       recommended: [
//         { title: 'Modern Web Development', description: 'Learn modern web development practices.', image: image_url, courseUrl: 'https://www.udemy.com/course/modern-web-development/' },
//       ],
//       free: [
//         { title: 'HTML & CSS Basics', description: 'Free course on HTML and CSS fundamentals.', image: image_url, courseUrl: 'https://www.coursera.org/learn/html-css' },
//       ],
//       paid: [
//         { title: 'Fullstack Web Development', description: 'Comprehensive paid course on fullstack development.', image: image_url, courseUrl: 'https://www.udemy.com/course/fullstack-web-development/' },
//       ],
//     },
//   },
//   'Data Science': {
//     description: 'Learn data analysis, visualization and modeling',
//     courses: {
//       recommended: [
//         { title: 'Data Science Essentials', description: 'Key concepts in data science.', image: image_url, courseUrl: 'https://www.coursera.org/learn/data-science-essentials' },
//       ],
//       free: [
//         { title: 'Data Analysis Basics', description: 'Free course on data analysis techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/data-analysis-basics/' },
//       ],
//       paid: [
//         { title: 'Advanced Data Science', description: 'Paid course on advanced data science topics.', image: image_url, courseUrl: 'https://www.coursera.org/learn/advanced-data-science' },
//       ],
//     },
//   },
//   'Cloud Computing': {
//     description: 'Master cloud platforms like AWS, Azure, and Google Cloud',
//     courses: {
//       recommended: [
//         { title: 'Cloud Essentials', description: 'Understand basics of cloud computing.', image: image_url, courseUrl: 'https://www.udemy.com/course/cloud-computing/' },
//       ],
//       free: [
//         { title: 'AWS Free Tier Training', description: 'Free course on AWS basics.', image: image_url, courseUrl: 'https://www.aws.training/' },
//       ],
//       paid: [
//         { title: 'Azure Advanced Concepts', description: 'Deep dive into Microsoft Azure.', image: image_url, courseUrl: 'https://www.coursera.org/learn/azure' },
//       ],
//     },
//   },
//   'Cybersecurity': {
//     description: 'Understand security principles, ethical hacking, and defense techniques',
//     courses: {
//       recommended: [
//         { title: 'Cybersecurity Basics', description: 'Introductory course on cybersecurity.', image: image_url, courseUrl: 'https://www.udemy.com/course/cyber-security-course/' },
//       ],
//       free: [
//         { title: 'Intro to Ethical Hacking', description: 'Free basics on ethical hacking.', image: image_url, courseUrl: 'https://www.coursera.org/learn/ethical-hacking' },
//       ],
//       paid: [
//         { title: 'Advanced Cybersecurity', description: 'Paid course on advanced defense techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/advanced-cybersecurity/' },
//       ],
//     },
//   },
//   'Mobile Development': {
//     description: 'Build apps for Android and iOS',
//     courses: {
//       recommended: [
//         { title: 'React Native Crash Course', description: 'Learn React Native for mobile apps.', image: image_url, courseUrl: 'https://www.udemy.com/course/react-native-course/' },
//       ],
//       free: [
//         { title: 'Flutter Basics', description: 'Free course on Flutter for cross-platform apps.', image: image_url, courseUrl: 'https://www.coursera.org/learn/flutter' },
//       ],
//       paid: [
//         { title: 'Advanced iOS App Development', description: 'Paid Swift & iOS course.', image: image_url, courseUrl: 'https://www.udemy.com/course/ios-app-development/' },
//       ],
//     },
//   },
//   'DevOps': {
//     description: 'Learn CI/CD, Docker, Kubernetes, and automation tools',
//     courses: {
//       recommended: [
//         { title: 'DevOps Fundamentals', description: 'Intro to DevOps concepts and tools.', image: image_url, courseUrl: 'https://www.udemy.com/course/devops-fundamentals/' },
//       ],
//       free: [
//         { title: 'Docker Basics', description: 'Free course on Docker and containers.', image: image_url, courseUrl: 'https://www.coursera.org/learn/docker' },
//       ],
//       paid: [
//         { title: 'Master Kubernetes', description: 'Paid course on Kubernetes for deployment.', image: image_url, courseUrl: 'https://www.udemy.com/course/kubernetes/' },
//       ],
//     },
//   },
//   'Blockchain': {
//     description: 'Understand blockchain, cryptocurrencies, and smart contracts',
//     courses: {
//       recommended: [
//         { title: 'Blockchain Essentials', description: 'Basic concepts in blockchain.', image: image_url, courseUrl: 'https://www.udemy.com/course/blockchain-basics/' },
//       ],
//       free: [
//         { title: 'Intro to Crypto', description: 'Free course on cryptocurrency foundations.', image: image_url, courseUrl: 'https://www.coursera.org/learn/cryptocurrency' },
//       ],
//       paid: [
//         { title: 'Smart Contract Development', description: 'Paid course on writing smart contracts.', image: image_url, courseUrl: 'https://www.udemy.com/course/ethereum-and-solidity/' },
//       ],
//     },
//   },
//   'UI/UX Design': {
//     description: 'Learn user interface and user experience design principles',
//     courses: {
//       recommended: [
//         { title: 'UI/UX Basics', description: 'Design beautiful interfaces and intuitive UX.', image: image_url, courseUrl: 'https://www.udemy.com/course/ui-ux-design/' },
//       ],
//       free: [
//         { title: 'Figma Free Tutorial', description: 'Learn design using Figma.', image: image_url, courseUrl: 'https://www.coursera.org/learn/figma' },
//       ],
//       paid: [
//         { title: 'UX Research & Prototyping', description: 'In-depth UX design techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/ux-research/' },
//       ],
//     },
//   },
//   'Game Development': {
//     description: 'Create 2D & 3D games using Unity, Unreal, and more',
//     courses: {
//       recommended: [
//         { title: 'Unity Game Dev', description: 'Create games using Unity engine.', image: image_url, courseUrl: 'https://www.udemy.com/course/unity-game-development/' },
//       ],
//       free: [
//         { title: 'Godot Engine Basics', description: 'Free beginner game dev course.', image: image_url, courseUrl: 'https://www.coursera.org/learn/game-design' },
//       ],
//       paid: [
//         { title: 'Advanced Unreal Engine', description: 'Pro-level game dev using Unreal.', image: image_url, courseUrl: 'https://www.udemy.com/course/unreal-engine/' },
//       ],
//     },
//   },
// };

const domainData = {
  'Machine Learning': {
    description: 'Learn ML concepts like Deep Learning and NLP',
    courses: {
      recommended: [
        { title: 'AI Fundamentals', description: 'Learn the basics of AI and its applications.', image: image_url, courseUrl: 'https://www.udemy.com/course/ai-fundamentals/' },
        { title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts.', image: image_url, courseUrl: 'https://www.coursera.org/learn/machine-learning' },
      ],
      free: [
        { title: 'Intro to AI', description: 'Free introductory course on AI.', image: image_url, courseUrl: 'https://www.udemy.com/course/intro-to-ai-free/' },
      ],
      paid: [
        { title: 'Advanced AI Techniques', description: 'Deep dive into advanced AI topics.', image: image_url, courseUrl: 'https://www.coursera.org/learn/advanced-ai' },
      ],
    },
  },
  'Software Development': {
    description: 'Explore frontend and backend development tools',
    courses: {
      recommended: [
        { title: 'Modern Web Development', description: 'Learn modern web development practices.', image: image_url, courseUrl: 'https://www.udemy.com/course/modern-web-development/' },
      ],
      free: [
        { title: 'HTML & CSS Basics', description: 'Free course on HTML and CSS fundamentals.', image: image_url, courseUrl: 'https://www.coursera.org/learn/html-css' },
      ],
      paid: [
        { title: 'Fullstack Web Development', description: 'Comprehensive paid course on fullstack development.', image: image_url, courseUrl: 'https://www.udemy.com/course/fullstack-web-development/' },
      ],
    },
  },
  'Data Science': {
    description: 'Learn data analysis, visualization and modeling',
    courses: {
      recommended: [
        { title: 'Data Science Essentials', description: 'Key concepts in data science.', image: image_url, courseUrl: 'https://www.coursera.org/learn/data-science-essentials' },
      ],
      free: [
        { title: 'Data Analysis Basics', description: 'Free course on data analysis techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/data-analysis-basics/' },
      ],
      paid: [
        { title: 'Advanced Data Science', description: 'Paid course on advanced data science topics.', image: image_url, courseUrl: 'https://www.coursera.org/learn/advanced-data-science' },
      ],
    },
  },
  'Cybersecurity': {
    description: 'Understand security principles, ethical hacking, and defense techniques',
    courses: {
      recommended: [
        { title: 'Cybersecurity Basics', description: 'Introductory course on cybersecurity.', image: image_url, courseUrl: 'https://www.udemy.com/course/cyber-security-course/' },
      ],
      free: [
        { title: 'Intro to Ethical Hacking', description: 'Free basics on ethical hacking.', image: image_url, courseUrl: 'https://www.coursera.org/learn/ethical-hacking' },
      ],
      paid: [
        { title: 'Advanced Cybersecurity', description: 'Paid course on advanced defense techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/advanced-cybersecurity/' },
      ],
    },
  },
  'DevOps': {
    description: 'Learn CI/CD, Docker, Kubernetes, and automation tools',
    courses: {
      recommended: [
        { title: 'DevOps Fundamentals', description: 'Intro to DevOps concepts and tools.', image: image_url, courseUrl: 'https://www.udemy.com/course/devops-fundamentals/' },
      ],
      free: [
        { title: 'Docker Basics', description: 'Free course on Docker and containers.', image: image_url, courseUrl: 'https://www.coursera.org/learn/docker' },
      ],
      paid: [
        { title: 'Master Kubernetes', description: 'Paid course on Kubernetes for deployment.', image: image_url, courseUrl: 'https://www.udemy.com/course/kubernetes/' },
      ],
    },
  },
  'UI/UX Design': {
    description: 'Learn user interface and user experience design principles',
    courses: {
      recommended: [
        { title: 'UI/UX Basics', description: 'Design beautiful interfaces and intuitive UX.', image: image_url, courseUrl: 'https://www.udemy.com/course/ui-ux-design/' },
      ],
      free: [
        { title: 'Figma Free Tutorial', description: 'Learn design using Figma.', image: image_url, courseUrl: 'https://www.coursera.org/learn/figma' },
      ],
      paid: [
        { title: 'UX Research & Prototyping', description: 'In-depth UX design techniques.', image: image_url, courseUrl: 'https://www.udemy.com/course/ux-research/' },
      ],
    },
  },
};




const VIEWS = {
  DOMAIN_SELECTION: 'DOMAIN_SELECTION',
  OVERVIEW: 'OVERVIEW',
};

const DomainBased = () => {
  const [currentView, setCurrentView] = useState(VIEWS.DOMAIN_SELECTION);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [backendCourses, setBackendCourses] = useState([]);


  const handleDomainSelect = async (domain) => {
  setSelectedDomain(domain);
  setCurrentView(VIEWS.OVERVIEW);

  try {
    const response = await fetch(`http://localhost:8000/search-courses?q=${encodeURIComponent(domain)}&top_n=10`);
    const data = await response.json();
    setBackendCourses(data.results || []);
  } catch (err) {
    console.error("Error fetching backend domain courses:", err);
    setBackendCourses([]);
  }
};


  const handleBackToDomains = () => {
    setSelectedDomain(null);
    setCurrentView(VIEWS.DOMAIN_SELECTION);
  };

  const filteredDomains = Object.entries(domainData).filter(([domain]) =>
    domain.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
useEffect(() => {
  const fetchCourses = async () => {
    if (searchTerm.trim().length < 2) {
      setBackendCourses([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/search-courses?q=${encodeURIComponent(searchTerm)}&top_n=10`);
      const data = await response.json();
      setBackendCourses(data.results || []);
    } catch (err) {
      console.error("Error fetching from backend:", err);
      setBackendCourses([]);
    }
  };

  fetchCourses();
}, [searchTerm]);


  if (currentView === VIEWS.DOMAIN_SELECTION) {
    return (
      <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC]">
        {/* <button
          onClick={() => window.history.back()}
          className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Courses
        </button> */}

        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#6A89A7]">
          Choose a Domain to Begin Learning
        </h1>

        <div className="max-w-md mx-auto mb-10 relative">
  <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
  <input
    type="text"
    placeholder="Search domains..."
    className="w-full pl-10 pr-4 py-2 border border-blue-400 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  /> 
</div>

{/* kgfnhktnh? */}
{backendCourses.length > 0 && (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-[#384959] mb-4">Search Results</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {backendCourses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-400 transition hover:shadow-lg hover:scale-[1.01]"
        >
          <h3 className="text-lg font-semibold text-[#384959] mb-1">
            {course.course_name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Provider:</strong> {course.provider}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Level:</strong> {course.level}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Cost:</strong> {course.cost}
          </p>
          <a
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Go to Course
          </a>
        </div>
      ))}
    </div>
  </div>
)}

{/* hjdhtirj */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
  {filteredDomains.map(([domain, data]) => {
    const Icon = domainIcons[domain] || BriefcaseIcon; // fallback icon
    return (
      <div
        key={domain}
        onClick={() => handleDomainSelect(domain)}
        className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-l-4 cursor-pointer"
        style={{ borderLeftColor: '#6A89A7' }}
      >
        {/* Top-right bookmark icon */}
        <BookmarkIcon className="h-5 w-5 absolute top-4 right-4 text-[#6A89A7]" />

        {/* Heroicon */}
        <div className="flex items-center gap-3 mb-3">
          <Icon className="h-6 w-6 text-[#6A89A7]" />
          <h2 className="text-xl font-bold text-[#384959]">{domain}</h2>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700">{data.description}</p>

        {/* Watermark icon (faded background icon) */}
        <div className="absolute bottom-3 right-3 opacity-10">
          <Icon className="h-12 w-12 text-[#6A89A7]" />
        </div>
      </div>
    );
  })}
</div>

      </div>
    );
  }


if (currentView === VIEWS.OVERVIEW) {
  const domain = domainData[selectedDomain];

  const renderStaticCourseSection = (title, courses, color) => (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4 text-[#384959]">{title}</h2>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 border-t-4 flex flex-col"
              style={{ borderTopColor: color }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="mb-3 rounded h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1 text-[#384959]">{course.title}</h3>
              <p className="text-sm text-gray-700 flex-grow">{course.description}</p>
              <a
                href={course.courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-[#6A89A7] text-white rounded hover:bg-[#384959] text-center transition"
              >
                Go to Course
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No courses available.</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20 py-12 bg-[#F8FAFC]">
      <button
        onClick={handleBackToDomains}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Domains
      </button>
      <h1 className="text-3xl font-bold mb-12 text-[#6A89A7]">{selectedDomain} Learning Overview</h1>

      {/* If backend results are available, show only those */}
      {backendCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {backendCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-400 transition hover:shadow-lg hover:scale-[1.01]"
            >
              <h3 className="text-lg font-semibold text-[#384959] mb-1">
                {course.course_name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Provider:</strong> {course.provider}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Cost:</strong> {course.cost}
              </p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Go to Course
              </a>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Fallback to static data if no backend results */}
          {renderStaticCourseSection('Recommended Courses', domain.courses.recommended, '#6A89A7')}
          {renderStaticCourseSection('Free Courses', domain.courses.free, '#BDDDFC')}
          {renderStaticCourseSection('Paid Courses', domain.courses.paid, '#88BDF2')}
        </>
      )}
    </div>
  );
}


  return null;
};

export default DomainBased;

