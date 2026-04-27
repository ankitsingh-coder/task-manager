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
    <div style={{
      maxWidth: "500px",
      margin: "60px auto",
      padding: "20px",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Task Manager</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "70%",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button type="submit" style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Add
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map(task => (
          <li key={task.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #eee",
            borderRadius: "5px"
          }}>
            <span>{task.text}</span>

            <button onClick={() => deleteTask(task.id)} style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;