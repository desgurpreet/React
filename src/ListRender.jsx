import React from "react";

const ListRender = () => {
  //   const students = ["gs", "hs", "ms", "ds"];
  const students = [1, 2, 3, 4];
  return (
    <div>
      {students.map((std, index) => (
        <h1 key={index}>{std * 2}</h1>
      ))}
    </div>
  );
};

export default ListRender;
