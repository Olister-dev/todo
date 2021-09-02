import React from "react";
import "./TodoCounter.css";

function TodoCounter({ countCompleted, countActive }) {
  return (
    <div className="counter">
      <div className="counter-left">
        <span>{countActive}</span> item left,
      </div>
      <div className="counter-right">
        <span>{countCompleted}</span> completed
      </div>
    </div>
  );
}

export default TodoCounter;
