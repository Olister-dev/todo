import React, { useState, useEffect } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoCounter from "./TodoCounter";
import TodoFilter from "./TodoFilter";
import Todo from "./Todo";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [countCompleted, setCountCompleted] = useState("");
  const [countActive, setCountActive] = useState("");

  const FiltersState = {
    Completed: "completed",
    Uncompleted: "uncompleted",
    All: "all",
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    countActiv();
    countComplete();
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  //Input part (TodoForm)
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    console.log(todos);
  };

  //Filter part (TodoFilter)

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case FiltersState.Completed:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case FiltersState.Uncompleted:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Todo
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //Delete
  const clearList = () => {
    setTodos([]);
  };

  //counter

  const countComplete = () => {
    setCountCompleted(todos.filter((todo) => todo.completed === true).length);
  };
  const countActiv = () => {
    setCountActive(todos.filter((todo) => todo.completed === false).length);
  };

  return (
    <section className="main">
      <TodoForm
        inputText={inputText}
        inputTextHandler={inputTextHandler}
        submitTodoHandler={submitTodoHandler}
      />
      <Todo
        filteredTodos={filteredTodos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
      <div className="main__footer">
        <TodoCounter
          countCompleted={countCompleted}
          countActive={countActive}
        />
        <TodoFilter statusHandler={statusHandler} />
        <div onClick={clearList} className="main__footer_clear-btn">
          Clear completed
        </div>
      </div>
    </section>
  );
}

export default TodoList;
