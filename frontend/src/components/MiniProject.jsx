// // // import React from "react";

// // // const reactProjects = [
// // //   {
// // //     title: "To-do List App",
// // //     tasks: [
// // //       "Create a new React app using Vite or CRA",
// // //       "Build input + add button for tasks",
// // //       "Store tasks in state and display as a list",
// // //       "Add delete and mark-complete features",
// // //       "Style using CSS modules or Tailwind",
// // //     ],
// // //   },
// // //   {
// // //     title: "Movie Search App",
// // //     tasks: [
// // //       "Use the OMDB API to fetch movie data",
// // //       "Create a search bar for users to input movie titles",
// // //       "Display movie details such as title, year, and poster",
// // //       "Allow users to save favorite movies to local storage",
// // //       "Style using CSS or Tailwind for responsiveness",
// // //     ],
// // //   },
// // //   {
// // //     title: "Expense Tracker App",
// // //     tasks: [
// // //       "Build income/expense form components",
// // //       "Store transactions in state",
// // //       "Calculate and display balance",
// // //       "Show charts using Chart.js",
// // //       "Add localStorage support for persistence",
// // //     ],
// // //   },
// // //   {
// // //     title: "Blog App with Markdown",
// // //     tasks: [
// // //       "Use textarea to input markdown",
// // //       "Convert markdown to HTML preview",
// // //       "Add save/edit/delete functionality",
// // //       "Use localStorage or backend (optional)",
// // //       "Style using Tailwind for readability",
// // //     ],
// // //   },
// // //   {
// // //     title: "Spam Email Classifier",
// // //     tasks: [
// // //       "Collect labeled spam/ham dataset (e.g., SMS Spam Collection)",
// // //       "Preprocess text using NLP techniques",
// // //       "Train a Naive Bayes or Logistic Regression model",
// // //       "Evaluate accuracy and confusion matrix",
// // //       "Build a simple web UI to test emails"
// // //     ],
// // //   },
// // //   {
// // //     title: "Movie Recommendation System",
// // //     tasks: [
// // //       "Use MovieLens or similar dataset",
// // //       "Build collaborative filtering using cosine similarity",
// // //       "Show top-N recommendations for a given user/movie",
// // //       "Use pandas and scikit-learn",
// // //       "Optional: build Flask/Streamlit frontend"
// // //     ],
// // //   },
// // //   {
// // //     title: "Stock Price Prediction",
// // //     tasks: [
// // //       "Fetch historical stock data using yfinance API",
// // //       "Use LSTM or Linear Regression to model price prediction",
// // //       "Visualize data using matplotlib/seaborn",
// // //       "Split into train/test with time-series techniques",
// // //       "Plot prediction vs actual"
// // //     ],
// // //   },
// // //   {
// // //     title: "Face Mask Detection",
// // //     tasks: [
// // //       "Use OpenCV and a face dataset with/without masks",
// // //       "Train a CNN using TensorFlow or PyTorch",
// // //       "Detect faces in real-time using webcam",
// // //       "Classify if wearing a mask or not",
// // //       "Deploy using Streamlit or Flask"
// // //     ],
// // //   },
// // //   {
// // //     title: "Fake News Detector",
// // //     tasks: [
// // //       "Use a fake news dataset with labels",
// // //       "Text preprocessing (TF-IDF, stop words removal)",
// // //       "Train model with Logistic Regression or SVM",
// // //       "Evaluate accuracy and precision",
// // //       "Build basic UI for input news article"
// // //     ],
// // //   }
// // // ];

// // // const MiniProjects = () => {
// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] px-4 py-10 sm:px-8 lg:px-20">
// // //       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#384959] mb-10">
// // //         Build with <span className="text-[#6A89A7]">Mini Projects</span>
// // //       </h1>

// // //       {/* Display vertically */}
// // //       <div className="flex flex-col gap-8 max-w-3xl mx-auto">
// // //         {reactProjects.map((project, index) => (
// // //           <div
// // //             key={index}
// // //             className="bg-white border-l-4 border-[#6A89A7] rounded-2xl shadow p-6 hover:shadow-xl transition hover:scale-[1.02]"

// // //           >
// // //             <h2 className="text-xl font-bold text-[#384959] mb-4 text-center">
// // //               {project.title}
// // //             </h2>
// // //             <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base">
// // //               {project.tasks.map((task, i) => (
// // //                 <li key={i}>{task}</li>
// // //               ))}
// // //             </ol>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MiniProjects;


// // import React, { useState } from "react";

// // // 💡 Full project list organized by domain
// // const domainProjects = {
// //   "Data Science": [
// //     {
// //       title: "Stock Price Prediction",
// //       tasks: [
// //         "Fetch historical stock data using yfinance API",
// //         "Use LSTM or Linear Regression to model price prediction",
// //         "Visualize data using matplotlib/seaborn",
// //         "Split into train/test with time-series techniques",
// //         "Plot prediction vs actual",
// //       ],
// //     },
// //     {
// //       title: "Sales Forecasting Dashboard",
// //       tasks: [
// //         "Import sales data from CSV",
// //         "Use time series forecasting (ARIMA/Prophet)",
// //         "Build visual charts with Plotly/Matplotlib",
// //         "Deploy with Streamlit",
// //         "Include KPI metrics (sales, revenue, profit)",
// //       ],
// //     },
// //     {
// //       title: "Netflix Data Analysis",
// //       tasks: [
// //         "Load Netflix dataset with pandas",
// //         "Clean and filter by genres, ratings",
// //         "Visualize trends using Seaborn",
// //         "Group by year and country",
// //         "Derive insights into most popular categories",
// //       ],
// //     },
// //     {
// //       title: "COVID-19 Data Tracker",
// //       tasks: [
// //         "Scrape COVID data from an API",
// //         "Clean and process data using pandas",
// //         "Plot charts with Matplotlib",
// //         "Add dropdown to filter by country",
// //         "Display latest statistics",
// //       ],
// //     },
// //     {
// //       title: "Airbnb Price Prediction",
// //       tasks: [
// //         "Use a public Airbnb dataset",
// //         "Clean and encode features",
// //         "Train a regression model",
// //         "Evaluate MSE and R² score",
// //         "Deploy using Streamlit or Flask",
// //       ],
// //     },
// //   ],
// //   "Machine Learning": [
// //     {
// //       title: "Spam Email Classifier",
// //       tasks: [
// //         "Collect labeled spam/ham dataset",
// //         "Preprocess text using NLP",
// //         "Train a Naive Bayes model",
// //         "Evaluate accuracy and confusion matrix",
// //         "Build a simple web UI",
// //       ],
// //     },
// //     {
// //       title: "Digit Recognizer (MNIST)",
// //       tasks: [
// //         "Use TensorFlow/Keras with MNIST dataset",
// //         "Train CNN to classify digits",
// //         "Visualize results with matplotlib",
// //         "Deploy as web app",
// //         "Enable image upload or canvas input",
// //       ],
// //     },
// //     {
// //       title: "Iris Flower Classification",
// //       tasks: [
// //         "Use sklearn’s iris dataset",
// //         "Train decision tree or SVM",
// //         "Build confusion matrix",
// //         "Plot decision boundaries",
// //         "Deploy via Streamlit",
// //       ],
// //     },
// //     {
// //       title: "Loan Default Predictor",
// //       tasks: [
// //         "Use UCI loan dataset",
// //         "Clean missing values",
// //         "Train logistic regression model",
// //         "Evaluate ROC-AUC",
// //         "Deploy as REST API",
// //       ],
// //     },
// //     {
// //       title: "Customer Churn Prediction",
// //       tasks: [
// //         "Use Telco churn dataset",
// //         "Preprocess categorical data",
// //         "Train Random Forest",
// //         "Display churn probability",
// //         "Build dashboard with insights",
// //       ],
// //     },
// //   ],
// //   "Software Development": [
// //     {
// //       title: "To-do List App",
// //       tasks: [
// //         "Create new React app",
// //         "Add task input and list",
// //         "Add delete and toggle-complete",
// //         "Store tasks in localStorage",
// //         "Style with Tailwind",
// //       ],
// //     },
// //     {
// //       title: "Movie Search App",
// //       tasks: [
// //         "Use OMDB API to fetch movie data",
// //         "Create search bar and card view",
// //         "Save favorites to localStorage",
// //         "Use Axios and React Hooks",
// //         "Style using Tailwind",
// //       ],
// //     },
// //     {
// //       title: "Expense Tracker",
// //       tasks: [
// //         "Input income/expense values",
// //         "Store transactions in state",
// //         "Calculate total balance",
// //         "Display charts using Chart.js",
// //         "Persist with localStorage",
// //       ],
// //     },
// //     {
// //       title: "Markdown Blog Editor",
// //       tasks: [
// //         "Input markdown using textarea",
// //         "Convert and preview markdown",
// //         "Allow edit/save/delete",
// //         "Store in localStorage or backend",
// //         "Style with readability in mind",
// //       ],
// //     },
// //     {
// //       title: "Quiz App",
// //       tasks: [
// //         "Display MCQ quiz with options",
// //         "Show score after submission",
// //         "Fetch questions from API or JSON",
// //         "Add timer for each question",
// //         "Add results and restart feature",
// //       ],
// //     },
// //   ],
// //   "MLOps": [
// //     {
// //       title: "Model Deployment with Streamlit",
// //       tasks: [
// //         "Train a classification model",
// //         "Save with joblib or pickle",
// //         "Create Streamlit UI for prediction",
// //         "Deploy on Streamlit Cloud",
// //         "Add input form and display result",
// //       ],
// //     },
// //     {
// //       title: "ML Model API with FastAPI",
// //       tasks: [
// //         "Train sklearn model",
// //         "Build FastAPI backend for prediction",
// //         "Accept JSON input and return output",
// //         "Test using Swagger UI",
// //         "Deploy on Render or Heroku",
// //       ],
// //     },
// //     {
// //       title: "Dockerized ML Pipeline",
// //       tasks: [
// //         "Build a simple ML model",
// //         "Write Dockerfile to containerize",
// //         "Run containerized prediction app",
// //         "Expose with REST API",
// //         "Push to Docker Hub",
// //       ],
// //     },
// //     {
// //       title: "CI/CD for ML Models",
// //       tasks: [
// //         "Set up GitHub Actions for model build/test",
// //         "Automate test and deploy steps",
// //         "Use cloud platform (like Vercel/Render)",
// //         "Trigger builds on push",
// //         "Maintain versioning",
// //       ],
// //     },
// //     {
// //       title: "ML Model Monitoring Dashboard",
// //       tasks: [
// //         "Track predictions over time",
// //         "Log inputs, outputs, accuracy",
// //         "Use a database like SQLite/Mongo",
// //         "Plot metrics using Plotly",
// //         "Deploy dashboard with Flask or Streamlit",
// //       ],
// //     },
// //   ],
// //   "UI/UX": [
// //     {
// //       title: "Portfolio Website",
// //       tasks: [
// //         "Build layout with HTML/CSS",
// //         "Use animations with Framer Motion",
// //         "Add about, projects, and contact sections",
// //         "Make responsive with Flex/Grid",
// //         "Deploy with GitHub Pages",
// //       ],
// //     },
// //     {
// //       title: "Responsive Login Form",
// //       tasks: [
// //         "Create login/register page",
// //         "Validate form fields",
// //         "Show password toggle",
// //         "Use Tailwind or SCSS",
// //         "Add success/failure messages",
// //       ],
// //     },
// //     {
// //       title: "Product Landing Page",
// //       tasks: [
// //         "Design mockup in Figma",
// //         "Implement design using React",
// //         "Add animations and transitions",
// //         "Ensure mobile-first responsiveness",
// //         "Include CTA buttons and hero image",
// //       ],
// //     },
// //     {
// //       title: "Theme Switcher UI",
// //       tasks: [
// //         "Create dark/light mode toggle",
// //         "Store theme in localStorage",
// //         "Use Tailwind’s dark mode support",
// //         "Animate theme transition",
// //         "Apply theme to all pages",
// //       ],
// //     },
// //     {
// //       title: "Drag-and-Drop UI Builder",
// //       tasks: [
// //         "Use React DnD or similar library",
// //         "Allow dragging components into layout",
// //         "Save generated layout to JSON",
// //         "Preview final layout",
// //         "Use context for state management",
// //       ],
// //     },
// //   ],
// // };

// // // List of domain names
// // const domains = Object.keys(domainProjects);

// // // Emoji-style icons for each domain
// // const getDomainIcon = (domain) => {
// //   switch (domain) {
// //     case "Data Science":
// //       return "📊";
// //     case "Machine Learning":
// //       return "🤖";
// //     case "Software Development":
// //       return "💻";
// //     case "MLOps":
// //       return "🛠️";
// //     case "UI/UX":
// //       return "🎨";
// //     default:
// //       return "📁";
// //   }
// // };

// // const MiniProjects = () => {
// //   const [selectedDomain, setSelectedDomain] = useState(null);

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] px-4 py-10 sm:px-8 lg:px-20">
// //       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#384959] mb-10">
// //         Build with <span className="text-[#6A89A7]">Mini Projects</span>
// //       </h1>

// //       {/* Domain Selection */}
// //       {!selectedDomain && (
// //         <div className="flex flex-wrap justify-center gap-4 mb-10">
// //           {domains.map((domain) => (
// //             <button
// //               key={domain}
// //               onClick={() => setSelectedDomain(domain)}
// //               className="px-6 py-3 bg-white rounded-full border border-[#6A89A7] text-[#384959] font-semibold hover:bg-[#6A89A7] hover:text-white transition"
// //             >
// //               {domain}
// //             </button>
// //           ))}
// //         </div>
// //       )}

// //       {/* Project List for Selected Domain */}
// //       {selectedDomain && (
// //         <>
// //           <div className="flex justify-between items-center mb-6">
// //             <h2 className="text-2xl sm:text-3xl font-bold text-[#384959]">
// //               {selectedDomain} Projects
// //             </h2>
// //             <button
// //               onClick={() => setSelectedDomain(null)}
// //               className="text-sm text-[#6A89A7] underline hover:text-[#2c3e50]"
// //             >
// //               ← Back to Domains
// //             </button>
// //           </div>

// //           <div className="flex flex-col gap-8 max-w-3xl mx-auto">
// //             {domainProjects[selectedDomain].map((project, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white border-l-4 border-[#6A89A7] rounded-2xl shadow p-6 hover:shadow-xl transition hover:scale-[1.02]"
// //               >
// //                 <h2 className="text-xl font-bold text-[#384959] mb-4 text-center">
// //                   {project.title}
// //                 </h2>
// //                 <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base">
// //                   {project.tasks.map((task, i) => (
// //                     <li key={i}>{task}</li>
// //                   ))}
// //                 </ol>
// //               </div>
// //             ))}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default MiniProjects;

// // import React, { useState } from "react";
// // import {
// //   Brain,
// //   BarChart,
// //   Code,
// //   Palette,
// //   Wrench,
// //   Home,
// // } from "lucide-react";

// // // Domain-wise project list
// // const domainProjects = {
// //   "Data Science": [
// //     {
// //       title: "Stock Price Prediction",
// //       tasks: [
// //         "Fetch historical stock data using yfinance API",
// //         "Use LSTM or Linear Regression to model price prediction",
// //         "Visualize data using matplotlib/seaborn",
// //         "Split into train/test with time-series techniques",
// //         "Plot prediction vs actual",
// //       ],
// //     },
// //     {
// //       title: "Sales Forecasting Dashboard",
// //       tasks: [
// //         "Import sales data from CSV",
// //         "Use time series forecasting (ARIMA/Prophet)",
// //         "Build visual charts with Plotly/Matplotlib",
// //         "Deploy with Streamlit",
// //         "Include KPI metrics (sales, revenue, profit)",
// //       ],
// //     },
// //     {
// //       title: "Netflix Data Analysis",
// //       tasks: [
// //         "Load Netflix dataset with pandas",
// //         "Clean and filter by genres, ratings",
// //         "Visualize trends using Seaborn",
// //         "Group by year and country",
// //         "Derive insights into most popular categories",
// //       ],
// //     },
// //     {
// //       title: "COVID-19 Data Tracker",
// //       tasks: [
// //         "Scrape COVID data from an API",
// //         "Clean and process data using pandas",
// //         "Plot charts with Matplotlib",
// //         "Add dropdown to filter by country",
// //         "Display latest statistics",
// //       ],
// //     },
// //     {
// //       title: "Airbnb Price Prediction",
// //       tasks: [
// //         "Use a public Airbnb dataset",
// //         "Clean and encode features",
// //         "Train a regression model",
// //         "Evaluate MSE and R² score",
// //         "Deploy using Streamlit or Flask",
// //       ],
// //     },
// //   ],
// //   "Machine Learning": [
// //     {
// //       title: "Spam Email Classifier",
// //       tasks: [
// //         "Collect labeled spam/ham dataset",
// //         "Preprocess text using NLP",
// //         "Train a Naive Bayes model",
// //         "Evaluate accuracy and confusion matrix",
// //         "Build a simple web UI",
// //       ],
// //     },
// //     {
// //       title: "Digit Recognizer (MNIST)",
// //       tasks: [
// //         "Use TensorFlow/Keras with MNIST dataset",
// //         "Train CNN to classify digits",
// //         "Visualize results with matplotlib",
// //         "Deploy as web app",
// //         "Enable image upload or canvas input",
// //       ],
// //     },
// //     {
// //       title: "Iris Flower Classification",
// //       tasks: [
// //         "Use sklearn’s iris dataset",
// //         "Train decision tree or SVM",
// //         "Build confusion matrix",
// //         "Plot decision boundaries",
// //         "Deploy via Streamlit",
// //       ],
// //     },
// //     {
// //       title: "Loan Default Predictor",
// //       tasks: [
// //         "Use UCI loan dataset",
// //         "Clean missing values",
// //         "Train logistic regression model",
// //         "Evaluate ROC-AUC",
// //         "Deploy as REST API",
// //       ],
// //     },
// //     {
// //       title: "Customer Churn Prediction",
// //       tasks: [
// //         "Use Telco churn dataset",
// //         "Preprocess categorical data",
// //         "Train Random Forest",
// //         "Display churn probability",
// //         "Build dashboard with insights",
// //       ],
// //     },
// //   ],
// //   "Software Development": [
// //     {
// //       title: "To-do List App",
// //       tasks: [
// //         "Create new React app",
// //         "Add task input and list",
// //         "Add delete and toggle-complete",
// //         "Store tasks in localStorage",
// //         "Style with Tailwind",
// //       ],
// //     },
// //     {
// //       title: "Movie Search App",
// //       tasks: [
// //         "Use OMDB API to fetch movie data",
// //         "Create search bar and card view",
// //         "Save favorites to localStorage",
// //         "Use Axios and React Hooks",
// //         "Style using Tailwind",
// //       ],
// //     },
// //     {
// //       title: "Expense Tracker",
// //       tasks: [
// //         "Input income/expense values",
// //         "Store transactions in state",
// //         "Calculate total balance",
// //         "Display charts using Chart.js",
// //         "Persist with localStorage",
// //       ],
// //     },
// //     {
// //       title: "Markdown Blog Editor",
// //       tasks: [
// //         "Input markdown using textarea",
// //         "Convert and preview markdown",
// //         "Allow edit/save/delete",
// //         "Store in localStorage or backend",
// //         "Style with readability in mind",
// //       ],
// //     },
// //     {
// //       title: "Quiz App",
// //       tasks: [
// //         "Display MCQ quiz with options",
// //         "Show score after submission",
// //         "Fetch questions from API or JSON",
// //         "Add timer for each question",
// //         "Add results and restart feature",
// //       ],
// //     },
// //   ],
// //   MLOps: [
// //     {
// //       title: "Model Deployment with Streamlit",
// //       tasks: [
// //         "Train a classification model",
// //         "Save with joblib or pickle",
// //         "Create Streamlit UI for prediction",
// //         "Deploy on Streamlit Cloud",
// //         "Add input form and display result",
// //       ],
// //     },
// //     {
// //       title: "ML Model API with FastAPI",
// //       tasks: [
// //         "Train sklearn model",
// //         "Build FastAPI backend for prediction",
// //         "Accept JSON input and return output",
// //         "Test using Swagger UI",
// //         "Deploy on Render or Heroku",
// //       ],
// //     },
// //     {
// //       title: "Dockerized ML Pipeline",
// //       tasks: [
// //         "Build a simple ML model",
// //         "Write Dockerfile to containerize",
// //         "Run containerized prediction app",
// //         "Expose with REST API",
// //         "Push to Docker Hub",
// //       ],
// //     },
// //     {
// //       title: "CI/CD for ML Models",
// //       tasks: [
// //         "Set up GitHub Actions for model build/test",
// //         "Automate test and deploy steps",
// //         "Use cloud platform (like Vercel/Render)",
// //         "Trigger builds on push",
// //         "Maintain versioning",
// //       ],
// //     },
// //     {
// //       title: "ML Model Monitoring Dashboard",
// //       tasks: [
// //         "Track predictions over time",
// //         "Log inputs, outputs, accuracy",
// //         "Use a database like SQLite/Mongo",
// //         "Plot metrics using Plotly",
// //         "Deploy dashboard with Flask or Streamlit",
// //       ],
// //     },
// //   ],
// //   "UI/UX": [
// //     {
// //       title: "Portfolio Website",
// //       tasks: [
// //         "Build layout with HTML/CSS",
// //         "Use animations with Framer Motion",
// //         "Add about, projects, and contact sections",
// //         "Make responsive with Flex/Grid",
// //         "Deploy with GitHub Pages",
// //       ],
// //     },
// //     {
// //       title: "Responsive Login Form",
// //       tasks: [
// //         "Create login/register page",
// //         "Validate form fields",
// //         "Show password toggle",
// //         "Use Tailwind or SCSS",
// //         "Add success/failure messages",
// //       ],
// //     },
// //     {
// //       title: "Product Landing Page",
// //       tasks: [
// //         "Design mockup in Figma",
// //         "Implement design using React",
// //         "Add animations and transitions",
// //         "Ensure mobile-first responsiveness",
// //         "Include CTA buttons and hero image",
// //       ],
// //     },
// //     {
// //       title: "Theme Switcher UI",
// //       tasks: [
// //         "Create dark/light mode toggle",
// //         "Store theme in localStorage",
// //         "Use Tailwind’s dark mode support",
// //         "Animate theme transition",
// //         "Apply theme to all pages",
// //       ],
// //     },
// //     {
// //       title: "Drag-and-Drop UI Builder",
// //       tasks: [
// //         "Use React DnD or similar library",
// //         "Allow dragging components into layout",
// //         "Save generated layout to JSON",
// //         "Preview final layout",
// //         "Use context for state management",
// //       ],
// //     },
// //   ],
// // };

// // // Domain icons
// // // const getDomainIcon = (domain) => {
// // //   switch (domain) {
// // //     case "Data Science":
// // //       return "📊";
// // //     case "Machine Learning":
// // //       return "🤖";
// // //     case "Software Development":
// // //       return "💻";
// // //     case "MLOps":
// // //       return "🛠️";
// // //     case "UI/UX":
// // //       return "🎨";
// // //     default:
// // //       return "📁";
// // //   }
// // // };

// // const getDomainIcon = (domain, size = 32) => {
// //   switch (domain) {
// //     case "Data Science":
// //       return <BarChart size={size} />;
// //     case "Machine Learning":
// //       return <Brain size={size} />;
// //     case "Software Development":
// //       return <Code size={size} />;
// //     case "MLOps":
// //       return <Wrench size={size} />;
// //     case "UI/UX":
// //       return <Palette size={size} />;
// //     default:
// //       return <Home size={size} />;
// //   }
// // };

// // const MiniProjects = () => {
// //   const [selectedDomain, setSelectedDomain] = useState(null);
// //   const domains = Object.keys(domainProjects);

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] px-4 py-10 sm:px-8 lg:px-20">
// //       <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#384959] mb-10">
// //         Build with <span className="text-[#6A89A7]">Mini Projects</span>
// //       </h1>

// //       {!selectedDomain && (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
// //           {domains.map((domain) => (
// //             <div
// //               key={domain}
// //               onClick={() => setSelectedDomain(domain)}
// //               className="cursor-pointer bg-white rounded-2xl border border-[#E2E8F0] shadow hover:shadow-md hover:scale-[1.02] transition p-6 text-center"
// //             >
// //               <div className="text-4xl mb-2">{getDomainIcon(domain)}</div>
// //               <h3 className="text-lg font-semibold text-[#384959]">{domain}</h3>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {selectedDomain && (
// //         <>
// //           <div className="flex justify-between items-center mb-6 mt-6">
// //             <h2 className="text-2xl sm:text-3xl font-bold text-[#384959]">
// //               {getDomainIcon(selectedDomain)} {selectedDomain} Projects
// //             </h2>
// //             <button
// //               onClick={() => setSelectedDomain(null)}
// //               className="text-sm text-[#6A89A7] underline hover:text-[#2c3e50]"
// //             >
// //               ← Back to Domains
// //             </button>
// //           </div>

// //           <div className="flex flex-col gap-8 max-w-3xl mx-auto">
// //             {domainProjects[selectedDomain].map((project, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white border-l-4 border-[#6A89A7] rounded-2xl shadow p-6 hover:shadow-xl transition hover:scale-[1.02]"
// //               >
// //                 <h2 className="text-xl font-bold text-[#384959] mb-4 text-center">
// //                   {project.title}
// //                 </h2>
// //                 <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base">
// //                   {project.tasks.map((task, i) => (
// //                     <li key={i}>{task}</li>
// //                   ))}
// //                 </ol>
// //               </div>
// //             ))}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default MiniProjects;


// import {
//   CodeBracketIcon,
//   ChartBarIcon,
//   GlobeAltIcon,
//   PaintBrushIcon,
//   CpuChipIcon,
//   BriefcaseIcon,
//   LightBulbIcon,
//   WrenchScrewdriverIcon,
//   AcademicCapIcon,
//   BuildingOffice2Icon,
//   ShieldCheckIcon,
//   RocketLaunchIcon,
// } from "@heroicons/react/24/outline";

// const domains = [
//   {
//     name: "Software Development",
//     icon: CodeBracketIcon,
//     message: "Build apps, solve problems!",
//   },
//   {
//     name: "Data Science",
//     icon: ChartBarIcon,
//     message: "Uncover insights with data!",
//   },
//   {
//     name: "Machine Learning",
//     icon: CpuChipIcon,
//     message: "Teach machines to think!",
//   },
//   {
//     name: "UI/UX",
//     icon: PaintBrushIcon,
//     message: "Design with purpose!",
//   },
//   {
//     name: "MLOps",
//     icon: WrenchScrewdriverIcon,
//     message: "Bridge Dev and ML!",
//   },
// ];

// const DomainCard = ({ name, Icon, message, onClick }) => (
//   <div
//     onClick={onClick}
//     className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:scale-[1.02] border-t-4 border-[#6A89A7] flex flex-col items-center text-center max-w-xs"
//   >
//     <Icon className="h-10 w-10 text-blue-600 mb-3" />
//     <h3 className="text-lg font-semibold text-[#384959]">{name}</h3>
//     <p className="text-sm text-gray-600 mt-1">{message}</p>
//   </div>
// );

// export default function DomainSelection({ setSelectedDomain }) {
//   return (
//     <div className="flex flex-col items-center space-y-8 mt-10">
//       {/* First Row: 2 domains */}
//       <div className="flex gap-8 justify-center">
//         {domains.slice(0, 2).map((domain, idx) => (
//           <DomainCard
//             key={idx}
//             name={domain.name}
//             Icon={domain.icon}
//             message={domain.message}
//             onClick={() => setSelectedDomain(domain.name)}
//           />
//         ))}
//       </div>

//       {/* Second Row: 2 domains */}
//       <div className="flex gap-8 justify-center">
//         {domains.slice(2, 4).map((domain, idx) => (
//           <DomainCard
//             key={idx}
//             name={domain.name}
//             Icon={domain.icon}
//             message={domain.message}
//             onClick={() => setSelectedDomain(domain.name)}
//           />
//         ))}
//       </div>

//       {/* Third Row: 1 domain centered */}
//       <div className="flex justify-center">
//         <DomainCard
//           name={domains[4].name}
//           Icon={domains[4].icon}
//           message={domains[4].message}
//           onClick={() => setSelectedDomain(domains[4].name)}
//         />
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import {
//   CodeBracketIcon,
//   ChartBarIcon,
//   CpuChipIcon,
//   PaintBrushIcon,
//   WrenchScrewdriverIcon,
// } from "@heroicons/react/24/outline";

// // All domains
// const domains = [
//   {
//     name: "Software Development",
//     icon: CodeBracketIcon,
//     message: "Build apps, solve problems!",
//   },
//   {
//     name: "Data Science",
//     icon: ChartBarIcon,
//     message: "Uncover insights with data!",
//   },
//   {
//     name: "Machine Learning",
//     icon: CpuChipIcon,
//     message: "Teach machines to think!",
//   },
//   {
//     name: "UI/UX",
//     icon: PaintBrushIcon,
//     message: "Design with purpose!",
//   },
//   {
//     name: "MLOps",
//     icon: WrenchScrewdriverIcon,
//     message: "Bridge Dev and ML!",
//   },
// ];

// // Mini projects per domain
// const domainProjects = {
//   "Software Development": [
//     {
//       title: "To-do List App",
//       tasks: [
//         "Create new React app",
//         "Add task input and list",
//         "Add delete and toggle-complete",
//         "Store tasks in localStorage",
//         "Style with Tailwind",
//       ],
//     },
//     {
//       title: "Movie Search App",
//       tasks: [
//         "Use OMDB API to fetch movie data",
//         "Create search bar and card view",
//         "Save favorites to localStorage",
//         "Use Axios and React Hooks",
//         "Style using Tailwind",
//       ],
//     },
//   ],
//   "Data Science": [
//     {
//       title: "Stock Price Prediction",
//       tasks: [
//         "Fetch historical stock data using yfinance API",
//         "Use LSTM or Linear Regression",
//         "Visualize with matplotlib/seaborn",
//         "Split into train/test",
//         "Plot prediction vs actual",
//       ],
//     },
//     {
//       title: "Sales Forecasting Dashboard",
//       tasks: [
//         "Import sales data from CSV",
//         "Use ARIMA/Prophet for forecasting",
//         "Build charts with Plotly",
//         "Deploy with Streamlit",
//         "Include KPI metrics",
//       ],
//     },
//   ],
//   "Machine Learning": [
//     {
//       title: "Spam Email Classifier",
//       tasks: [
//         "Collect labeled dataset",
//         "Preprocess text with NLP",
//         "Train Naive Bayes model",
//         "Evaluate accuracy",
//         "Build simple web UI",
//       ],
//     },
//     {
//       title: "Digit Recognizer (MNIST)",
//       tasks: [
//         "Use TensorFlow/Keras",
//         "Train CNN model",
//         "Visualize with matplotlib",
//         "Deploy as web app",
//         "Add image upload or canvas",
//       ],
//     },
//   ],
//   "UI/UX": [
//     {
//       title: "Portfolio Website",
//       tasks: [
//         "Build layout with HTML/CSS",
//         "Use Framer Motion animations",
//         "Add about, projects, contact sections",
//         "Make it responsive",
//         "Deploy on GitHub Pages",
//       ],
//     },
//     {
//       title: "Responsive Login Form",
//       tasks: [
//         "Create login/register UI",
//         "Validate fields",
//         "Add password toggle",
//         "Style with Tailwind",
//         "Show success/failure message",
//       ],
//     },
//   ],
//   "MLOps": [
//     {
//       title: "Model Deployment with Streamlit",
//       tasks: [
//         "Train a classification model",
//         "Save with joblib or pickle",
//         "Create Streamlit UI",
//         "Deploy on Streamlit Cloud",
//         "Add input form",
//       ],
//     },
//     {
//       title: "ML Model API with FastAPI",
//       tasks: [
//         "Train sklearn model",
//         "Create FastAPI backend",
//         "Accept JSON and return predictions",
//         "Test with Swagger UI",
//         "Deploy on Render/Heroku",
//       ],
//     },
//   ],
// };

// // Card Component
// const DomainCard = ({ name, Icon, message, onClick }) => (
//   <div
//     onClick={onClick}
//     className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:scale-[1.02] border-t-4 border-[#6A89A7] flex flex-col items-center text-center max-w-xs"
//   >
//     <Icon className="h-10 w-10 text-blue-600 mb-3" />
//     <h3 className="text-lg font-semibold text-[#384959]">{name}</h3>
//     <p className="text-sm text-gray-600 mt-1">{message}</p>
//   </div>
// );

// // Main Component
// export default function DomainSelection() {
//   const [selectedDomain, setSelectedDomain] = useState(null);

//   return (
//     <div className="flex flex-col items-center mt-12 px-4 space-y-10">
//       {/* Header */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-[#2B4162]">Mini Project Explorer 🚀</h2>
//         <p className="text-gray-600 mt-2 text-sm">Click a domain to see ideas!</p>
//       </div>

//       {/* Domain Cards */}
//       <div className="flex flex-wrap justify-center gap-8">
//         {domains.map((domain, idx) => (
//           <DomainCard
//             key={idx}
//             name={domain.name}
//             Icon={domain.icon}
//             message={domain.message}
//             onClick={() => setSelectedDomain(domain.name)}
//           />
//         ))}
//       </div>

//       {/* Project Ideas Section */}
//       {selectedDomain && (
//         <div className="w-full max-w-4xl mt-10">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4">
//             {selectedDomain} Project Ideas 💡
//           </h3>
//           <div className="space-y-6">
//             {domainProjects[selectedDomain]?.map((project, idx) => (
//               <div key={idx} className="bg-white p-5 rounded-xl shadow">
//                 <h4 className="text-lg font-bold text-[#384959]">{project.title}</h4>
//                 <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
//                   {project.tasks.map((task, i) => (
//                     <li key={i}>{task}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// import { useState } from "react";
// import {
//   CodeBracketIcon,
//   ChartBarIcon,
//   CpuChipIcon,
//   PaintBrushIcon,
//   WrenchScrewdriverIcon,
// } from "@heroicons/react/24/outline";

// // Domain list with icons and encouragement
// const domains = [
//   {
//     name: "Software Development",
//     icon: CodeBracketIcon,
//     message: "Build apps, solve problems!",
//   },
//   {
//     name: "Data Science",
//     icon: ChartBarIcon,
//     message: "Uncover insights with data!",
//   },
//   {
//     name: "Machine Learning",
//     icon: CpuChipIcon,
//     message: "Teach machines to think!",
//   },
//   {
//     name: "UI/UX",
//     icon: PaintBrushIcon,
//     message: "Design with purpose!",
//   },
//   {
//     name: "MLOps",
//     icon: WrenchScrewdriverIcon,
//     message: "Bridge Dev and ML!",
//   },
// ];

// // Projects for each domain
// const domainProjects = {
//   "Software Development": [
//     {
//       title: "To-do List App",
//       tasks: [
//         "Tech Stack: React, Tailwind CSS, localStorage",
//         "Setup React project",
//         "Add input field and task list",
//         "Enable add, delete, toggle-complete",
//         "Save tasks to localStorage",
//         "Style with Tailwind",
//       ],
//     },
//     {
//       title: "Movie Search App",
//       tasks: [
//         "Tech Stack: React, OMDB API, Axios, Tailwind CSS",
//         "Create search bar",
//         "Fetch data using Axios",
//         "Display movie cards",
//         "Add favorite feature with localStorage",
//       ],
//     },
//     {
//       title: "Expense Tracker",
//       tasks: [
//         "Tech Stack: React, Chart.js, Tailwind CSS",
//         "Input income/expense",
//         "Store in state and localStorage",
//         "Visualize with Chart.js",
//         "Display summary and history",
//       ],
//     },
//     {
//       title: "Quiz App",
//       tasks: [
//         "Tech Stack: React, Open Trivia DB, Tailwind CSS",
//         "Fetch questions from API",
//         "Show MCQs one by one",
//         "Add score counter and timer",
//         "Display result with restart button",
//       ],
//     },
//     {
//       title: "Markdown Blog Editor",
//       tasks: [
//         "Tech Stack: React, Marked.js, Tailwind CSS",
//         "Create textarea input",
//         "Parse markdown to HTML",
//         "Preview formatted content",
//         "Save to localStorage or download",
//       ],
//     },
//   ],

//   "Data Science": [
//     {
//       title: "Stock Price Prediction",
//       tasks: [
//         "Tech Stack: Python, yfinance, LSTM, matplotlib",
//         "Fetch stock data with yfinance",
//         "Preprocess using pandas",
//         "Train LSTM model",
//         "Plot predicted vs actual prices",
//       ],
//     },
//     {
//       title: "Sales Forecasting Dashboard",
//       tasks: [
//         "Tech Stack: Python, Prophet, Plotly, Streamlit",
//         "Import CSV data",
//         "Forecast using Prophet",
//         "Create interactive dashboard",
//         "Deploy on Streamlit Cloud",
//       ],
//     },
//     {
//       title: "Netflix Data Analysis",
//       tasks: [
//         "Tech Stack: Python, pandas, seaborn, matplotlib",
//         "Load and clean Netflix dataset",
//         "Analyze ratings and genres",
//         "Visualize trends by year",
//         "Summarize top categories",
//       ],
//     },
//     {
//       title: "COVID-19 Tracker",
//       tasks: [
//         "Tech Stack: Python, pandas, matplotlib, API",
//         "Scrape or fetch data from API",
//         "Clean and filter using pandas",
//         "Visualize trends per country",
//         "Display latest stats dynamically",
//       ],
//     },
//     {
//       title: "Airbnb Price Prediction",
//       tasks: [
//         "Tech Stack: Python, sklearn, pandas, Flask",
//         "Clean and preprocess Airbnb data",
//         "Train regression model",
//         "Deploy with Flask or Streamlit",
//         "Evaluate with R² score",
//       ],
//     },
//   ],

//   "Machine Learning": [
//     {
//       title: "Spam Email Classifier",
//       tasks: [
//         "Tech Stack: Python, sklearn, NLTK, Flask",
//         "Collect spam/ham dataset",
//         "Preprocess using NLP techniques",
//         "Train Naive Bayes classifier",
//         "Build simple Flask UI",
//       ],
//     },
//     {
//       title: "Digit Recognizer (MNIST)",
//       tasks: [
//         "Tech Stack: Python, Keras, matplotlib",
//         "Load MNIST dataset",
//         "Build CNN model",
//         "Train and test the model",
//         "Deploy web app with Streamlit",
//       ],
//     },
//     {
//       title: "Iris Flower Classifier",
//       tasks: [
//         "Tech Stack: Python, sklearn, seaborn",
//         "Load iris dataset",
//         "Train SVM or Decision Tree",
//         "Visualize decision boundaries",
//         "Deploy using Streamlit",
//       ],
//     },
//     {
//       title: "Loan Default Predictor",
//       tasks: [
//         "Tech Stack: Python, sklearn, Flask",
//         "Use UCI dataset",
//         "Clean and encode features",
//         "Train logistic regression",
//         "Deploy REST API",
//       ],
//     },
//     {
//       title: "Customer Churn Prediction",
//       tasks: [
//         "Tech Stack: Python, sklearn, pandas, Streamlit",
//         "Use Telco churn dataset",
//         "Train Random Forest model",
//         "Show churn probability",
//         "Build interactive dashboard",
//       ],
//     },
//   ],

//   "UI/UX": [
//     {
//       title: "Portfolio Website",
//       tasks: [
//         "Tech Stack: HTML, CSS, JavaScript",
//         "Create layout sections",
//         "Animate with Framer Motion",
//         "Make mobile responsive",
//         "Deploy to GitHub Pages",
//       ],
//     },
//     {
//       title: "Responsive Login Page",
//       tasks: [
//         "Tech Stack: HTML, CSS, Tailwind",
//         "Design form UI",
//         "Validate fields",
//         "Show/hide password toggle",
//         "Display success/fail feedback",
//       ],
//     },
//     {
//       title: "Landing Page Design",
//       tasks: [
//         "Tech Stack: Figma, React, Tailwind",
//         "Design UI in Figma",
//         "Implement in React",
//         "Add hero, features, CTA",
//         "Make responsive with Grid",
//       ],
//     },
//     {
//       title: "Theme Switcher UI",
//       tasks: [
//         "Tech Stack: React, Tailwind CSS",
//         "Add dark/light theme toggle",
//         "Persist with localStorage",
//         "Apply theme across site",
//         "Add animated transitions",
//       ],
//     },
//     {
//       title: "Drag-and-Drop UI Builder",
//       tasks: [
//         "Tech Stack: React, React-DnD",
//         "Enable component drag/drop",
//         "Store layout as JSON",
//         "Preview final UI",
//         "Export layout config",
//       ],
//     },
//   ],

//   "MLOps": [
//     {
//       title: "Streamlit Model Deployment",
//       tasks: [
//         "Tech Stack: Python, sklearn, Streamlit",
//         "Train ML model",
//         "Save with pickle",
//         "Create Streamlit UI",
//         "Deploy on Streamlit Cloud",
//       ],
//     },
//     {
//       title: "FastAPI ML Backend",
//       tasks: [
//         "Tech Stack: Python, FastAPI, sklearn",
//         "Train model",
//         "Build FastAPI server",
//         "Add POST route for predictions",
//         "Test via Swagger UI",
//       ],
//     },
//     {
//       title: "Dockerized ML Pipeline",
//       tasks: [
//         "Tech Stack: Docker, Python, Flask",
//         "Write Dockerfile",
//         "Containerize Flask + model",
//         "Expose endpoint on port",
//         "Push to Docker Hub",
//       ],
//     },
//     {
//       title: "CI/CD for ML Models",
//       tasks: [
//         "Tech Stack: GitHub Actions, Streamlit",
//         "Write build/test workflow",
//         "Trigger on push",
//         "Auto deploy model app",
//         "Notify on Slack/Discord",
//       ],
//     },
//     {
//       title: "Model Monitoring Dashboard",
//       tasks: [
//         "Tech Stack: Python, Plotly, SQLite",
//         "Log predictions in DB",
//         "Track accuracy, drift",
//         "Plot real-time stats",
//         "Deploy dashboard app",
//       ],
//     },
//   ],
// };

// // Card Component
// const DomainCard = ({ name, Icon, message, onClick }) => (
//   <div
//     onClick={onClick}
//     className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:scale-[1.02] border-t-4 border-[#6A89A7] flex flex-col items-center text-center max-w-xs"
//   >
//     <Icon className="h-10 w-10 text-blue-600 mb-3" />
//     <h3 className="text-lg font-semibold text-[#384959]">{name}</h3>
//     <p className="text-sm text-gray-600 mt-1">{message}</p>
//   </div>
// );

// // Main Component
// export default function DomainSelection() {
//   const [selectedDomain, setSelectedDomain] = useState(null);

//   return (
//     <div className="flex flex-col items-center mt-12 px-4 space-y-10">
//       {/* Header */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-[#2B4162]">
//           Mini Project Explorer
//         </h2>
//         <p className="text-gray-600 mt-2 text-sm">
//           Click on a domain to explore cool ideas!
//         </p>
//       </div>

//       {/* Domain Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {domains.map((domain, idx) => (
//           <DomainCard
//             key={idx}
//             name={domain.name}
//             Icon={domain.icon}
//             message={domain.message}
//             onClick={() => setSelectedDomain(domain.name)}
//           />
//         ))}
//       </div>

//       {/* Project List */}
//       {selectedDomain && (
//         <div className="w-full max-w-4xl mt-10">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
//             {selectedDomain} Project Ideas
//           </h3>
//           <div className="space-y-6">
//             {domainProjects[selectedDomain]?.map((project, idx) => (
//               <div key={idx} className="bg-white p-5 rounded-xl shadow">
//                 <h4 className="text-lg font-bold text-[#384959]">
//                   {project.title}
//                 </h4>
//                 <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
//                   {project.tasks.map((task, i) => (
//                     <li key={i}>{task}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// src/components/MiniProject.jsx
import { useNavigate } from "react-router-dom";
import {
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

// Domain list with icons and encouragement
const domains = [
  {
    name: "Software Development",
    icon: CodeBracketIcon,
    message: "Build apps, solve problems!",
  },
  {
    name: "Data Science",
    icon: ChartBarIcon,
    message: "Uncover insights with data!",
  },
  {
    name: "Machine Learning",
    icon: CpuChipIcon,
    message: "Teach machines to think!",
  },
  {
    name: "UI/UX",
    icon: PaintBrushIcon,
    message: "Design with purpose!",
  },
  {
    name: "MLOps",
    icon: WrenchScrewdriverIcon,
    message: "Bridge Dev and ML!",
  },
];

// Card Component
const DomainCard = ({ name, Icon, message, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white p-6 rounded-2xl shadow hover:shadow-xl transition hover:scale-[1.02] border-t-4 border-[#6A89A7] flex flex-col items-center text-center max-w-xs"
  >
    <Icon className="h-10 w-10 text-blue-600 mb-3" />
    <h3 className="text-lg font-semibold text-[#384959]">{name}</h3>
    <p className="text-sm text-gray-600 mt-1">{message}</p>
  </div>
);

export default function DomainSelection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-12 px-4 space-y-10">
      {/* Header */}
      <div className="text-center">
  <h2 className="text-4xl font-bold text-[#2B4162]">
    Mini Project Explorer
  </h2>
  <p className="text-gray-600 mt-2 text-base">
    Click on a domain to explore cool ideas!
  </p>
</div>

      
<div className="space-y-16"> {/* Increased row spacing */}
  {/* Row 1: domain1 & domain2 */}
  <div className="flex justify-center gap-12">
    <DomainCard
      name={domains[0].name}
      Icon={domains[0].icon}
      message={domains[0].message}
      size="large"
      onClick={() =>
        navigate(`/courses/mini-project/domain/${encodeURIComponent(domains[0].name)}`)
      }
    />
    <DomainCard
      name={domains[1].name}
      Icon={domains[1].icon}
      message={domains[1].message}
      size="large"
      onClick={() =>
        navigate(`/courses/mini-project/domain/${encodeURIComponent(domains[1].name)}`)
      }
    />
  </div>

  {/* Row 2: domain3 centered */}
  <div className="flex justify-center">
    <DomainCard
      name={domains[2].name}
      Icon={domains[2].icon}
      message={domains[2].message}
      size="large"
      onClick={() =>
        navigate(`/courses/mini-project/domain/${encodeURIComponent(domains[2].name)}`)
      }
    />
  </div>

  {/* Row 3: domain4 & domain5 */}
  <div className="flex justify-center gap-12">
    <DomainCard
      name={domains[3].name}
      Icon={domains[3].icon}
      message={domains[3].message}
      size="large"
      onClick={() =>
        navigate(`/courses/mini-project/domain/${encodeURIComponent(domains[3].name)}`)
      }
    />
    <DomainCard
      name={domains[4].name}
      Icon={domains[4].icon}
      message={domains[4].message}
      size="large"
      onClick={() =>
        navigate(`/courses/mini-project/domain/${encodeURIComponent(domains[4].name)}`)
      }
    />
  </div>
</div>
    </div>
  );
}

