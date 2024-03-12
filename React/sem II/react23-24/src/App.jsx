import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import { NavLink, useNavigate } from "react-router-dom";
import useAutch from "./hooks/useAutch";

function App() {
  const [isUserFromVisible, setIsUserFromVisible] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("signedUser"))?.username;

  useAutch();
  return (
    <>
      <div className="card">
        <NavLink to="/login">Go to login</NavLink>
        <Paragraph paragraphText={`Witaj zalogowany jako: ${loggedUser}`} />
        <Button
          text="Show / Hide User From"
          onClick={() => setIsUserFromVisible((prevState) => !prevState)}
        />
      </div>
      {isUserFromVisible && <UserForm />}
    </>
  );
}

export default App;
