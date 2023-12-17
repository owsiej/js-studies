import { useState } from "react";

import "./UserForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassowrd] = useState(false);
  const [age, setAge] = useState();
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSetAge = (value) => {
    if ((value > 0 && value < 101) || value.length === 0) {
      setAge(value);
    }
  };

  return (
    <form className="UserForm">
      <input
        type="text"
        value={userName}
        onChange={handleChangeUserName}
      ></input>
      <input
        type={showPassword ? "text" : "password"}
        value={userPassword}
        onChange={handleChangeUserPassword}
      />
      <button type="button" onClick={() => setShowPassowrd(!showPassword)}>
        {showPassword ? "Hide password" : "Show password"}
      </button>
      <input
        type="number"
        value={age}
        onChange={(e) => handleSetAge(e.target.value)}
      />
    </form>
  );
};

export default UserForm;
