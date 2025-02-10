const API_URL = "http://localhost:3000/todos";

async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "❌";
    closeButton.onclick = () => deleteTodo(todo.id);

    li.textContent = todo.text;
    li.appendChild(closeButton);
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (!text) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  input.value = "";
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
