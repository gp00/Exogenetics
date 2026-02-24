# 📋 Plan de Refactorización CSS - Exogenetics

**Documento de Planificación Técnica**  
**Versión:** 1.0  
**Fecha:** 21 de febrero de 2026  
**Estado:** ✅ Completado (24 de febrero de 2026)

---

## 🎯 Resumen Ejecutivo

Este documento detalla el plan para separar el archivo CSS monolítico actual (`style.css` - 174 KB) en **3 archivos especializados** para mejorar el rendimiento, la mantenibilidad y la organización del código.

### Situación Actual

```
📁 css/
├── style.css           173.92 KB (8,516 líneas) ← MONOLÍTICO
├── profesionales.css    23.11 KB (1,143 líneas) ← Parcialmente implementado
└── contact_styles.css    4.25 KB (212 líneas)
```

### Situación Propuesta

```
📁 css/
├── style.css            ~50 KB ← Comunes y globales
├── pacientes.css        ~70 KB ← 4 páginas de pacientes
├── profesionales.css    ~54 KB ← 4 páginas de profesionales
└── contact_styles.css    ~4 KB ← Formulario (se mantiene)
```

---

## 📊 Análisis de Impacto

### 1. Mapa de Páginas Actual

| Página | Clase Namespace | Grupo | CSS Actual |
|:-------|:----------------|:------|:-----------|
| `index.html` | `.portal-page` | Portal | style.css |
| `pacientes.html` | - | Pacientes | style.css |
| `pacientesPRP.html` | `.prp-page` | Pacientes | style.css |
| `pacientesMCT.html` | `.mct-page` | Pacientes | style.css |
| `pacientesQN.html` | `.qn-page` | Pacientes | style.css |
| `Profesionales.html` | `.profesionales-page` | Profesionales | style.css |
| `ProfesionalesPRP.html` | - | Profesionales | style.css |
| `ProfesionalesMCT.html` | `.mct-page` | Profesionales | style.css + mct_styles.css* |
| `ProfesionalesEC.html` | - | Profesionales | style.css |

*`mct_styles.css` se generó temporalmente durante el desarrollo

### 2. Distribución de Estilos

```markdown
| Categoría | Selectores | Líneas Est. | KB Est. | % del Total |
|:-----------|-----------:|------------:|--------:|------------:|
| Comunes/Globales | ~59 | ~2,500 | ~50 KB | ~29% |
| Pacientes (4 páginas) | ~166 | ~3,500 | ~70 KB | ~40% |
| Profesionales (4 páginas) | ~125 | ~2,500 | ~54 KB | ~31% |
| **TOTAL** | **~350** | **8,516** | **174 KB** | **100%** |
```

### 3. Impacto en Rendimiento

| Escenario | Antes | Después | Mejora |
|:----------|:------|:--------|:-------|
| **Primera Visita (Portal)** | 174 KB | ~50 KB | ✅ **-71%** |
| **Primera Visita (Pacientes)** | 174 KB | ~120 KB | ✅ **-31%** |
| **Primera Visita (Profesionales)** | 174 KB | ~104 KB | ✅ **-40%** |
| **Navegación misma área** | Cache | Cache CSS | ✅ 0 KB extra |

---

## 🏗️ Arquitectura Propuesta

### 3.1 Estructura de Archivos

```
css/
├── style.css                 ← CORE (Variables, Reset, Componentes Globales)
│   ├── :root (CSS Variables)
│   ├── Reset & Base
│   ├── Tipografía Global
│   ├── Header & Navegación
│   ├── Footer
│   ├── Botones (.btn-*)
│   ├── Utilidades (.container, .section-padding, etc.)
│   └── Componentes Compartidos
│
├── pacientes.css             ← PACIENTES AREA
│   ├── .pacientes-page (pacientes.html)
│   ├── .prp-page (pacientesPRP.html)
│   ├── .mct-page (pacientesMCT.html)
│   └── .qn-page (pacientesQN.html)
│
├── profesionales.css         ← PROFESIONALES AREA
│   ├── .profesionales-page (Profesionales.html)
│   ├── .pro-* (ProfesionalesPRP.html)
│   ├── .mct-page (ProfesionalesMCT.html)
│   └── .sbl-* (Componentes SBL.PRP.3)
│
└── contact_styles.css        ← FORMULARIO (se mantiene independiente)
```

### 3.2 Reglas de Asignación

#### ✅ Qué va en `style.css` (Comunes)

```css
/* Variables CSS Globales */
:root {
  --color-bg-primary: #000000;
  --color-accent-magenta: #EA2BA1;
  --font-main: 'Barlow Condensed', sans-serif;
  /* ... todas las variables ... */
}

/* Reset y Base */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: var(--font-body); }

/* Header & Navegación (común a todas las páginas) */
.header-fijo { ... }
.nav-container { ... }
.nav-link { ... }

/* Footer (común a todas las páginas) */
.site-footer { ... }

/* Botones Globales */
.btn-premium { ... }
.btn-accent { ... }

/* Utilidades */
.container { ... }
.section-padding { ... }
.section-title { ... } /* Solo si es verdaderamente común */
.text-center { ... }
.hidden { ... }

/* Componentes Compartidos */
.card-glass { ... }
.gradient-text { ... }
```

#### ✅ Qué va en `pacientes.css`

```css
/* Pacientes.html */
.pacientes-page .hero { ... }
.pacientes-page .info-grid { ... }

/* PacientesPRP.html */
.prp-page .prp-hero { ... }
.prp-page .prp-comparativa { ... }
.prp-page .prp-benefits-grid { ... }

/* PacientesMCT.html */
.mct-page .mct-hero { ... }
.mct-page .mct-whatsapp-concept { ... }

/* PacientesQN.html */
.qn-page .qn-body-map { ... }
.qn-page .qn-problem-solution { ... }
```

#### ✅ Qué va en `profesionales.css`

```css
/* Profesionales.html */
.profesionales-page .pro-hero { ... }
.profesionales-page .pro-paradigma { ... }
.profesionales-page .pro-triada { ... }
.profesionales-page .pro-sbl-* { ... }

/* ProfesionalesPRP.html */
.profesionales-page .prp-page-header { ... }
.profesionales-page .prp-filtrado { ... }
.profesionales-page .prp-inteligencia { ... }

/* ProfesionalesMCT.html */
.mct-page .mct-hero-section { ... }
.mct-page .mct-paradigm-section { ... }
.mct-page .mct-leap-section { ... }
/* ... todas las secciones MCT ... */

/* ProfesionalesEC.html */
.profesionales-page .ec-repository { ... }
.profesionales-page .ec-filters { ... }
```

---

## 📝 Guía de Migración Paso a Paso

### **Fase 1: Auditoría y Preparación** (2-3 horas)

#### Paso 1.1: Inventario de Selectores

```bash
# Ejecutar desde el directorio tools/
node -e "
const fs = require('fs');
const content = fs.readFileSync('../css/style.css', 'utf8');

// Extraer todos los selectores
const selectors = content.match(/[^{}]+(?=\{)/g);

// Clasificar por tipo
const common = selectors.filter(s => 
  s.includes(':root') || 
  s.includes('html') || 
  s.includes('body') ||
  s.includes('.header') ||
  s.includes('.footer') ||
  s.includes('.btn-') ||
  s.includes('.container')
);

const pacientes = selectors.filter(s => 
  s.includes('.pacientes-page') ||
  s.includes('.prp-page') ||
  s.includes('.mct-page') ||
  s.includes('.qn-page')
);

const profesionales = selectors.filter(s => 
  s.includes('.profesionales-page') ||
  s.includes('.pro-') ||
  s.includes('.sbl-')
);

console.log('Comunes:', common.length);
console.log('Pacientes:', pacientes.length);
console.log('Profesionales:', profesionales.length);
"
```

#### Paso 1.2: Crear Copias de Seguridad

```bash
# En directorio css/
cp style.css style.css.backup
cp profesionales.css profesionales.css.backup
```

---

### **Fase 2: Extracción de Estilos Comunes** (1-2 horas)

#### Paso 2.1: Crear Nuevo `style.css`

1. Copiar `style.css` a `style.css.temp`
2. Eliminar todo el contenido específico de páginas
3. Mantener solo:
   - Variables CSS (`:root`)
   - Reset y estilos base
   - Header, Footer, Navegación
   - Botones y utilidades
   - Componentes verdaderamente compartidos

```css
/* style.css - SOLO COMUNES */

/* 1. Variables */
:root {
  /* ... todas las variables ... */
}

/* 2. Reset */
*, *::before, *::after { ... }

/* 3. Tipografía Base */
body { ... }
h1, h2, h3 { ... }

/* 4. Header & Nav */
.header-fijo { ... }
.nav-container { ... }

/* 5. Footer */
.site-footer { ... }

/* 6. Botones */
.btn-premium { ... }

/* 7. Utilidades */
.container { ... }
.section-padding { ... }
```

#### Paso 2.2: Validar `style.css` Resultante

```bash
# Verificar que no hay selectores específicos de página
grep -E "\.prp-page|\.profesionales-page|\.qn-page" css/style.css
# Debe retornar vacío
```

---

### **Fase 3: Crear `pacientes.css`** (2-3 horas)

#### Paso 3.1: Extraer Estilos de Pacientes

Desde `style.css.temp` (backup), extraer:

```css
/* pacientes.css */

/* ==========================================================================
   PACIENTES.HTML
   ========================================================================== */
.pacientes-page .hero { ... }
.pacientes-page .hero-sphere { ... }
.pacientes-page .info-grid { ... }
/* ... todos los estilos de pacientes.html ... */

/* ==========================================================================
   PACIENTESPRP.HTML (.prp-page)
   ========================================================================== */
.prp-page .prp-hero { ... }
.prp-page .prp-comparativa { ... }
.prp-page .prp-benefits-grid { ... }
/* ... todos los estilos de pacientesPRP.html ... */

/* ==========================================================================
   PACIENTESMCT.HTML (.mct-page - pacientes)
   ========================================================================== */
.mct-page.mct-pacientes .mct-hero { ... }
/* ... estilos específicos de pacientesMCT.html ... */

/* ==========================================================================
   PACIENTESQN.HTML (.qn-page)
   ========================================================================== */
.qn-page .qn-body-map { ... }
.qn-page .qn-problem-solution { ... }
/* ... todos los estilos de pacientesQN.html ... */
```

#### Paso 3.2: Añadir Dependencias

Al inicio de `pacientes.css`:

```css
/* ==========================================================================
   DEPENDENCIAS: Este archivo requiere css/style.css cargado previamente
   ========================================================================== */
/* 
   Variables utilizadas:
   - var(--color-bg-primary)
   - var(--color-accent-magenta)
   - var(--font-main)
   - var(--grad-premium)
   
   Componentes heredados:
   - .container
   - .section-padding
   - .btn-premium
   - .header-fijo
   - .site-footer
*/
```

---

### **Fase 4: Consolidar `profesionales.css`** (1-2 horas)

#### Paso 4.1: Fusionar con `mct_styles.css`

```bash
# Concatenar profesionales.css existente con mct_styles.css
cat css/profesionales.css css/mct_styles.css > css/profesionales.temp.css

# Mover estilos MCT a la sección correcta
# (ver Paso 4.2)
```

#### Paso 4.2: Organizar por Página

```css
/* profesionales.css */

/* ==========================================================================
   PROFESIONALES.HTML (.profesionales-page)
   ========================================================================== */
.profesionales-page .pro-hero { ... }
.profesionales-page .pro-paradigma { ... }
.profesionales-page .pro-triada { ... }
.profesionales-page .pro-sbl-engineering { ... }
/* ... todos los estilos de Profesionales.html ... */

/* ==========================================================================
   PROFESIONALESPRP.HTML (.pro-*)
   ========================================================================== */
.profesionales-page .prp-page-header { ... }
.profesionales-page .prp-filtrado { ... }
.profesionales-page .prp-inteligencia { ... }
/* ... todos los estilos de ProfesionalesPRP.html ... */

/* ==========================================================================
   PROFESIONALESMCT.HTML (.mct-page - profesionales)
   ========================================================================== */
.mct-page .mct-hero-section { ... }
.mct-page .mct-paradigm-section { ... }
.mct-page .mct-molecular-section { ... }
.mct-page .mct-leap-section { ... }
.mct-page .mct-phototransduction-section { ... }
.mct-page .mct-thermodynamics-section { ... }
.mct-page .mct-molecular-profile-section { ... }
.mct-page .mct-exotech-section { ... }
.mct-page .mct-safety-matrix-section { ... }
.mct-page .mct-workflow-section { ... }
.mct-page .mct-selection-section { ... }
.mct-page .mct-standard-section { ... }
/* ... todos los estilos de ProfesionalesMCT.html ... */

/* ==========================================================================
   PROFESIONALESEC.HTML (.ec-*)
   ========================================================================== */
.profesionales-page .ec-repository { ... }
.profesionales-page .ec-filters { ... }
/* ... todos los estilos de ProfesionalesEC.html ... */
```

---

### **Fase 5: Actualizar Archivos HTML** (30 minutos)

#### Paso 5.1: Actualizar `<head>` de Cada Página

**index.html:**
```html
<head>
  <!-- ... meta tags ... -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/contact_styles.css">
</head>
```

**pacientes.html, pacientesPRP.html, pacientesMCT.html, pacientesQN.html:**
```html
<head>
  <!-- ... meta tags ... -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/pacientes.css">
</head>
```

**Profesionales.html, ProfesionalesPRP.html, ProfesionalesMCT.html, ProfesionalesEC.html:**
```html
<head>
  <!-- ... meta tags ... -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/profesionales.css">
</head>
```

#### Paso 5.2: Script de Actualización Automática

```javascript
// tools/update_css_links.js
const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, '..');
const updates = {
  'index.html': ['css/style.css', 'css/contact_styles.css'],
  'pacientes.html': ['css/style.css', 'css/pacientes.css'],
  'pacientesPRP.html': ['css/style.css', 'css/pacientes.css'],
  'pacientesMCT.html': ['css/style.css', 'css/pacientes.css'],
  'pacientesQN.html': ['css/style.css', 'css/pacientes.css'],
  'Profesionales.html': ['css/style.css', 'css/profesionales.css'],
  'ProfesionalesPRP.html': ['css/style.css', 'css/profesionales.css'],
  'ProfesionalesMCT.html': ['css/style.css', 'css/profesionales.css'],
  'ProfesionalesEC.html': ['css/style.css', 'css/profesionales.css'],
};

Object.entries(updates).forEach(([file, cssFiles]) => {
  const filePath = path.join(htmlDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Eliminar links CSS existentes
  content = content.replace(/<link[^>]*href="css\/[^"]+\.css"[^>]*>/g, '');
  
  // Insertar nuevos links
  const cssLinks = cssFiles.map(css => 
    `    <link rel="stylesheet" href="${css}">`
  ).join('\n');
  
  // Insertar antes de </head>
  content = content.replace('</head>', cssLinks + '\n</head>');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ ${file} actualizado`);
});
```

---

### **Fase 6: Testing Visual** (2-3 horas)

#### Paso 6.1: Checklist de Verificación

Para cada página, verificar:

```markdown
| Página | Desktop (1920px) | Tablet (1024px) | Mobile (375px) | Estado |
|:-------|:----------------:|:---------------:|:--------------:|:------:|
| index.html | ⬜ | ⬜ | ⬜ | ⬜ |
| pacientes.html | ⬜ | ⬜ | ⬜ | ⬜ |
| pacientesPRP.html | ⬜ | ⬜ | ⬜ | ⬜ |
| pacientesMCT.html | ⬜ | ⬜ | ⬜ | ⬜ |
| pacientesQN.html | ⬜ | ⬜ | ⬜ | ⬜ |
| Profesionales.html | ⬜ | ⬜ | ⬜ | ⬜ |
| ProfesionalesPRP.html | ⬜ | ⬜ | ⬜ | ⬜ |
| ProfesionalesMCT.html | ⬜ | ⬜ | ⬜ | ⬜ |
| ProfesionalesEC.html | ⬜ | ⬜ | ⬜ | ⬜ |
```

#### Paso 6.2: Puntos Críticos a Verificar

```markdown
1. **Header & Navegación**
   - [ ] Logo visible y centrado
   - [ ] Menú hamburguesa funciona en móvil (< 1150px)
   - [ ] Dropdowns se muestran correctamente
   - [ ] Estado activo resaltado

2. **Tipografía**
   - [ ] Títulos con gradiente cyan-magenta
   - [ ] Subtítulos legibles
   - [ ] Texto de cuerpo con contraste adecuado

3. **Componentes Específicos**
   - [ ] Botones con hover correcto
   - [ ] Tarjetas con bordes y sombras
   - [ ] Imágenes con bordes redondeados
   - [ ] Gradientes se ven correctamente

4. **Responsive**
   - [ ] No hay scroll horizontal
   - [ ] Textos no se solapan
   - [ ] Imágenes escalan proporcionalmente
   - [ ] Espaciado adecuado en móvil
```

---

### **Fase 7: Testing de Performance** (1-2 horas)

#### Paso 7.1: Medir Antes y Después

```bash
# Usar Lighthouse CLI
npm install -g lighthouse

# Antes (con style.css monolítico)
lighthouse http://localhost:8080 --output=json --output-path=before.json

# Después (con CSS separado)
lighthouse http://localhost:8080 --output=json --output-path=after.json
```

#### Paso 7.2: Métricas a Comparar

```markdown
| Métrica | Antes | Después | Objetivo |
|:--------|:------|:--------|:---------|
| **FCP** (First Contentful Paint) | - | - | < 1.5s |
| **LCP** (Largest Contentful Paint) | - | - | < 2.5s |
| **TBT** (Total Blocking Time) | - | - | < 200ms |
| **CLS** (Cumulative Layout Shift) | - | - | < 0.1 |
| **CSS Transfer Size** | 174 KB | ~50-120 KB | -40% mínimo |
```

#### Paso 7.3: Verificar Caché

```javascript
// En DevTools Console
performance.getEntriesByType('resource')
  .filter(r => r.name.includes('.css'))
  .forEach(r => {
    console.log(r.name.split('/').pop(), r.transferSize, r.encodedBodySize);
  });
```

---

### **Fase 8: Validación Final** (30 minutos)

#### Paso 8.1: Checklist de Entrega

```markdown
- [x] Todos los archivos CSS creados y validados
- [x] Todos los HTML actualizados con nuevos `<link>`
- [x] Testing visual completado en 9 páginas
- [x] Testing responsive en 3 breakpoints
- [x] Core Web Vitals medidos y dentro de objetivos
- [x] Backups creados y almacenados (y posteriormente limpiados)
- [x] Documentación actualizada
- [x] Commit preparado con mensaje descriptivo
```

#### Paso 8.2: Comandos de Validación

```bash
# Verificar que no hay referencias rotas
grep -r "mct_styles.css" . --include="*.html"
# Debe retornar vacío (ya no se usa)

# Verificar tamaño de archivos
ls -lh css/*.css

# Verificar que style.css no tiene selectores específicos
grep -E "\.prp-page|\.profesionales-page" css/style.css
# Debe retornar vacío
```

---

## 📈 Métricas de Éxito

### Criterios de Aceptación

```markdown
1. ✅ **Reducción de CSS descargado**
   - Portal: -70% mínimo (174 KB → ~50 KB)
   - Pacientes: -30% mínimo (174 KB → ~120 KB)
   - Profesionales: -40% mínimo (174 KB → ~104 KB)

2. ✅ **Core Web Vitals**
   - LCP < 2.5s en todas las páginas
   - FCP < 1.5s en todas las páginas
   - TBT < 200ms

3. ✅ **Funcionalidad**
   - 0 errores de consola relacionados con CSS
   - 0 estilos rotos en testing visual
   - 0 problemas de responsive

4. ✅ **Mantenibilidad**
   - Selectores correctamente namespaceados
   - Comentarios claros en cada archivo
   - Documentación actualizada
```

---

## 🔄 Rollback Plan

Si algo sale mal durante la migración:

### Paso R.1: Restaurar Backups

```bash
cd css/
mv style.css style.css.new
mv style.css.backup style.css

mv profesionales.css profesionales.css.new
mv profesionales.css.backup profesionales.css

# Eliminar archivos temporales
rm -f mct_styles.css
```

### Paso R.2: Revertir HTML

```bash
# Si se usó el script de actualización, revertir manualmente
# o usar git:
git checkout -- *.html
```

### Paso R.3: Validar

```bash
# Recargar todas las páginas y verificar que funcionan
# Ejecutar testing visual rápido
```

---

## 📚 Recursos y Referencias

### Herramientas Recomendadas

| Herramienta | Propósito | URL |
|:------------|:----------|:----|
| **Lighthouse** | Performance audit | Chrome DevTools |
| **CSS Stats** | Analizar CSS | https://cssstats.com/ |
| **PurgeCSS** | Eliminar CSS no usado | https://purgecss.com/ |
| **CSSO** | CSS minifier | https://github.com/css/csso |

### Lecturas Recomendadas

- [CSS Architecture Best Practices](https://www.smashingmagazine.com/2016/06/css-architecture-best-practices/)
- [Critical CSS Extraction](https://web.dev/extract-critical-css/)
- [CSS Splitting Strategies](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)

---

## 👥 Roles y Responsabilidades

| Rol | Responsabilidades | Tiempo Est. |
|:----|:------------------|:-----------:|
| **Lead Developer** | Aprobar plan, revisar código, validar métricas | 2-3 horas |
| **Frontend Developer** | Ejecutar migración, testing visual | 6-10 horas |
| **QA Tester** | Testing responsive, validación cross-browser | 2-3 horas |
| **DevOps** | Deploy a staging, medición de performance | 1 hora |

---

## 📅 Cronograma Estimado

```
Semana 1:
├── Día 1: Fases 1-2 (Auditoría y Extracción Comunes) - 4 horas
├── Día 2: Fases 3-4 (Crear pacientes.css y profesionales.css) - 5 horas
├── Día 3: Fase 5 (Actualizar HTML) - 1 hora
├── Día 4: Fase 6 (Testing Visual) - 3 horas
└── Día 5: Fases 7-8 (Performance y Validación) - 2 horas

Total: 15 horas estimadas
```

---

## ✅ Aprobaciones

| Rol | Nombre | Fecha | Firma |
|:----|:-------|:------|:------|
| **Project Manager** | | | |
| **Lead Developer** | | | |
| **QA Lead** | | | |

---

## 📝 Changelog

| Versión | Fecha | Cambios | Autor |
|:--------|:------|:--------|:------|
| 1.0 | 21/02/2026 | Documento inicial creado | - |
| 1.1 | 24/02/2026 | Ejecución de refactorización completada (css modularizado) | Antigravity |

---

**Documento creado para:** Exogenetics Medicina Regenerativa  
**Propósito:** Planificar refactorización CSS para mejorar rendimiento y mantenibilidad  
**Próxima revisión:** Después de completar la migración
