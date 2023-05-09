import React from "react";
import "./style.css";
import  Button from './component/Button.jsx';

export default function App() {
  const buttonStyle={
    backgroundColor:"red",
    padding:"1rem",
    borderRadius:"2px",
    cursor:"pointer",
    width:"6rem"
  }

  const handleClick=()=>{
       alert("Button Clicked");
  }

  return (
    <div>
     <Button style={buttonStyle} onClick={handleClick}/>
    </div>
  );
}
