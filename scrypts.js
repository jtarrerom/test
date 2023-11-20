// script.js
const images = document.querySelectorAll('.gallery img');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        alert(`Mostrar imagen ${index + 1}`);
        // Puedes agregar aquí la lógica para mostrar la imagen a pantalla completa
    });
});
