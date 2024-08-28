import React, { useState } from "react";
function App() {
  const [value, setValue] = useState(100);
  const [banned, setBanned] = useState({ name: "gurpreet", isBanned: false });
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  //value for value (use inside () of useState)
  //setValue give function to change the useState value
  //in react we cannot change value directly
  return (
    <div className="p-4">
      <div>
        <h1>{value}</h1>
        <button
          onClick={() => setValue(value == 100 ? 200 : 100)}
          className="p-2 bg-gray-400 text-white rounded"
        >
          Increment
        </button>
      </div>
      <div>
        <h1>name: {banned.name}</h1>
        <h1>isBanned: {banned.isBanned.toString()}</h1>
        <button
          onClick={() => setBanned({ ...banned, isBanned: !banned.isBanned })}
          className="p-2 bg-gray-400 text-white rounded"
        >
          Change
        </button>
      </div>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() => 
            setVal(() => 
              val.filter((item, index) => 
                index != val.length - 1
              ))
          }
          className="p-2 bg-gray-400 text-white rounded bg-blue-500"
        >
          update
        </button>
      </div>
    </div>
  );
}
export default App;
