// import React from 'react';

import "./LinkedImage.css";


const LinkedImage = (props) => {
  return (
    <div className={"LinkedImage"}>
      <a href={props.linkTo} target="_blank" rel="noreferrer">
        <img src={props.imageSrc} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
};

export default LinkedImage;
