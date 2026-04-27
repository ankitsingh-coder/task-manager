const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text
  };
  tasks.push(newTask);
  res.json(newTask);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});