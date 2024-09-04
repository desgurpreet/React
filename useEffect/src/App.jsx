import { useEffect, useState, useRef, React } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const refEl = useRef("");
  console.log(refEl);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("gs");
  useEffect(() => {
    console.log("content");
  }, []);
  function reset() {
    setName("");
    refEl.current.focus();
  }
  function handleInput() {
    refEl.current.style.color = "blue";
    refEl.current.value="Jainyy";
  }
  return (
    <>
      <h1 className="font-semibold">Update count {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-400 px-2 py-1 rounded-full mt-2"
      >
        count
      </button>
      <div>
        <input
          ref={refEl}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button
          onClick={reset}
          className="bg-blue-400 px-2 py-1 rounded-full mt-2"
        >
          Reset
        </button>
        <button
          onClick={handleInput}
          className="bg-blue-400 px-2 py-1 rounded-full mt-2"
        >
          handle-input
        </button>
      </div>
    </>
  );
}
export default App;
