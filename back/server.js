const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const PORT = 3000;

let tasks = [];

// Charger les tâches depuis task.json
if (fs.existsSync("task.json")) {
  tasks = JSON.parse(fs.readFileSync("task.json"));
}

// API GET
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// API POST
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  fs.writeFileSync("task.json", JSON.stringify(tasks));
  res.status(201).json(task);
});

// API DELETE
app.delete("/tasks/:index", (req, res) => {
  const i = req.params.index;
  tasks.splice(i, 1);
  fs.writeFileSync("task.json", JSON.stringify(tasks));
  res.status(200).json({ message: "Deleted" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
