/**
* Script para las páginas de Semanas
* Contiene funcionalidades para navegación, animaciones y comportamiento responsivo
* Diseñado para trabajar con el esquema de colores cálidos (marrones, beige)
*/

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades cuando el DOM esté completamente cargado
    initMenuToggle();
    initWeekNavigation();
    initSmoothScrolling();
    initFadeInAnimations();
});

/**
* Funcionalidad de apertura/cierre del menú lateral
* Controla el comportamiento del botón de hamburguesa y el panel de navegación
*/
function initMenuToggle() {
    const menuToggle = document.querySelector('.navbar-toggler');
    const sideNav = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (menuToggle && sideNav) {
        menuToggle.addEventListener('click', function() {
            sideNav.classList.toggle('active');
            
            // Ajustar el contenido principal cuando el menú está abierto
            if (mainContent) {
                mainContent.classList.toggle('shifted');
            }
            
            // Cambiar el icono del botón (opcional)
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Cerrar el menú al hacer clic fuera de él (en dispositivos móviles)
        document.addEventListener('click', function(event) {
            const isClickInside = sideNav.contains(event.target) || menuToggle.contains(event.target);
            
            if (!isClickInside && sideNav.classList.contains('active') && window.innerWidth < 992) {
                sideNav.classList.remove('active');
                if (mainContent) mainContent.classList.remove('shifted');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
* Navegación entre semanas
* Maneja los botones "Semana anterior" y "Siguiente semana"
*/
function initWeekNavigation() {
    const prevWeekBtn = document.querySelector('.prev-week');
    const nextWeekBtn = document.querySelector('.next-week');
    
    // Extraer el número de semana actual de la URL o del título
    const currentWeekMatch = window.location.pathname.match(/semana(\d+)/i) || 
                            document.title.match(/Semana (\d+)/i);
    let currentWeek = currentWeekMatch ? parseInt(currentWeekMatch[1]) : 1;
    
    if (prevWeekBtn) {
        prevWeekBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentWeek > 1) {
                // Simular navegación a la semana anterior
                const prevWeek = currentWeek - 1;
                navigateToWeek(prevWeek);
            } else {
                // Efecto visual para indicar que no hay semana anterior
                animateButtonError(this);
            }
        });
    }
    
    if (nextWeekBtn) {
        nextWeekBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Asumimos que hay 16 semanas en total (ajustar según sea necesario)
            const totalWeeks = 16;
            
            if (currentWeek < totalWeeks) {
                // Simular navegación a la siguiente semana
                const nextWeek = currentWeek + 1;
                navigateToWeek(nextWeek);
            } else {
                // Efecto visual para indicar que no hay semana siguiente
                animateButtonError(this);
            }
        });
    }
    
    // Función para navegar a una semana específica
    function navigateToWeek(weekNumber) {
        // Opción 1: Redireccionar a la página de la semana específica
        window.location.href = `/semana${weekNumber}.html`;
        
        // Opción 2: Si las semanas se cargan dinámicamente, podría ser:
        // updateContent('/api/semana/' + weekNumber);
    }
    
    // Efecto visual para botones deshabilitados
    function animateButtonError(button) {
        button.classList.add('btn-error');
        button.style.animation = 'shake 0.5s';
        
        // Eliminar la animación después de que termine
        setTimeout(() => {
            button.style.animation = '';
            setTimeout(() => {
                button.classList.remove('btn-error');
            }, 300);
        }, 500);
    }
}

/**
* Desplazamiento suave para los enlaces de navegación
* Mejora la experiencia de usuario al hacer clic en enlaces internos
*/
function initSmoothScrolling() {
    // Seleccionar todos los enlaces internos que apuntan a un ID
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignorar si es un enlace de colapso de Bootstrap o no tiene un destino válido
            if (this.hasAttribute('data-bs-toggle') || targetId === '#' || !targetId) {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Cálculo del offset para tener en cuenta la barra de navegación fija
                const navbarHeight = document.querySelector('.navbar') ? 
                                    document.querySelector('.navbar').offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition - navbarHeight - 20, // 20px de espacio adicional
                    behavior: 'smooth'
                });
                
                // Actualizar la URL para reflejar el ancla (opcional)
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
* Animaciones de aparición para los elementos de contenido
* Crea un efecto sutil de fade-in cuando los elementos son visibles en pantalla
*/
function initFadeInAnimations() {
    // Seleccionar todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.section-title, .concept-card, .activity, .resource-item');
    
    // Si IntersectionObserver está disponible (navegadores modernos)
    if ('IntersectionObserver' in window) {
        const appearOptions = {
            threshold: 0.1, // El elemento aparece cuando es 10% visible
            rootMargin: '0px 0px -50px 0px' // Margen negativo para activar un poco antes
        };
        
        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                
                // Añadir clase para iniciar la animación
                entry.target.classList.add('appear');
                // Dejar de observar el elemento una vez animado
                observer.unobserve(entry.target);
            });
        }, appearOptions);
        
        elementsToAnimate.forEach(element => {
            // Añadir clase inicial para ocultar elementos
            element.classList.add('fade-in-element');
            appearOnScroll.observe(element);
        });
    } else {
        // Fallback para navegadores antiguos: mostrar todo sin animación
        elementsToAnimate.forEach(element => {
            element.classList.add('appear');
        });
    }
    
    // Añadir estilos para las animaciones si no están en el CSS
    if (!document.getElementById('fade-in-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'fade-in-styles';
        styleSheet.textContent = `
            .fade-in-element {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .fade-in-element.appear {
                opacity: 1;
                transform: translateY(0);
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                50% { transform: translateX(5px); }
                75% { transform: translateX(-5px); }
            }
            
            .btn-error {
                color: #721c24 !important;
                background-color: #f8d7da !important;
                border-color: #f5c6cb !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

