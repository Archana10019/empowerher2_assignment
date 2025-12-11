const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (storedUser && storedUser.email === email && storedUser.password === pass) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "todos.html";
    } else {
        alert("Invalid Login!");
    }
};
