import React, { useState } from "react";
import Decrement from "./ components/Decrement";
import Increment from "./ components/Increment";
import Buttons from "./ components/Buttons";
import Nav from "./ components/Nav";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  // const number = useState(0);
  const [number, count] = useState(0);
  const handleClick = () => {
    count(number + 1);
  };
  return (
    <div className="App">
      <Nav number={number}></Nav>
      <Buttons number={number} handleClick={handleClick}></Buttons>
      {/* <Increment></Increment>
      <Decrement></Decrement> */}
      {/* <Increment />
      {number}
      <Decrement /> */}
    </div>
  );
}

export default App;
