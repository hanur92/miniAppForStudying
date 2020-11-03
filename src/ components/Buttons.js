import React, { useState } from "react";
// function Buttons() {
//   const [number, count] = useState(0);

//   return (
//     <div>
//       <button onClick={() => count(number + 1)}>+</button>
//       {number}
//       <button onClick={() => count(number - 1)}>-</button>
//     </div>
//   );
// }

// export default Buttons;

const Buttons = ({ number, handleClick }) => (
  <div className="click-button">
    <button onClick={handleClick}>{number}</button>
  </div>
);

export default Buttons;
