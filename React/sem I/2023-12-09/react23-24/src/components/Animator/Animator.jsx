// import React from "react";
import Header from "../Header/Header";
import Images from "../Images/Images";
import "./Animator.css";
import { useState, useEffect } from "react";
import Reapeter from "../Reapeter/Reapeter";
import viteLogo from "../../assets/vite.svg";

const Animator = () => {
  let [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Licznik");
      setCounterValue((counterValue) => counterValue + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const iconShouldBeInvisible = counterValue < 10 || counterValue > 20;
  return (
    <>
      <Header headerText={counterValue} />
      {iconShouldBeInvisible && <Images counter={counterValue} />}
      <Reapeter>
        <img src={viteLogo}></img>
      </Reapeter>
    </>
  );
};

export default Animator;
