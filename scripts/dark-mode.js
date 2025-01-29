const darkModeToggle = document.getElementById('toggle-dark-mode');
const darkModeStyle = document.getElementById('dark-mode-style');

darkModeToggle.addEventListener('click', () => {
    if (darkModeStyle.disabled) {
        darkModeStyle.disabled = false;
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeStyle.disabled = true;
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});