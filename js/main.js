document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const savedTheme = localStorage.getItem('cv-theme');

    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';
        themeToggle.addEventListener('change', () => {
            localStorage.setItem('cv-theme', themeToggle.checked ? 'dark' : 'light');
        });
    }

    document.querySelectorAll('details').forEach((detail) => {
        detail.addEventListener('toggle', () => {
            detail.setAttribute('aria-expanded', detail.open.toString());
        });
    });
});
