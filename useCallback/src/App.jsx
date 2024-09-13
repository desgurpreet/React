import React, { useCallback, useState } from "react";
import Child from "./Child";
function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {}, [count]);
  return (
    <div className="App">
      <h1>Learing useCallback</h1>
      <h1>{add}</h1>
      <Child Learning={Learning} />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Add</button>
    </div>
  );
}
export default App;
