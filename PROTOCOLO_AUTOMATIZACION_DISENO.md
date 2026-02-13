# Protocolo de Automatización: Implementación Image-to-Code Profesional

Este documento establece el flujo de trabajo estandarizado para replicar diseños a partir de imágenes de referencia y metadatos estructurales (JSON), incorporando estándares modernos de **Responsive Design**, **SEO** y **Performance**.

## 1. Requisitos Previos
- **Referencia Visual:** Imagen en formato `.png` o `.jpg` (ej. `2.png`).
- **Metadatos Estructurales:** Archivo `.json` con la descripción de elementos, textos (OCR) y recursos en base64.
- **Entorno de Estilos:** Archivo `style.css` base con variables de color y tipografía definidas.

---

## 2. Estándares de Diseño Responsivo (Adaptabilidad)
Toda sección implementada debe ser "Mobile-First" o totalmente fluida para funcionar en cualquier tamaño de pantalla.

| Característica | Implementación Técnica |
| :--- | :--- |
| **Layout Fluido** | Uso de `Flexbox` y `CSS Grid` en lugar de anchos fijos. |
| **Unidades Relativas** | Preferir `rem`, `em`, `%`, `vh`, `vw` sobre `px` para fuentes y espaciados. |
| **Imágenes Flexibles** | Aplicar `max-width: 100%; height: auto;` y `object-fit: contain/cover`. |
| **Breakpoints** | Definir puntos de corte estándar: Móvil (768px), Tablet (1024px). |
| **Touch Friendly** | Asegurar que botones y enlaces tengan un área mínima de clic de 44x44px. |

---

## 3. Optimización para Buscadores (SEO) y Presencia Web
Para facilitar que Google y otros buscadores indexen la web y mejorar la visibilidad:

1.  **HTML Semántico:** 
    - Usar etiquetas descriptivas: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
    - Mantener la jerarquía de encabezados: un solo `<h1>` por página, seguido de `<h2>` y `<h3>` en orden lógico.
2.  **Metaetiquetas Esenciales:**
    - `description`: Resumen conciso de la página (150-160 caracteres).
    - `Open Graph (og:title, og:image)`: Para que la web se vea profesional al compartir en redes sociales.
3.  **Accesibilidad (A11y):**
    - Todo `<img>` debe tener un atributo `alt` descriptivo.
    - Contraste de color suficiente para legibilidad.
4.  **Indexabilidad:** 
    - Asegurar que los textos extraídos del JSON se inserten como texto real en el HTML, no como imágenes de texto, para que sean rastreables.

---

## 4. Flujo de Trabajo Paso a Paso

### Paso 1: Limpieza y Preparación
- Asegurar que el directorio de trabajo esté limpio.
- Verificar la versión del archivo JSON a utilizar (evitar conflictos de versiones como `v2` vs `v3`).

### Paso 2: Gestión de Activos (JSON a Imágenes)
**CRÍTICO:** Antes de codificar, las imágenes en base64 del JSON deben ser extraídas a archivos físicos.
1.  Crear un script (ej. `process_images.js`) para leer el JSON y guardar los base64 como `.png` o `.jpg` en la carpeta `images/`.
2.  Ejecutar el script y **verificar** que los archivos se hayan creado correctamente en el directorio.
3.  Actualizar el JSON (o usar una copia en memoria) para que apunte a las rutas relativas `images/nombre_archivo.png` en lugar del string base64.

### Paso 3: Análisis y Extracción (Contenido)
Extraer el `detectedText` del JSON para estructurar el contenido real. Comparar siempre con la **imagen de referencia (screenshot)** para entender la jerarquía visual, no solo el texto plano.

### Paso 4: Implementación de la Estructura (HTML)
Insertar la sección cuidando la semántica. Encapsular la página específica en una clase padre para evitar conflictos de estilo.
```html
<main class="page-specific-class">
  <section class="new-section" aria-labelledby="section-title-id">
    <div class="container">
      <h2 id="section-title-id">Título Extraído</h2>
      <!-- Contenido -->
    </div>
  </section>
</main>
```

### Paso 5: Estilización Moderna y Encapsulada (CSS)
- **CSS Scoping:** Usar siempre el selector padre (ej. `.prp-page .hero`) para modificar estilos sin romper otras páginas.
- **Gradientes y Glow:** Usar `linear-gradient` y `box-shadow` para profundidad visual, ajustando opacidades para integración con fondos oscuros.
- **Transiciones:** Añadir `transition: all 0.3s ease` en interacciones.
- **Scroll Reveal:** Implementar animaciones de entrada, pero asegurar que el contenido sea visible si JS falla o tarda.

### Paso 6: Optimización de Rendimiento
- **Lazy Loading:** Añadir `loading="lazy"` a imágenes que no están en el primer pantallazo (Above the fold).
- **Formatos:** Usar formatos de imagen eficientes (convertir a `.webp` si es posible).
- **CSS Maintenance:** Eliminar líneas en blanco redundantes y espacios al final de las líneas. Agrupar estilos por bloques lógicos y usar comentarios de banner para facilitar la navegación en archivos grandes.

---

## 5. Validación Iterativa (El Ojo Humano)
1. **Verificación Visual:** Abrir el navegador y comparar lado a lado la implementación con la imagen de referencia original (`0.jpg`, `1.jpg`, etc.).
2. **Responsive Check:** Redimensionar la ventana para asegurar que el diseño fluye sin romperse (320px a 1920px). Verificar que el menú hamburguesa se active preventivamente (~1150px) si es necesario.
3. **Integración:** Verificar que no haya bordes duros en imágenes sobre fondos oscuros (usar máscaras o PNGs transparentes).

---

## 6. Checklist de Entrega
- [ ] ¿La sección se adapta a móviles sin scroll horizontal?
- [ ] ¿Los textos coinciden al 100% con la imagen de referencia?
- [ ] ¿Se han eliminado todas las marcas de agua o logos de herramientas (NotebookLM)?
- [ ] ¿La jerarquía de títulos (`h2`, `h3`) es correcta?
- [ ] ¿Las imágenes tienen el atributo `alt`?
- [ ] ¿Los estilos están encapsulados y no afectan al `index.html` u otras páginas?

---

## 7. Registro de Problemas Comunes y Soluciones (Troubleshooting)

### 7.1. Imágenes "Perdidas" o No Visibles
*   **Problema:** El HTML referencia imágenes que el navegador no carga (iconos rotos) o el JSON tiene base64 que no se renderizan directamente.
*   **Solución:** Ejecutar el script de extracción de imágenes (`node process_images.js`). Verificar que el nombre del archivo en el HTML coincida *exactamente* con el archivo generado en `images/`. Confirmar con `ls` o `dir`.

### 7.2. Secciones en Blanco (Ghost Sections)
*   **Problema:** Al tomar capturas o cargar la página, una sección aparece completamente blanca o vacía.
*   **Solución:** A menudo causado por clases de animación (ej. `.fade-in`) que ocultan el elemento (`opacity: 0`) esperando un JS que no se ha ejecutado o capturado a tiempo. **Fix:** Eliminar temporalmente la clase de animación o forzar `opacity: 1` en CSS para depuración.

### 7.3. Contaminación de Estilos (Side Effects)
*   **Problema:** Un cambio en el CSS de una nueva página rompe el diseño del `index.html` o el `header` global.
*   **Solución:** Utilizar **siempre** un selector de espacio de nombres (namespace) en el cuerpo o main de la página (ej. `<main class="prp-page">`) y prefijar todas las reglas CSS nuevas con esta clase (ej. `.prp-page .btn-primary { ... }`).

### 7.4. Discrepancia Visual (Fidelity Gap)
*   **Problema:** La implementación se ve "técnicamente correcta" pero no transmite la misma sensación que la imagen de diseño (falta de brillo, márgenes incorrectos, alineación).
*   **Solución:** Ajustar manualmente `box-shadow` (usando colores neón con baja opacidad), `text-shadow` para títulos, y revisar los `padding`/`margin` usando unidades relativas (`clamp`) para que el espaciado respire igual que en el diseño original.

### 7.5. Bordes Duros en Imágenes
*   **Problema:** Imágenes rectangulares (JPG) sobre fondo negro que muestran un recuadro visible.
*   **Solución:** Aplicar máscaras CSS (`mask-image: radial-gradient(...)`) para desvanecer los bordes o editar la imagen para que sea un PNG con transparencia real. Eliminar `border` y `background-color` de los contenedores.