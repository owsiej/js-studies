import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent.jsx";
import Images from "./components/Images/Images.jsx";
import LinkedImage from "./components/LinkedImage/LinkedImage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LinkedImage></LinkedImage>
    <Images />
    <MyFirstComponent /> */}
    <App />
  </React.StrictMode>
);
