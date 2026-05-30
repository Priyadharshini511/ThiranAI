import React, { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const image_url = "https://as2.ftcdn.net/v2/jpg/01/95/96/13/1000_F_195961367_NNLBno8lv2hkt73tX4IRqo3P0u7EloUy.jpg";

// const companyData = {
//   Google: {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     description: "Courses aligned with Google’s tech stack and career pathways",
//     courses: {
//       recommended: [
//         { title: 'Google IT Support', description: 'Launch your career in IT.', image: image_url, courseUrl: 'https://www.coursera.org/professional-certificates/google-it-support' },
//       ],
//       free: [
//         { title: 'Google Cloud Basics', description: 'Intro to Google Cloud.', image: image_url, courseUrl: 'https://cloud.google.com/training/free' },
//       ],
//       paid: [
//         { title: 'Professional Data Engineer', description: 'Certification from Google Cloud.', image: image_url, courseUrl: 'https://cloud.google.com/certification/data-engineer' },
//       ],
//     },
//   },

//   Microsoft: {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     description: "Courses and certifications aligned with Microsoft tools",
//     courses: {
//       recommended: [
//         { title: 'Azure Fundamentals', description: 'Intro to Microsoft Azure.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/' },
//       ],
//       free: [
//         { title: 'Microsoft Learn Modules', description: 'Free Microsoft tech modules.', image: image_url, courseUrl: 'https://learn.microsoft.com/' },
//       ],
//       paid: [
//         { title: 'Microsoft Certified: Power BI Analyst', description: 'Official Microsoft certification.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst/' },
//       ],
//     },
//   },

//   Amazon: {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     description: "Courses related to AWS and scalable backend systems",
//     courses: {
//       recommended: [
//         { title: 'AWS Cloud Practitioner', description: 'Foundational AWS concepts.', image: image_url, courseUrl: 'https://www.aws.training/' },
//       ],
//       free: [
//         { title: 'AWS Skill Builder', description: 'Free learning for AWS services.', image: image_url, courseUrl: 'https://skillbuilder.aws/' },
//       ],
//       paid: [
//         { title: 'Certified Solutions Architect', description: 'AWS certification course.', image: image_url, courseUrl: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate/' },
//       ],
//     },
//   },

//   Apple: {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//     description: "Courses focused on iOS, macOS, and Swift development",
//     courses: {
//       recommended: [
//         { title: 'iOS App Development with Swift', description: 'Start building iOS apps.', image: image_url, courseUrl: 'https://developer.apple.com/learn/curriculum/' },
//       ],
//       free: [
//         { title: 'Swift Playgrounds', description: 'Free interactive learning.', image: image_url, courseUrl: 'https://apps.apple.com/us/app/swift-playgrounds/id908519492' },
//       ],
//       paid: [
//         { title: 'Advanced SwiftUI', description: 'Paid SwiftUI advanced course.', image: image_url, courseUrl: 'https://www.udemy.com/course/swiftui/' },
//       ],
//     },
//   },

//   Netflix: {
//   logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//   description: "Courses aligned with Netflix’s tech stack like microservices, big data, and scalability",
//   courses: {
//     recommended: [
//       {
//         title: "Scalable System Design",
//         description: "Learn how companies like Netflix design for scale.",
//         image: image_url,
//         courseUrl: "https://www.udemy.com/course/scalability-design/"
//       }
//     ],
//     free: [
//       {
//         title: "Intro to Microservices",
//         description: "Free overview of microservices architecture.",
//         image: image_url,
//         courseUrl: "https://www.coursera.org/learn/microservices-architecture"
//       }
//     ],
//     paid: [
//       {
//         title: "Big Data Engineering",
//         description: "Work with large-scale data like Netflix engineers.",
//         image: image_url,
//         courseUrl: "https://www.udemy.com/course/the-ultimate-hands-on-hadoop/"
//       }
//     ]
//   }
// },


//   IBM: {
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//     description: "Data science, AI, and cloud computing courses by IBM",
//     courses: {
//       recommended: [
//         { title: 'IBM Data Science Professional Cert.', description: 'Launch data science career.', image: image_url, courseUrl: 'https://www.coursera.org/professional-certificates/ibm-data-science' },
//       ],
//       free: [
//         { title: 'Intro to AI with IBM', description: 'Free AI introduction course.', image: image_url, courseUrl: 'https://cognitiveclass.ai/courses/introduction-to-ai' },
//       ],
//       paid: [
//         { title: 'IBM Cloud Essentials', description: 'Get started with IBM Cloud.', image: image_url, courseUrl: 'https://www.coursera.org/learn/ibm-cloud-essentials' },
//       ],
//     },
//   },
// };

const companyData = {
  Google: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Courses aligned with Google’s tech stack and career pathways",
    courses: {
      recommended: [
        { title: 'Google IT Support', description: 'Launch your career in IT.', image: image_url, courseUrl: 'https://www.coursera.org/professional-certificates/google-it-support' },
        { title: 'Google Data Analytics', description: 'Prepare for a career in data.', image: image_url, courseUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics' },
        { title: 'IT Automation with Python', description: 'Python scripting for sysadmin tasks.', image: image_url, courseUrl: 'https://www.coursera.org/professional-certificates/google-it-automation' },
        { title: 'Google Cloud Architect', description: 'Design GCP infrastructure.', image: image_url, courseUrl: 'https://www.udemy.com/course/google-cloud-architect-certification/' }
      ],
      free: [
        { title: 'Google Cloud Basics', description: 'Intro to Google Cloud.', image: image_url, courseUrl: 'https://cloud.google.com/training/free' },
        { title: 'Analytics Academy', description: 'Learn Google Analytics tools.', image: image_url, courseUrl: 'https://analytics.google.com/analytics/academy/' },
        { title: 'Google Digital Garage', description: 'Digital marketing & coding basics.', image: image_url, courseUrl: 'https://learndigital.withgoogle.com/digitalgarage' },
        { title: 'Google Ads Fundamentals', description: 'Free training on Google Ads.', image: image_url, courseUrl: 'https://skillshop.withgoogle.com/product/ads-basics' }
      ],
      paid: [
        { title: 'Professional Data Engineer', description: 'GCP certification.', image: image_url, courseUrl: 'https://cloud.google.com/certification/data-engineer' },
        { title: 'Workspace Admin Certification', description: 'Manage org‑level admin tools.', image: image_url, courseUrl: 'https://www.coursera.org/learn/google-workspace-administration' },
        { title: 'Cloud Security Engineer', description: 'Secure GCP architecture.', image: image_url, courseUrl: 'https://www.udemy.com/course/google-cloud-security/' },
        { title: 'BigQuery and Data Lakes', description: 'Data warehouse on GCP.', image: image_url, courseUrl: 'https://www.udemy.com/course/machinelearningquantitativeadspcamp/' }
      ]
    }
  },

  Microsoft: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Courses and certifications aligned with Microsoft tools",
    courses: {
      recommended: [
        { title: 'Azure Fundamentals', description: 'Intro to Microsoft Azure.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/' },
        { title: 'AI Engineer on Azure', description: 'AI workloads architecture.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/' },
        { title: 'Power Platform Fundamentals', description: 'Low‑code solutions builder.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/training/paths/power-platform-fundamentals/' },
        { title: 'Microsoft 365 Admin', description: 'Manage enterprise MS365 services.', image: image_url, courseUrl: 'https://www.udemy.com/course/ms-100-microsoft-365-identity-and-services/' }
      ],
      free: [
        { title: 'Microsoft Learn Basics', description: 'Free interactive modules.', image: image_url, courseUrl: 'https://learn.microsoft.com/' },
        { title: 'Azure ML Beginner', description: 'Intro to machine learning.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/training/paths/build-ai-solutions-with-azure-ml/' },
        { title: 'GitHub Copilot Intro', description: 'AI‑assisted coding overview.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/' },
        { title: 'Power BI Dashboard Basics', description: 'Intro to Power BI free tier.', image: image_url, courseUrl: 'https://powerbi.microsoft.com/learn/' }
      ],
      paid: [
        { title: 'Power BI Data Analyst Cert.', description: 'Official certification track.', image: image_url, courseUrl: 'https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst/' },
        { title: 'AZ‑900 Prep Course', description: 'Exam prep for Azure fundamentals.', image: image_url, courseUrl: 'https://www.udemy.com/course/azure-az-900-certification/' },
        { title: 'MS‑200/201 Microsoft 365 Pass', description: 'Manage M365 environments.', image: image_url, courseUrl: 'https://www.udemy.com/course/ms-200-ms-201-microsoft-365-training/' },
        { title: 'Azure Security Engineer (SC‑200)', description: 'Secure Azure services.', image: image_url, courseUrl: 'https://www.udemy.com/course/azure-security-engineer-sc-200/' }
      ]
    }
  },

  Amazon: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: "Courses related to AWS and scalable backend systems",
    courses: {
      recommended: [
        { title: 'AWS Cloud Practitioner', description: 'Core AWS services overview.', image: image_url, courseUrl: 'https://www.aws.training/' },
        { title: 'AWS Developer Associate', description: 'Build AWS apps.', image: image_url, courseUrl: 'https://www.aws.training/' },
        { title: 'AWS DevOps Engineer', description: 'CI/CD pipelines on AWS.', image: image_url, courseUrl: 'https://www.coursera.org/specializations/aws-devops' },
        { title: 'AWS Solution Architect Associate', description: 'Design AWS infra.', image: image_url, courseUrl: 'https://www.aws.training/Details/Curriculum?id=20685' }
      ],
      free: [
        { title: 'AWS Skill Builder', description: 'Free learning platform.', image: image_url, courseUrl: 'https://skillbuilder.aws/' },
        { title: 'AWS Educate', description: 'Student learning hub.', image: image_url, courseUrl: 'https://aws.amazon.com/education/awseducate/' },
        { title: 'Intro to AWS Cloud', description: 'Launch into AWS basics.', image: image_url, courseUrl: 'https://www.aws.training/Details/Curriculum?id=20685' },
        { title: 'Serverless Basics', description: 'Intro to Lambda & AWS free tier.', image: image_url, courseUrl: 'https://aws.amazon.com/serverless/' }
      ],
      paid: [
        { title: 'AWS Certified Solutions Architect', description: 'Associate level cert prep.', image: image_url, courseUrl: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate/' },
        { title: 'AWS Lambda & Serverless Framework', description: 'Hands‑on serverless apps.', image: image_url, courseUrl: 'https://www.udemy.com/course/aws-lambda-and-the-serverless-framework-hands-on-learning/' },
        { title: 'AWS Security Specialty', description: 'Secure cloud services.', image: image_url, courseUrl: 'https://www.udemy.com/course/aws-security-specialty/' },
        { title: 'Advanced AWS Networking', description: 'Design VPCs and hybrid networks.', image: image_url, courseUrl: 'https://www.udemy.com/course/aws-certified-advanced-networking-specialty/' }
      ]
    }
  },

  Apple: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Courses focused on iOS, macOS, and Swift development",
    courses: {
      recommended: [
        { title: 'iOS Development w/ Swift', description: 'Build real-world iOS apps.', image: image_url, courseUrl: 'https://developer.apple.com/learn/curriculum/' },
        { title: 'SwiftUI Advanced Projects', description: 'Complex UI using SwiftUI.', image: image_url, courseUrl: 'https://www.udemy.com/course/swiftui-advanced/' },
        { title: 'Combine in Swift', description: 'Reactive frameworks & data.', image: image_url, courseUrl: 'https://www.udemy.com/course/combine-framework-swift/' },
        { title: 'Swift Algorithms & Data Structures', description: 'Efficiency in Swift programming.', image: image_url, courseUrl: 'https://www.udemy.com/course/swift-algorithms-data-structures/' }
      ],
      free: [
        { title: 'Swift Playgrounds', description: 'Interactive coding in Swift.', image: image_url, courseUrl: 'https://apps.apple.com/us/app/swift-playgrounds/id908519492' },
        { title: 'Stanford Swift Course', description: 'Intro to Swift by Stanford.', image: image_url, courseUrl: 'https://cs193p.sites.stanford.edu/' },
        { title: 'Apple Developer Docs', description: 'Official reference & guides.', image: image_url, courseUrl: 'https://developer.apple.com/documentation/' },
        { title: 'Swift on Codecademy', description: 'Basic Swift tutorials.', image: image_url, courseUrl: 'https://www.codecademy.com/learn/learn-swift' }
      ],
      paid: [
        { title: 'iOS & Swift - The Complete Guide', description: 'From beginner to pro.', image: image_url, courseUrl: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/' },
        { title: 'SwiftUI Masterclass 2025', description: 'Design iOS UIs top-down.', image: image_url, courseUrl: 'https://www.udemy.com/course/swiftui-masterclass/' },
        { title: 'Build Uber Eats UI Clone', description: 'Hands‑on Swift UI challenge.', image: image_url, courseUrl: 'https://www.udemy.com/course/ubereats-clone-swiftui/' },
        { title: 'Advanced ARKit & RealityKit', description: 'AR experiences on iOS.', image: image_url, courseUrl: 'https://www.udemy.com/course/arkit-realitykit-augmented-reality/' }
      ]
    }
  },

  Netflix: {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    description: "Courses aligned with Netflix’s tech stack like microservices, big data, and scalability",
    courses: {
      recommended: [
        { title: 'Scalable System Design', description: 'Design systems like Netflix’s.', image: image_url, courseUrl: 'https://www.udemy.com/course/scalability-design/' },
        { title: 'Event-Driven Architecture', description: 'Microservices & event sourcing.', image: image_url, courseUrl: 'https://www.udemy.com/course/event-driven-architecture/' },
        { title: 'Big Data Pipelines', description: 'Process large streams of data.', image: image_url, courseUrl: 'https://www.udemy.com/course/big-data-engineering/' },
        { title: 'Distributed Systems Deep Dive', description: 'Consensus, partitioning, fault-tolerance.', image: image_url, courseUrl: 'https://www.udemy.com/course/distributed-systems/' }
      ],
      free: [
        { title: 'Intro to Microservices', description: 'Free course from Coursera.', image: image_url, courseUrl: 'https://www.coursera.org/learn/microservices-architecture' },
        { title: 'System Design Basics', description: 'YouTube / free course overview.', image: image_url, courseUrl: 'https://www.udemy.com/course/system-design-basics/' },
        { title: 'Streaming Data 101', description: 'Intro to Kafka & streaming.', image: image_url, courseUrl: 'https://www.udemy.com/course/streaming-data-intro/' },
        { title: 'NoSQL Databases Intro', description: 'Learn MongoDB, Cassandra.', image: image_url, courseUrl: 'https://www.udemy.com/course/nosql-intro/' }
      ],
      paid: [
        { title: 'Big Data Engineering', description: 'Hadoop, Spark hands‑on.', image: image_url, courseUrl: 'https://www.udemy.com/course/the-ultimate-hands-on-hadoop/' },
        { title: 'Microservices with Spring Boot', description: 'Build production services.', image: image_url, courseUrl: 'https://www.udemy.com/course/microservices-with-spring-boot/' },
        { title: 'Kafka Streams & KSQL', description: 'Real-time event pipelines.', image: image_url, courseUrl: 'https://www.udemy.com/course/kafka-streams-ksql-development/' },
        { title: 'Advanced System Design', description: 'High-scale architecture design.', image: image_url, courseUrl: 'https://www.udemy.com/course/advanced-system-design/' }
      ]
    }
  }
};


const VIEWS = {
  COMPANY_SELECTION: 'COMPANY_SELECTION',
  OVERVIEW: 'OVERVIEW',
};

const CompanyBased = () => {
  const [currentView, setCurrentView] = useState(VIEWS.COMPANY_SELECTION);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setCurrentView(VIEWS.OVERVIEW);
  };

  const handleBackToCompanies = () => {
    setSelectedCompany(null);
    setCurrentView(VIEWS.COMPANY_SELECTION);
  };

  const filteredCompanies = Object.entries(companyData).filter(([company]) =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (currentView === VIEWS.COMPANY_SELECTION) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
        <button
          onClick={() => window.history.back()}
          className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Courses
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-[#6A89A7]">
          Choose a Company to View Courses
        </h1>

        {/* 🔍 Search Bar */}
        <div className="max-w-md mx-auto mb-14 relative">
  <MagnifyingGlassIcon className="h-5 w-5 text-[#6A89A7] absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
  <input
    type="text"
    placeholder="Search companies..."
    className="w-full pl-10 pr-4 py-2 border border-[#6A89A7] rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A89A7]"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18 max-w-6xl mx-auto ">
          {filteredCompanies.map(([company, data]) => (
            <div
              key={company}
              onClick={() => handleCompanySelect(company)}
              className="bg-white border-l-4 border-[#6A89A7] rounded-2xl shadow-md p-6 ..."
            >
              <img src={data.logo} alt={company} className="w-16 h-16 object-contain mb-4 mx-auto" />

              <h2 className="text-xl font-semibold text-[#384959] mb-2">{company}</h2>
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentView === VIEWS.OVERVIEW) {
    const company = companyData[selectedCompany];
    return (
      <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">
        <button
          onClick={handleBackToCompanies}
          className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Companies
        </button>
        <h1 className="text-3xl font-bold mb-8 text-[#6A89A7] text-center">{selectedCompany} Course Overview</h1>

        {['recommended', 'free', 'paid'].map((type) => (
          <div className="mb-10" key={type}>
            <h2 className="text-2xl font-semibold mb-4 text-[#384959] capitalize">{type} Courses</h2>
            {company.courses[type].length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {company.courses[type].map((course, index) => (
                  <div key={index} className="bg-white rounded-2xl p-5 shadow hover:shadow-2xl transition transform hover:scale-105 flex flex-col">
                    <img src={course.image} alt={course.title} className="mb-3 rounded h-40 object-cover" />
                    <h3 className="text-lg font-semibold text-[#384959] mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-700 flex-grow">{course.description}</p>
                    <a
                      href={course.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-center bg-[#6A89A7] text-white px-4 py-2 rounded-lg hover:bg-[#384959] transition"
                    >
                      Go to Course →
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No {type} courses available.</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default CompanyBased;
