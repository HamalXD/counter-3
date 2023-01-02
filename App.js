import React, {useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="align">
      {/* <div >
        <h1>Counter App</h1>
        <h2 >{count}</h2>
        <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>Reset</button>
      </div> */}
      <h2>Counter</h2>
      <p>I have been rendered {count} times</p>
      <button className="btn btn-success mx-3" onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button className="btn btn-danger mx-3" onClick={() => count > 0 && setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button className="btn btn-secondary mx-3" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
