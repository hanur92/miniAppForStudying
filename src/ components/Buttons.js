import React, { useState } from "react";

const Buttons = ({ number, handleClick }) => (
  <div className="click-button">
    <button onClick={handleClick}>{number}</button>
  </div>
);

export default Buttons;
