document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA EL MENÚ MÓVIL ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Cambia el icono del menú
        const icon = navToggle.querySelector('i');
        if (icon.classList.contains('bx-menu')) {
            icon.classList.replace('bx-menu', 'bx-x');
        } else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
    });

    // Cierra el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.replace('bx-x', 'bx-menu');
            }
        });
    });

    // --- LÓGICA PARA LA ANIMACIÓN AL HACER SCROLL ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // usa el viewport
        rootMargin: '0px',
        threshold: 0.1 // El elemento debe ser 10% visible para empezar la animación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez que es visible
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});
