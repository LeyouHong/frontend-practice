import React, { useState } from "react";
import { ID, TEXT, SELECTED } from "./constants.js";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        [ID]: Date.now(),
        [TEXT]: input,
        [SELECTED]: false,
      },
    ]);

    setInput("");
  };

  // Delete single todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle select
  const toggleSelect = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo,
      ),
    );
  };

  // Batch delete
  const deleteSelected = () => {
    setTodos(todos.filter((todo) => !todo.selected));
  };

  const renderInput = () => (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        value={input}
        placeholder="Enter todo..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );

  const renderList = () => (
    <ul style={{ padding: 0, marginTop: 20 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 8,
            border: "1px solid #ddd",
            padding: 8,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="checkbox"
              checked={todo.selected}
              onChange={() => toggleSelect(todo.id)}
            />
            <span>{todo.text}</span>
          </div>

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Todo List</h2>
      {renderInput()}
      <button onClick={deleteSelected} style={{ marginTop: 10 }}>
        Delete Selected
      </button>
      {renderList()}
    </div>
  );
}
