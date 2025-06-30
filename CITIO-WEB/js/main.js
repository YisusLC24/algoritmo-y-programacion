// ===== MAIN.JS - JavaScript Principal del Proyecto =====

// ===== VARIABLES GLOBALES =====
let currentSection = 'inicio';

// ===== INICIALIZACIÓN DEL SITIO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeSite();
    setupEventListeners();
    showWelcomeAnimation();
});

// ===== FUNCIÓN DE INICIALIZACIÓN =====
function initializeSite() {
    console.log('🚀 Sitio de Lógica de Programación iniciado');
    
    // Configurar año actual en footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = currentYear;
    }
    
    // Configurar navegación activa
    setActiveNavigation();
}

// ===== CONFIGURAR EVENT LISTENERS =====
function setupEventListeners() {
    // Navegación del menú
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Botones de secciones
    const sectionButtons = document.querySelectorAll('.btn-section');
    sectionButtons.forEach(button => {
        button.addEventListener('click', handleSectionClick);
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Botones de ejercicios
    const exerciseButtons = document.querySelectorAll('.exercise-btn');
    exerciseButtons.forEach(button => {
        button.addEventListener('click', handleExerciseClick);
    });
    
    // Scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// ===== NAVEGACIÓN =====
function handleNavigation(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const section = target.replace('#', '');
    
    // Actualizar sección actual
    currentSection = section;
    
    // Actualizar navegación activa
    setActiveNavigation();
    
    // Scroll a la sección
    const targetElement = document.getElementById(section);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function setActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== MANEJO DE SECCIONES =====
function handleSectionClick(e) {
    const section = e.target.dataset.section;
    
    switch(section) {
        case 'condicionales':
            showExerciseList('condicionales', 1, 10);
            break;
        case 'ciclos':
            showExerciseList('ciclos', 11, 20);
            break;
        case 'cadenas':
            showExerciseList('cadenas', 21, 30);
            break;
        case 'arreglos':
            showExerciseList('arreglos', 31, 40);
            break;
    }
}

function showExerciseList(category, startNum, endNum) {
    const modal = createExerciseModal(category, startNum, endNum);
    document.body.appendChild(modal);
    
    // Animar entrada del modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function createExerciseModal(category, startNum, endNum) {
    const modal = document.createElement('div');
    modal.className = 'exercise-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Ejercicios de ${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="exercises-grid">
                    ${generateExerciseButtons(category, startNum, endNum)}
                </div>
            </div>
        </div>
    `;
    
    // Event listener para cerrar modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });
    
    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
    
    return modal;
}

function generateExerciseButtons(category, startNum, endNum) {
    let buttonsHTML = '';
    for (let i = startNum; i <= endNum; i++) {
        buttonsHTML += `
            <a href="ejercicios/${category}/ejercicio${i}/index.html" 
               class="exercise-link btn-ejercicio">
                Ejercicio ${i}
            </a>
        `;
    }
    return buttonsHTML;
}

// ===== MANEJO DE EJERCICIOS =====
function handleExerciseClick(e) {
    const exerciseNum = e.target.dataset.exercise;
    const category = e.target.dataset.category;
    
    // Redireccionar al ejercicio específico
    window.location.href = `ejercicios/${category}/ejercicio${exerciseNum}/index.html`;
}

// ===== FORMULARIO DE CONTACTO =====
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        mensaje: formData.get('mensaje')
    };
    
    // Validar datos
    if (!validateContactForm(data)) {
        return;
    }
    
    // Simular envío
    showContactMessage('Mensaje enviado correctamente. ¡Gracias por contactarnos!', 'success');
    
    // Limpiar formulario
    e.target.reset();
}

function validateContactForm(data) {
    if (!data.nombre.trim()) {
        showContactMessage('Por favor, ingresa tu nombre', 'error');
        return false;
    }
    
    if (!data.email.trim() || !isValidEmail(data.email)) {
        showContactMessage('Por favor, ingresa un email válido', 'error');
        return false;
    }
    
    if (!data.mensaje.trim()) {
        showContactMessage('Por favor, ingresa un mensaje', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showContactMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `mensaje mensaje-${type}`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('contact-form');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// ===== SCROLL SUAVE =====
function handleSmoothScroll(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const element = document.querySelector(target);
    
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== ANIMACIONES =====
function showWelcomeAnimation() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animar cards con delay
    const cards = document.querySelectorAll('.section-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
}

// ===== UTILIDADES =====
function showLoading(element) {
    const loading = document.createElement('div');
    loading.className = 'loading';
    element.appendChild(loading);
    return loading;
}

function hideLoading(loadingElement) {
    if (loadingElement) {
        loadingElement.remove();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Cerrar manualmente
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    });
}

// ===== DETECCIÓN DE DISPOSITIVO =====
function isMobile() {
    return window.innerWidth <= 768;
}

function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
    console.error('Error en el sitio:', e.error);
    showNotification('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

// ===== RESIZE HANDLER =====
window.addEventListener('resize', function() {
    // Reajustar elementos según el tamaño de pantalla
    if (isMobile()) {
        // Ajustes para móvil
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
});

// ===== NAVEGACIÓN CON TECLADO =====
document.addEventListener('keydown', function(e) {
    // Escape para cerrar modales
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.exercise-modal.show');
        modals.forEach(modal => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        });
    }
});

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====
window.SiteUtils = {
    showNotification,
    showLoading,
    hideLoading,
    isMobile,
    isTablet
};