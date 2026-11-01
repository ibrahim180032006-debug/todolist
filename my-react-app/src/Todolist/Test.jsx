
import { useState, useMemo } from "react";

export default function Test() {
  const [number, setNumber] = useState(13);
  const [name, setName] = useState("brahim");

  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", isconfirme: true },
    { id: 2, title: "Task 2", isconfirme: false },
    { id: 3, title: "Task 3", isconfirme: true },
  ]);

  const [displayedtodos, setDisplayedTodos] = useState("all");

  const completedTodos = useMemo(() => {
    console.log("Filtering todos...");

    return todos.filter((t) => {
      if (displayedtodos === "completed") {
        return t.isconfirme;
      }

      if (displayedtodos === "pending") {
        return !t.isconfirme;
      }

      return true;
    });
  }, [todos, displayedtodos]);

  const result = useMemo(() => {
    console.log("Calculating square...");

    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Test useMemo</h1>

      <h2>Number: {number}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h2>Name: {name}</h2>

      <button onClick={() => setName("Ali")}>
        Change Name
      </button>

      <h2>Result: {result}</h2>

      <hr />

      <h2>Todo List</h2>

      <button onClick={() => setDisplayedTodos("all")}>
        All
      </button>

      <button onClick={() => setDisplayedTodos("completed")}>
        Completed
      </button>

      <button onClick={() => setDisplayedTodos("pending")}>
        Pending
      </button>

      <p>Number of displayed todos: {completedTodos.length}</p>

      {completedTodos.map((todo) => (
        <p key={todo.id}>
          {todo.title} - {todo.isconfirme ? "Completed" : "Pending"}
        </p>
      ))}
    </div>
  );
}