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