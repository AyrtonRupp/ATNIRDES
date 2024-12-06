document.addEventListener('DOMContentLoaded', () => {
    // Scroll Fade
    const scrollFadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar cuando ya es visible
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.scroll-fade').forEach(element => {
        scrollFadeObserver.observe(element);
    });

    // Hamburguesa
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => nav.classList.add("visible"));
    cerrar.addEventListener("click", () => nav.classList.remove("visible"));

    // Cambiar color de header en scroll
    document.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Scroll suave en enlaces anclados
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));
            if (targetElement) {
                const offset = 115; // Ajusta según el tamaño de tu header
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carrusel
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let autoSlide;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    function setSlide(index) {
        stopAutoSlide();
        showSlide(index);
        startAutoSlide();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => setSlide(index));
    });

    showSlide(currentIndex);
    startAutoSlide();

    // Scroll horizontal en contenedor de tarjetas
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            cardsContainer.scrollLeft += e.deltaY;
        }
    });

    // Mostrar modal de confirmación al enviar formulario
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');

    form.addEventListener('submit', () => {
        modal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});


  