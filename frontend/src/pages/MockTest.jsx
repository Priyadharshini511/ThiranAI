// // // import React, { useState } from "react";

// // // const mockData = {
// // //   "Web Development": [
// // //     {
// // //       question: "What does HTML stand for?",
// // //       options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "Hyper Tool Markup Language", "Hyperlink and Text Markup Language"],
// // //       answer: "HyperText Markup Language",
// // //       explanation: "HTML stands for HyperText Markup Language and is used to create webpages."
// // //     },
// // //     {
// // //       question: "Which language is used for styling web pages?",
// // //       options: ["HTML", "JQuery", "CSS", "XML"],
// // //       answer: "CSS",
// // //       explanation: "CSS (Cascading Style Sheets) is used to style HTML elements."
// // //     },
// // //     {
// // //       question: "Which is not a JavaScript Framework?",
// // //       options: ["Python Script", "JQuery", "Django", "NodeJS"],
// // //       answer: "Django",
// // //       explanation: "Django is a Python framework, not a JavaScript framework."
// // //     },
// // //   ],
// // //   "Machine Learning": [
// // //     {
// // //       question: "Which library is used for machine learning in Python?",
// // //       options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
// // //       answer: "Scikit-learn",
// // //       explanation: "Scikit-learn is a popular Python library for machine learning."
// // //     },
// // //     {
// // //       question: "What is overfitting in ML?",
// // //       options: ["Model fits training data too well", "Model underperforms", "Model trains faster", "Model does not train"],
// // //       answer: "Model fits training data too well",
// // //       explanation: "Overfitting happens when the model learns training data too well and fails on new data."
// // //     },
// // //     {
// // //       question: "Which is a type of supervised learning?",
// // //       options: ["Clustering", "Regression", "Dimensionality Reduction", "None"],
// // //       answer: "Regression",
// // //       explanation: "Regression is a supervised learning technique."
// // //     },
// // //   ]
// // // };

// // // const colors = {
// // //   primary: "#6A89A7",
// // //   secondary: "#BDDDFC",
// // //   highlight: "#88BDF2",
// // //   dark: "#384959"
// // // };

// // // const MockTest = () => {
// // //   const [selectedTopic, setSelectedTopic] = useState(null);
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [userAnswers, setUserAnswers] = useState([]);
// // //   const [score, setScore] = useState(null);
// // //   const [showExplanation, setShowExplanation] = useState(false);

// // //   const handleOptionClick = (option) => {
// // //     const isCorrect = option === mockData[selectedTopic][currentQuestion].answer;
// // //     setUserAnswers((prev) => [...prev, { question: currentQuestion, answer: option, isCorrect }]);
// // //     setShowExplanation(true);
// // //   };

// // //   const nextQuestion = () => {
// // //     setShowExplanation(false);
// // //     if (currentQuestion + 1 < mockData[selectedTopic].length) {
// // //       setCurrentQuestion((prev) => prev + 1);
// // //     } else {
// // //       const total = mockData[selectedTopic].length;
// // //       const correct = userAnswers.filter((a) => a.isCorrect).length + (showExplanation ? 1 : 0);
// // //       setScore({ total, correct });
// // //     }
// // //   };

// // //   const resetQuiz = () => {
// // //     setSelectedTopic(null);
// // //     setCurrentQuestion(0);
// // //     setUserAnswers([]);
// // //     setScore(null);
// // //     setShowExplanation(false);
// // //   };

// // //   return (
// // //     <div className="min-h-screen py-16 px-6 bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] text-center">
// // //       {!selectedTopic ? (
// // //         <>
// // //           <h2 className="text-3xl font-bold mb-8 text-[${colors.dark}]">Choose a Domain to Start Mock Test</h2>
// // //           <div className="flex flex-wrap justify-center gap-4">
// // //             {Object.keys(mockData).map((topic, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => setSelectedTopic(topic)}
// // //                 className={`bg-[${colors.primary}] hover:bg-[${colors.highlight}] text-white py-3 px-6 rounded-lg font-medium shadow-md transition`}
// // //               >
// // //                 {topic}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </>
// // //       ) : score ? (
// // //         <div className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-md border border-[${colors.primary}]">
// // //           <h2 className="text-2xl font-bold text-[${colors.dark}] mb-4">Your Score</h2>
// // //           <p className="text-[${colors.primary}] mb-2 font-semibold">Correct: {score.correct} / {score.total}</p>
// // //           <p className="text-[${colors.highlight}]">Percentage: {((score.correct / score.total) * 100).toFixed(1)}%</p>
// // //           <button
// // //             onClick={resetQuiz}
// // //             className={`mt-6 bg-[${colors.secondary}] hover:bg-[${colors.highlight}] text-[${colors.dark}] px-6 py-2 rounded-full font-medium`}
// // //           >
// // //             Try Another Domain
// // //           </button>
// // //         </div>
// // //       ) : (
// // //         <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-md border border-[${colors.primary}]">
// // //           <h3 className="text-lg font-semibold text-[${colors.primary}] mb-4">
// // //             Question {currentQuestion + 1} of {mockData[selectedTopic].length}
// // //           </h3>
// // //           <h2 className="text-xl text-[${colors.dark}] font-bold mb-6">
// // //             {mockData[selectedTopic][currentQuestion].question}
// // //           </h2>
// // //           <div className="flex flex-col gap-3">
// // //             {mockData[selectedTopic][currentQuestion].options.map((option, idx) => (
// // //               <button
// // //                 key={idx}
// // //                 onClick={() => handleOptionClick(option)}
// // //                 disabled={showExplanation}
// // //                 className={`py-2 px-4 border border-[${colors.primary}] rounded-md text-[${colors.dark}] hover:bg-[${colors.secondary}] disabled:opacity-60`}
// // //               >
// // //                 {option}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {showExplanation && (
// // //             <div className="mt-6 text-left border-t pt-4 border-[${colors.primary}]">
// // //               <p className="text-sm text-[${colors.primary}] font-medium mb-1">Explanation:</p>
// // //               <p className="text-[${colors.dark}]">
// // //                 {mockData[selectedTopic][currentQuestion].explanation}
// // //               </p>
// // //               <button
// // //                 onClick={nextQuestion}
// // //                 className={`mt-4 bg-[${colors.highlight}] hover:bg-[${colors.primary}] text-white px-6 py-2 rounded-lg font-medium`}
// // //               >
// // //                 {currentQuestion + 1 === mockData[selectedTopic].length ? "View Score" : "Next"}
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default MockTest;























// // // File: MockInterview.jsx

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const rounds = [
// //   "Aptitude", // Round 1
// //   "Group Discussion", // Round 2
// //   "Coding", // Round 3
// //   "HR Interview", // Round 4
// // ];

// // const quizData = {
// //   Aptitude: [
// //     { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
// //     { question: "What comes next in 2, 4, 6, ?", options: ["7", "8", "9", "10"], answer: "8" },
// //     { question: "Which number is prime?", options: ["4", "6", "7", "9"], answer: "7" },
// //   ],
// //   "Group Discussion": [
// //     { question: "What is the most important GD skill?", options: ["Interrupting", "Listening", "Speaking Fast", "Arguing"], answer: "Listening" },
// //     { question: "GD requires:", options: ["Aggression", "Monopoly", "Team Work", "Silence"], answer: "Team Work" },
// //     { question: "Best way to conclude a GD:", options: ["Summarize", "Start new point", "Disagree", "Argue"], answer: "Summarize" },
// //   ],
// //   Coding: [
// //     { question: "Which is a valid loop?", options: ["repeat", "for", "loop", "skip"], answer: "for" },
// //     { question: "Which is not a data type?", options: ["int", "char", "loop", "float"], answer: "loop" },
// //     { question: "Output of print(2*3)", options: ["5", "6", "8", "23"], answer: "6" },
// //   ],
// //   "HR Interview": [
// //     { question: "Why should we hire you?", options: ["I don't know", "Because I need job", "I bring value", "No idea"], answer: "I bring value" },
// //     { question: "Tell me about yourself?", options: ["I’m shy", "I love coding", "I sleep a lot", "I skip"], answer: "I love coding" },
// //     { question: "Strength?", options: ["Lazy", "Negative", "Hardworking", "Angry"], answer: "Hardworking" },
// //   ],
// // };

// // const Timer = ({ timeLeft, setTimeLeft, onTimeOut }) => {
// //   useEffect(() => {
// //     if (timeLeft <= 0) {
// //       onTimeOut();
// //       return;
// //     }
// //     const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
// //     return () => clearTimeout(timer);
// //   }, [timeLeft]);

// //   return <div className="text-[#384959] font-medium">Time Left: {timeLeft}s</div>;
// // };

// // const MockInterview = () => {
// //   const [currentRound, setCurrentRound] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState("");
// //   const [score, setScore] = useState(0);
// //   const [submittedAnswers, setSubmittedAnswers] = useState([]);
// //   const [timeLeft, setTimeLeft] = useState(30);
// //   const [showResult, setShowResult] = useState(false);

// //   const round = rounds[currentRound];
// //   const questions = quizData[round];
// //   const question = questions[currentQuestion];

// //   const handleAnswer = () => {
// //     const isCorrect = selectedAnswer === question.answer;
// //     if (isCorrect) setScore((prev) => prev + 1);
// //     setSubmittedAnswers((prev) => [...prev, { question: question.question, selected: selectedAnswer, correct: question.answer }]);
// //     setSelectedAnswer("");
// //     setTimeLeft(30);
// //     if (currentQuestion + 1 < questions.length) {
// //       setCurrentQuestion(currentQuestion + 1);
// //     } else {
// //       if (currentRound + 1 < rounds.length) {
// //         setCurrentRound(currentRound + 1);
// //         setCurrentQuestion(0);
// //       } else {
// //         setShowResult(true);
// //       }
// //     }
// //   };

// //   const onTimeOut = () => {
// //     handleAnswer();
// //   };

// //   return (
// //     <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] min-h-screen py-16 px-6">
// //       <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-lg border border-[#88BDF2]">
// //         {!showResult ? (
// //           <>
// //             <h2 className="text-2xl font-bold text-[#384959] mb-4">
// //               Round {currentRound + 1}: {round}
// //             </h2>
// //             <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeOut={onTimeOut} />
// //             <div className="mt-6 text-left">
// //               <h3 className="text-lg font-semibold text-[#6A89A7] mb-4">
// //                 {question.question}
// //               </h3>
// //               <div className="space-y-2">
// //                 {question.options.map((opt, i) => (
// //                   <div key={i} className="flex items-center">
// //                     <input
// //                       type="radio"
// //                       name="option"
// //                       value={opt}
// //                       checked={selectedAnswer === opt}
// //                       onChange={(e) => setSelectedAnswer(e.target.value)}
// //                       className="mr-2 text-[#6A89A7]"
// //                     />
// //                     <label className="text-[#384959]">{opt}</label>
// //                   </div>
// //                 ))}
// //               </div>
// //               <button
// //                 onClick={handleAnswer}
// //                 className="mt-6 px-6 py-2 bg-[#88BDF2] hover:bg-[#6A89A7] text-white rounded-md font-medium"
// //               >
// //                 Submit & Next
// //               </button>
// //             </div>
// //           </>
// //         ) : (
// //           <div className="text-center">
// //             <h2 className="text-2xl font-bold text-[#384959] mb-4">Mock Interview Completed!</h2>
// //             <p className="text-[#6A89A7] text-lg mb-6">
// //               Your total score: <span className="font-bold text-[#384959]">{score} / 12</span>
// //             </p>
// //             <div className="text-left">
// //               {submittedAnswers.map((ans, idx) => (
// //                 <div key={idx} className="mb-4">
// //                   <p className="text-[#384959] font-semibold">Q: {ans.question}</p>
// //                   <p className="text-sm text-[#6A89A7]">
// //                     Your Answer: {ans.selected} | Correct: {ans.correct}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //             <Link
// //               to="/"
// //               className="inline-block mt-6 px-6 py-2 bg-[#88BDF2] hover:bg-[#6A89A7] text-white rounded-md font-medium"
// //             >
// //               Go to Dashboard
// //             </Link>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MockInterview;

















// import React, { useState, useEffect } from "react";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

// const mockData = {
//   aptitude: [
//     { q: "What is 5 + 7?", options: ["10", "12", "14", "15"], answer: "12" },
//     { q: "What comes next: 2, 4, 8, 16, ?", options: ["32", "20", "18", "30"], answer: "32" },
//     { q: "Solve: (3x + 2 = 11)", options: ["x=2", "x=3", "x=5", "x=4"], answer: "x=3" },
//   ],
//   gd: [
//     { q: "Best way to handle team conflict?", options: ["Ignore it", "Escalate", "Listen and resolve", "Avoid tasks"], answer: "Listen and resolve" },
//     { q: "What matters most in a group discussion?", options: ["Dominance", "Communication", "Interrupting", "Silence"], answer: "Communication" },
//     { q: "What should be avoided in GD?", options: ["Respect", "Listening", "Shouting", "Participation"], answer: "Shouting" },
//   ],
//   coding: [
//     { q: "Which of these is a frontend language?", options: ["Python", "HTML", "Java", "C"], answer: "HTML" },
//     { q: "What does CSS stand for?", options: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Styling Set", "None"], answer: "Cascading Style Sheets" },
//     { q: "What is React?", options: ["Framework", "Library", "IDE", "Compiler"], answer: "Library" },
//   ],
//   hr: [
//     { q: "Why should we hire you?", options: ["Because I need a job", "I'm passionate and skilled", "I want money", "I love free coffee"], answer: "I'm passionate and skilled" },
//     { q: "Where do you see yourself in 5 years?", options: ["Sleeping", "CEO", "Growing in your company", "Abroad"], answer: "Growing in your company" },
//     { q: "Biggest strength?", options: ["Laziness", "Punctuality", "Procrastination", "Arrogance"], answer: "Punctuality" },
//   ],
// };

// const rounds = ["aptitude", "gd", "coding", "hr"];

// const MockInterview = () => {
//   const [currentRound, setCurrentRound] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [timer, setTimer] = useState(30);

//   const roundKey = rounds[currentRound];
//   const question = mockData[roundKey][currentQuestion];

//   useEffect(() => {
//     if (timer > 0 && !showResult) {
//       const interval = setInterval(() => setTimer((t) => t - 1), 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       handleNext();
//     }
//   }, [timer, showResult]);

//   const handleOptionClick = (option) => setSelectedOption(option);

//   const handleNext = () => {
//     const key = `${roundKey}-${currentQuestion}`;
//     setAnswers({ ...answers, [key]: selectedOption });
//     setSelectedOption(null);
//     setTimer(30);

//     if (currentQuestion < 2) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else if (currentRound < rounds.length - 1) {
//       setCurrentRound(currentRound + 1);
//       setCurrentQuestion(0);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const getResultIcon = (userAns, correctAns) => {
//     return userAns === correctAns ? (
//       <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block ml-2" />
//     ) : (
//       <XCircleIcon className="h-6 w-6 text-red-500 inline-block ml-2" />
//     );
//   };

//   return (
//     <div className="bg-gradient-to-b from-[#f8fbff] to-[#e3f0fb] min-h-screen py-12 px-6">
//       <h1 className="text-3xl font-bold text-[#384959] text-center mb-6">
//         Mock Interview Simulation
//       </h1>

//       {!showResult ? (
//         <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow border border-[#6A89A7]">
//           <h2 className="text-xl font-semibold text-[#384959] mb-2 capitalize">
//             Round {currentRound + 1}: {roundKey}
//           </h2>
//           <div className="flex justify-between text-sm text-[#6A89A7] mb-4">
//             <span>
//               Question {currentQuestion + 1} / 3
//             </span>
//             <span>⏱️ {timer}s left</span>
//           </div>

//           <p className="text-md text-[#384959] font-medium mb-4">
//             {question.q}
//           </p>

//           <div className="space-y-2">
//             {question.options.map((option, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleOptionClick(option)}
//                 className={`w-full text-left px-4 py-2 rounded-md border transition-all ${
//                   selectedOption === option
//                     ? "bg-[#88BDF2] text-white border-[#384959]"
//                     : "bg-white border-[#BDDDFC] text-[#384959] hover:bg-[#f0f9ff]"
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={handleNext}
//             className="mt-6 px-6 py-2 bg-[#384959] text-white rounded-md hover:bg-[#2c3a49] transition"
//           >
//             {currentRound === rounds.length - 1 && currentQuestion === 2
//               ? "Finish"
//               : "Next"}
//           </button>
//         </div>
//       ) : (
//         <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow border border-[#6A89A7]">
//           <h2 className="text-2xl font-semibold text-[#384959] mb-4">
//             Interview Results
//           </h2>
//           {rounds.map((round, rIndex) => (
//             <div key={round} className="mb-6">
//               <h3 className="text-lg font-semibold text-[#6A89A7] capitalize mb-2">
//                 Round {rIndex + 1}: {round}
//               </h3>
//               {mockData[round].map((q, qIndex) => {
//                 const key = `${round}-${qIndex}`;
//                 const userAns = answers[key];
//                 return (
//                   <div
//                     key={key}
//                     className="mb-2 p-3 rounded-md border border-[#BDDDFC]"
//                   >
//                     <p className="text-[#384959] font-medium">
//                       {q.q}
//                     </p>
//                     <p className="text-sm mt-1">
//                       Your Answer: <span className="font-semibold">{userAns || "Not Answered"}</span>
//                       {getResultIcon(userAns, q.answer)}
//                     </p>
//                     <p className="text-sm">
//                       Correct Answer: <span className="font-semibold">{q.answer}</span>
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MockInterview;




import React, { useState, useEffect, useMemo } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";
/* Small ScoreRing helper (optional, from previous styling) */
const ScoreRing = ({ value, max = 1, size = 120 }) => {
  const pct = Math.round((value / Math.max(1, max)) * 100);
  const ringStyle = { background: `conic-gradient(#27AE60 ${pct * 3.6}deg, #E6EEF7 ${pct * 3.6}deg)` };
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full flex items-center justify-center relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full" style={ringStyle} />
        <div className="rounded-full bg-white flex items-center justify-center" style={{ width: size - 18, height: size - 18, boxShadow: "0 6px 18px rgba(56,73,89,0.08)" }}>
          <div className="text-center">
            <div className="text-lg font-semibold text-[#2f4858]">{pct}%</div>
            <div className="text-xs text-[#6A89A7]">Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MockInterview = () => {
  const [questions, setQuestions] = useState({ aptitude: [], technical: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state
  const [selectedRoundIndex, setSelectedRoundIndex] = useState(null); // null => show round cards. 0 => aptitude, 1 => technical
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);

  const rounds = ["aptitude", "technical"];

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/mocktest/questions");
      if (!response.ok) throw new Error("Failed to fetch questions");
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Determine which rounds we're using: either single selected round OR none (but when none we still show card UI)
  const activeRoundKey = selectedRoundIndex === null ? null : rounds[selectedRoundIndex];
  const currentQuestions = activeRoundKey ? (questions[activeRoundKey] || []) : [];
  const currentQuestionData = currentQuestions[currentQuestion];

  useEffect(() => {
    if (timer > 0 && !showResult && !loading && activeRoundKey !== null) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !loading && activeRoundKey !== null) {
      handleNext();
    }
    // only run timer logic when a round is active
  }, [timer, showResult, loading, activeRoundKey]);

  const handleOptionClick = (option) => setSelectedOption(option);

  // On Next: if single-round mode, finish when last question finishes and show result
  const handleNext = () => {
    // if no active round, nothing to do
    if (!activeRoundKey || !currentQuestionData) return;

    const key = `${activeRoundKey}-${currentQuestion}`;
    setAnswers((prev) => ({ ...prev, [key]: selectedOption }));
    setSelectedOption(null);
    setTimer(30);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion((cq) => cq + 1);
    } else {
      // finished the selected single round
      setShowResult(true);
    }
  };

  const getResultIcon = (userAns, correctAns) =>
    userAns === correctAns ? (
      <CheckCircleIcon className="h-5 w-5 text-green-500 inline-block ml-2" />
    ) : (
      <XCircleIcon className="h-5 w-5 text-red-500 inline-block ml-2" />
    );

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers({});
    setShowResult(false);
    setTimer(30);
    // keep selectedRoundIndex so user continues same round, unless you want to go back to card view
    fetchQuestions();
  };

  const goBackToRounds = () => {
    // return to card selection; clear any in-progress answers
    setSelectedRoundIndex(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswers({});
    setShowResult(false);
    setTimer(30);
  };

  // Compute results **only for the active round** (if selected) or empty
  const resultsSummary = useMemo(() => {
    const summary = {
      totalQuestions: 0,
      totalCorrect: 0,
      roundKey: activeRoundKey
    };
    if (!activeRoundKey) return summary;

    const qs = questions[activeRoundKey] || [];
    let correct = 0;
    qs.forEach((q, idx) => {
      const key = `${activeRoundKey}-${idx}`;
      const userAns = answers[key];
      if (userAns !== undefined && userAns === q.answer) correct += 1;
    });
    summary.round = activeRoundKey;
    summary.totalQuestions = qs.length;
    summary.totalCorrect = correct;
    return summary;
  }, [questions, answers, activeRoundKey]);

  const pieData = [
    { name: "Correct", value: resultsSummary.totalCorrect },
    { name: "Incorrect", value: Math.max(0, resultsSummary.totalQuestions - resultsSummary.totalCorrect) }
  ];
  const COLORS = ["#27AE60", "#E74C3C"];

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-[#f8fbff] to-[#e9f6ff] min-h-screen py-16 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#384959] mx-auto mb-4"></div>
          <p className="text-[#384959] text-lg">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-[#f8fbff] to-[#e9f6ff] min-h-screen py-16 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Error: {error}</p>
          <button onClick={fetchQuestions} className="px-6 py-2 bg-[#384959] text-white rounded-md hover:bg-[#2c3a49] transition">Retry</button>
        </div>
      </div>
    );
  }
// === Render: if no round chosen show cards ===
if (selectedRoundIndex === null) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#eef6ff] via-[#dceeff] to-[#c2e0ff] px-6">
      <h1 className="text-4xl font-extrabold text-center text-[#0f3057] mb-10 drop-shadow-md">
        Choose Your Mock Test
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {rounds.map((r, idx) => (
          <div
            key={r}
            onClick={() => {
              setSelectedRoundIndex(idx);
              setCurrentQuestion(0);
              setAnswers({});
              setShowResult(false);
              setTimer(30);
            }}
            className="cursor-pointer bg-white p-5 rounded-2xl shadow-lg border border-transparent hover:border-[#0f3057] hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-100 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#e6f2ff] rounded-full shadow-sm">
              <span className="text-2xl font-bold text-[#0f3057]">
                {idx + 1}
              </span>
            </div>

            <h2 className="text-xl font-semibold capitalize text-[#0f3057]">
              {r}
            </h2>
            <p className="text-m text-[#517a96] mt-3">
              Take the {r} round of the mock interview.
              <br />
              <span className="font-medium">
                Questions: {(questions[r] || []).length}
              </span>
            </p>

            <div className="mt-6">
              <button className="px-5 py-2 bg-gradient-to-r from-[#0f3057] to-[#42738e] text-white rounded-lg shadow hover:from-[#0c2544] hover:to-[#345b73] transition-all duration-300">
                Start {r}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

  // === Render the single-round test or the single-round result ===
  // === Render the single-round test or the single-round result ===
return (
  <div className="min-h-screen bg-gradient-to-b from-[#eef6ff] via-[#dceeff] to-[#c2e0ff] py-12 px-6 flex items-start justify-center">
    <div className="w-full max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f3057] capitalize drop-shadow-sm">
          {rounds[selectedRoundIndex]} Round
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={goBackToRounds}
            className="px-3 py-1.5 text-sm rounded-md border border-[#E6EDF6] bg-white hover:bg-[#f7fbff] transition"
          >
            Choose Another
          </button>

          <button
            onClick={restartTest}
            className="px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-[#0f3057] to-[#42738e] text-white shadow-sm hover:scale-[1.02] transform transition"
          >
            Restart
          </button>
        </div>
      </div>

      {!showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent hover:border-[#0f3057] transition-all duration-200">
          <div className="flex items-center justify-between text-sm text-[#517a96] mb-4">
            <span>
              Question <span className="font-medium text-[#0f3057]">{currentQuestion + 1}</span> / {currentQuestions.length}
            </span>
            <span>⏱️ <span className="font-medium text-[#0f3057]">{timer}s</span> left</span>
          </div>

          <p className="text-md sm:text-lg text-[#0f3057] font-semibold mb-5">
            {currentQuestionData?.question || "No question found"}
          </p>

          <div className="space-y-3">
            {currentQuestionData?.options?.map((option, idx) => {
              const isSelected = selectedOption === option;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-200 flex items-center justify-between
                    ${isSelected
                      ? "bg-gradient-to-r from-[#0f3057] to-[#42738e] text-white border-transparent shadow-md"
                      : "bg-white border-[#E6F0FA] text-[#334e5f] hover:bg-[#f4fbff]"}`}
                >
                  <span className="truncate">{option}</span>
                  {isSelected && <span className="ml-3 text-sm font-semibold opacity-90">Selected</span>}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-[#517a96]">
              Answered: <span className="font-medium text-[#0f3057]">{Object.keys(answers).length}</span>
            </div>

            <button
              onClick={handleNext}
              className="px-5 py-2 bg-gradient-to-r from-[#0f3057] to-[#42738e] text-white rounded-md shadow-sm hover:scale-[1.02] transform transition"
            >
              {currentQuestion === currentQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-transparent">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-[#0f3057]">Results — {rounds[selectedRoundIndex]}</h2>
              <p className="text-sm text-[#517a96] mt-1">
                {resultsSummary.totalCorrect} / {resultsSummary.totalQuestions} correct
              </p>
            </div>

            <div className="w-40">
              <ScoreRing value={resultsSummary.totalCorrect} max={resultsSummary.totalQuestions || 1} size={100} />
            </div>
          </div>

          <div className="mb-4">
            <div style={{ width: "100%", height: 140 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={50} innerRadius={22} paddingAngle={4}>
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-3">
            {(questions[activeRoundKey] || []).map((q, qIndex) => {
              const key = `${activeRoundKey}-${qIndex}`;
              const userAns = answers[key];
              const isCorrect = userAns !== undefined && userAns === q.answer;
              return (
                <div
                  key={key}
                  className={`p-3 rounded-md border ${isCorrect ? "border-[#E6FAEF] bg-[#fbfff9]" : "border-[#FFF0F0] bg-[#fffafa]"}`}
                >
                  <p className="font-medium text-[#0f3057]">{q.question}</p>
                  <p className="text-sm mt-1">
                    Your Answer: <span className="font-semibold">{userAns ?? "Not Answered"}</span> {getResultIcon(userAns, q.answer)}
                  </p>
                  <p className="text-sm text-[#517a96] mt-1">
                    Correct: <span className="font-semibold text-[#0f3057]">{q.answer}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default MockInterview;
