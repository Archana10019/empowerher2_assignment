
import { displayTodos } from "./displayTodos.js";

// check login
if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}

// fetch todos
fetch("https://jsonplaceholder.typicode.com/todos")   // ✔ FIXED URL
    .then(res => res.json())
    .then(data => {
        // send first 20 only
        displayTodos(data.slice(0, 20));
    })
    .catch(err => console.log("Error:", err));

