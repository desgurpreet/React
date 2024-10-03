import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const HookuseRef = () => {
  const newRef = useRef();
  useEffect(() => {
    console.log(newRef);
    console.log(newRef.current.innerHTML);
  });
  const handleHeading = () => {
    newRef.current.style.color = "red";
    newRef.current.style.fontFamily = "cooper";
  };
  return (
    <div>
      <h1 ref={newRef}>Learning never end</h1>
      <button onClick={handleHeading}>Click</button>
    </div>
  );
};

export default HookuseRef;
