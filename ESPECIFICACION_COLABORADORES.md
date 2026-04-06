# Especificación de Implementación: Red de Clínicas Colaboradoras

## 1. Resumen General

### 1.1. Objetivo
Añadir una sección de **"Red de Clínicas Colaboradoras"** (Social Proof) que muestre las tres clínicas que confían en Exogenetics y utilizan sus protocolos regenerativos. Esta sección se implementará en **dos páginas**: `index.html` (enfoque institucional B2B) y `pacientes.html` (enfoque conversión pacientes).

### 1.2. Ubicaciones Elegidas

| Página | Posición | Título de Sección | Enfoque |
|:-------|:---------|:------------------|:--------|
| **`index.html`** | Entre `.home-products` y `#contacto` | CLÍNICAS DE REFERENCIA | Aval institucional B2B |
| **`pacientes.html`** | Al final de la página, antes del `</main>` | ¿DÓNDE REALIZAR TU TRATAMIENTO? | Conversión directa de pacientes |

**Flujo narrativo en `index.html`:**
```
Quiénes Somos → Productos Destacados → Clínicas de Referencia → Contacto
```

**Flujo narrativo en `pacientes.html`:**
```
Educación PRP → Proceso → ¿Dónde Realizar Tu Tratamiento? → Cierre
```

### 1.3. Archivos a Modificar

| Archivo | Acción |
|:--------|:-------|
| `index.html` | Insertar nueva sección HTML (título B2B) |
| `pacientes.html` | Insertar nueva sección HTML (título orientado a pacientes) |
| `css/style.css` | Añadir estilos CSS compartidos de la sección |
| `images/ME_Logo.webp` | Logo Clínica ME (convertir de PNG a WebP) |
| `images/Traumatologia21_Logo.webp` | Logo Traumatología21 (convertir de PNG a WebP) |
| `images/Uribe_Logo.webp` | Logo Clínica Uribe (convertir de PNG a WebP) |

---

## 2. Estructura HTML

### 2.1. Punto de Inserción en `index.html`

Insertar **DESPUÉS** del cierre de `</section>` de `.home-products` (línea ~244) y **ANTES** de `<!-- Contact Section -->` (línea ~247).

### 2.2. Punto de Inserción en `pacientes.html`

Insertar **ANTES** del cierre `</main>` al final del archivo. Buscar la última sección de la página y colocar justo después de su cierre `</section>`.

### 2.3. Código HTML Completo (Bloque Base Compartido)

> **NOTA IMPORTANTE:** Este bloque es **idéntico** para ambas páginas. La **única diferencia** es el texto del `<h2>` (ver indicación comentada en el HTML).

```html
<!-- SECCIÓN: RED DE CLÍNICAS COLABORADORAS (SOCIAL PROOF) -->
<!-- En index.html: usar título "CLÍNICAS DE REFERENCIA" -->
<!-- En pacientes.html: usar título "¿DÓNDE REALIZAR TU TRATAMIENTO?" -->
<section class="partners-section fade-in" id="colaboradores">
    <div class="container">
        <h2 class="section-title">CLÍNICAS DE REFERENCIA</h2>
        <p class="partners-intro">
            Centros médicos que integran nuestros protocolos de medicina regenerativa
            en su práctica clínica diaria.
        </p>

        <div class="partners-grid">

            <!-- TARJETA 1: Clínica ME -->
            <article class="partner-card">
                <div class="partner-logo-wrapper">
                    <a href="https://clinicaesteticadraesteban.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Visitar web de Clínica ME - Dra. Margarita Esteban"
                       aria-label="Visitar sitio web de Clínica ME - Dra. Margarita Esteban (se abre en nueva pestaña)">
                        <img src="images/ME_Logo.webp"
                             alt="Logo de Clínica ME - Dra. Margarita Esteban, Medicina Estética en Bilbao"
                             loading="lazy"
                             width="280"
                             height="100">
                    </a>
                </div>
                <div class="partner-info">
                    <h3 class="partner-name">Clínica ME</h3>
                    <p class="partner-specialty">Medicina Estética</p>
                    <p class="partner-doctor">Dra. Margarita Esteban</p>

                    <div class="partner-details">
                        <div class="detail-item">
                            <!-- Icono Ubicación -->
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>García Rivero Maisuaren Kalea, 3<br>48011 Bilbao, Bizkaia</span>
                        </div>
                        <div class="detail-item">
                            <!-- Icono Teléfono -->
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span>94 439 94 51 / 689 70 73 17</span>
                        </div>
                        <div class="detail-item">
                            <!-- Icono Email -->
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>info@clinicamebilbao.com</span>
                        </div>
                    </div>
                </div>
                <div class="partner-footer">
                    <a href="https://clinicaesteticadraesteban.com"
                       class="btn-premium partner-btn"
                       target="_blank"
                       rel="noopener noreferrer">
                        VISITAR WEB
                        <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </article>

            <!-- TARJETA 2: Traumatología21 -->
            <article class="partner-card">
                <div class="partner-logo-wrapper">
                    <a href="https://www.traumarehabilitacion.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Visitar web de Traumatología21"
                       aria-label="Visitar sitio web de Traumatología21 - Centro de Traumatología y Ortopedia (se abre en nueva pestaña)">
                        <img src="images/Traumatologia21_Logo.webp"
                             alt="Logo de Traumatología21 - Centro de Traumatología y Ortopedia en Bilbao"
                             loading="lazy"
                             width="280"
                             height="100">
                    </a>
                </div>
                <div class="partner-info">
                    <h3 class="partner-name">Traumatología21</h3>
                    <p class="partner-specialty">Traumatología y Ortopedia</p>
                    <p class="partner-doctor">Dr. Iñaki Mínguez y Equipo Médico</p>

                    <div class="partner-details">
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>Sedes en Bilbao y Bermeo<br>Centro de Traumatología y Clínica Guimón</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span>94 439 94 51</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>traumatologia21@traumarehabilitacion.com</span>
                        </div>
                    </div>
                </div>
                <div class="partner-footer">
                    <a href="https://www.traumarehabilitacion.com"
                       class="btn-premium partner-btn"
                       target="_blank"
                       rel="noopener noreferrer">
                        VISITAR WEB
                        <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </article>

            <!-- TARJETA 3: Clínica Uribe -->
            <article class="partner-card">
                <div class="partner-logo-wrapper">
                    <a href="http://www.clinicauribe.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Visitar web de Clínica Uribe"
                       aria-label="Visitar sitio web de Clínica Uribe - Dr. Ignacio Uribe García, Cirugía Plástica en Bilbao (se abre en nueva pestaña)">
                        <img src="images/Uribe_Logo.webp"
                             alt="Logo de Clínica Uribe - Dr. Ignacio Uribe García, Cirugía Plástica, Estética y Reparadora en Bilbao"
                             loading="lazy"
                             width="280"
                             height="100">
                    </a>
                </div>
                <div class="partner-info">
                    <h3 class="partner-name">Clínica Uribe</h3>
                    <p class="partner-specialty">Cirugía Plástica, Estética y Reparadora</p>
                    <p class="partner-doctor">Dr. Ignacio Uribe García</p>

                    <div class="partner-details">
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>C/ Gregorio de la Revilla 15, 1° izda.<br>48011 Bilbao</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <span>94 443 93 14</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>info@clinicauribe.com</span>
                        </div>
                    </div>
                </div>
                <div class="partner-footer">
                    <a href="http://www.clinicauribe.com"
                       class="btn-premium partner-btn"
                       target="_blank"
                       rel="noopener noreferrer">
                        VISITAR WEB
                        <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </article>

        </div>
    </div>
</section>
```

---

## 3. Estilos CSS (css/style.css)

### 3.1. Punto de Inserción en el CSS

Insertar **al final del archivo** `css/style.css`, justo **antes de la última línea en blanco** del fichero. Esta es la posición más segura para evitar conflictos con media queries intermedias.

### 3.2. Código CSS Completo

```css
/* ==========================================================================
   PARTNERS SECTION: Red de Clínicas Colaboradoras (Social Proof)
   ========================================================================== */

.partners-section {
  background-color: var(--color-bg-primary);
  padding: 6rem 0;
  position: relative;
  z-index: 10;
}

.partners-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--grad-premium);
  opacity: 0.4;
}

.partners-intro {
  text-align: center;
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: var(--color-text-body);
  max-width: min(100%, 700px);
  margin: 0 auto clamp(2rem, 5vw, 3.5rem);
  line-height: 1.6;
  font-weight: 300;
}

/* Grid Dinámico de Colaboradores */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(20px, 3vw, 40px);
}

/* Tarjeta Individual */
.partner-card {
  background-color: var(--color-bg-secondary);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
  position: relative;
}

/* Borde Gradiente Neón en Hover (Efecto Premium Exogenetics) */
.partner-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, transparent 0%, transparent 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.partner-card:hover {
  transform: translateY(-8px);
  border-color: rgba(24, 99, 220, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(24, 99, 220, 0.15);
}

.partner-card:hover::after {
  opacity: 1;
  background: var(--grad-premium);
}

/* Contenedor del Logo - FONDO BLANCO OBLIGATORIO */
/* NOTA: Se usa #ffffff literal porque no existe variable --color-white en :root.
   Este blanco es funcional (no temático) para garantizar visibilidad de logos
   con texto oscuro o transparencias sobre fondo negro. */
.partner-logo-wrapper {
  background-color: #ffffff;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-bottom: 3px solid var(--color-accent-blue);
}

.partner-logo-wrapper a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.partner-logo-wrapper img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.partner-card:hover .partner-logo-wrapper img {
  transform: scale(1.05);
  filter: brightness(1.05);
}

/* Información del Colaborador */
.partner-info {
  padding: 30px 25px 0 25px;
  flex-grow: 1;
}

.partner-name {
  font-family: var(--font-main);
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 700;
  color: var(--color-text-main);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
  margin: 0 0 8px 0;
}

.partner-specialty {
  font-family: var(--font-sec);
  font-size: clamp(0.8rem, 1.4vw, 0.95rem);
  font-weight: 700;
  color: var(--color-accent-magenta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 12px 0;
}

.partner-doctor {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--color-text-main);
  font-weight: 600;
  margin: 0 0 25px 0;
}

/* Bloque de Detalles (Dirección, Teléfono, Email) */
.partner-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--color-text-body);
  font-size: clamp(0.85rem, 1.3vw, 0.95rem);
  line-height: 1.5;
}

.detail-icon {
  flex-shrink: 0;
  min-width: 20px;
  height: 20px;
  color: var(--color-accent-blue);
  margin-top: 2px;
}

.detail-item span {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Footer de la Tarjeta con Botón */
.partner-footer {
  padding: 0 25px 30px 25px;
  margin-top: auto;
}

.partner-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 20px;
  font-size: clamp(0.85rem, 1.4vw, 0.95rem);
}

.external-icon {
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.partner-btn:hover .external-icon {
  opacity: 1;
}

/* Responsive: Mobile Refinements */
@media (max-width: 768px) {
  .partners-grid {
    grid-template-columns: 1fr;
    gap: clamp(15px, 4vw, 25px);
  }

  .partner-logo-wrapper {
    height: 130px;
    padding: 20px;
  }

  .partner-info {
    padding: 25px 20px 0 20px;
  }

  .partner-footer {
    padding: 0 20px 25px 20px;
  }
}

@media (max-width: 480px) {
  .partners-intro {
    font-size: 0.95rem;
    padding: 0 1rem;
  }

  .partner-logo-wrapper {
    height: 110px;
    padding: 15px;
  }

  .detail-item {
    font-size: 0.85rem;
  }
}
```

---

## 4. Conversión de Imágenes (PNG → WebP)

### 4.1. Proceso Requerido

Los archivos PNG proporcionados deben convertirse a WebP para mantener la coherencia del proyecto y optimizar la performance (Core Web Vitals).

### 4.2. Comando de Conversión

Si el proyecto dispone de `sharp` (Node.js), ejecutar desde la raíz:

```bash
node tools/image_optimizer.js
```

Si no, usar conversión manual:
- **CLI (cwebp):** `cwebp -q 85 images/ME_Logo.png -o images/ME_Logo.webp`
- **Online:** Squoosh.app (calidad 85, sin pérdida de transparencia)

### 4.3. Archivos Resultantes Esperados

| Entrada (PNG) | Salida (WebP) | Ubicación |
|:--------------|:--------------|:----------|
| `ME_Logo.png` | `ME_Logo.webp` | `images/` |
| `Traumatologia21_Logo.png` | `Traumatologia21_Logo.webp` | `images/` |
| `Uribe_Logo.png` | `Uribe_Logo.webp` | `images/` |

---

## 5. Instrucciones Paso a Paso para el Desarrollador

### Paso 1: Preparar Imágenes
1. Colocar los 3 archivos PNG en `images/`
2. Convertirlos a WebP usando `tools/image_optimizer.js` o herramienta manual
3. Verificar que los archivos `.webp` existen y cargan correctamente arrastrándolos al navegador

### Paso 2: Modificar `index.html`
1. Abrir `index.html` en el editor
2. Buscar el cierre de la sección `.home-products`:
   ```html
   </section>
   <!-- <-- Este es el cierre de home-products -->

   <!-- Contact Section -->
   ```
3. Insertar el bloque HTML de la sección 2.3 **entre** esas dos líneas
4. Asegurarse de que el `<h2>` diga: **`CLÍNICAS DE REFERENCIA`**
5. Guardar el archivo

### Paso 3: Modificar `pacientes.html`
1. Abrir `pacientes.html` en el editor
2. Ir al **final del archivo**, justo antes del cierre `</main>`
3. Insertar el **mismo bloque HTML** de la sección 2.3
4. **Cambiar** el `<h2>` a: **`¿DÓNDE REALIZAR TU TRATAMIENTO?`**
5. Guardar el archivo

### Paso 4: Modificar `css/style.css`
1. Abrir `css/style.css` en el editor
2. Ir al **final del archivo**
3. Insertar **TODO** el bloque CSS de la sección 3.2 **al final**, antes de cualquier línea en blanco final
4. Guardar el archivo

### Paso 5: Verificación
1. Abrir `index.html` en el navegador
2. Redimensionar de 320px a 1920px **continuamente**
3. Verificar los puntos del checklist (sección 9)
4. Repetir el proceso con `pacientes.html`

---

## 6. Consideraciones de Accesibilidad (A11y)

| Elemento | Implementación | Estándar |
|:---------|:---------------|:---------|
| **Logos** | `alt` descriptivo con nombre de clínica + especialista + ubicación | WCAG 2.1 - 1.1.1 |
| **Enlaces externos** | `aria-label` con indicación "se abre en nueva pestaña" | WCAG 2.1 - 2.4.4 |
| **Enlaces externos** | Atributo `title` para tooltip en hover | UX Enhancement |
| **Iconos SVG** | `aria-hidden="true"` (decorativos) | WCAG 2.1 - 4.1.2 |
| **Jerarquía de títulos** | `h2` (sección) → `h3` (nombre clínica) | WCAG 2.1 - 1.3.1 |
| **Contraste de texto** | Texto blanco `#fff` sobre negro `#000` / gris `#212121` (ratio > 15:1) | WCAG 2.1 AAA |
| **Navegación por teclado** | Enlaces focuseables nativamente con `:focus-visible` | WCAG 2.1 - 2.1.1 |
| **Área táctil mínima** | Botones con `padding: 14px 20px` (≥ 44×44px) | WCAG 2.1 - 2.5.5 |

---

## 7. Consideraciones SEO

| Elemento | Implementación | Impacto |
|:---------|:---------------|:--------|
| **Título de sección** | `h2` con keywords locales ("Clínicas de Referencia", "¿Dónde realizar tu tratamiento?") | GEO (Generative Engine Optimization) |
| **Nombres de clínicas** | `h3` semánticos, indexables individualmente | SEO local |
| **Enlaces externos** | `rel="noopener noreferrer"` para seguridad | Best Practice |
| **Imágenes** | `alt` descriptivo con contexto geográfico (Bilbao, Bizkaia) | SEO Local + Imágenes |
| **Lazy Loading** | `loading="lazy"` en todos los logos | Core Web Vitals (LCP) |
| **Dimensiones explícitas** | `width="280"` y `height="100"` para evitar CLS | Core Web Vitals (CLS) |
| **Texto introductorio** | Párrafo `.partners-intro` con contexto semántico rico | Relevancia temática |

---

## 8. Comportamiento Responsivo Esperado

### 8.1. Desktop (1440px+)
```
┌─────────────────────────────────────────────────────────────┐
│              CLÍNICAS DE REFERENCIA                         │
│      Centros médicos que integran nuestros protocolos...    │
├──────────────────┬──────────────────┬───────────────────────┤
│ ┌──────────────┐│ ┌──────────────┐│ ┌─────────────────────┐ │
│ │ [Logo Blanco]││ │ [Logo Blanco]││ │  [Logo Blanco]      │ │
│ │  Fondo #FFF  ││ │  Fondo #FFF  ││ │   Fondo #FFF        │ │
│ └──────────────┘│ └──────────────┘│ └─────────────────────┘ │
│ Clínica ME     ││ Traumatología21││ Clínica Uribe          │
│ Medicina Estét.││ Traumatología  ││ Cirugía Plástica       │
│ Dra. M. Esteban││ Dr. I. Mínguez ││ Dr. I. Uribe           │
│ 📍 García R... ││ 📍 Sedes B...  ││ 📍 Gregorio de la R... │
│ 📞 94 439...   ││ 📞 94 439...   ││ 📞 94 443...           │
│ ✉️ info@...    ││ ✉️ trauma@...  ││ ✉️ info@...            │
│ [VISITAR WEB ↗]││ [VISITAR WEB ↗]││ [VISITAR WEB ↗]       │
└──────────────────┴──────────────────┴───────────────────────┘
```

### 8.2. Tablet (768px - 1023px)
```
┌──────────────────────────────────────┐
│       CLÍNICAS DE REFERENCIA         │
├──────────────────┬───────────────────┤
│ ┌──────────────┐│ ┌───────────────┐ │
│ │ [Logo ME]    ││ │ [Logo T21]    │ │
│ │ Clínica ME   ││ │ Trauma21      │ │
│ │ ...          ││ │ ...           │ │
│ │ [VISITAR ↗]  ││ │ [VISITAR ↗]   │ │
│ └──────────────┘│ └───────────────┘ │
└──────────────────┴───────────────────┘
┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │       [Logo Uribe]               │ │
│ │       Clínica Uribe              │ │
│ │       ...                        │ │
│ │       [VISITAR WEB ↗]            │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

### 8.3. Móvil (< 768px)
```
┌────────────────────────────┐
│ CLÍNICAS DE REFERENCIA     │
├────────────────────────────┤
│ ┌────────────────────────┐ │
│ │    [Logo ME]           │ │
│ │    Clínica ME          │ │
│ │    Medicina Estética   │ │
│ │    Dra. M. Esteban     │ │
│ │    📍 García Rivero..  │ │
│ │    📞 94 439 94 51     │ │
│ │    ✉️ info@clinicame.. │ │
│ │    [VISITAR WEB ↗]     │ │
│ └────────────────────────┘ │
├────────────────────────────┤
│ ┌────────────────────────┐ │
│ │    [Logo T21]          │ │
│ │    Traumatología21     │ │
│ │    ...                 │ │
│ │    [VISITAR WEB ↗]     │ │
│ └────────────────────────┘ │
├────────────────────────────┤
│ ┌────────────────────────┐ │
│ │    [Logo Uribe]        │ │
│ │    Clínica Uribe       │ │
│ │    ...                 │ │
│ │    [VISITAR WEB ↗]     │ │
│ └────────────────────────┘ │
└────────────────────────────┘
```

---

## 9. Checklist de Verificación Final

- [ ] Imágenes PNG colocadas en `images/`
- [ ] Imágenes convertidas a `.webp` y verificadas
- [ ] HTML insertado en `index.html` entre `.home-products` y `#contacto`
- [ ] HTML insertado en `pacientes.html` antes de `</main>`
- [ ] Título `<h2>` correcto en cada página (B2B vs paciente)
- [ ] CSS insertado al final de `css/style.css`
- [ ] 3 columnas en desktop, 2 en tablet, 1 en móvil
- [ ] Logos visibles sobre fondo blanco (no se pierden en modo oscuro)
- [ ] Hover con borde gradiente neón + elevación
- [ ] Enlaces abren en nueva pestaña (`target="_blank"`)
- [ ] Animación `fade-in` al hacer scroll funciona
- [ ] Sin scroll horizontal en ningún viewport (320px → 1920px)
- [ ] Datos de contacto completos: dirección + teléfono + email
- [ ] No hay errores en consola del navegador
- [ ] Validación HTML semántica correcta (`h2` > `h3`)
- [ ] Commit en git con mensaje en español

---

## 10. Sugerencias Futuras (Opcional)

1. **Schema.org JSON-LD:** Añadir bloque `Organization` por cada clínica con `memberOf` de Exogenetics para Rich Snippets locales.
2. **Página dedicada:** Si el número de colaboradores crece a 10+, crear `colaboradores.html` como página independiente con filtro por especialidad.
3. **Testimonios:** Añadir citas breves de cada doctor sobre la tecnología Exogenetics (ej. *"El sistema SBL.PRP.3 ha mejorado nuestros resultados en un 40%"*).
4. **Mapa interactivo:** Integrar las ubicaciones en un mapa de Google Maps embebido con pins de cada clínica.
5. **Badge de confianza:** Añadir un sello "Partner Certificado Exogenetics" en las tarjetas para reforzar la relación comercial.
