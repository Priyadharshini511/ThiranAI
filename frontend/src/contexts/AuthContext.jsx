// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

useEffect(() => {
  const interval = setInterval(() => {
    if (!isTokenValid()) {
      logout();
    }
  }, 1000 * 60); // check every minute

  return () => clearInterval(interval);
}, []);

 const signup = async ({ username, email, password }) => {
  const response = await axios.post("http://localhost:8000/signup", {
    username,
    email,
    password,
  });
  return response.data;
};

  const login = async (email, password) => {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Login failed");
    }

    const data = await response.json();
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("username", data.username);
    setToken(data.access_token);
    setUsername(data.username);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout,signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
