// ===useRef example ====///
import React from 'react'
import { useRef, useState } from "react";

const UseRefExm = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  const handleSetValue = () => {
    const number = Math.random().toFixed(4);
    setName(number);   // state se update
  };

  const handleReset = () => {
    setName("");
    inputRef.current.focus();  // ref sirf focus ke liye
  };

  return (
    <>
    <h1>Uncontrolled componrnt(Ref use) </h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default UseRefExm;
