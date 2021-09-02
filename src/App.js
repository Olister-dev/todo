import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <h1>todos</h1>
      <div className="app-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
