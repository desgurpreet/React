import React, { useState } from "react";

const MultiCheckbox = () => {
  const [fruitArray, setfruitArray] = useState([]);
  const handle = (e) => {
    const value = e.target.value;
    const checked = e.target.checked; //store value true any box checked
    console.log(value, checked);
    if (checked) {
      setfruitArray([...fruitArray, value]);
    } else {
      setfruitArray(
        // fruitArray.filter((e) => console.log("E=>" + e, "value=>" + value)) OR
        fruitArray.filter((e) => e !== value)
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fruitArray);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Fruits: &nbsp;</label>
        <input type="checkbox" name="fruits" value="Apple" onChange={handle} />
        <label htmlFor="">Apple&nbsp;&nbsp;</label>

        <input type="checkbox" name="fruits" value="Mango" onChange={handle} />
        <label htmlFor="">Mango&nbsp;&nbsp;</label>

        <input type="checkbox" name="fruits" value="Grapes" onChange={handle} />
        <label htmlFor="">Grapes&nbsp;&nbsp;</label>

        <input
          type="checkbox"
          name="fruits"
          value="Pineapple"
          onChange={handle}
        />
        <label htmlFor="">Pineapple</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MultiCheckbox;
