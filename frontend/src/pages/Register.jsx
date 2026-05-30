import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Signup successful!");
      window.location.href = "/login";
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#BDDDFC] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#384959] mb-2">Join ThiranAI</h2>
        <p className="text-[#6A89A7] mb-6">Create your account</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={form.username}
            onChange={handleChange}
            className="p-3 rounded-lg border border-[#88BDF2] focus:outline-none focus:ring-2 focus:ring-[#6A89A7]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-[#88BDF2] focus:outline-none focus:ring-2 focus:ring-[#6A89A7]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="p-3 rounded-lg border border-[#88BDF2] focus:outline-none focus:ring-2 focus:ring-[#6A89A7]"
          />
          <button
            type="submit"
            className="bg-[#6A89A7] text-white font-semibold py-3 rounded-lg hover:bg-[#384959] transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#384959]">Already have an account?</p>
          <button
            onClick={() => (window.location.href = "/login")}
            className="mt-2 text-white bg-[#88BDF2] px-4 py-2 rounded-lg hover:bg-[#6A89A7] transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
