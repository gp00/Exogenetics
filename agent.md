# Agent Mode - Exogenetics Medicina Regenerativa

## 🎯 Perfil del Proyecto
**Exogenetics** es una plataforma de medicina regenerativa de alta gama (PRP y Exosomas). La estética es **"Pure Dark Mode"** con un feeling industrial-tecnológico, utilizando gradientes neón y tipografías potentes.

## 🛠️ Stack Tecnológico & Diseño
- **Core**: HTML5 Semántico, CSS3 Moderno, Vanilla JS.
- **Tipografía**: 
  - *Headings*: Barlow Condensed (Industrial).
  - *Body*: Inter (Moderno).
  - *Accents*: Questrial & Playfair Display (Italic).
- **Colores Clave**:
  - Magenta: `#EA2BA1`
  - Blue: `#1863DC`
  - BG: `#000000` (Pure Black).

## 🚀 Misión Actual: Refactorización Responsiva 2.0
Estamos migrando de una estructura rígida basada en `px` a un sistema **fluido y adaptable (Fluid Design)**.

### Reglas de Oro para Codificación:
1. **Unidades Relativas**: Priorizar `rem` y `%` sobre `px`.
2. **Tipografía Fluida**: Usar obligatoriamente `clamp()` para encabezados y textos principales.
3. **Layouts Modernos**: Transición de posicionamiento absoluto a **CSS Grid** y **Flexbox Wrap**.
4. **Responsive Continuo**: El diseño debe verse perfecto en el redimensionamiento continuo (320px -> 1920px), no solo en breakpoints fijos.
5. **Estética "Neon Motto"**: Slogans en itálica, color blanco con `text-shadow` cyan/blue.
6. **Directrices Responsive**: indicadas en Gemini.md, en la sección: 8.3. TÉCNICAS RESPONSIVE ESENCIALES

## 📊 Estado del Proyecto & Progreso

```markdown
| Componente/Sección | Estado    | Técnica Aplicada             | Pendiente              |
| :----------------- | :-------: | :--------------------------- | :--------------------- |
| **Header / Nav**   | 🟢 Completado | Early Hamburger (1150px)     | -                      |
| **Hero Section**   | 🟢 Completado | Fondos moleculares enmarcados| -                      |
| **Grillas Info**   | 🟢 Completado | `clamp()` y `auto-fit` total | -                      |
| **Footer**         | 🟢 Completado | Estructura centrada fluida   | -                      |
| **Página PRP**     | 🟢 Completado | Flujo 8 secciones + CTA      | Audit de performance   |
| **Página MCT**     | 🟢 Completado | Reconstrucción fiel (3.jpg)  | -                      |
| **Imágenes (Assets)**| 🟡 En Proceso | WebP conversion              | Optimizar pesos        |
```

## 📝 Notas de Contexto Reciente
- Se ha corregido un problema de solapamiento en `pacientes.html` donde el contenedor central bloqueaba el efecto hover de las imágenes de Reumatología y Tricología. Se aumentó el `z-index` de `.hero-side-images` a 20.
- Se ha completado la **Página MCT** (`pacientesMCT.html`) siguiendo fielmente las referencias visuales y añadiendo un diseño de red neuronal dinámico para los "WhatsApp" del cuerpo.
- Se ha establecido el estándar de **fondos moleculares enmarcados** (`background-size: 100% 100%`) para asegurar que las figuras de las esquinas sean visibles en todos los dispositivos.
- Los botones de conversión ahora se unificaron bajo el literal "**Solicitar Información**" y apuntan a `index.html#contacto`.
- Se ha mejorado la visibilidad de los bloques de información técnica con efectos de **Glassmorphism** y bordes neón.

## ⚠️ No Negociables
- **NO** usar Tailwind CSS (salvo petición explícita).
- **NO** romper el contraste del modo oscuro puro.
- **SIEMPRE** verificar accesibilidad y SEO (HTML semántico).

## 🤖 Directivas de Interacción (Automatización)
- **Proactividad en Consultas**: El asistente ejecutará automáticamente todas las tareas de **lectura, búsqueda y consulta** (browser/terminal) sin pedir permiso intermedio.
- **JavaScript Seguro**: Para inspección en navegador, se usará siempre `SafeToAutoRun: true` en comandos de solo lectura para agilizar el flujo de trabajo.
- **Permisos Solo para Cambios**: Solo se solicitará confirmación explícita para **modificar archivos**, borrar recursos o realizar acciones destructivas/costosas.
- **Búsqueda de Archivos**: **NUNCA** usar los comandos de terminal `grep` o `Select-String`. Utilizar siempre las herramientas integradas como `grep_search` o `find_by_name`.