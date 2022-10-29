import React, { useState } from "react";

function App() {
  const [inputval, setInputVal] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
  };
  const handleClick = () => {
    setArr((prevVal) => {
      if (inputval === "") {
        return [...prevVal];
      } else {
        return [...prevVal, inputval];
      }
    });
    setInputVal("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputval} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>Items below</li>
          {arr.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
