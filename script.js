// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Update Current Year in Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});