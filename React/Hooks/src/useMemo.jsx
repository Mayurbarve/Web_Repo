//Purpose: Optimize performance by memoizing expensive calculations.

import React, { useMemo, useState } from "react";

function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]); // Runs only if 'number' changes

  return <p>Result: {result}</p>;
}
