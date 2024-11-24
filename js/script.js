// carrousel
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlide;

// Mostrar el slide correspondiente
function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// Avanzar al siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

// Configurar el intervalo automático (6 segundos)
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

// Detener la transición automática
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Cambiar a un slide específico al hacer clic en un punto
function setSlide(index) {
    stopAutoSlide(); // Pausar transición automática
    showSlide(index);
    startAutoSlide(); // Reiniciar transición automática
}

// Event listeners para los puntos
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => setSlide(index));
});

// Inicializar carrusel
showSlide(currentIndex);
startAutoSlide();


const form = document.getElementById('contactForm');
const modal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');

// Mostrar el modal cuando se envíe el formulario
form.addEventListener('submit', function () {
    modal.classList.add('show');
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
});


