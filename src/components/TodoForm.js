import React from "react";
import "./TodoForm.css";

function TodoForm({ inputText, inputTextHandler, submitTodoHandler }) {
  return (
    <form className="main-form" onSubmit={submitTodoHandler}>
      <input
        placeholder="Whats need to be done?"
        type="text"
        value={inputText}
        onChange={inputTextHandler}
      />
    </form>
  );
}

export default TodoForm;
