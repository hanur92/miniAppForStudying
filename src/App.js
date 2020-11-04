import React, { useState } from "react";
import Decrement from "./ components/Decrement";
import Increment from "./ components/Increment";
import Buttons from "./ components/Buttons";
import Nav from "./ components/Nav";
import Nav2 from "./ components/Nav2";
import Buttons2 from "./ components/Buttons2";
// import logo from "./logo.svg";
// import './App.css';

const App = () => {
  // const number = useState(0);
  const [number, count] = useState(0);
  const [number2] = useState(0);
  const Plus = () => {
    count(number + 1);
  };

  const Minus = () => {
    count(number - 1);
  };

  return (
    <div className="App">
      <div>-----------------------useRedux---------------------</div>
      <Nav number={number}></Nav>
      <div>
        + <Buttons number={number} handleClick={Plus}></Buttons>
      </div>
      <div>{number}</div>
      <div>
        <Buttons number={number} handleClick={Minus}></Buttons>-
      </div>
      <div>------------------------useReact-----------------------</div>
      <Buttons2></Buttons2>
      <Nav2 number2={number2}></Nav2>
      {/* <Increment />

      <Decrement /> */}
    </div>
  );
};

export default App;
