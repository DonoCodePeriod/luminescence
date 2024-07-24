import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("/api/login", { email, password });
      navigate("/profile");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("Login failed: An unknown error occurred");
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <a href="/register">Don't have an account? Register</a>
    </div>
  );
};

export default Login;
