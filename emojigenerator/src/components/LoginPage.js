import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nickname.trim()) {
      navigate("/create-story", { state: { nickname } });
    } else {
      alert("Please enter a nickname.");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        className="login-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          borderRadius: "8px",
          backgroundColor: "#333",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          width: "300px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>
        <input
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#222",
            color: "#fff",
            textAlign: "center", 
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#6200ea",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
