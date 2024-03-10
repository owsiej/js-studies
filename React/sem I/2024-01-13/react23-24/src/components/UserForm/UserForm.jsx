import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setUserAge] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [isVegan, setIsVegan] = useState("");
  const [foodPreferences, setFoodPreferences] = useState([]);

  const foodPreferencesList = [
    {
      name: "bean",
      isVegan: true,
    },
    {
      name: "chicken",
      isVegan: false,
    },
  ];
  const isVeganOptions = ["", "Yes", "No"];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSetUserAge = (event) => {
    const { value } = event.target;
    console.log(value);
    if (value.length === 0 || (value > 0 && value < 99)) {
      setUserAge(value);
    }
  };

  const handleFoodPreferences = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    if (checked) {
      setFoodPreferences([...foodPreferences, name]);
    } else {
      setFoodPreferences(foodPreferences.filter((item) => item !== name));
    }
  };

  const handleIsVegan = (e) => {
    setIsVegan(e.target.value);
    const selectedValue = e.target.value;
    if (selectedValue === "Yes") {
      setFoodPreferences(foodPreferences.filter((item) => item !== "chicken"));
    }
  };

  const mappedFoodPreferences = () => {
    return foodPreferencesList.filter(el=>).map((el) => {
      return (
        <label key={el.name}>
          <input
            type="checkbox"
            name={el.name}
            checked={foodPreferences.includes(el.name)}
            onChange={(e) => handleFoodPreferences(e)}
          />
          {el.name}
        </label>
      );
    });
  };

  return (
    <>
      <p>Imie: {userName}</p>
      <p>Haslo: {password}</p>
      <p>Wiek: {userAge}</p>
      <p>Vegan: {isVegan.toString()}</p>
      <p>Preferencje Żywieniowe: {foodPreferences}</p>
      <form className={"UserForm"}>
        User form
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <p>Age</p>
        <input
          type="number"
          placeholder="Age"
          min={0}
          max={50}
          onChange={handleSetUserAge}
          value={userAge}
        />
        <label>
          Is Vegan ?
          <select value={isVegan} onChange={(e) => handleIsVegan(e)}>
            {isVeganOptions.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </label>
        <p>Food preferences:</p>
        {mappedFoodPreferences()}
        {/* <label>
          <input
            type="checkbox"
            name="beans"
            checked={foodPreferences.includes("beans")}
            onChange={(e) => handleFoodPreferences(e)}
          />
          Beans
        </label>
        {isVisible ? (
          <label>
            <input
              type="checkbox"
              name="chicken"
              checked={foodPreferences.includes("chicken")}
              onChange={handleFoodPreferences}
            />
            Chicken
          </label>
        ) : (
          ""
        )} */}
      </form>
    </>
  );
};

export default UserForm;
