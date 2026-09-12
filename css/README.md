# Arquitectura CSS

Los estilos del CV están separados en varios archivos para mantener una estructura clara y fácil de mantener.

## Archivos

- `styles.css`: punto de entrada principal. Importa todos los módulos CSS.
- `variables.css`: colores, tipografía, sombras, bordes, medidas y transiciones.
- `base.css`: reinicio de estilos, reglas generales, formularios, tablas y accesibilidad.
- `layout.css`: estructura de las páginas, Flexbox, CSS Grid, navegación y diseño responsive.
- `components.css`: tarjetas, habilidades, proyectos, multimedia, botones y formulario de contacto.
- `animations.css`: animaciones de entrada, transiciones y respeto por `prefers-reduced-motion`.

## Punto de entrada

Las páginas HTML solo necesitan cargar:

```html
<link rel="stylesheet" href="css/styles.css">
```

El archivo `styles.css` organiza los módulos mediante `@import`.

## Responsive

El diseño utiliza CSS Grid y Flexbox. Las reglas `@media` reorganizan las columnas, navegación, formularios y contenido multimedia para pantallas pequeñas.

## Temas

El inicio utiliza el checkbox `#theme-toggle` y las variables CSS para cambiar entre modo claro y oscuro. Las páginas secundarias reutilizan el mismo control mediante `main.js`.
