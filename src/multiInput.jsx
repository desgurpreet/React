import React, { useState } from "react";

const MultiInput = () => {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("USA");
  const [checked, setChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Text: ", e.target[0].value);
    console.log("Country: ", e.target[1].value);
    console.log("CheckBox: ", e.target[2].checked);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }} htmlFor="">
          Comments:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols="20"
          rows="3"
        ></textarea>
        <br />
        <br />
        <label htmlFor=""> Select Country: </label>
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Check Box &nbsp;</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MultiInput;
