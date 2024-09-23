import React, { useEffect, useState } from "react";

const AppEffect = () => {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("gurpreet");
  useEffect(() => {
    console.log("Hello I am Effect = " + count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>IncrementCount</button>
      <button onClick={() => setName("Singh")}>UpdateName</button>
    </div>
  );
};

export default AppEffect;
