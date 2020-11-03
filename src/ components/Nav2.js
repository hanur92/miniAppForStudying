import React from "react";
const Nav2 = ({ number }) => (
  <div className="nav-text">
    <h1>{number === 0 ? "Zero" : number % 2 === 0 ? "even" : "odd"}</h1>
  </div>
);
export default Nav2;
