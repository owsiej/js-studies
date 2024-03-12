import React, { useState } from "react";

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "signedUser",
      JSON.stringify({
        username: username,
        password: password,
      })
    );
    navigate("/dashboard");
  };
  return (
    <>
      <button onClick={handleButtonClick}>Go to dashboard</button>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Zaloguj</button>
      </form>
    </>
  );
};

export default Login;
