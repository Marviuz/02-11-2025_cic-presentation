const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// In-memory storage for todos
let todos = [];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  const todo = todos.find((t) => t.id == id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
