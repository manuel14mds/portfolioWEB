
// Obtén los elementos de la barra de navegación
const navHamburger = document.querySelector('.nav_hamburger');
const navClose = document.querySelector('.nav_close');

// Agrega eventos para controlar el desplazamiento
navHamburger.addEventListener('click', function() {
    document.body.style.overflowY = 'hidden';
});

navClose.addEventListener('click', function() {
    document.body.style.overflowY = 'scroll';
});

// Restablecer el desplazamiento cuando se selecciona una opción del menú
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.body.style.overflowY = 'scroll';
    });
});
