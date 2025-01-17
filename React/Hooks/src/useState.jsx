import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [state, updater function]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
