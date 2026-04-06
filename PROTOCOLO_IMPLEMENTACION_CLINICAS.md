# Protocolo Técnico: Implementación de Red de Clínicas

**Objetivo:** Guía detallada para que cualquier desarrollador pueda integrar la nueva sección de "Red de Clínicas/Social Proof" tanto en la página principal (`index.html`) como en la de pacientes (`pacientes.html`), manteniendo el ecosistema visual de Exogenetics (Pure Dark Mode).

## 1. Integración de Activos (Imágenes)

El desarrollador deberá asegurarse de que los tres logotipos proporcionados se sitúan en la carpeta correcta:
- `images/ME_Logo.png`
- `images/Traumatologia21_Logo.png`
- `images/Uribe_Logo.png`

> **Recomendación de Rendimiento (Cumplimiento de Auditoría Exogenetics):**  
> Antes de subir a producción, es imperativo pasar estas tres imágenes por el optimizador `tools/image_optimizer.js` para convertirlas a `.webp` (p. ej. `images/ME_Logo.webp`) y ajustar la extensión en el HTML final.

---

## 2. Implementación de Estilos CSS (`css/style.css`)

Se debe añadir el siguiente bloque de código CSS al final de `css/style.css`. Este CSS utiliza variables globales ya existentes en el proyecto (`--color-accent-blue`, `--color-bg-sec`, etc.) y técnicas de CSS Grid fluido orientadas al enfoque Mobile-First estipulado en `GEMINI.md`.

```css
/* =========================================
   SECCIÓN RED CLÍNICA / PARTNERS (SOCIAL PROOF)
   ========================================= */

.clinic-network-section {
    padding: 6rem 0; /* Padding estándar de sección en Exogenetics */
    background-color: var(--color-bg-base); 
    position: relative;
    z-index: 10;
}

.clinics-grid {
    display: grid;
    /* Grid dinámico que adapta columnas sin Media Queries fijas */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: clamp(20px, 3vw, 40px);
    margin-top: 50px;
}

.clinic-card {
    background-color: var(--color-bg-sec); /* #212121 */
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
}

.clinic-card:hover {
    transform: translateY(-8px);
    border-color: rgba(24, 99, 220, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(24, 99, 220, 0.15);
}

.clinic-logo-wrapper {
    background-color: #ffffff; /* Fondo blanco forzado para evitar recortes oscuros en logos */
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border-bottom: 3px solid var(--color-accent-blue);
}

.clinic-logo-wrapper img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    /* Evita distorsiones en logos anchos como el de Traumatología21 */
}

.clinic-info {
    padding: 30px 25px 0 25px;
    flex-grow: 1; /* Empuja el footer hacia abajo igualando alturas */
}

.clinic-name {
    font-family: var(--font-header);
    font-size: 1.6rem;
    color: #ffffff;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.clinic-specialty {
    font-size: 0.85rem;
    color: var(--color-accent-magenta);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 12px;
}

.clinic-doctor {
    color: var(--color-text-main);
    font-size: 1.05rem;
    margin-bottom: 25px;
    font-weight: 600;
}

.clinic-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
}

.detail-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: var(--color-text-sec);
    font-size: 0.95rem;
    line-height: 1.5;
}

.detail-item svg {
    min-width: 20px;
    height: 20px;
    color: var(--color-accent-blue);
    margin-top: 2px; /* Alineación óptica con la primera línea de texto */
}

.clinic-footer {
    padding: 0 25px 30px 25px;
    margin-top: auto;
}

.btn-clinic {
    display: block;
    text-align: center;
    width: 100%;
    padding: 14px;
    font-size: 0.95rem;
    border-color: rgba(255, 255, 255, 0.2);
    /* Hereda las propiedades base de .btn-premium global */
}
```

---

## 3. Implementación Estructural (HTML)

Este mismo bloque de tres tarjetas conforma la cuadrícula dinámica. 

### A) Inserción en la página Principal (`index.html`)
**Dónde Inyectar:** Justo después del cierre de la etiqueta `</section>` de la clase `.home-products` y antes de la sección `#contacto`.

**Código a inyectar (Título B2B/B2C):**

```html
<!-- SECCIÓN 4: RED DE CLÍNICAS COLABORADORAS (SOCIAL PROOF) -->
<section class="clinic-network-section fade-in">
    <div class="container">
        <h2 class="section-title text-center">CLÍNICAS DE REFERENCIA</h2>
        
        <div class="clinics-grid">
            
            <!-- TARJETA 1: Clínica ME -->
            <article class="clinic-card">
                <div class="clinic-logo-wrapper">
                    <!-- SUGERENCIA: Cambiar .png a .webp tras optimizar la carpeta images -->
                    <img src="images/ME_Logo.png" alt="Logo Clínica ME Medicina Estética Bilbao" loading="lazy">
                </div>
                <div class="clinic-info">
                    <h3 class="clinic-name">Clínica ME</h3>
                    <div class="clinic-specialty">Medicina Estética</div>
                    <p class="clinic-doctor">Dra. Margarita Esteban</p>
                    
                    <div class="clinic-details">
                        <div class="detail-item">
                            <!-- Icono Ubicación -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>García Rivero Maisuaren Kalea, 3<br>48011 Bilbao, Bizkaia</span>
                        </div>
                        <div class="detail-item">
                            <!-- Icono Teléfono -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>94 439 94 51 / 689 70 73 17</span>
                        </div>
                        <div class="detail-item">
                            <!-- Icono Email -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>info@clinicamebilbao.com</span>
                        </div>
                    </div>
                </div>
                <div class="clinic-footer">
                    <a href="https://clinicaesteticadraesteban.com" target="_blank" rel="noopener noreferrer" class="btn-premium btn-clinic">VISITAR WEB</a>
                </div>
            </article>

            <!-- TARJETA 2: Traumatologia 21 -->
            <article class="clinic-card">
                <div class="clinic-logo-wrapper">
                    <img src="images/Traumatologia21_Logo.png" alt="Logo Traumatología 21 Bilbao" loading="lazy">
                </div>
                <div class="clinic-info">
                    <h3 class="clinic-name">Traumatología 21</h3>
                    <div class="clinic-specialty">Traumatología y Ortopedia</div>
                    <!-- Se resume la información del equipo para mantener simetría visual -->
                    <p class="clinic-doctor">Dr. Iñaki Mínguez y Equipo Médico</p>
                    
                    <div class="clinic-details">
                        <div class="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <!-- Agrupadas las sedes para no desbordar contenedor -->
                            <span>Sedes en Bilbao y Bermeo<br>Centro de Traumatología y Clínica Guimón</span>
                        </div>
                        <div class="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>traumatologia21@traumarehabilitacion.com</span>
                        </div>
                    </div>
                </div>
                <div class="clinic-footer">
                    <a href="https://www.traumarehabilitacion.com/" target="_blank" rel="noopener noreferrer" class="btn-premium btn-clinic">VISITAR WEB</a>
                </div>
            </article>

            <!-- TARJETA 3: Clínica Uribe -->
            <article class="clinic-card">
                <div class="clinic-logo-wrapper">
                    <img src="images/Uribe_Logo.png" alt="Logo Clínica Uribe Bilbao" loading="lazy">
                </div>
                <div class="clinic-info">
                    <h3 class="clinic-name">Clínica Uribe</h3>
                    <div class="clinic-specialty">Cirugía Plástica y Estética</div>
                    <p class="clinic-doctor">Dr. Ignacio Uribe García</p>
                    
                    <div class="clinic-details">
                        <div class="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>C/ Gregorio de la Revilla 15, 1° izda.<br>48011 Bilbao</span>
                        </div>
                        <div class="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>94 443 93 14</span>
                        </div>
                        <div class="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>info@clinicauribe.com</span>
                        </div>
                    </div>
                </div>
                <div class="clinic-footer">
                    <a href="http://www.clinicauribe.com/" target="_blank" rel="noopener noreferrer" class="btn-premium btn-clinic">VISITAR WEB</a>
                </div>
            </article>

        </div>
    </div>
</section>
```

### B) Inserción en la página de Pacientes (`pacientes.html`)
**Dónde Inyectar:** Justo al final de la página, **antes** de la etiqueta `</main>` o de un pie de página local. Es el punto de mayor conversión.

**Código a inyectar:**
Es el mismo bloque literal de la Parte A, con **la única diferencia** del título de la sección (`h2`). 

- Buscar: `<h2 class="section-title text-center">CLÍNICAS DE REFERENCIA</h2>`
- Reemplazar por (Orientado a la acción del paciente):
```html
<h2 class="section-title text-center">¿DÓNDE REALIZAR TU TRATAMIENTO?</h2>
```
Todo el resto del HTML de las tarjetas permanece inalterado, garantizando que el mantenimiento sea mínimo en el futuro.
