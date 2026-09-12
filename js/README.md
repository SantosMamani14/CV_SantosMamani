# JavaScript

El comportamiento del CV está dividido en módulos independientes de JavaScript nativo.

## Archivos

### `main.js`

Se carga en las páginas del proyecto y se encarga de:

- Leer el tema guardado en `localStorage`.
- Mantener el modo claro u oscuro entre páginas.
- Escuchar los cambios del control `#theme-toggle`.
- Actualizar el atributo `aria-expanded` de los elementos `<details>`.

### `form-validation.js`

Se carga en `contacto.html` y valida el formulario de contacto:

- Comprueba los campos obligatorios.
- Utiliza la validación nativa del navegador.
- Muestra un mensaje cuando faltan datos.
- Muestra un aviso cuando el mensaje fue enviado correctamente.
- Lleva el foco al aviso de confirmación para mejorar la accesibilidad.
- Limpia el estado al usar el botón de reinicio.

## Carga de scripts

Los scripts se cargan con el atributo `defer` para que el HTML se procese antes de ejecutar el código:

```html
<script src="js/main.js" defer></script>
<script src="js/form-validation.js" defer></script>
```

`form-validation.js` solo debe cargarse en las páginas que contienen `#contact-form`.
