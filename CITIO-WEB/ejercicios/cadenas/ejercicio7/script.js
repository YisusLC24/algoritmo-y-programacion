// Ejercicio 7: Verificar si una palabra es un palíndromo

// Referencias a elementos del DOM
const palabraInput = document.getElementById('palabraInput');
const verificarBtn = document.getElementById('verificarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const resultado = document.getElementById('resultado');
const resultadoPrincipal = document.getElementById('resultadoPrincipal');
const palabraOriginal = document.getElementById('palabraOriginal');
const palabraLimpia = document.getElementById('palabraLimpia');
const palabraInvertida = document.getElementById('palabraInvertida');
const longitudPalabra = document.getElementById('longitudPalabra');
const letrasNormales = document.getElementById('letrasNormales');
const letrasInvertidas = document.getElementById('letrasInvertidas');

// Función principal para verificar palíndromo
function verificarPalindromo() {
    const palabra = palabraInput.value.trim();
    
    // Validar que se haya ingresado una palabra
    if (palabra === '') {
        alert('⚠️ Por favor, ingresa una palabra para verificar.');
        palabraInput.focus();
        return;
    }
    
    // Limpiar la palabra (quitar espacios, acentos, convertir a minúsculas)
    const palabraProcesada = limpiarPalabra(palabra);
    
    // Invertir la palabra
    const palabraReversa = palabraProcesada.split('').reverse().join('');
    
    // Verificar si es palíndromo
    const esPalindromo = palabraProcesada === palabraReversa;
    
    // Mostrar resultados
    mostrarResultado(palabra, palabraProcesada, palabraReversa, esPalindromo);
}

// Función para limpiar la palabra (quitar acentos, espacios, caracteres especiales)
function limpiarPalabra(palabra) {
    return palabra
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
        .replace(/[^a-z0-9]/g, ''); // Quitar espacios y caracteres especiales
}

// Función para mostrar los resultados
function mostrarResultado(original, limpia, invertida, esPalindromo) {
    // Mostrar resultado principal
    if (esPalindromo) {
        resultadoPrincipal.innerHTML = `
            <div class="result-success">
                <div class="result-icon">🎉</div>
                <div class="result-text">
                    <h3>¡Es un Palíndromo!</h3>
                    <p>"${original}" se lee igual en ambas direcciones</p>
                </div>
            </div>
        `;
    } else {
        resultadoPrincipal.innerHTML = `
            <div class="result-error">
                <div class="result-icon">❌</div>
                <div class="result-text">
                    <h3>No es un Palíndromo</h3>
                    <p>"${original}" no se lee igual invertida</p>
                </div>
            </div>
        `;
    }
    
    // Mostrar análisis detallado
    palabraOriginal.textContent = original;
    palabraLimpia.textContent = limpia;
    palabraInvertida.textContent = invertida;
    longitudPalabra.textContent = `${limpia.length} caracteres`;
    
    // Mostrar comparación visual
    mostrarComparacionVisual(limpia, invertida, esPalindromo);
    
    // Mostrar la sección de resultado
    resultado.style.display = 'block';
    
    // Hacer scroll hacia el resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
    
    // Agregar clase de animación
    resultado.classList.add('resultado-animado');
    setTimeout(() => {
        resultado.classList.remove('resultado-animado');
    }, 600);
}

// Función para mostrar la comparación visual letra por letra
function mostrarComparacionVisual(normal, invertida, esPalindromo) {
    // Limpiar contenedores
    letrasNormales.innerHTML = '';
    letrasInvertidas.innerHTML = '';
    
    // Crear elementos para cada letra
    for (let i = 0; i < normal.length; i++) {
        // Letra normal
        const letraNormal = document.createElement('span');
        letraNormal.className = 'letra-box';
        letraNormal.textContent = normal[i];
        
        // Letra invertida
        const letraInvertida = document.createElement('span');
        letraInvertida.className = 'letra-box';
        letraInvertida.textContent = invertida[i];
        
        // Colorear según coincidencia
        if (normal[i] === invertida[i]) {
            letraNormal.classList.add('letra-coincide');
            letraInvertida.classList.add('letra-coincide');
        } else {
            letraNormal.classList.add('letra-no-coincide');
            letraInvertida.classList.add('letra-no-coincide');
        }
        
        letrasNormales.appendChild(letraNormal);
        letrasInvertidas.appendChild(letraInvertida);
    }
}

// Función para limpiar todo
function limpiarTodo() {
    palabraInput.value = '';
    resultado.style.display = 'none';
    resultadoPrincipal.innerHTML = '';
    palabraOriginal.textContent = '';
    palabraLimpia.textContent = '';
    palabraInvertida.textContent = '';
    longitudPalabra.textContent = '';
    letrasNormales.innerHTML = '';
    letrasInvertidas.innerHTML = '';
    palabraInput.focus();
}

// Event Listeners principales
verificarBtn.addEventListener('click', verificarPalindromo);
limpiarBtn.addEventListener('click', limpiarTodo);

// Permitir ejecutar con Enter
palabraInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        verificarPalindromo();
    }
});

// Event Listeners para botones de ejemplo
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('example-btn')) {
        const palabra = e.target.getAttribute('data-word');
        palabraInput.value = palabra;
        verificarPalindromo();
    }
});

// Enfocar el input al cargar la página
window.addEventListener('load', function() {
    palabraInput.focus();
});

// Funciones adicionales para mejorar la experiencia

// Función para mostrar preview en tiempo real
palabraInput.addEventListener('input', function() {
    const palabra = this.value.trim();
    
    if (palabra.length > 0) {
        const palabraProcesada = limpiarPalabra(palabra);
        const palabraReversa = palabraProcesada.split('').reverse().join('');
        
        // Mostrar preview
        let preview = document.querySelector('.input-preview');
        if (!preview) {
            preview = document.createElement('div');
            preview.className = 'input-preview';
            preview.style.cssText = `
                font-size: 0.9em;
                color: #666;
                margin-top: 5px;
                padding: 8px;
                background: #f8f9fa;
                border-radius: 4px;
                border-left: 3px solid #007bff;
            `;
            palabraInput.parentNode.insertBefore(preview, palabraInput.nextSibling);
        }
        
        const esPalindromo = palabraProcesada === palabraReversa;
        const icono = esPalindromo ? '✅' : '❓';
        const estado = palabraProcesada.length > 1 ? (esPalindromo ? 'Posible palíndromo' : 'No parece palíndromo') : 'Continúa escribiendo...';
        
        preview.innerHTML = `
            ${icono} <strong>${palabra}</strong> → <strong>${palabraReversa}</strong><br>
            <small>Procesada: "${palabraProcesada}" | ${estado}</small>
        `;
    } else {
        const preview = document.querySelector('.input-preview');
        if (preview) preview.remove();
    }
});

// Función para generar palíndromos aleatorios (característica extra)
function generarPalindromoAleatorio() {
    const palindromos = [
        'reconocer', 'radar', 'ana', 'somos', 'oso', 'arepera',
        'sometemos', 'neuquen', 'rotor', 'salas', 'level',
        'civic', 'madam', 'racecar', 'deified'
    ];
    
    const palindromoAleatorio = palindromos[Math.floor(Math.random() * palindromos.length)];
    palabraInput.value = palindromoAleatorio;
    verificarPalindromo();
}

// Agregar botón de ejemplo aleatorio (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const buttonGroup = document.querySelector('.button-group');
    const botonAleatorio = document.createElement('button');
    botonAleatorio.textContent = '🎲 Ejemplo Aleatorio';
    botonAleatorio.className = 'btn-secondary';
    botonAleatorio.addEventListener('click', generarPalindromoAleatorio);
    buttonGroup.appendChild(botonAleatorio);
});