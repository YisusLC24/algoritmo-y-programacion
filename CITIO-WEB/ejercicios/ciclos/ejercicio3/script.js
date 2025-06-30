// Ejercicio 3 de Ciclos: Suma de los primeros N números naturales con for
// Autor: [Tu nombre]
// Fecha: [Fecha actual]

// Variables globales
let numeroInput = document.getElementById('numeroInput');
let resultado = document.getElementById('resultado');
let calcularBtn = document.getElementById('calcularBtn');
let limpiarBtn = document.getElementById('limpiarBtn');

// Función para calcular la suma de los primeros N números naturales
function calcularSuma() {
    // Obtener el número ingresado
    let n = parseInt(numeroInput.value);
    
    // Validar entrada
    if (isNaN(n) || n <= 0) {
        mostrarError('Por favor, ingresa un número válido mayor que 0');
        return;
    }
    
    if (n > 1000) {
        mostrarError('Por favor, ingresa un número menor o igual a 1000');
        return;
    }
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear contenedor para el resultado
    let contenedor = document.createElement('div');
    contenedor.className = 'suma-container';
    
    // Título del resultado
    let titulo = document.createElement('h4');
    titulo.textContent = `🔢 Suma de los primeros ${n} números naturales:`;
    titulo.className = 'resultado-titulo';
    contenedor.appendChild(titulo);
    
    // Mostrar la secuencia de números
    let secuenciaDiv = document.createElement('div');
    secuenciaDiv.className = 'secuencia-numeros';
    
    let secuenciaTexto = document.createElement('p');
    secuenciaTexto.innerHTML = '<strong>📋 Secuencia:</strong> ';
    
    // Crear la secuencia visual (limitamos a 20 números para no saturar la pantalla)
    let mostrarCompleta = n <= 20;
    let secuenciaHTML = '';
    
    if (mostrarCompleta) {
        for (let i = 1; i <= n; i++) {
            secuenciaHTML += `<span class="numero-secuencia">${i}</span>`;
            if (i < n) {
                secuenciaHTML += ' + ';
            }
        }
    } else {
        secuenciaHTML = '1 + 2 + 3 + ... + ' + (n-2) + ' + ' + (n-1) + ' + ' + n;
    }
    
    secuenciaTexto.innerHTML += secuenciaHTML;
    secuenciaDiv.appendChild(secuenciaTexto);
    contenedor.appendChild(secuenciaDiv);
    
    // Calcular la suma usando ciclo for
    let suma = 0;
    let proceso = document.createElement('div');
    proceso.className = 'proceso-calculo';
    
    let procesoTitulo = document.createElement('h5');
    procesoTitulo.textContent = '🔄 Proceso de cálculo:';
    proceso.appendChild(procesoTitulo);
    
    let pasos = document.createElement('div');
    pasos.className = 'pasos-calculo';
    
    // Ejecutar el ciclo for y mostrar algunos pasos
    for (let i = 1; i <= n; i++) {
        suma += i;
        
        // Mostrar algunos pasos del proceso (solo los primeros 10 y los últimos 3)
        if (i <= 10 || i > (n - 3)) {
            let paso = document.createElement('div');
            paso.className = 'paso-item';
            paso.innerHTML = `
                <span class="paso-numero">Paso ${i}:</span>
                <span class="paso-operacion">suma = ${suma - i} + ${i} = ${suma}</span>
            `;
            pasos.appendChild(paso);
            
            // Animación con delay
            setTimeout(() => {
                paso.classList.add('mostrar');
            }, i * 100);
        } else if (i === 11 && n > 13) {
            // Mostrar puntos suspensivos para números grandes
            let puntos = document.createElement('div');
            puntos.className = 'paso-item puntos-suspensivos';
            puntos.innerHTML = '<span class="paso-operacion">... (continuando el proceso) ...</span>';
            pasos.appendChild(puntos);
        }
    }
    
    proceso.appendChild(pasos);
    contenedor.appendChild(proceso);
    
    // Mostrar el resultado final
    let resultadoFinal = document.createElement('div');
    resultadoFinal.className = 'resultado-final';
    resultadoFinal.innerHTML = `
        <div class="resultado-destacado">
            <h4>🎯 Resultado Final:</h4>
            <div class="suma-final">
                <span class="operacion-completa">1 + 2 + 3 + ... + ${n} = </span>
                <span class="resultado-numero">${suma}</span>
            </div>
        </div>
    `;
    contenedor.appendChild(resultadoFinal);
    
    // Mostrar información adicional
    let info = document.createElement('div');
    info.className = 'info-adicional';
    
    // Calcular fórmula matemática para verificar
    let formulaResultado = (n * (n + 1)) / 2;
    
    info.innerHTML = `
        <p><strong>✅ Cálculo completado exitosamente!</strong></p>
        <p>📊 Número límite (N): ${n}</p>
        <p>🔄 Total de iteraciones: ${n}</p>
        <p>➕ Suma calculada: ${suma}</p>
        <p>📐 Verificación con fórmula: n(n+1)/2 = ${n}(${n+1})/2 = ${formulaResultado}</p>
        <p>${suma === formulaResultado ? '✅ ¡Resultado correcto!' : '❌ Error en el cálculo'}</p>
    `;
    
    contenedor.appendChild(info);
    resultado.appendChild(contenedor);
    
    // Mostrar mensaje de éxito
    mostrarMensaje(`¡Excelente! Suma de los primeros ${n} números: ${suma}`, 'success');
}

// Función para limpiar el resultado
function limpiarResultado() {
    numeroInput.value = '';
    resultado.innerHTML = `
        <p class="hint">🔢 Ingresa un número para calcular la suma de los primeros N números naturales</p>
        <p class="ejemplo">💡 ¿Qué son los números naturales?</p>
        <p>📝 Los números naturales son: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</p>
        <p>➕ Ejemplo: Si N=5, suma = 1+2+3+4+5 = 15</p>
        <p>🎯 ¡Prueba con diferentes valores!</p>
    `;
    numeroInput.focus();
    mostrarMensaje('Campos limpiados.', 'info');
}

// Función para mostrar errores
function mostrarError(mensaje) {
    resultado.innerHTML = `
        <div class="error-container">
            <h4 class="error-titulo">❌ Error de entrada</h4>
            <p class="error-mensaje">${mensaje}</p>
            <div class="error-ayuda">
                <p><strong>💡 Consejos:</strong></p>
                <ul>
                    <li>Ingresa solo números enteros positivos</li>
                    <li>Ejemplo válido: 5, 10, 25, 100</li>
                    <li>Rango recomendado: 1 a 1000</li>
                    <li>Recuerda: números naturales empiezan en 1</li>
                </ul>
            </div>
        </div>
    `;
    mostrarMensaje(mensaje, 'error');
}

// Función para mostrar mensajes de retroalimentación
function mostrarMensaje(mensaje, tipo) {
    // Crear elemento de mensaje
    let mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje mensaje-${tipo}`;
    mensajeDiv.textContent = mensaje;
    
    // Agregar al body temporalmente
    document.body.appendChild(mensajeDiv);
    
    // Mostrar con animación
    setTimeout(() => {
        mensajeDiv.classList.add('mostrar');
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        mensajeDiv.classList.remove('mostrar');
        setTimeout(() => {
            if (mensajeDiv.parentNode) {
                mensajeDiv.parentNode.removeChild(mensajeDiv);
            }
        }, 300);
    }, 3000);
}

// Event Listeners
calcularBtn.addEventListener('click', calcularSuma);
limpiarBtn.addEventListener('click', limpiarResultado);

// Funcionalidad para calcular al presionar Enter en el input
numeroInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularSuma();
    }
});

// Atajos de teclado globales
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        limpiarResultado();
    }
});

// Validación en tiempo real del input
numeroInput.addEventListener('input', function() {
    let valor = parseInt(this.value);
    
    if (valor > 1000) {
        this.style.borderColor = '#ff6b6b';
        mostrarMensaje('Número muy grande. Máximo: 1000', 'warning');
    } else if (valor < 0) {
        this.style.borderColor = '#ff6b6b';
        mostrarMensaje('Ingresa un número positivo.', 'warning');
    } else if (valor === 0) {
        this.style.borderColor = '#ffa726';
        mostrarMensaje('Los números naturales empiezan en 1.', 'warning');
    } else {
        this.style.borderColor = '#4ecdc4';
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    console.log('🚀 Ejercicio 3 de Ciclos cargado correctamente');
    console.log('📚 Tema: Suma de números naturales con ciclo for');
    
    // Agregar tooltips a los elementos
    numeroInput.title = 'Ingresa un número del 1 al 1000';
    calcularBtn.title = 'Calcular suma de números naturales (Enter)';
    limpiarBtn.title = 'Limpiar campos (Escape)';
    
    // Focus inicial en el input
    numeroInput.focus();
});

// Función adicional para mostrar el código del ciclo
function mostrarCodigoSuma(n) {
    const codigo = `
// Suma de los primeros ${n} números naturales
let n = ${n};
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i; // suma = suma + i
    console.log("Paso " + i + ": suma = " + suma);
}

console.log("Resultado final: " + suma);

// Verificación con fórmula matemática:
// Suma = n * (n + 1) / 2
// Suma = ${n} * (${n} + 1) / 2 = ${(n * (n + 1)) / 2}
`;
    
    console.log(codigo);
    return codigo;
}

// Exportar funciones para uso externo (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calcularSuma,
        limpiarResultado,
        mostrarCodigoSuma
    };
}