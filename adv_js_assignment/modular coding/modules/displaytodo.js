export function displayTodos(data) {
    const container = document.getElementById("todosList");

    container.innerHTML = "";

    data.forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "5px 0";

        div.innerHTML = `
            <strong>${todo.title}</strong><br>
            Status: ${todo.completed ? "Completed" : "Pending"}
        `;

        container.append(div);
    });
}
