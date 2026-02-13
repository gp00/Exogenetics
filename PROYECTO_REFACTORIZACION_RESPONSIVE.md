# Plan de Refactorización Responsiva - Exogenetics

Este documento detalla los pasos técnicos necesarios para transformar la arquitectura actual rígida en un sistema fluido y adaptable, cumpliendo con las nuevas directrices de `GEMINI.md`.

## 1. Fase 1: Tipografía Fluida y Unidades Relativas
El objetivo es eliminar los saltos bruscos de tamaño de texto.
- **Acción:** Identificar todos los `font-size` mayores a 24px en `style.css`.
- **Implementación:** Sustituir por la función `clamp()`. 
    - Título Hero: `font-size: clamp(3rem, 8vw, 85px);`
    - Subtítulos: `font-size: clamp(1.5rem, 4vw, 38px);`
- **Cambio de Unidades:** Migrar de `px` a `rem` para espaciados internos (padding/margin) en todos los componentes.

## 2. Fase 2: Reestructuración del Hero (De Absoluto a Grid)
Eliminar la fragilidad de los "satélites" posicionados a mano.
- **Nuevo Layout:** Implementar `display: grid` en `.hero-container`.
    - Definir 3 columnas: `[Satélite-Izq] [Contenido-Central] [Satélite-Der]`.
    - Usar `gap` relativo para controlar la separación.
- **Ajuste de Esfera:** Mantener el `background-position` porcentual pero sincronizado con el contenedor Grid.

## 3. Fase 3: Control de Navegación y Header
Evitar el desbordamiento de los enlaces del menú.
- **Flexbox Dinámico:** Usar `justify-content: space-between` y `flex-wrap: nowrap` en el header.
- **Breakpoint Preventivo:** Activar el menú hamburguesa a los 1100px si los ítems del menú superan el ancho disponible, en lugar de esperar a los 768px.

## 4. Fase 4: Secciones de Contenido (Grillas Adaptables)
Asegurar que las tarjetas de procesos y beneficios no se compriman demasiado.
- **CSS Grid:** Usar `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` para que las tarjetas se reorganicen solas sin necesidad de media queries manuales en muchos casos.

## 5. Verificación y QA
Para cada fase:
1. Abrir herramientas de desarrollador.
2. Usar el "Responsive Design Mode".
3. Arrastrar el ancho del viewport lentamente desde 1920px hasta 320px.
4. Validar que no existan barras de desplazamiento horizontal.
5. Confirmar que el texto nunca sea inferior a 16px para legibilidad.

---

## 🗺️ MAPA DE NAVEGACIÓN Y ARQUITECTURA FINAL

El proyecto se organiza como un sistema de áreas independientes conectadas por un portal raíz.

### 1. Portal de Entrada (`index.html`)
*   **Propósito:** Distribuidor de tráfico y captación profesional.
*   **Menú:** `QUIENES SOMOS` | `Profesionales` | `Pacientes` | `Contacto`.
*   **Contenido:** Landing minimalista con acceso directo al formulario profesional.

### 2. Área Pacientes (`pacientes.html` y subpáginas)
*   **Propósito:** Divulgación empática y educación sobre terapias.
*   **Menú Fijo:** `Inicio` | `QUIENES SOMOS` | `¿Cómo funciona?` (PRP/MCT) | `¿Qué necesitas?` | `Contacto`.
*   **Estructura de Silos:**
    *   `pacientes.html`: Landing general de soluciones.
    *   `pacientesPRP.html`: Detalle técnico-divulgativo de Plasma Rico en Plaquetas. (COMPLETADO)
    *   `pacientesMCT.html`: Detalle de Exosomas y Mensajeros Celulares. (COMPLETADO)
    *   `pacientesQN.html`: Mapeo de patologías y soluciones. (PENDIENTE)

### 3. Área Profesionales (`Profesionales.html`)
*   **Propósito:** Información técnica de alto nivel, estudios clínicos y especificaciones.

### 🛠️ CONVENCIONES DE NAVEGACIÓN
- **Salida al Portal:** La opción `Inicio` siempre debe volver a `index.html`.
- **Anclajes Globales:** `QUIENES SOMOS` y `Contacto` apuntan siempre a sus respectivas secciones en la home principal (`index.html#contacto`).
- **Navegación Activa:** La página actual debe destacarse en el menú usando el color `var(--color-accent-magenta)`.
- **Dropdowns:** El ancho mínimo del dropdown es de `340px` para evitar saltos de línea en textos largos.