// import React from 'react';

import "./LinkedImage.css";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";
import Image from "../Image/Image";

const LinkedImage = () => {
  return (
    <div>
      <Image
        linkTo="https://vitejs.dev"
        imageSrc={viteLogo}
        altText="Vite Logo"
      />
      <Image
        linkTo="https://react.dev"
        imageSrc={reactLogo}
        altText="React Logo"
      />
    </div>
  );
};

export default LinkedImage;
