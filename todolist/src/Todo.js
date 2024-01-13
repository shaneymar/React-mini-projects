import "./App.css";
import { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * 100);
}
function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: inputValue,
        id: generateId(),
      })
    );
    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Add a new task"
      />

      <button onClick={handleSubmit}>Add New Task</button>

      <ul className="todo-list">
        {todos.map((todo, text, id) => (
          <li key={todo.id} className="todo">
            <span>{todo.text}</span>
            <button className="close" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
