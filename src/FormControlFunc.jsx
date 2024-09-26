import React from "react";
import { useState } from "react";

const FormControlFunc = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value.toUpperCase().substring(0, 10))
          }
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormControlFunc;
