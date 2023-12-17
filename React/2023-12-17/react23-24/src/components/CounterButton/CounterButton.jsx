import { useState } from "react";
import "./CounterButton.css";

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const handleRightMouseClick = (event) => {
    event.preventDefault();
    counter > 0 && setCounter((prev) => prev - 1);
  };

  return (
    // <button onClick={(e) => setCounter(e.target.value++)}>
    <button
      onClick={() => setCounter((prev) => prev + 1)}
      onContextMenu={handleRightMouseClick}
    >
      count is {counter}
    </button>
  );
};

export default CounterButton;
