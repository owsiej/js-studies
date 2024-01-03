import { useState } from "react";

import "./UserForm.css";

const foodPreferences = ["tofu", "beans", "chicken", "beef", "fish"];

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState();
  const [isVegan, setIsVegan] = useState(false);
  const [foodPref, setFoodPref] = useState(
    new Array(foodPreferences.length).fill(false)
  );
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

  const handleFoodCheckbox = (pos) => {
    const updateFoodPref = foodPref.map((value, index) =>
      index === pos ? !value : value
    );

    setFoodPref(updateFoodPref);
    console.log(foodPref);
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
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide password" : "Show password"}
      </button>
      <input
        type="number"
        value={age}
        placeholder="age"
        onChange={(e) => handleSetAge(e.target.value)}
      />
      <label>is Vegan?</label>
      <select
        name="vegan"
        value={isVegan}
        onChange={(e) => setIsVegan(e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label>food Preferences</label>
      <div>
        {foodPreferences.map((value, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={value}
              value={value}
              checked={foodPref[index]}
              onChange={() => handleFoodCheckbox(index)}
            />
            {value}
          </label>
        ))}
      </div>
    </form>
  );
};

export default UserForm;
