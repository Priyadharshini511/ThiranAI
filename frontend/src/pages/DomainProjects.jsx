// src/pages/DomainProjects.jsx
import { useParams } from "react-router-dom";

// The same domainProjects object as you have
const domainProjects = {
  "Software Development": [
    {
      title: "To-do List App",
      tasks: [
        "Tech Stack: React, Tailwind CSS, localStorage",
        "Setup React project",
        "Add input field and task list",
        "Enable add, delete, toggle-complete",
        "Save tasks to localStorage",
        "Style with Tailwind",
      ],
    },
    {
      title: "Movie Search App",
      tasks: [
        "Tech Stack: React, OMDB API, Axios, Tailwind CSS",
        "Create search bar",
        "Fetch data using Axios",
        "Display movie cards",
        "Add favorite feature with localStorage",
      ],
    },
    {
      title: "Expense Tracker",
      tasks: [
        "Tech Stack: React, Chart.js, Tailwind CSS",
        "Input income/expense",
        "Store in state and localStorage",
        "Visualize with Chart.js",
        "Display summary and history",
      ],
    },
    {
      title: "Quiz App",
      tasks: [
        "Tech Stack: React, Open Trivia DB, Tailwind CSS",
        "Fetch questions from API",
        "Show MCQs one by one",
        "Add score counter and timer",
        "Display result with restart button",
      ],
    },
    {
      title: "Markdown Blog Editor",
      tasks: [
        "Tech Stack: React, Marked.js, Tailwind CSS",
        "Create textarea input",
        "Parse markdown to HTML",
        "Preview formatted content",
        "Save to localStorage or download",
      ],
    },
  ],

  "Data Science": [
    {
      title: "Stock Price Prediction",
      tasks: [
        "Tech Stack: Python, yfinance, LSTM, matplotlib",
        "Fetch stock data with yfinance",
        "Preprocess using pandas",
        "Train LSTM model",
        "Plot predicted vs actual prices",
      ],
    },
    {
      title: "Sales Forecasting Dashboard",
      tasks: [
        "Tech Stack: Python, Prophet, Plotly, Streamlit",
        "Import CSV data",
        "Forecast using Prophet",
        "Create interactive dashboard",
        "Deploy on Streamlit Cloud",
      ],
    },
    {
      title: "Netflix Data Analysis",
      tasks: [
        "Tech Stack: Python, pandas, seaborn, matplotlib",
        "Load and clean Netflix dataset",
        "Analyze ratings and genres",
        "Visualize trends by year",
        "Summarize top categories",
      ],
    },
    {
      title: "COVID-19 Tracker",
      tasks: [
        "Tech Stack: Python, pandas, matplotlib, API",
        "Scrape or fetch data from API",
        "Clean and filter using pandas",
        "Visualize trends per country",
        "Display latest stats dynamically",
      ],
    },
    {
      title: "Airbnb Price Prediction",
      tasks: [
        "Tech Stack: Python, sklearn, pandas, Flask",
        "Clean and preprocess Airbnb data",
        "Train regression model",
        "Deploy with Flask or Streamlit",
        "Evaluate with R² score",
      ],
    },
  ],

  "Machine Learning": [
    {
      title: "Spam Email Classifier",
      tasks: [
        "Tech Stack: Python, sklearn, NLTK, Flask",
        "Collect spam/ham dataset",
        "Preprocess using NLP techniques",
        "Train Naive Bayes classifier",
        "Build simple Flask UI",
      ],
    },
    {
      title: "Digit Recognizer (MNIST)",
      tasks: [
        "Tech Stack: Python, Keras, matplotlib",
        "Load MNIST dataset",
        "Build CNN model",
        "Train and test the model",
        "Deploy web app with Streamlit",
      ],
    },
    {
      title: "Iris Flower Classifier",
      tasks: [
        "Tech Stack: Python, sklearn, seaborn",
        "Load iris dataset",
        "Train SVM or Decision Tree",
        "Visualize decision boundaries",
        "Deploy using Streamlit",
      ],
    },
    {
      title: "Loan Default Predictor",
      tasks: [
        "Tech Stack: Python, sklearn, Flask",
        "Use UCI dataset",
        "Clean and encode features",
        "Train logistic regression",
        "Deploy REST API",
      ],
    },
    {
      title: "Customer Churn Prediction",
      tasks: [
        "Tech Stack: Python, sklearn, pandas, Streamlit",
        "Use Telco churn dataset",
        "Train Random Forest model",
        "Show churn probability",
        "Build interactive dashboard",
      ],
    },
  ],

  "UI/UX": [
    {
      title: "Portfolio Website",
      tasks: [
        "Tech Stack: HTML, CSS, JavaScript",
        "Create layout sections",
        "Animate with Framer Motion",
        "Make mobile responsive",
        "Deploy to GitHub Pages",
      ],
    },
    {
      title: "Responsive Login Page",
      tasks: [
        "Tech Stack: HTML, CSS, Tailwind",
        "Design form UI",
        "Validate fields",
        "Show/hide password toggle",
        "Display success/fail feedback",
      ],
    },
    {
      title: "Landing Page Design",
      tasks: [
        "Tech Stack: Figma, React, Tailwind",
        "Design UI in Figma",
        "Implement in React",
        "Add hero, features, CTA",
        "Make responsive with Grid",
      ],
    },
    {
      title: "Theme Switcher UI",
      tasks: [
        "Tech Stack: React, Tailwind CSS",
        "Add dark/light theme toggle",
        "Persist with localStorage",
        "Apply theme across site",
        "Add animated transitions",
      ],
    },
    {
      title: "Drag-and-Drop UI Builder",
      tasks: [
        "Tech Stack: React, React-DnD",
        "Enable component drag/drop",
        "Store layout as JSON",
        "Preview final UI",
        "Export layout config",
      ],
    },
  ],

  "MLOps": [
    {
      title: "Streamlit Model Deployment",
      tasks: [
        "Tech Stack: Python, sklearn, Streamlit",
        "Train ML model",
        "Save with pickle",
        "Create Streamlit UI",
        "Deploy on Streamlit Cloud",
      ],
    },
    {
      title: "FastAPI ML Backend",
      tasks: [
        "Tech Stack: Python, FastAPI, sklearn",
        "Train model",
        "Build FastAPI server",
        "Add POST route for predictions",
        "Test via Swagger UI",
      ],
    },
    {
      title: "Dockerized ML Pipeline",
      tasks: [
        "Tech Stack: Docker, Python, Flask",
        "Write Dockerfile",
        "Containerize Flask + model",
        "Expose endpoint on port",
        "Push to Docker Hub",
      ],
    },
    {
      title: "CI/CD for ML Models",
      tasks: [
        "Tech Stack: GitHub Actions, Streamlit",
        "Write build/test workflow",
        "Trigger on push",
        "Auto deploy model app",
        "Notify on Slack/Discord",
      ],
    },
    {
      title: "Model Monitoring Dashboard",
      tasks: [
        "Tech Stack: Python, Plotly, SQLite",
        "Log predictions in DB",
        "Track accuracy, drift",
        "Plot real-time stats",
        "Deploy dashboard app",
      ],
    },
  ],
};

export default function DomainProjects() {
  const { domainName } = useParams();
  const projects = domainProjects[decodeURIComponent(domainName)];

  return (
    // <div className="max-w-4xl mx-auto mt-12 px-4">
    //   <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
    //     {domainName} Project Ideas
    //   </h2>
    //   {projects ? (
    //     <div className="space-y-6">
    //       {projects.map((project, idx) => (
    //         <div key={idx} className="bg-white p-5 rounded-xl shadow">
    //           <h4 className="text-lg font-bold text-[#384959]">
    //             {project.title}
    //           </h4>
    //           <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
    //             {project.tasks.map((task, i) => (
    //               <li key={i}>{task}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <p className="text-center text-gray-600">No projects found.</p>
    //   )}
    // </div>
//     <div className="max-w-6xl mx-auto mt-16 px-4">
//   <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-10">
//     {domainName} Project Ideas
//   </h2>

//   {projects ? (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {projects.map((project, idx) => (
//         <div
//           key={idx}
//           className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
//         >
//           <h4 className="text-xl font-semibold text-[#2B4162] mb-4">
//             🚀 {project.title}
//           </h4>
//           <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//             {project.tasks.map((task, i) => (
//               <li key={i} className="flex items-start">
//                 <span className="mr-2 mt-1 text-blue-600">✔️</span>
//                 <span>{task}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p className="text-center text-gray-600">No projects found for this domain.</p>
//   )}
// </div>

<div className="max-w-4xl mx-auto mt-16 px-4">
  <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-10">
    {domainName} Project Ideas
  </h2>

  {projects ? (
    <div className="flex flex-col gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group bg-white hover:bg-blue-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
        >
          <h4 className="text-2xl font-bold text-[#1F2937] mb-4 group-hover:text-blue-700 transition duration-300">
            💡 {project.title}
          </h4>
          <ul className="space-y-3 text-gray-700 text-base">
            {project.tasks.map((task, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 mt-1 text-green-500">✔️</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-600">No projects found for this domain.</p>
  )}
</div>

  );
}
