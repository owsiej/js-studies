// import React from 'react';
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/vite.svg";
import './Images.css'

const Images = () => {
return (<div className={'Images'}>        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
<img src={viteLogo} className="logo" alt="Vite logo" />

</a>
<a href="https://react.dev" target="_blank" rel="noreferrer">
<img src={reactLogo} className="logo react" alt="React logo" />
</a></div>)
}

export default Images;