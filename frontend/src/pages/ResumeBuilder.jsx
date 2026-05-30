// import React, { useState } from "react";

// const ResumeBuilder = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     linkedin: "",
//     github: "",
//     education: [{ degree: "", school: "", year: "", score: "" }],
//     internships: [{ title: "", company: "", duration: "", description: "" }],
//     projects: [{ name: "", tech: "", description: "" }],
//     certifications: [{ name: "", platform: "", year: "" }],
//     skills: "",
//     achievements: "",
//   });

//   // Update state for input
//   const handleChange = (e, section, index = null, field = null) => {
//     if (section === "personal") {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     } else {
//       const updatedSection = [...formData[section]];
//       updatedSection[index][field] = e.target.value;
//       setFormData({ ...formData, [section]: updatedSection });
//     }
//   };

//   return (
//     <div className="min-h-screen px-4 py-10 sm:px-8 bg-[#F8FAFC]">
//       <h1 className="text-3xl font-bold text-center mb-10 text-[#384959]">
//         Build Your <span className="text-[#6A89A7]">Resume</span>
//       </h1>

//       <form className="space-y-10 max-w-4xl mx-auto">
//         {/* Personal Info */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-[#384959]">Personal Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="input" />
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
//             <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="input" />
//             <input type="url" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} className="input" />
//             <input type="url" name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} className="input" />
//           </div>
//         </section>

//         {/* Education */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-[#384959]">Education</h2>
//           {formData.education.map((edu, idx) => (
//             <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <input placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, "education", idx, "degree")} className="input" />
//               <input placeholder="School" value={edu.school} onChange={(e) => handleChange(e, "education", idx, "school")} className="input" />
//               <input placeholder="Year" value={edu.year} onChange={(e) => handleChange(e, "education", idx, "year")} className="input" />
//               <input placeholder="CGPA/Percentage" value={edu.score} onChange={(e) => handleChange(e, "education", idx, "score")} className="input" />
//             </div>
//           ))}
//         </section>

//         {/* Internships */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-[#384959]">Internships</h2>
//           {formData.internships.map((item, idx) => (
//             <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <input placeholder="Title" value={item.title} onChange={(e) => handleChange(e, "internships", idx, "title")} className="input" />
//               <input placeholder="Company" value={item.company} onChange={(e) => handleChange(e, "internships", idx, "company")} className="input" />
//               <input placeholder="Duration" value={item.duration} onChange={(e) => handleChange(e, "internships", idx, "duration")} className="input" />
//               <textarea placeholder="Description" value={item.description} onChange={(e) => handleChange(e, "internships", idx, "description")} className="input" />
//             </div>
//           ))}
//         </section>

//         {/* Projects */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-[#384959]">Projects</h2>
//           {formData.projects.map((proj, idx) => (
//             <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <input placeholder="Project Name" value={proj.name} onChange={(e) => handleChange(e, "projects", idx, "name")} className="input" />
//               <input placeholder="Tech Stack" value={proj.tech} onChange={(e) => handleChange(e, "projects", idx, "tech")} className="input" />
//               <textarea placeholder="Description" value={proj.description} onChange={(e) => handleChange(e, "projects", idx, "description")} className="input" />
//             </div>
//           ))}
//         </section>

//         {/* Certifications */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-[#384959]">Certifications</h2>
//           {formData.certifications.map((cert, idx) => (
//             <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//               <input placeholder="Certificate Name" value={cert.name} onChange={(e) => handleChange(e, "certifications", idx, "name")} className="input" />
//               <input placeholder="Platform" value={cert.platform} onChange={(e) => handleChange(e, "certifications", idx, "platform")} className="input" />
//               <input placeholder="Year" value={cert.year} onChange={(e) => handleChange(e, "certifications", idx, "year")} className="input" />
//             </div>
//           ))}
//         </section>

//         {/* Skills & Achievements */}
//         <section className="bg-white p-6 rounded-xl shadow space-y-4">
//           <h2 className="text-xl font-semibold text-[#384959]">Skills</h2>
//           <textarea
//             rows="3"
//             placeholder="Eg: Python, Java, MERN Stack, SQL..."
//             value={formData.skills}
//             onChange={(e) => handleChange(e, "personal")}
//             name="skills"
//             className="input"
//           />

//           <h2 className="text-xl font-semibold text-[#384959]">Achievements</h2>
//           <textarea
//             rows="3"
//             placeholder="Eg: Leetcode – 320 problems | Hackerrank 5⭐ Python"
//             value={formData.achievements}
//             onChange={(e) => handleChange(e, "personal")}
//             name="achievements"
//             className="input"
//           />
//         </section>

//         {/* Submit */}
//         <div className="flex justify-center mt-10">
//           <button
//             type="submit"
//             className="bg-[#6A89A7] text-white px-6 py-3 rounded-lg hover:bg-[#384959] transition"
//           >
//             Generate Resume
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ResumeBuilder;



import React, { useState, useRef } from "react";
// import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: [{ degree: "", school: "", year: "", score: "" }],
    internships: [{ title: "", company: "", duration: "", description: "" }],
    projects: [{ name: "", tech: "", description: "", year: "" }],
    certifications: [{ name: "", platform: "", year: "" }],
    skills: [""],         // array of strings
    achievements: [""],   // array of strings
  });

  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Generic handler that supports:
  // - personal fields (section === "personal")
  // - array of objects: handleChange(e, "education", idx, "degree")
  // - array of strings: handleChange(e, "skills", idx)  (field === null)
  const handleChange = (e, section, index = null, field = null) => {
    if (section === "personal") {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      return;
    }

    setFormData((prev) => {
      const updatedSection = Array.isArray(prev[section]) ? [...prev[section]] : [];

      if (field === null) {
        // arrays of primitives (strings) like skills, achievements
        updatedSection[index] = e.target.value;
      } else {
        // arrays of objects (education, internships, projects...)
        const item = updatedSection[index] ? { ...updatedSection[index] } : {};
        item[field] = e.target.value;
        updatedSection[index] = item;
      }

      return { ...prev, [section]: updatedSection };
    });
  };

  // Add new item to a section
  const addItem = (section) => {
    const templates = {
      education: { degree: "", school: "", year: "", score: "" },
      internships: { title: "", company: "", duration: "", description: "" },
      projects: { name: "", tech: "", description: "", year: "" },
      certifications: { name: "", platform: "", year: "" },
      skills: "",           // string template for arrays of strings
      achievements: "",     // string template
    };

    setFormData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), templates[section]],
    }));
  };

  // Remove item from a section
  const removeItem = (section, index) => {
    setFormData((prev) => {
      const updated = (prev[section] || []).filter((_, i) => i !== index);
      return { ...prev, [section]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
    // small delay sometimes helps with html2pdf render if required
  };

  const resumeRef = useRef();

  const handleDownload = async (method = "client") => {
    try {
      setIsDownloading(true);

      if (method === "server") {
        // Server-side PDF generation
        const response = await fetch("http://localhost:8000/api/resume/generate-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Server PDF generation failed");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${(formData.fullName || "Resume").replace(/\s+/g, "_")}_Resume.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        // Client-side generation
        const element = resumeRef.current;
        if (!element) {
          alert("Resume content not available.");
          return;
        }

        const filename = formData.fullName
          ? `${formData.fullName.replace(/\s+/g, "_")}_Resume.pdf`
          : "Resume.pdf";

        const opt = {
          margin: 0.5,
          filename,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        };

        // small debounce to let fonts/images settle
        await new Promise((r) => setTimeout(r, 200));
        await html2pdf().set(opt).from(element).save();
      }
    } catch (err) {
      console.error("PDF Download Error:", err);
      alert("Error generating PDF. Please try again or use a different method.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 sm:px-8 bg-[#F8FAFC]">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#384959]">
        Build Your <span className="text-[#6A89A7]">Resume</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl mx-auto">
        {/* Personal Info */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#384959]">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleChange(e, "personal")}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e, "personal")}
              className="input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleChange(e, "personal")}
              className="input"
            />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.linkedin}
              onChange={(e) => handleChange(e, "personal")}
              className="input"
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              value={formData.github}
              onChange={(e) => handleChange(e, "personal")}
              className="input"
            />
          </div>
        </section>

        {/* Education */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#384959]">Education</h2>
          {formData.education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, "education", idx, "degree")}
                className="input"
              />
              <input
                placeholder="School"
                value={edu.school}
                onChange={(e) => handleChange(e, "education", idx, "school")}
                className="input"
              />
              <input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => handleChange(e, "education", idx, "year")}
                className="input"
              />
              <input
                placeholder="CGPA/Percentage"
                value={edu.score}
                onChange={(e) => handleChange(e, "education", idx, "score")}
                className="input"
              />
              <div className="col-span-full">
                <button type="button" onClick={() => removeItem("education", idx)} className="text-blue-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addItem("education")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Education
          </button>
        </section>

        {/* Internships */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#384959]">Internships</h2>
          {formData.internships.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Title"
                value={item.title}
                onChange={(e) => handleChange(e, "internships", idx, "title")}
                className="input"
              />
              <input
                placeholder="Company"
                value={item.company}
                onChange={(e) => handleChange(e, "internships", idx, "company")}
                className="input"
              />
              <input
                placeholder="Duration"
                value={item.duration}
                onChange={(e) => handleChange(e, "internships", idx, "duration")}
                className="input"
              />
              <textarea
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleChange(e, "internships", idx, "description")}
                className="input"
              />
              <div className="col-span-full">
                <button type="button" onClick={() => removeItem("internships", idx)} className="text-blue-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addItem("internships")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Internship
          </button>
        </section>

        {/* Projects */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#384959]">Projects</h2>
          {formData.projects.map((proj, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Project Name"
                value={proj.name}
                onChange={(e) => handleChange(e, "projects", idx, "name")}
                className="input"
              />
              <input
                placeholder="Tech Stack"
                value={proj.tech}
                onChange={(e) => handleChange(e, "projects", idx, "tech")}
                className="input"
              />
              <textarea
                placeholder="Description"
                value={proj.description}
                onChange={(e) => handleChange(e, "projects", idx, "description")}
                className="input"
              />
              <input
                placeholder="Year (optional)"
                value={proj.year}
                onChange={(e) => handleChange(e, "projects", idx, "year")}
                className="input"
              />
              <div className="col-span-full">
                <button type="button" onClick={() => removeItem("projects", idx)} className="text-blue-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addItem("projects")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Project
          </button>
        </section>

        {/* Certifications */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-[#384959]">Certifications</h2>
          {formData.certifications.map((cert, idx) => (
            <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <input
                placeholder="Certificate Name"
                value={cert.name}
                onChange={(e) => handleChange(e, "certifications", idx, "name")}
                className="input"
              />
              <input
                placeholder="Platform"
                value={cert.platform}
                onChange={(e) => handleChange(e, "certifications", idx, "platform")}
                className="input"
              />
              <input
                placeholder="Year"
                value={cert.year}
                onChange={(e) => handleChange(e, "certifications", idx, "year")}
                className="input"
              />
              <div className="col-span-full">
                <button type="button" onClick={() => removeItem("certifications", idx)} className="text-blue-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addItem("certifications")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Certification
          </button>
        </section>

        {/* Skills & Achievements */}
        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-[#384959]">Skills</h2>
          {formData.skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 mb-2">
              <input
                placeholder="e.g. Python"
                value={skill}
                onChange={(e) => handleChange(e, "skills", idx)} // field null => primitive array
                className="input flex-1"
              />
              <button type="button" onClick={() => removeItem("skills", idx)} className="text-blue-500">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addItem("skills")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Skill
          </button>

          <h2 className="text-xl font-semibold text-[#384959]">Achievements</h2>
          {formData.achievements.map((ach, idx) => (
            <div key={idx} className="flex items-center gap-3 mb-2">
              <input
                placeholder="e.g. LeetCode - 320 problems"
                value={ach}
                onChange={(e) => handleChange(e, "achievements", idx)}
                className="input flex-1"
              />
              <button type="button" onClick={() => removeItem("achievements", idx)} className="text-blue-500">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addItem("achievements")} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Achievement
          </button>
        </section>

        {/* Submit */}
        <div className="flex justify-center mt-10">
          <button type="submit" className="bg-[#6A89A7] text-white px-6 py-3 rounded-lg hover:bg-[#384959] transition">
            Generate Resume
          </button>
        </div>
      </form>

      {/* Resume Preview */}
      {showPreview && (
        <div
          ref={resumeRef}
          className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-none shadow-none text-[12px] leading-snug"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <h1 className="text-center text-lg font-bold tracking-wide">{formData.fullName || ""}</h1>

          {/* Contact */}
          <div className="mt-2 text-[11px] pt-2">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div><strong>Email:</strong> {formData.email || "-"}</div>
              <div><strong>Phone:</strong> {formData.phone || "-"}</div>
              <div>
                {formData.linkedin ? (
                  <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>
                ) : (
                  <span>LinkedIn: -</span>
                )}
              </div>
              <div>
                {formData.github ? (
                  <a href={formData.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
                ) : (
                  <span>GitHub: -</span>
                )}
              </div>
            </div>
          </div>

          <br />

          {/* EDUCATION */}
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase">EDUCATION</h2>
            <hr className="border-t-2 border-black my-2" />
            <div className="space-y-1">
              {formData.education.map((edu, idx) => {
                if (!(edu.degree || edu.school)) return null;
                return (
                  <div key={idx} className="flex justify-between">
                    <div className="pr-4">
                      <div className="font-semibold">{edu.degree} - {edu.school}</div>
                      <div className="text-[11px]">{edu.score && <span>{edu.score} </span>}</div>
                    </div>
                    <div className="text-right text-[11px]">{edu.year}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* INTERNSHIPS */}
          {formData.internships.some(i => i.title || i.company) && (
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase">INTERNSHIP</h2>
              <hr className="border-t-2 border-black my-2" />
              <div className="space-y-3">
                {formData.internships.map((intern, idx) => {
                  if (!(intern.title || intern.company)) return null;
                  return (
                    <div key={idx}>
                      <div className="flex justify-between items-start">
                        <div className="font-semibold">{intern.title} <span className="font-normal">|</span> <span className="font-semibold">{intern.company}</span></div>
                        <div className="text-[11px]">[{intern.duration}]</div>
                      </div>
                      {intern.description && (
                        <ul className="list-disc ml-5 mt-1 text-[11px]">
                          {intern.description.split("\n").map((line, i) => line.trim() && <li key={i}>{line}</li>)}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PROJECTS */}
          {formData.projects.some(p => p.name || p.tech) && (
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase">PROJECTS</h2>
              <hr className="border-t-2 border-black my-2" />
              <div className="space-y-3">
                {formData.projects.map((proj, idx) => {
                  if (!(proj.name || proj.tech)) return null;
                  return (
                    <div key={idx}>
                      <div className="flex justify-between">
                        <div className="font-semibold">{proj.name}</div>
                        <div className="text-[11px]">{proj.year ?? ""}</div>
                      </div>
                      <div className="text-[11px] ml-0 mt-1">
                        <strong className="mr-2">•</strong>
                        {proj.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CERTIFICATIONS */}
          {formData.certifications.some(c => c.name || c.platform) && (
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase">CERTIFICATIONS</h2>
              <hr className="border-t-2 border-black my-2" />
              <div className="grid grid-cols-1 gap-1 text-[11px]">
                {formData.certifications.map((cert, idx) => {
                  if (!(cert.name || cert.platform)) return null;
                  return (
                    <div key={idx} className="flex justify-between">
                      <div>{cert.name} <span className="text-[#0f3057]">|</span> <span className="text-[11px]">{cert.platform}</span></div>
                      <div className="text-[11px]">{cert.year}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ACHIEVEMENTS */}
          {formData.achievements && formData.achievements.length > 0 && (
            <div className="mb-4">
              <h2 className="text-sm font-bold uppercase">ACHIEVEMENTS</h2>
              <hr className="border-t-2 border-black my-2" />
              <div className="text-[11px]">
                {formData.achievements.map((line, i) => line && <div key={i}>• {line}</div>)}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {formData.skills && formData.skills.length > 0 && (
            <div className="mb-2">
              <h2 className="text-sm font-bold uppercase">SKILLS</h2>
              <hr className="border-t-2 border-black my-2" />
              <div className="text-[11px]">{formData.skills.filter(Boolean).join(", ")}</div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => handleDownload("client")}
              className="bg-[#6A89A7] text-white px-4 py-2 rounded hover:bg-[#384959] transition text-sm"
            >
              Download as PDF
            </button>
            <button
              onClick={() => setShowPreview(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition text-sm"
            >
              Back to Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
