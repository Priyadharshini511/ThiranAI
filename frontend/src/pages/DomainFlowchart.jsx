

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { flowchartData, getDomainKey } from "../data/flowchartData";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";

/**
 * DomainFlowchart.jsx
 *
 * Behavior:
 * - Small screens: horizontal single-row layout with overflow-x scrolling
 * - md+ screens: nodes wrap to multiple rows (no horizontal scroll)
 * - Attractive gradients, numbered circles, subtle animations
 */

const COLORS = [
  "from-pink-500 to-rose-400",
  "from-indigo-500 to-blue-400",
  "from-emerald-500 to-green-400",
  "from-amber-500 to-yellow-400",
  "from-purple-500 to-violet-400",
  "from-cyan-500 to-sky-400",
];

const StageNode = ({ stage, index, domain }) => {
  const gradient = COLORS[index % COLORS.length];
  const [completedItems, setCompletedItems] = useState({});

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`roadmap-${domain}`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCompletedItems(progress[stage.id] || {});
    }
  }, [domain, stage.id]);

  // Save progress to localStorage
  const toggleItemCompletion = (itemIndex) => {
    const newCompletedItems = {
      ...completedItems,
      [itemIndex]: !completedItems[itemIndex]
    };
    
    setCompletedItems(newCompletedItems);
    
    // Save to localStorage
    const savedProgress = localStorage.getItem(`roadmap-${domain}`);
    const progress = savedProgress ? JSON.parse(savedProgress) : {};
    
    progress[stage.id] = newCompletedItems;
    localStorage.setItem(`roadmap-${domain}`, JSON.stringify(progress));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="w-72 flex-shrink-0 md:flex-shrink md:w-72 p-2"
    >
      <div className="flex flex-col items-center relative group">
        {/* Number circle */}
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} text-white flex items-center justify-center font-bold text-lg shadow-xl`}
        >
          {stage.id}
        </div>

        {/* Card */}
        <div className="mt-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-full p-5 border-t-4 border-transparent group-hover:border-blue-400">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#1f2937]">{stage.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock size={14} className="mr-2" />
                <span>{stage.duration}</span>
              </div>
            </div>

            <div className="ml-3 bg-[#6A89A7] text-white px-2 py-1 rounded-full text-sm font-medium">
              {stage.items.length} topics
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2">
            {stage.items.map((item, ii) => (
              <div
                key={ii}
                className={`flex items-start gap-2 p-2 rounded-md border cursor-pointer transition-all duration-200 ${
                  completedItems[ii] 
                    ? 'bg-green-100 border-green-300' 
                    : 'bg-gray-50 border-transparent hover:border-gray-200'
                }`}
                onClick={() => toggleItemCompletion(ii)}
              >
                <CheckCircle 
                  size={14} 
                  className={`flex-shrink-0 mt-0.5 transition-colors ${
                    completedItems[ii] ? 'text-green-600' : 'text-green-500'
                  }`} 
                />
                <div className={`text-sm transition-colors ${
                  completedItems[ii] ? 'text-green-800 font-medium' : 'text-gray-700'
                }`}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ConnectorArrow = ({ isLast, index }) => {
  if (isLast) return null;

  // subtle color pulsing that matches stage color (index-based)
  const colorClass = ["text-pink-400", "text-indigo-400", "text-emerald-400", "text-amber-400", "text-purple-400", "text-cyan-400"][index % 6];

  return (
    <div className="flex items-center justify-center flex-shrink-0">
      {/* Arrow for wide screens */}
      <div className="hidden md:flex items-center mx-2">
        <svg className={`w-10 h-10 ${colorClass} opacity-90`} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 7l5 5-5 5" />
        </svg>
      </div>

      {/* Arrow for small screens (horizontal scrolling) */}
      <div className="md:hidden flex items-center mx-1">
        <svg className={`w-8 h-8 ${colorClass} animate-pulse`} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l7 6-7 6" />
        </svg>
      </div>
    </div>
  );
};

const DomainFlowchart = () => {
  const { domain } = useParams();

  if (!domain) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E2ECF4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#384959] mb-4">No domain specified</h1>
          <Link to="/roadmaps" className="text-[#6A89A7] hover:text-[#384959] underline">
            Back to Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  const domainKey = domain;
  const data = flowchartData[domainKey];

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E2ECF4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#384959] mb-4">Domain Not Found</h1>
          <Link to="/roadmaps" className="text-[#6A89A7] hover:text-[#384959] underline">
            Back to Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2ecf4] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
          <Link to="/roadmaps" className="inline-flex items-center text-[#6A89A7] hover:text-[#384959] mb-4 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Roadmaps
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#384959] mb-2">{data.title}</h1>
          <p className="text-gray-600 max-w-3xl">{data.description}</p>
        </motion.div>

        {/* Flowchart container
            - outer: controls scrolling (horizontal on small screens)
            - inner: flex row on small screens, wraps on md+
        */}
        <div className="overflow-x-auto md:overflow-x-visible pb-6">
          <div className="flex items-center gap-6 min-w-max md:min-w-0 md:flex-wrap">
            {data.stages.map((stage, idx) => {
              const isLast = idx === data.stages.length - 1;
              return (
                <React.Fragment key={stage.id}>
                  <StageNode stage={stage} index={idx} />
                  <ConnectorArrow isLast={isLast} index={idx} />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Hint for horizontal scroll on small screens */}
        <div className="text-sm text-gray-500 mt-2 mb-6 text-center md:text-left">
          <span className="md:hidden">Swipe → to view more stages</span>
          <span className="hidden md:inline">Stages wrap onto the next line on larger screens.</span>
        </div>

        {/* Action buttons */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/roadmaps" className="inline-flex items-center px-6 py-3 bg-[#6A89A7] text-white rounded-lg hover:bg-[#384959] transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            View All Roadmaps
          </Link>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center px-6 py-3 border border-[#6A89A7] text-[#6A89A7] rounded-lg hover:bg-[#6A89A7] hover:text-white transition-colors">
            Back to Top
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainFlowchart;
