document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const status = document.querySelector('#form-status');

    if (!form || !status) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = '';

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = 'Revisa los campos obligatorios antes de enviar el formulario.';
            status.dataset.state = 'error';
            return;
        }

        form.reset();
        status.textContent = 'Mensaje enviado correctamente. Gracias por contactarme.';
        status.dataset.state = 'success';
        status.focus();
    });

    form.addEventListener('reset', () => {
        status.textContent = '';
        delete status.dataset.state;
    });
});
