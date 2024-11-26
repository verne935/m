
// Cambio de tema claro/oscuro
const themeToggle = document.getElementById('theme-toggle');

// Función para cambiar el tema
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.style.backgroundColor = '#1e1e1e'; // Fondo oscuro
    document.body.style.color = '#ffffff'; // Texto claro
  } else {
    document.body.style.backgroundColor = '#f9f9f9'; // Fondo claro
    document.body.style.color = '#333'; // Texto oscuro
  }
});

// Carrusel de promociones
const carouselImages = [
  "img/promo.png",
  "img/promo2.png",
  "img/promo3.png",
  "img/promo4.png",
];

let currentIndex = 0;
const carouselImageElement = document.querySelector('.carousel img');
const leftButton = document.querySelector('.carousel-btn.left');
const rightButton = document.querySelector('.carousel-btn.right');

// Actualizar imagen del carrusel
function updateCarousel() {
  carouselImageElement.src = carouselImages[currentIndex];
}

// Ir a la siguiente imagen
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
}

// Ir a la imagen anterior
function previousImage() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarousel();
}

// Control automático del carrusel
let carouselInterval = setInterval(nextImage, 5000); // Cambia cada 5 segundos

// Eventos de los botones
rightButton.addEventListener('click', () => {
  clearInterval(carouselInterval); // Pausar el control automático
  nextImage();
  carouselInterval = setInterval(nextImage, 5000); // Reiniciar control automático
});

leftButton.addEventListener('click', () => {
  clearInterval(carouselInterval); // Pausar el control automático
  previousImage();
  carouselInterval = setInterval(nextImage, 5000); // Reiniciar control automático
});

// Inicializar carrusel
updateCarousel();






// Detectar pérdida de conexión a Internet y mostrar error 404
window.addEventListener('offline', function() {
    // Redirigir a la página 404 cuando se pierde la conexión
    window.location.href = './404.html';
});
// Detectar reconexión a Internet y redirigir a la interfaz de pedidos sin recargar
window.addEventListener('online', function() {
    // Redirigir a la interfaz de pedidos al reconectarse
    window.location.href = './index.html'; // Cambia esta ruta a la URL que deseas en caso de reconexión
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(() => {
        console.log('Service Worker registrado con éxito.');
    }).catch((error) => {
        console.log('Error al registrar el Service Worker:', error);
    });
}

