import React from "react";
import First from "./classComponent";
import Stu from "./Constructure";
import ChangeClass from "./ChangeState";
function App() {
  return (
    <>
      <First name="gurpreet" />
      <Stu />
      <ChangeClass name="gs"/>
    </>
  );
}

export default App;
