import "./Register.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    if (!registeredUsers) {
      localStorage.setItem("registeredUsers", JSON.stringify([newUser]));
    } else {
      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    }
    navigate("/login");
  };
  return (
    <>
      <button onClick={handleButtonClick}>Go to login</button>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
