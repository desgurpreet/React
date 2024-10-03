import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const HookuseRef2 = () => {
  const [inputValue, setInputValue] = useState("");
  // using useState with useEffect count automatically one ho jata
  // kyu k useEffect render hote e run ho jata hai and state value update ho jati hai
 
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setCount(count + 1);
  //   }, []);
  //without [] infinite loop chle ga if we update state inside

  // ------ SOLVE ABOVE ISSUE ------
  const count = useRef(0);
  useEffect(() => {
    console.log("hello");
    count.current = count.current + 1;
    //useRef current name k object return krta jiss mai kafi
    //properties hoti like css vali,innerhtml soon iss lyi 'current'
    //use kr rhe hai
  }, [inputValue]);
  return (
    <div>
      <label htmlFor="">Enter Name: </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Render Count: {count.current}</h2>
      <h3>Data: {inputValue}</h3>
    </div>
  );
};

export default HookuseRef2;
