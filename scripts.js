document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});

/* Menu desplegable */

let menuButton = document.getElementById('menuButton');
let navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (!navLinks.classList.contains('active')) {
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
    } else {
        navLinks.style.display = 'flex';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none';
    }
});

/* Resaltar enlace activo */

const links = document.querySelectorAll('.navButtton');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('linkOn'));
        link.classList.add('linkOn');
        navLinks.classList.remove('active');
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
    });
});