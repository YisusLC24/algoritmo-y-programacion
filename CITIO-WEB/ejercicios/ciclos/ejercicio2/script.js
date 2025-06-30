// Ejercicio 2 de Ciclos: Tabla de multiplicar con for
// Autor: [Tu nombre]
// Fecha: [Fecha actual]

// Variables globales
let numeroInput = document.getElementById('numeroInput');
let resultado = document.getElementById('resultado');
let calcularBtn = document.getElementById('calcularBtn');
let limpiarBtn = document.getElementById('limpiarBtn');

// Función para calcular y mostrar la tabla de multiplicar
function calcularTabla() {
    // Obtener el número ingresado
    let numero = parseInt(numeroInput.value);
    
    // Validar entrada
    if (isNaN(numero) || numero <= 0) {
        mostrarError('Por favor, ingresa un número válido mayor que 0');
        return;
    }
    
    if (numero > 100) {
        mostrarError('Por favor, ingresa un número menor o igual a 100');
        return;
    }
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear contenedor para la tabla
    let contenedor = document.createElement('div');
    contenedor.className = 'tabla-container';
    
    // Título del resultado
    let titulo = document.createElement('h4');
    titulo.textContent = `🔢 Tabla de multiplicar del ${numero}:`;
    titulo.className = 'resultado-titulo';
    contenedor.appendChild(titulo);
    
    // Crear tabla de multiplicación
    let tabla = document.createElement('div');
    tabla.className = 'multiplicacion-tabla';
    
    // Ciclo for para generar la tabla del 1 al 10
    for (let i = 1; i <= 10; i++) {
        let resultadoMultiplicacion = numero * i;
        
        // Crear fila de la tabla
        let fila = document.createElement('div');
        fila.className = 'tabla-fila';
        
        // Crear elementos de la ecuación
        let ecuacion = document.createElement('span');
        ecuacion.className = 'ecuacion';
        ecuacion.innerHTML = `
            <span class="numero-base">${numero}</span>
            <span class="operador">×</span>
            <span class="multiplicador">${i}</span>
            <span class="igual">=</span>
            <span class="resultado-operacion">${resultadoMultiplicacion}</span>
        `;
        
        fila.appendChild(ecuacion);
        tabla.appendChild(fila);
        
        // Agregar animación con delay
        setTimeout(() => {
            fila.classList.add('mostrar');
        }, i * 150);
    }
    
    contenedor.appendChild(tabla);
    
    // Mostrar información adicional
    let info = document.createElement('div');
    info.className = 'info-adicional';
    info.innerHTML = `
        <p><strong>✅ Tabla generada exitosamente!</strong></p>
        <p>📊 Número base: ${numero}</p>
        <p>🔄 Multiplicadores: del 1 al 10</p>
        <p>📈 Total de operaciones: 10</p>
        <p>🎯 Resultado mayor: ${numero * 10}</p>
    `;
    
    contenedor.appendChild(info);
    resultado.appendChild(contenedor);
    
    // Mostrar mensaje de éxito
    mostrarMensaje(`¡Perfecto! Tabla del ${numero} calculada correctamente.`, 'success');
}

// Función para limpiar el resultado
function limpiarResultado() {
    numeroInput.value = '';
    resultado.innerHTML = `
        <p class="hint">🔢 Ingresa un número para ver su tabla de multiplicar</p>
        <p class="ejemplo">💡 ¿Cómo funciona este ejercicio?</p>
        <p>📝 Ingresa un número (ejemplo: 5)</p>
        <p>🔄 El programa calculará: 5×1, 5×2, 5×3... hasta 5×10</p>
        <p>📊 Te mostrará todos los resultados organizados</p>
        <p>✨ ¡Prueba con diferentes números!</p>
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
                    <li>Ejemplo válido: 5, 12, 25</li>
                    <li>Rango recomendado: 1 a 100</li>
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
calcularBtn.addEventListener('click', calcularTabla);
limpiarBtn.addEventListener('click', limpiarResultado);

// Funcionalidad para calcular al presionar Enter en el input
numeroInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularTabla();
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
    
    if (valor > 100) {
        this.style.borderColor = '#ff6b6b';
        mostrarMensaje('Número muy grande. Máximo: 100', 'warning');
    } else if (valor < 0) {
        this.style.borderColor = '#ff6b6b';
        mostrarMensaje('Ingresa un número positivo.', 'warning');
    } else {
        this.style.borderColor = '#4ecdc4';
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    console.log('🚀 Ejercicio 2 de Ciclos cargado correctamente');
    console.log('📚 Tema: Tabla de multiplicar con ciclo for');
    
    // Agregar tooltips a los elementos
    numeroInput.title = 'Ingresa un número del 1 al 100';
    calcularBtn.title = 'Calcular tabla de multiplicar (Enter)';
    limpiarBtn.title = 'Limpiar campos (Escape)';
    
    // Focus inicial en el input
    numeroInput.focus();
});

// Función adicional para mostrar el código del ciclo
function mostrarCodigoTabla(numero) {
    const codigo = `
// Tabla de multiplicar del ${numero}
let numero = ${numero};

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " × " + i + " = " + resultado);
}

// Salida esperada:
${Array.from({length: 10}, (_, i) => `// ${numero} × ${i + 1} = ${numero * (i + 1)}`).join('\n')}
`;
    
    console.log(codigo);
    return codigo;
}

// Exportar funciones para uso externo (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calcularTabla,
        limpiarResultado,
        mostrarCodigoTabla
    };
}