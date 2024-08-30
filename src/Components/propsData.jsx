import React from "react";

function Card({ value, handleClick, index }) {
  const { image, name, profession, friends } = value;
  return (
    <div className="w-52 rounded-md overflow-hidden">
      <div className="w-full h-30 bg-sky-200">
        <img src={image} alt="" />
      </div>
      <div className="w-full bg-white p-3">
        <h3 className="font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className=" mt-4 px-3 py-1 bg-blue-500 text-xs text-white rounded-md"
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
