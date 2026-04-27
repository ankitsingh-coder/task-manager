import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const API = "https://task-manager-u6dl.onrender.com/tasks";

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    if (!input) return;

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ fontSize: "28px" }}>Task Manager</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ fontSize: "16px", marginTop: "8px" }}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;