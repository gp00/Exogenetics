# Protocolo de Implementación: Parallax "Ventana Fija" (Fixed Window)

Este documento detalla la implementación exacta del efecto parallax estilo "ventana fija" utilizado en el proyecto Exogenetics. Este efecto mantiene la imagen de fondo estática respecto a la pantalla mientras el contenido hace scroll sobre ella.

---

## 1. Arquitectura HTML

Insertar este bloque entre dos secciones existentes `</section> ... <section>`. No añadir contenido dentro de `.parallax-content` a menos que sea estrictamente necesario.

```html
<!-- Parallax Fixed Window Section -->
<section class="parallax-section" data-speed="0.25">
    <!-- La imagen se define en línea o por clase auxiliar -->
    <div class="parallax-bg" style="background-image: url('fondos/Nombre_Imagen.jpg');"></div>
    <div class="parallax-overlay"></div>
    <div class="parallax-content">
        <!-- Dejar vacío para efecto puramente visual -->
    </div>
</section>
```

---

## 2. Estilos CSS (style.css)

Estos estilos garantizan la "ventana" estilizada y la cobertura total de la imagen para el efecto fijo.

```css
/* ==========================================================================
   DYNAMIC PARALLAX SYSTEM (Fixed Window)
   ========================================================================== */

.parallax-section {
  position: relative;
  /* Altura reducida para efecto "franja" elegante */
  height: clamp(200px, 30vh, 300px);
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  margin: 0;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* 110vh asegura cobertura total vertical sin bordes blancos */
  height: 110vh; 
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  /* Optimización crítica para GPU */
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0); 
}

/* Viñeta para suavizar la transición con secciones oscuras */
.parallax-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0.2) 80%,
    #000000 100%
  );
  z-index: 2;
  pointer-events: none;
}

.parallax-content {
  position: relative;
  z-index: 3;
  max-width: 900px;
  padding: 0 2rem;
  text-align: center;
}

/* Ajustes Responsive */
@media (max-width: 768px) {
  .parallax-section {
    height: 200px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .parallax-bg {
    transform: none !important;
  }
}
```

---

## 3. Lógica JavaScript (script.js)

Esta lógica cancela el movimiento del scroll. Si la sección sube 10px, la imagen baja 10px, creando la ilusión de inmovilidad absoluta.

**Clave del éxito:** Usar `offset = -rect.top` en lugar de cálculos relativos complejos.

```javascript
// ============================================
// DYNAMIC PARALLAX ENGINE (Fixed Logic)
// ============================================

(function() {
    'use strict';

    let parallaxSections = [];
    let ticking = false;

    function initParallax() {
        const sections = document.querySelectorAll('.parallax-section');
        if (sections.length === 0) return;

        parallaxSections = Array.from(sections).map(section => {
            const bg = section.querySelector('.parallax-bg');
            // speed se mantiene por compatibilidad, pero la lógica fija usa offset directo
            const speed = parseFloat(section.getAttribute('data-speed')) || 0.25;
            return { section, bg, speed };
        });

        updateParallax();
    }

    function updateParallax() {
        // Optimización: Leer scrollY una sola vez
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        parallaxSections.forEach(item => {
            const { section, bg } = item;
            if (!section || !bg) return;

            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const sectionHeight = section.offsetHeight;

            // Solo calcular si la sección es visible en el viewport
            if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
                
                // LÓGICA DE FIJACIÓN:
                // rect.top es la distancia desde el borde superior del viewport 
                // hasta el borde superior de la sección.
                // Al mover la imagen -rect.top, la alineamos visualmente siempre con el top del viewport.
                
                const offset = -rect.top;
                
                // Aplicamos scale(1.1) para evitar bordes por redondeo de sub-píxeles
                bg.style.transform = `translateY(${offset}px) scale(1.1) translateZ(0)`;
            }
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', initParallax);
    window.addEventListener('load', initParallax);
    
    // Inicialización inmediata
    initParallax();
})();
```

---

## 4. Solución de Problemas Comunes (Learnings)

### Problema: La imagen "vibra" o da saltos en móvil.
*   **Causa:** Uso de `background-attachment: fixed` o cálculos JS que pelean con el scroll nativo.
*   **Solución:** Usar `transform: translateY` + `will-change: transform` + `requestAnimationFrame`. La lógica de cancelación (`-rect.top`) es mucho más estable que intentar emular velocidades relativas.

### Problema: Bordes blancos arriba/abajo al hacer scroll rápido.
*   **Causa:** La imagen no es lo suficientemente alta para cubrir el desplazamiento o el cálculo tiene latencia.
*   **Solución:**
    1. Aumentar altura de `.parallax-bg` a `110vh` (viewport height + margen).
    2. Añadir `scale(1.1)` en la transformación JS.
    3. Posicionar la imagen en `top: 0` inicialmente.

### Problema: Transición brusca entre secciones negras.
*   **Causa:** La imagen corta "en seco" contra el fondo negro.
*   **Solución:** Usar un `linear-gradient` en `.parallax-overlay` que vaya de negro puro (#000) a transparente y vuelva a negro.
