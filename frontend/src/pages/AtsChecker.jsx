

import React, { useState } from "react";

const AtsChecker = () => {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file) => {
    if (file && file.type === "application/pdf") {
      setResume(file);
      setError("");
    } else {
      setError("Only PDF files are allowed.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileChange(file);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    if (!resume || !jd) {
      setError("Please upload a resume and enter a job description.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("job_description", jd);

      const res = await fetch("http://127.0.0.1:8000/check-match/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getColor = (score) => {
    if (score < 50) return "#e53935";
    if (score < 75) return "#f9a825";
    return "#43a047";
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #e3f2fd, #fce4ec)",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', 'Poppins', sans-serif",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Form Section */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: "35px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            minWidth: "320px",
            transition: "box-shadow 0.3s",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "28px",
              fontWeight: "700",
              color: "#2c3e50",
            }}
          >
            🚀 Resume Match Checker
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Upload Box */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("resume-upload").click()}
              style={{
                border: `2px dashed ${isDragging ? "#4a90e2" : "#b0bec5"}`,
                backgroundColor: isDragging ? "#e3f2fd" : "#f9f9f9",
                padding: "30px",
                textAlign: "center",
                borderRadius: "12px",
                cursor: "pointer",
                marginBottom: "25px",
                transition: "all 0.3s",
              }}
            >
              <p style={{ color: "#555", fontSize: "15px" }}>
                Drag & drop or <strong>click</strong> to upload resume (PDF)
              </p>
              {resume && (
                <p
                  style={{
                    color: "#1976d2",
                    fontWeight: "600",
                    marginTop: "12px",
                    fontSize: "14px",
                  }}
                >
                  📄 {resume.name}
                </p>
              )}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

            {/* JD Textarea */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="jd"
                style={{
                  display: "block",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#37474f",
                  fontSize: "14px",
                }}
              >
                Job Description
              </label>
              <textarea
                id="jd"
                rows="5"
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "12px",
                  fontSize: "15px",
                  resize: "vertical",
                  outlineColor: "#64b5f6",
                }}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading
                  ? "linear-gradient(90deg, #a5d6a7, #81c784)"
                  : "linear-gradient(90deg, #42a5f5, #1e88e5)",
                color: "#fff",
                border: "none",
                padding: "14px",
                width: "100%",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 4px 12px rgba(33, 150, 243, 0.2)",
              }}
            >
              {loading ? "Analyzing..." : "Check Match"}
            </button>
          </form>

          {/* Error Display */}
          {error && (
            <div
              style={{
                marginTop: "18px",
                color: "#d32f2f",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              {error}
            </div>
          )}
        </div>

        {/* Result Section */}
        {result && (
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              padding: "35px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              minWidth: "320px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#1e88e5",
                fontWeight: "700",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              ✅ Match Score
            </h3>

            <div style={{ textAlign: "center" }}>
              <svg width="160" height="160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#e0e0e0"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke={getColor(result.score)}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="440"
                  strokeDashoffset={440 - (result.score / 100) * 440}
                  transform="rotate(-90 80 80)"
                  strokeLinecap="round"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dy="8px"
                  fontSize="26px"
                  fill={getColor(result.score)}
                  fontWeight="700"
                >
                  {result.score}%
                </text>
              </svg>

              <p
                style={{
                  marginTop: "25px",
                  color: "#424242",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                <strong>Matched Keywords:</strong>{" "}
                {result.matched_keywords.length > 0
                  ? result.matched_keywords.join(", ")
                  : "No matches found"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtsChecker;

