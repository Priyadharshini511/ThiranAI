import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { Upload, Trash2, Eye, Download } from "lucide-react";

const Notes = () => {
  const { username, token } = useAuth();
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/user-notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFiles(res.data.files);
    } catch (error) {
      console.error("Failed to load notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [token]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Please select a file to upload.");
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      await axios.post("http://localhost:8000/upload-note/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "multipart/form-data",
        },
      });
      setSelectedFile(null);
      fetchNotes();
      alert("File uploaded successfully!");
    } catch (error) {
      alert("Upload failed");
      console.error(error);
    }
  };

  const handleDelete = async (filename) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;
    try {
      await axios.delete("http://localhost:8000/delete-note", {
        headers: { Authorization: `Bearer ${token}` },
        params: { filename },
      });
      setFiles((prev) => prev.filter((f) => f !== filename));
    } catch (err) {
      alert("Failed to delete file.");
      console.error(err);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BDDDFC] to-[#88BDF2] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#384959] mb-10 animate-fade-in">
          📄 My Notes
        </h2>

        {/* Upload Section */}
        <form
          onSubmit={handleUpload}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          className={`relative bg-white border-4 ${
            dragActive ? "border-blue-400 bg-blue-50" : "border-dashed border-[#88BDF2]"
          } rounded-xl shadow-md p-6 mb-10 flex flex-col items-center justify-center gap-4 transition-all duration-300 animate-fade-in-up`}
        >
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <div
            onClick={() => inputRef.current.click()}
            className="cursor-pointer text-center text-[#384959]"
          >
            <Upload className="mx-auto mb-2 text-[#6A89A7]" size={32} />
            <p className="text-lg font-medium">
              {selectedFile ? selectedFile.name : "Drag & drop or click to select a file"}
            </p>
            <p className="text-sm text-[#6A89A7]">Only PDF files are recommended</p>
          </div>

          <button
            type="submit"
            className="bg-[#6A89A7] text-white px-6 py-2 rounded-lg hover:bg-[#384959] transition duration-300"
          >
            Upload
          </button>
        </form>

        {/* Notes List */}
        {files.length === 0 ? (
          <div className="text-[#384959] text-lg text-center mt-12 animate-fade-in">
            No notes uploaded yet.
          </div>
        ) : (
          <ul className="space-y-6 mt-8">
            {files.map((file, idx) => {
              const displayName = file.split("__")[1] || file;
              return (
                <li
                  key={idx}
                  className="bg-white shadow-xl rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                >
                  <span className="text-[#384959] font-semibold text-lg mb-3 sm:mb-0">
                    {displayName}
                  </span>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={`http://localhost:8000/download-note?filename=${file}`}
                      className="bg-[#6A89A7] text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#384959] transition duration-300"
                      download
                    >
                      <Download size={16} />
                      Download
                    </a>
                    <button
                      onClick={() =>
                        window.open(
                          `http://localhost:8000/view-note?filename=${file}`,
                          "_blank"
                        )
                      }
                      className="bg-[#88BDF2] text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#6A89A7] transition duration-300"
                    >
                      <Eye size={16} />
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(file)}
                      className="bg-red-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notes;
