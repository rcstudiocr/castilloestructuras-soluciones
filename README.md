# Castillo Estructuras + Soluciones

Sitio estático en español, sin dependencias ni compilación. Incluye HTML, CSS y JavaScript. No requiere servidor de aplicaciones.

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub, por ejemplo `castillo`.
2. Subí **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `assets/` y `.nojekyll`. No subás la carpeta contenedora como un nivel adicional.
3. En **Settings → Pages**, elegí **Deploy from a branch**.
4. Seleccioná la rama `main` y la carpeta `/ (root)`, y guardá.
5. GitHub mostrará el enlace publicado cuando termine el despliegue. Su formato habitual es `https://TU-USUARIO.github.io/castillo/`.

Todas las rutas a archivos son relativas para funcionar también bajo el nombre de un repositorio. Si GitHub cambia sus opciones, buscá la configuración equivalente de publicación desde una rama.

## Ver y editar

El código tiene comentarios en español. Buscá los comentarios de cada sección para encontrar rápidamente qué modificar:

- **HTML:** estructura, textos, fotografías, video e íconos SVG de redes sociales.
- **CSS:** variables de color al inicio, estilos por sección, reglas para celular y animaciones. Las reglas posteriores pueden sobrescribir las anteriores; conservá su orden.
- **JavaScript:** menú móvil, año automático y mensaje de WhatsApp.

Los íconos SVG contienen coordenadas de dibujo extensas: para cambiar textos o enlaces no necesitás editar esas coordenadas. El enlace a Facebook aparece junto al video y en el footer. El reel está en `assets/castillo-reel.mp4` y se reproduce manualmente.

Cuando modifiques estilos, podés incrementar `?v=4` en el enlace a `styles.css` del HTML para que el navegador cargue la nueva versión.

Abrí `index.html` en el navegador para revisar el sitio. También podés servir esta carpeta con cualquier servidor estático local.

- `index.html`: textos, secciones, teléfono y enlaces de respaldo.
- `styles.css`: paleta, tipografía, composición y tamaños de pantalla.
- `script.js`: menú móvil, año y mensaje de WhatsApp.
- `assets/mark.svg`: símbolo provisional, reemplazable por el logo oficial.

El número de WhatsApp usa el prefijo de Costa Rica: **50660890679**. Para cambiarlo, actualizá `script.js` y los enlaces de respaldo y teléfono en `index.html`. El texto prellenado se modifica en `whatsappMessage`.

## Fotos reales

Las ilustraciones de proyectos son marcadores explícitos; no representan trabajos realizados. Para sustituir cada marcador, guardá una foto optimizada en `assets/` y reemplazá el bloque `project-placeholder` por algo como:

```html
<img class="project-photo" src="assets/proyecto-01.webp"
     alt="Descripción concreta del trabajo real" width="1200" height="900" loading="lazy">
```

Agregá a `styles.css`:

```css
.project-photo { display: block; width: 100%; height: 330px; object-fit: cover; }
@media (max-width: 760px) { .project-photo { height: 270px; } }
```

Actualizá los títulos y el texto introductorio de la galería al agregar los trabajos. Confirmá los servicios, la experiencia y la cobertura antes de publicar. No incluye formularios que recopilen datos: las consultas se envían directamente a WhatsApp.
