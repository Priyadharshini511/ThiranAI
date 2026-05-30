
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();

      // ✅ Save JWT & username in localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("username", data.username);

      alert("Login successful!");
      window.location.href = "/dashboard"; // Redirect after login
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#88BDF2]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-[#384959]">Welcome to ThiranAI</h2>
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#6A89A7] text-white py-2 rounded hover:bg-[#384959]"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

