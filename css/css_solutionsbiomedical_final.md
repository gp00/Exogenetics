# Guía Maestra de Diseño: Solutions Biomedical (Especificación Definitiva)

Este documento consolida el análisis técnico de múltiples fuentes para proporcionar la referencia absoluta en la replicación de la identidad visual, UX y arquitectura frontend del sitio [solutionsbiomedical.com](https://solutionsbiomedical.com/).

> **Objetivo:** Servir como "Prompt Maestro" para la generación de una nueva web que herede este ADN visual premium, industrial y tecnológico.

---

## 1. Sistema de Diseño (Design Tokens)

### 1.1. Paleta de Colores (Core & Extended)

La identidad se basa en un "Modo Oscuro Puro" enriquecido con gradientes vibrantes y acentos funcionales.

#### Colores Base y Sistema
```markdown
| Variable CSS / Nombre           | Valor Hexadecimal                | Uso Principal en Interfaz                           |
|:--------------------------------|:---------------------------------|:----------------------------------------------------|
| `--color-bg-primary`            | `#000000`                        | Fondo lienzo principal (Body, Secciones).           |
| `--color-bg-secondary`          | `#212121`                        | Fondo de tarjetas, modales y pies de página.        |
| `--color-text-main`             | `#FFFFFF`                        | Títulos, navegación y etiquetas de alto contraste.  |
| `--color-text-body`             | `#AFAFAF` / `#B0B0B0`            | Texto de párrafo, descripciones y metadatos.        |
| `--color-accent-magenta`        | `#EA2BA1`                        | **Identidad:** Títulos destacados, hovers y CTAs.   |
| `--color-accent-blue`           | `#1863DC`                        | Enlaces secundarios y elementos decorativos.        |
| `--color-border-subtle`         | `rgba(255, 255, 255, 0.35)`      | Bordes de formularios y separadores tenues.         |
```

#### Gradientes Premium (WordPress Presets Extract)
El sitio utiliza gradientes sofisticados para fondos y elementos gráficos:
*   **Vivid Cyan to Purple:** `linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)`
*   **Cool to Warm Spectrum:** `linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, ...)`
*   **Midnight:** `linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%)`

### 1.2. Tipografía y Jerarquía

Se emplea un sistema de tres familias para crear contraste entre lo "técnico/industrial" y lo "geométrico/moderno".

```markdown
| Jerarquía       | Familia Tipográfica  | Peso (Weight) | Tamaño Desktop | Tamaño Móvil | Aplicación                                    |
|:----------------|:---------------------|:--------------|:---------------|:-------------|:----------------------------------------------|
| **H1, H3, Nav** | **Barlow Condensed** | 600 / 700     | 45px - 60px    | 32px         | Títulos de impacto, Navegación Principal.     |
| **H2**          | **Questrial**        | 700 (Bold)    | 42px           | 28px         | Subtítulos seccionales (Geométrico/Limpio).   |
| **Cuerpo**      | **Inter**            | 400 (Regular) | 16px           | 15px         | Texto general, lectura prolongada.            |
| **Botones**     | **Barlow Condensed** | 600 (SemiBold)| 20px           | 18px         | Calls to Action (Uppercase).                  |
```

**Importación CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@300;400;500&family=Questrial&display=swap');
```

---

## 2. Componentes UI (Especificación CSS)

### 2.1. Botones "Ghost" Premium
Botones con borde sólido y fondo transparente que reaccionan al hover.

```css
.btn-premium {
  display: inline-block;
  background-color: transparent; /* O #32373c para variantes sólidas */
  color: #FFFFFF;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 18px 34px;       /* Dimensiones generosas */
  border: 2.4px solid #FFFFFF;
  border-radius: 4px;       /* Redondeado sutil */
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-premium:hover {
  background-color: #FFFFFF;
  color: #000000;
  transform: translateY(-2px); /* Elevación sutil */
}
```

### 2.2. Header Sticky & Navegación
La cabecera se mantiene fija y gestiona el espacio del cuerpo.

```css
/* Header Container */
.header-fijo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.95); /* Casi opaco */
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* Compensación de Body */
body {
  padding-top: 90px; 
}
```

### 2.3. Formularios Minimalistas (Estilo Mailchimp Replicado)
Inputs diseñados para integrarse en fondos oscuros sin "cajas" blancas agresivas.

```css
input[type="text"], input[type="email"] {
  width: 100%;
  padding: 14px 22px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35); /* Borde sutil */
  color: #FFFFFF;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #EA2BA1; /* Acento magenta al foco */
}
```

### 2.4. Modal de "Acceso Profesional"
El sitio usa modales oscuros para gateways de contenido.

```css
.modal-overlay {
  background: rgba(80, 80, 80, 0.85); /* Overlay gris denso */
}
.modal-content {
  background: #5a5a5a;
  color: #FFFFFF;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 12px 12px 50px rgba(0, 0, 0, 0.4); /* Sombra "Deep" */
}
```

---

## 3. Layout y Estructura (Grid System)

### 3.1. Dimensiones y Breakpoints
*   **Container Width:** `1200px` (Desktop Wide), `800px` (Content Focused).
*   **Block Gap:** `24px` entre elementos grids.
*   **Breakpoints:**
    *   Mobile: `< 768px`
    *   Tablet: `768px - 1024px`
    *   Desktop: `> 1025px`

### 3.2. Espaciado (Rhythm)
Uso generoso del espacio negativo ("whitespace" negro) para lujo visual.
*   **Padding de Sección:** `130px` vertical en secciones principales.
*   **Separación de Elementos:** Sistema REM (`0.44rem`, `1rem`, `2.25rem`, `5.06rem`).

---

## 4. Recursos Visuales (Assets)

### Tabla de Recursos Críticos
| Recurso | Tipo | URL Referencia / Descripción |
|:--- |:--- |:--- |
| **Logotipo Principal** | PNG | C:\a\pruebas\Logo_Exogenetics_F_Transparente.png |
| **Iconografía** | Librería | **Font Awesome 5** (Solid/Regular) o **Phosphor Icons** (estilo Thin/Light). |
| **Imágenes** | Estilo | Tratamiento oscuro, viñeteado negro, saturación selectiva en azules/magentas. |

---

## 5. Instrucciones de Implementación para la IA

Cuando generes la nueva web basada en estos estilos, sigue rigurosamente estas directivas:

1.  **Framework Recomendado:** Usa **Tailwind CSS**. Configura el `tailwind.config.js` extendiendo el tema con los colores (`magenta: '#EA2BA1'`) y las familias tipográficas (`font-barlow`, `font-questrial`, `font-inter`) definidos arriba.
2.  **Anti-Aliasing:** Aplica siempre `-webkit-font-smoothing: antialiased` en el body para que las fuentes finas sobre fondo negro se vean nítidas.
3.  **Fidelidad de Componentes:** No uses botones estándar. Implementa el componente `.btn-premium` con las medidas de borde exactas (`2.4px`) especificadas.
4.  **Interacción:** Asegura que todos los elementos interactivos tengan estados `:hover` claros (cambio de fondo a blanco/negro invertido) y transiciones suaves (`duration-300`).
5.  **Animaciones:** Implementa efectos de entrada `fade-in-up` sutiles para los textos y tarjetas al hacer scroll, similar a la librería de Elementor usada en el original.
