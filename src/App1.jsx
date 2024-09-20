import React from "react";
import Conditional1 from "./Conditional1";
import Conditonal2 from "./Conditonal2";
import ListRender from "./ListRender";

const App1 = () => {
  const name = "gs";
  const age = 25;
  let data;
  if (name == "gs") {
    data = <Conditional1 />; //element variable (data)
  } else {
    data = <Conditonal2 />;
  }
  return (
    <div>
      {data}
      {/* //using && operator if name=="gs" true then h1 run  */}
      {name == "gs" && <h1>I am Gurpreet</h1>}
      {age >= 18 ? <h1>My age is {age}</h1> : <h1>My age is less than 18</h1>}
      <ListRender />
    </div>
  );
};

export default App1;
