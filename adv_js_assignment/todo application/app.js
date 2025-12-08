const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Fetch first 20 todos from API
async function fetchTodos() {
    const response = await fetch(API_URL);
    const data = await response.json();
    const first20 = data.slice(0, 20);

    localStorage.setItem("todos", JSON.stringify(first20));
    return first20;
}

// Get todos from LocalStorage
function getTodosFromStorage() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// Save todos to LocalStorage
function saveTodosToStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos to UI
function renderTodos() {
    const todoListDiv = document.getElementById("todoList");
    const emptyMsg = document.getElementById("emptyMsg");
    const todos = getTodosFromStorage();

    todoListDiv.innerHTML = "";

    if (todos.length === 0) {
        emptyMsg.style.display = "block";
        return;
    } else {
        emptyMsg.style.display = "none";
    }

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo";

        const title = document.createElement("span");
        title.textContent = todo.title;
        if (todo.completed) title.classList.add("completed");

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.onclick = () => deleteTodo(todo.id);

        const btnToggle = document.createElement("button");
        btnToggle.textContent = todo.completed ? "Undo" : "Complete";
        btnToggle.onclick = () => toggleTodo(todo.id);

        div.appendChild(title);
        div.appendChild(btnToggle);
        div.appendChild(btnDelete);

        todoListDiv.appendChild(div);
    });
}

// Delete a todo
function deleteTodo(id) {
    let todos = getTodosFromStorage();
    const updated = todos.filter(todo => todo.id !== id);
    saveTodosToStorage(updated);
    renderTodos();
}

// Toggle completed status
function toggleTodo(id) {
    let todos = getTodosFromStorage();
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodosToStorage(todos);
    renderTodos();
}

// Initialize App
async function init() {
    if (!localStorage.getItem("todos")) {
        await fetchTodos();
    }
    renderTodos();
}

init();
