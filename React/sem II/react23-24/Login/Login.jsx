import "./Login.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import useAutch from "../src/hooks/useAutch";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useAutch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("registeredUsers"));
    const loginUser = users.find((user) => user.username === username);
    loginUser
      ? loginUser.password === password
        ? navigate("/dashboard")
        : (setUsername(""), setPassword(""))
      : (setUsername(""), setPassword(""));
  };
  return (
    <>
      <button onClick={handleButtonClick}>Go to register page</button>
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
