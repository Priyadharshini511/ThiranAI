import "react-calendar/dist/Calendar.css";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Resume from "./pages/Resume";
import ResumeBuilder from "./pages/ResumeBuilder";
//  import AtsScoreChecker from "./pages/AtsScoreChecker";
import AtsChecker from './pages/AtsChecker'; 
import Consulting from "./pages/Consulting";
import DomainMentors from './pages/DomainMentors';
import Contact from "./pages/Contact";
import RoadmapPage from "./pages/RoadmapPage";
import Notes from './pages/Notes';
import DomainProjects from "./pages/DomainProjects";
// Subpages
import DomainBased from "./components/DomainBased";
import FeaturedCourses from './components/FeaturedCourses';
import CompanyBased from "./components/CompanyBased";
import MiniProject from "./components/MiniProject";
import CodingProblems from "./components/CodingProblems";
import Chatbot from "./components/Chatbot";
import DomainJob from "./pages/DomainJob";
import CompanyJob from "./pages/CompanyJob";
import GeneralJob from "./pages/GeneralJob";
import MockTest from "./pages/MockTest";
import DomainIntern from "./pages/DomainIntern";
import CompanyIntern from "./pages/CompanyIntern";
import GeneralIntern from "./pages/GeneralIntern";
import PDFChatbot from "./pages/PDFChatbot"; 
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';
import { isTokenValid } from "./utils/authUtils";
import DomainFlowchart from "./pages/DomainFlowchart";
// ✅ Auth Check
const isAuthenticated = () => {
  return isTokenValid();
};

// ✅ Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

// ✅ Authenticated App Component
// const AuthenticatedApp = () => {
//   const location = useLocation();
//   const isAuthPage = location.pathname === "/" || location.pathname === "/register";
//   const loggedIn = isAuthenticated();

//   if (loggedIn && isAuthPage) return <Navigate to="/dashboard" />;
//   if (!loggedIn && !isAuthPage) return <Navigate to="/" />;

//   // ✅ Only Login/Register Pages
//   if (isAuthPage) {
//     return (
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     );
//   }

//   // ✅ Main Authenticated Area
//   return (
//     <div className="flex">
//       <Navbar />
//       <div className="ml-64 w-full p-6 bg-[#BDDDFC] min-h-screen">
//         <Routes>
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
//           <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
//           <Route path="/internships" element={<ProtectedRoute><Internships /></ProtectedRoute>} />
//           <Route path="/resume" element={<ProtectedRoute><Resume /></ProtectedRoute>} />
//           <Route path="/resume-builder" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
//           <Route path="/ats-checker" element={<ProtectedRoute><AtsScoreChecker /></ProtectedRoute>} />
//           <Route path="/consulting" element={<ProtectedRoute><Consulting /></ProtectedRoute>} />
//           <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
//           <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
//           <Route path="/roadmaps" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
//           <Route path="/courses/domain" element={<ProtectedRoute><DomainBased /></ProtectedRoute>} />
//           <Route path="/courses/featured" element={<FeaturedCourses />} />
//           <Route path="/courses/company" element={<ProtectedRoute><CompanyBased /></ProtectedRoute>} />
//           <Route path="/courses/mini-project" element={<ProtectedRoute><MiniProject /></ProtectedRoute>} />
//           <Route path="/courses/practice" element={<ProtectedRoute><PracticeCode /></ProtectedRoute>} />
//           <Route path="/domain-job" element={<ProtectedRoute><DomainJob /></ProtectedRoute>} />
//           <Route path="/company-job" element={<ProtectedRoute><CompanyJob /></ProtectedRoute>} />
//           <Route path="/general-job" element={<ProtectedRoute><GeneralJob /></ProtectedRoute>} />
//           <Route path="/mock-test" element={<ProtectedRoute><MockTest /></ProtectedRoute>} />
//           <Route path="/domain-internship" element={<ProtectedRoute><DomainIntern /></ProtectedRoute>} />
//           <Route path="/company-internship" element={<ProtectedRoute><CompanyIntern /></ProtectedRoute>} />
//           <Route path="/general-internship" element={<ProtectedRoute><GeneralIntern /></ProtectedRoute>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };
const AuthenticatedApp = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/" || location.pathname === "/register";
  const loggedIn = isAuthenticated();

  // 🔁 Redirect logic
  if (loggedIn && isAuthPage) return <Navigate to="/dashboard" />;
  if (!loggedIn && !isAuthPage) return <Navigate to="/" />;

  // 🧾 Render Login/Register routes (without Chatbot)
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  // ✅ Render rest of the app with Chatbot
  return (
    <div className="flex">
      <Navbar />

<Chatbot />


{/* ✅ Only appears for authenticated routes */}
      <div className="ml-64 w-full p-6 bg-[#BDDDFC] min-h-screen">
        <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
          <Route path="/internships" element={<ProtectedRoute><Internships /></ProtectedRoute>} />
          <Route path="/resume" element={<ProtectedRoute><Resume /></ProtectedRoute>} />
          <Route path="/resume-builder" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
          <Route path="/atschecker"  element={<ProtectedRoute><AtsChecker /></ProtectedRoute>} />
          <Route path="/consulting" element={<ProtectedRoute><Consulting /></ProtectedRoute>} />
          <Route path="/consulting/:domain" element={<ProtectedRoute><DomainMentors /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
          <Route path="/roadmaps" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
          <Route path="/roadmap/:domain" element={<ProtectedRoute><DomainFlowchart /></ProtectedRoute>} />
          <Route path="/courses/domain" element={<ProtectedRoute><DomainBased /></ProtectedRoute>} />
          <Route path="/courses/featured" element={<FeaturedCourses />} />
          <Route path="/courses/company" element={<ProtectedRoute><CompanyBased /></ProtectedRoute>} />
          <Route path="/courses/mini-project" element={<ProtectedRoute><MiniProject /></ProtectedRoute>} />
          <Route
  path="/courses/mini-project/domain/:domainName"
  element={
    <ProtectedRoute>
      <DomainProjects />
    </ProtectedRoute>
  }
/>
          <Route path="/courses/practice" element={<ProtectedRoute><CodingProblems  /></ProtectedRoute>} />
          <Route path="/domain-job" element={<ProtectedRoute><DomainJob /></ProtectedRoute>} />
          <Route path="/company-job" element={<ProtectedRoute><CompanyJob /></ProtectedRoute>} />
          <Route path="/general-job" element={<ProtectedRoute><GeneralJob /></ProtectedRoute>} />
          <Route path="/mock-test" element={<ProtectedRoute><MockTest /></ProtectedRoute>} />
          {/* <Route path="/domain-internship" element={<ProtectedRoute><DomainIntern /></ProtectedRoute>} />
          <Route path="/company-internship" element={<ProtectedRoute><CompanyIntern /></ProtectedRoute>} />
          <Route path="/general-internship" element={<ProtectedRoute><GeneralIntern /></ProtectedRoute>} /> */}
                    <Route path="/domainintern" element={<DomainIntern />} />
          
          {/* <Route path="/company-internship" element={<CompanyIntern />} /> */}
          <Route path="/companyintern" element={<CompanyIntern />} />

          <Route path="/general-internship" element={<GeneralIntern />} />
           <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};


// ✅ Final App Component
const App = () => (
  <Router>
    <AuthProvider>
      {/* <Chatbot /> ✅ Place it here so it doesn’t interfere with layout */}
      <AuthenticatedApp />
    </AuthProvider>
  </Router>
);

export default App;
