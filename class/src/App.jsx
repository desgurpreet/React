import React from "react";
import First from "./classComponent";
import Stu from "./Constructure";
import ChangeClass from "./ChangeState";
import BindEvent from "./BindEvent";
function App() {
  return (
    <>
      <First name="gurpreet" />
      <Stu />
      <ChangeClass name="gs"/>
      <BindEvent/>
    </>
  );
}

export default App;
