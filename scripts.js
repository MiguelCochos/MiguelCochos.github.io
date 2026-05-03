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

    if (window.innerWidth < 1024) {
        navLinks.style.display = 'none';
    }



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

/* Resaltar enlace activo */

const links = document.querySelectorAll('.navButtton');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('linkOn'));
        link.classList.add('linkOn');
        if (window.innerWidth < 1024) {
            navLinks.classList.remove('active');
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 500);
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const loadPage = document.getElementById('loadPage');
    loadPage.style.display = 'none';
});

//Animacion del scroll

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

tl.to("#logo-container", { duration: 100, maskSize: "100px" })
    .to("#inspiration", { delay: 10, duration: 100, scale: 1 }, "<")
    .to("#inspiration", {
        duration: 25, delay: 20, opacity: 0, onComplete: () => {
            document.getElementById("navBar").style.display = "flex";
            document.getElementById("inspiration").pause();
            document.getElementById("inspiration").currentTime = 0;
        },
        onUpdate: () => {
            document.getElementById("navBar").style.display = "none";
            document.getElementById("inspiration").play();
        }
    }, 50);


const scrollIndicator = document.querySelector(".scrollIndicator");
scrollIndicator.addEventListener("click", () => {
    let windLength = window.innerHeight - 40;
    scrollBy(0, windLength);
});


//Bucle de animacion del engranaje
gsap.to("#mechanism #engranaje1", {
    duration: 1,
    rotation: 360,
    repeat: -1,
    ease: "linear"
});
gsap.to("#mechanism #engranaje2", {
    duration: 1,
    rotation: -360,
    repeat: -1,
    ease: "linear"
});