// import { useState } from "react";

import "./App.css";
import LinkedImage from "./components/LinkedImage/LinkedImage";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import InfoText from "./components/InfoText/InfoText";
function App() {
  return (
    <>
      <LinkedImage />

      <Header headerText="Vite + React" />

      <div className="card">
        <Counter />
        <InfoText infoText="Edit <code>src/App.jsx</code> and save to test HMR" />
      </div>
      <InfoText
        infoText="Click on the Vite and React logos to learn more"
        className="read-the-docs"
      />
    </>
  );
}

export default App;
