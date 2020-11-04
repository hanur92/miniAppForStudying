import React, { useState } from "react";
const Buttons = (props) => {
  const [number2, count] = useState(0);

  return (
    <div>
      <button onClick={() => count(number2 + 1)}>+</button>
      {number2}
      <button onClick={() => count(number2 - 1)}>-</button>
    </div>
  );
};

export default Buttons;
