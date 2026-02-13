document.addEventListener('DOMContentLoaded', () => {
    // Simple Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Form Handling
    const form = document.getElementById('new-contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado. Nuestro equipo contactará con usted en breve.');
            form.reset();
        });
    }

    // Scroll to Top Logic
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.classList.remove('visible');
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// ============================================
// DYNAMIC PARALLAX ENGINE
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
                return { section, bg };
            });
    
            updateParallax();
        }
    
        function updateParallax() {
            const windowHeight = window.innerHeight;
    
            parallaxSections.forEach(item => {
                const { section, bg } = item;
                if (!section || !bg) return;
    
                const rect = section.getBoundingClientRect();
                
                // Check visibility using viewport coordinates directly
                const isVisible = (rect.top + rect.height > 0) && (rect.top < windowHeight);
    
                if (isVisible) {
                    // FIXED PARALLAX LOGIC: Offset equals negative distance from viewport top
                    const offset = -rect.top;
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
    
    // Initial call
    initParallax();
})();
