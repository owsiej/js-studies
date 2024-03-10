import "./App.css";
import Paragraph from "./components/Paragraph/Paragraph";
import CounterButton from "./components/CounterButton/CounterButton";
import Button from "./components/Button/Button";
import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const handleButtonClick = () => {
    setFormIsVisible(!formIsVisible);
  };

  const buttonText = formIsVisible ? "Hide user form" : "Show user form";

  return (
    <>
      <div className="card">
        <Button text={buttonText} onClick={handleButtonClick}></Button>
        <CounterButton />
        <Paragraph paragraphText="Click left button to decrease / right to increase" />
      </div>
      {formIsVisible && <UserForm></UserForm>}
    </>
  );
}

export default App;
