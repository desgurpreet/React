import React from "react";
import { useSearchParams } from "react-router-dom";

const UseSeachParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (e) => {
    e.preventDefault();
    const data = searchParams.get("q");
    //anything store on url by get
    //get method of url request (get,post)
    const age = searchParams.get("age");
    alert(data + " " + age);
  };
  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>This is a search page</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="">Search</label>&nbsp;
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
          //we can write anything the place of q like:name
        />
        &nbsp;
        <input type="submit" value="Search" />
        &nbsp;
        <input
          type="button"
          value="Reset"
          onClick={() => setSearchParams({})}
        />
      </form>
    </div>
  );
};

export default UseSeachParam;
