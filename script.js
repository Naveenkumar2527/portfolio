// Toggle Dark Mode
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
toggleDarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleDarkModeButton.innerText = "☀️ Light Mode";
    } else {
        toggleDarkModeButton.innerText = "🌙 Dark Mode";
    }
});
