import React, { useContext } from "react";
import { data, data1 } from "./App";
function ChildB() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      {/* THIS IS FOR USE CONTEXT */}
      <h1>
        Hi my name is {name} and my gender is {gender}
      </h1>
      {/*THIS IS FOR USING CREATECONTEXT <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return <h1>My name is {name},my gender is {gender}</h1>;
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer> */}
    </>
  );
}
export default ChildB;
