import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles.css';

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("/api/register", { name, email, password });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        alert("Registration failed: " + error.response.data.message);
      } else {
        alert("Registration failed: An unknown error occurred");
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleRegister}>Register</button>
      <a href="/">Already have an account? Login</a>
    </div>
  );
};

export default Register;
