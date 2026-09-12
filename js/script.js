const themeToggle = document.querySelector('#theme-toggle');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (themeToggle) {
    const savedTheme = localStorage.getItem('cv-theme');
    themeToggle.checked = savedTheme === 'dark';

    themeToggle.addEventListener('change', () => {
        localStorage.setItem('cv-theme', themeToggle.checked ? 'dark' : 'light');
    });
}

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = '';

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            formStatus.textContent = 'Revisa los campos marcados antes de enviar el formulario.';
            formStatus.dataset.state = 'error';
            return;
        }

        contactForm.reset();
        formStatus.textContent = 'Gracias por tu mensaje. Te responderé pronto.';
        formStatus.dataset.state = 'success';
    });

    contactForm.addEventListener('reset', () => {
        formStatus.textContent = '';
        delete formStatus.dataset.state;
    });
}