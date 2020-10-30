import React, { useState } from "react";

function Increment() {
  const [number, count] = useState(0);
  return (
    <div>
      {number}
      <button onClick={() => count(number + 1)}>+</button>
    </div>
  );
}

export default Increment;
