import React from "react";
function Navbar({ data }) {
  return (
    <div className="px-20 pt-4 flex items-center justify-between">
      <h1>Orange</h1>
      <div>
        <button className=" flex px-3 py-1 bg-orange-600 rounded-md text-sm gap-3">
          <h3> Favourite </h3>
          <h4>{data.filter((item) => item.added).length}</h4>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
