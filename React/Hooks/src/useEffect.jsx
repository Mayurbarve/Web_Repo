//Purpose: Handles side effects like data fetching, subscriptions, or manually updating the DOM.
//How it works: Runs a function after rendering (or when specific variables change).

import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty array = run only once (on mount)

  return <p>Seconds: {seconds}</p>;
}