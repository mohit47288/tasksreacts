import React, { useState } from "react";
import './task1.css'; // Import the new CSS file

const Task1 = () => {
  const [show, setShow] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [newTech, setNewTech] = useState("");
  const [records, setRecords] = useState([
    "Html",
    "css",
    "js",
    "express.js",
    "node.js",
    "mongodb",
  ]);

  const sum = () => {
    return parseInt(number1 || 0) + parseInt(number2 || 0);
  };

  const addTech = () => {
    if (newTech.trim()) {
      setRecords([...records, newTech]);
      setNewTech("");
    }
  };

  return (
    <div className="task-container">
      <div className="task-card">
        <ul className="task-list">
          <li className="task-item">
            <h3>1. Display Simple JSX</h3>
            <p>This is a simple JSX paragraph.</p>
          </li>

          <li className="task-item">
            <h3>2. Display an Array of Records on Screen</h3>
            <ul>
              {records.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </li>

          <li className="task-item">
            <h3>3. Show/Hide Element on Screen</h3>
            <p>{show ? "Hello, I’m Here!" : ""}</p>
            <button className="task-button" onClick={() => setShow(!show)}>
              Show/Hide
            </button>
          </li>

          

          <li className="task-item">
            <h3>4. Enable/Disable a Button</h3>
            <button className="task-button" onClick={() => setDisabled(!disabled)}>
              Enable/Disable
            </button>
            <button
              className={`task-button ${disabled ? "disabled-button" : ""}`}
              disabled={disabled}
            >
              Click Me
            </button>
          </li>





          <li className="task-item">
            <h3>5. Two-Way Data Binding using Textbox</h3>
            <input
              className="input-field"
              type="text"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter number 1"
            />
            <input
              className="input-field"
              type="text"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter number 2"
            />
          </li>

          <li className="task-item">




            <h3>6. Do Sum of Two Numbers</h3>
            <p>Sum: {sum()}</p>
          </li>

          <li className="task-item">
            <h3>7. Dynamically Add Child Components (values List)</h3>
            <ul>
              {records.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
            <input
              className="input-field"
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Enter new value"
            />
            <button className="task-button" onClick={addTech}>
              Add value
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Task1;
