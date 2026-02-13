# GEMINI.md - Instructional Context for Exogenetics Web Project

## 1. Project Overview
**Exogenetics Medicina Regenerativa** is a high-end web project focused on advanced regenerative medicine (PRP and Exosomes). The site features a sophisticated "Pure Dark Mode" aesthetic with neon gradients and industrial-tech typography.

### Main Technologies:
- **Languages:** HTML5 (Semantic), CSS3 (Modern features), Vanilla JavaScript (ES6+).
- **Typography:** Barlow Condensed (Headings), Inter (Body), Questrial (Sub-headings), Playfair Display (Italic Hero).
- **Design System:** Centralized CSS variables in `css/style.css`.
- **Interactions:** Scroll-reveal animations via `IntersectionObserver`.

---

## 2. Directory Structure & Key Files
- `index.html`: The professional/technical landing page (minimalist portal).
- `pacientes.html`: The educational landing page tailored for patients.
- `pacientesPRP.html`: Deep-dive into PRP therapy for patients.
- `pacientesMCT.html`: Deep-dive into MCT (Exosomes) therapy.
- `pacientesQN.html`: Pathologies and solutions mapping ("¿Qué necesitas?").
- `css/style.css`: Source of truth for styles, using namespacing for landings.
- `js/script.js`: Logic for animations, form handling, and mobile navigation.
- `PROTOCOLO_AUTOMATIZACION_DISENO.md`: Workflow for Image-to-Code implementation.
- `PROYECTO_REFACTORIZACION_RESPONSIVE.md`: Roadmap for fluid design migration and architectural map.

---

## 3. Workflow & Development Conventions
All modifications must adhere to the **Protocolo de Automatización**.

### Coding Standards:
- **Responsive:** Fluid layouts using Flexbox and CSS Grid. Active mobile menu at 1150px to prevent nav-link collision.
- **Semantics:** Use `<main>`, `<section>`, `<header>`, `<footer>`, and proper `h1-h3` hierarchy.
- **CSS Architecture:** Use **Namespacing** (e.g., `.prp-page`) for specialized landings. Keep `style.css` light by avoiding redundant blank lines and grouping by logic.
- **SEO & A11y:** Descriptive `alt` attributes, unmasked text, and semantic structure.
- **Performance:** Aggressive image optimization and minimized code (clean CSS).

### CSS Design Tokens:
- **Primary Background:** `#000000`
- **Secondary Background:** `#212121`
- **Accent Magenta:** `#EA2BA1`
- **Accent Blue:** `#1863DC`
- **Gradients:** Use defined `--grad-vivid-cyan-purple` or `--grad-premium`.  --grad-premium: linear-gradient(135deg, #EA2BA1 0%, #1863DC 100%);

---

## 4. Estructura de Contenidos

### 4.1. Página Home (`index.html`) - Enfoque Portal Profesional
Diseñada para establecer autoridad tecnológica y presentar las soluciones de ingeniería biológica.
- **Hero/Portal Section**: División clara entre acceso "Area Clínica & Pro" y "Pacientes & Divulgación".
- **Quiénes Somos (Manifiesto)**: "QUIÉNES SOMOS: LA VANGUARDIA BIOTECNOLÓGICA". Formato narrativo tipo "Carta de Presentación" que integra los pilares tecnológicos (SBL.PRP.3 y MCT SYSTEM) en un discurso fluido. Diseño en contenedor único amplio (1100px).
- **Productos Destacados**: "EL ESTÁNDAR DE ORO EN MEDICINA AUTÓLOGA". Tarjetas técnicas de alta definición para SBL.PRP.3 y MCT SYSTEM & EXOSOMAS.

### 4.2. Página Pacientes (`pacientes.html`)
La página `pacientes.html` se organiza en secciones que responden a las dudas del usuario sin tecnicismos excesivos:

- **Sección A: INICIO (Divulgación)**: Concepto "Tu cuerpo tiene el poder de curarse". Introducción visual y analogías.
- **Sección B: ¿CÓMO FUNCIONA?**: Desglose de terapias (PRP y MCT/Exosomas) y sus diferencias en lenguaje sencillo.
- **Sección C: ¿QUÉ ME PASA? (Soluciones)**: Mapeo de aplicaciones clínicas por problema (Traumatología, Estética, Salud Íntima, Heridas).
- **Sección D: TUS DUDAS (Seguridad)**: FAQ sobre seguridad, dolor y tiempos del proceso.
- **Sección E: ENCUENTRA TU CENTRO**: Localizador de centros acreditados que utilizan tecnología SBL.

---

## 5. Directiva Primordial de Calidad Web: SEO-Ready y Adaptabilidad Universal
Cualquier modificación o implementación en este proyecto debe regirse por los estándares de calidad web más exigentes para asegurar un posicionamiento orgánico óptimo y una experiencia de usuario impecable.

### 5.1. Indexabilidad y SEO ("Luis Fonsi ft" / SEO-Friendly)
Para que los robots de búsqueda e IAs rastreen, entiendan y posicionen la web fácilmente:
- **HTML Semántico Estricto:** Uso obligatorio de etiquetas descriptivas (`<main>`, `<article>`, `<section>`, etc.) y jerarquía de encabezados (`h1` a `h3`) lógica.
- **Optimización para Motores Generativos (GEO):** Contenido de alta calidad, con autoridad real (E-E-A-T), estructurado para ser interpretado por LLMs y motores de búsqueda modernos.
- **Datos Estructurados:** Implementación de Schema.org (JSON-LD) para mejorar la visibilidad en resultados enriquecidos.
- **Metadatos y Redes Sociales:** Configuración completa de meta-tags, etiquetas Open Graph y Twitter Cards.

### 5.2. Diseño Responsivo y Adaptabilidad ("Multi-Device Ready")
La web debe funcionar perfectamente en el ecosistema actual de dispositivos:
- **Enfoque Context-First:** No solo "Mobile-First", sino adaptable al contexto del usuario usando técnicas modernas (CSS Grid, Flexbox, Container Queries).
- **Fluidez Total:** Garantizar una experiencia de usuario (UX) consistente y atractiva desde smartphones hasta monitores 4K.
- **Accesibilidad (A11y):** Cumplimiento de estándares WCAG para asegurar que el contenido sea accesible para todos los usuarios y valorado positivamente por buscadores.

### 5.3. Performance y Core Web Vitals
- **Velocidad Extrema:** Optimización agresiva de imágenes (WebP/AVIF), Lazy Loading nativo y minimización de código para maximizar los puntajes de Core Web Vitals.

---

## 6. Building and Running
This is a static frontend project.
- **Run:** Open `index.html` in a web browser.
- **Test:** Use browser DevTools (F12) to verify responsive behavior at 768px (Mobile), 1024px (Tablet), and 1440px+ (Desktop).
- **Build:** No automated build system is currently configured. 

---

## 7. Instructional Context for Gemini
When assisting with this project:
1.  **Style Matching:** Always check `css/style.css` before creating new classes to reuse variables and existing patterns.
2.  **Workflow:** Follow the steps in `PROTOCOLO_AUTOMATIZACION_DISENO.md` for any "Image-to-Code" tasks.
3.  **Content Tone:** Refer to the relevant file in `prompt/` to distinguish between patient-friendly and professional-medical messaging.
4.  **Verification:** Always prioritize visual fidelity to source images (e.g., `4.png`, `8.png`) while maintaining responsive code.
5.  **Specific Styling Rules:**
    - **Neon Mottos:** For section footer slogans (e.g., "Tu salud...", "Entras caminando..."), use `color: #fff`, `font-style: italic`, and a cyan/blue `text-shadow` glow.
    - **Gradient Headers:** Apply the signature linear gradient (Cyan -> Blue -> Purple) to key section headers (`h2`, `h3`) for consistency.
    - **Hero Layout:** Maintain the plasma sphere elevated (~18-20% Y-position) to prevent text overlap.
    - **Technical Literals:** Prioritize single-line text for technical descriptions in product cards (e.g., using letter-spacing adjustments or concise wording like "Tecnología avanzada para...").
    - **Narrative Flow:** For "About Us" sections, prefer a unified narrative container ("Manifesto style") over fragmented cards, utilizing accent colors for emphasis.

---

## 8. Tareas Pendientes

### 8.1. Optimización WebP y Performance (Completado ✅)
Se ha realizado una migración masiva de activos a formato WebP para maximizar la velocidad de carga y cumplir con los Core Web Vitals.

*   **Estado:** Finalizado el 13/02/2026.
*   **Resultados de la Auditoría:**
    *   **Imágenes Procesadas:** 69 archivos.
    *   **Peso Original:** 38.42 MB.
    *   **Peso WebP:** 7.93 MB.
    *   **Ahorro Total:** **30.49 MB (79.37% de ganancia)**.
*   **Herramienta de Mantenimiento:** Ubicada en `/tools/image_optimizer.js`. Este script basado en `Sharp` permite convertir nuevas imágenes y actualizar automáticamente las referencias en HTML/CSS.
*   **Impacto Visual:** Nulo. Se mantiene la transparencia y fidelidad de los gradientes neón.

### 8.2. Otras Optimizaciones
- **Auditoría de Assets:** Mantener la carpeta `images/` libre de archivos huérfanos utilizando el protocolo de limpieza en `images/borrame/`.
- **Refactorización Hero:** Pendiente migrar el Hero de `pacientes.html` al sistema de Grid fluido (Fase 2 de Refactorización).

---

## 9. DIRECTRICES PARA DESARROLLO WEB RESPONSIVE (CONSTITUCIÓN TÉCNICA)

### 9.1. PRINCIPIOS FUNDAMENTALES

#### 9.1.1 Mobile-First Approach
- Diseñar primero para móvil (320px mínimo) y escalar progresivamente.
- Utilizar `min-width` en media queries, no `max-width` (salvo excepciones justificadas).
- Priorizar contenido crítico en viewports pequeños.

#### 9.1.2 Diseño Fluido
- Usar unidades relativas: `%`, `vw`, `vh`, `rem`, `em`.
- Evitar anchos fijos (`px`) excepto para elementos muy específicos.
- Implementar `max-width` para controlar anchos máximos en pantallas grandes.

### 9.2. BREAKPOINTS ESTRATÉGICOS

#### 9.2.1 Sistema de Breakpoints Estándar
```css
/* Mobile: 320px - 767px (base) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px - 1439px */
@media (min-width: 1024px) { }

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) { }
```

#### 9.2.2 Breakpoints Basados en Contenido
- Añadir breakpoints intermedios cuando el diseño se rompa visualmente.
- No limitarse solo a dispositivos comunes.
- Probar anchos atípicos (360px, 414px, 834px, 1366px).

### 9.3. TÉCNICAS RESPONSIVE ESENCIALES

#### 9.3.1 Imágenes y Medios
```css
img, video, iframe {
  max-width: 100%;
  height: auto;
  display: block;
}
```
- Implementar `srcset` y `<picture>` para imágenes responsive.
- Usar lazy loading para optimización de rendimiento.

#### 9.3.2 Tipografía Fluida
```css
/* Escala tipográfica fluida */
h1 {
  font-size: clamp(1.75rem, 5vw, 3rem);
}
```
- Evitar tamaños de fuente fijos.
- Mantener legibilidad mínima (16px base).
- Ajustar line-height según viewport.

#### 9.3.3 Espaciado Adaptativo
```css
.container {
  padding: clamp(1rem, 5vw, 3rem);
  gap: clamp(1rem, 3vw, 2rem);
}
```

### 9.4. LAYOUTS MODERNOS

#### 9.4.1 CSS Grid Responsive
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

#### 9.4.2 Flexbox Flexible
```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

### 9.5. NAVEGACIÓN RESPONSIVE
- Implementar menú hamburguesa para móvil (<768px o según contenido).
- Asegurar áreas táctiles mínimas de 44x44px (WCAG).
- Proveer estados `:hover`, `:focus`, `:active` diferenciados.

### 9.6. VERIFICACIÓN OBLIGATORIA (PROTOCOLO DE PRUEBA)

#### 9.6.1 Test de Redimensionamiento Fluido
- Abrir DevTools (F12) y redimensionar desde 320px hasta 1920px **lentamente y de forma continua**.
- Identificar todos los puntos donde el diseño se rompa o se ve mal.
- **Checkpoints Específicos:**
  - ✅ **320px:** ¿Todo el contenido es visible sin scroll horizontal?
  - ✅ **375px:** iPhone estándar, ¿textos legibles?
  - ✅ **1150px:** Laptop pequeña/Tablet, ¿layout adecuado (Header/Hero)?
  - ✅ **1920px+:** ¿Contenido centrado o max-width aplicado?

#### 9.6.2 Puntos de Rotura No Controlados
Verificar que NO existan:
- Scroll horizontal inesperado.
- Overlapping (solapamiento) de elementos.
- Textos truncados o cortados.
- Imágenes distorsionadas.

### 9.7. CÓDIGO LIMPIO Y MANTENIBLE
```css
/* ❌ Evitar */
.element { width: 375px; }

/* ✅ Preferir */
.element { 
  width: min(100%, 375px);
}
```
