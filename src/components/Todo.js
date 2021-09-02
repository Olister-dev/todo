import React from "react";
import "./Todo.css";

function Todo({ filteredTodos, deleteHandler, completeHandler }) {
  return (
    <div className="todo">
      {filteredTodos.map((todo) => {
        const { id, text, completed } = todo;
        return (
          <ul key={id} className="todo-list">
            <li className={`${completed ? "completed" : ""}`}>
              <div className="view">
                <div className="v" onClick={() => completeHandler(id)}>
                  <input type="checkbox" id="todo-1" className="toggle" />
                  <label htmlFor="todo-1">{text}</label>
                </div>

                <button
                  type="button"
                  onClick={() => deleteHandler(id)}
                  className="delete-btn"
                ></button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Todo;
