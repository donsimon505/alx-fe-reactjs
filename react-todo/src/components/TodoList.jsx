import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Submit Assignment", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    if (!text) return;
    const newItem = { id: Date.now(), text, completed: false };
    setTodos([...todos, newItem]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
