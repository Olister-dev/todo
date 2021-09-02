import React from "react";
import "./TodoFilter.css";

function TodoFilter({ statusHandler }) {
  return (
    <form className="filter" onChange={statusHandler}>
      <div className="switch-field">
        <input type="radio" id="radio-three" name="switch-two" value="all" />
        <label htmlFor="radio-three">All</label>
        <input
          type="radio"
          id="radio-four"
          name="switch-two"
          value="uncompleted"
        />
        <label htmlFor="radio-four">Active</label>
        <input
          type="radio"
          id="radio-five"
          name="switch-two"
          value="completed"
        />
        <label htmlFor="radio-five">Completed</label>
      </div>
    </form>
  );
}

export default TodoFilter;
