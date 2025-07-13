document.addEventListener('DOMContentLoaded', function () {
    fetch('menu.html')
        .then((response) => {
            if (!response.ok) throw new Error('Error cargando el menú');
            return response.text();
        })
        .then((html) => {
            document.getElementById('menu-container').innerHTML = html;

            // Inicializa dropdowns de Bootstrap si usas Bootstrap 5
            if (window.bootstrap) {
                var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
                dropdownElementList.map(function (dropdownToggleEl) {
                    return new bootstrap.Dropdown(dropdownToggleEl);
                });
            }

            // Seleccionar el enlace activo según la URL actual
            const currentPath = window.location.pathname.split('/').pop(); // archivo actual, ej: "index.html"
            const menuLinks = document.querySelectorAll('#menu-container a.nav-link, #menu-container .dropdown-item');

            menuLinks.forEach((link) => {
                // Compara el href con el archivo actual (puedes ajustarlo según tus rutas)
                const linkPath = link.getAttribute('href');
                if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
                    link.classList.add('active'); // agrega clase active
                    // Si es dropdown, también puedes abrir el menú padre
                    const parentDropdown = link.closest('.dropdown');
                    if (parentDropdown) {
                        const toggle = parentDropdown.querySelector('.dropdown-toggle');
                        if (toggle) toggle.classList.add('active');
                    }
                }
            });
            ajustarPaddingBody();
        })

        .catch((err) => {
            console.error(err);
        });
});
function ajustarPaddingBody() {
    const navbar = document.querySelector('.navbar.fixed-top');
    if (!navbar) return;

    const alturaNavbar = navbar.offsetHeight;
    // Aplica el padding-top al body o a un contenedor principal
    document.body.style.paddingTop = alturaNavbar + 'px';
}

ajustarPaddingBody();
window.addEventListener('resize', ajustarPaddingBody);

document.addEventListener('DOMContentLoaded', function () {
    const archivos = [
        'Arte(1).jpeg',
        'Arte(2).jpeg',
        'Arte(3).jpeg',
        'Arte(4).jpeg',
        'Arte(5).jpeg',
        'Arte(6).jpeg',
        'Arte(7).jpeg',
        // Agrega más nombres aquí
    ];

    const rutaBase = 'res/'; // o donde estén almacenadas tus imágenes
    const contenedor = document.getElementById('swiper-slides');

    archivos.forEach((nombre) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = rutaBase + nombre;
        img.alt = nombre;
        img.loading = 'lazy';

        slide.appendChild(img);
        contenedor.appendChild(slide);
    });

    // Inicializa Swiper después de agregar los slides
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000, // Cambia slide cada 3 segundos
            disableOnInteraction: false, // No pausa el autoplay cuando interactúas
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('animate__fadeIn');
});
