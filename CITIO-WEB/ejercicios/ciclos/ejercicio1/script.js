// Ejercicio 1 de Ciclos: Mostrar números del 1 al 10 con for
// Autor: [Tu nombre]
// Fecha: [Fecha actual]

// Variables globales
let resultado = document.getElementById('resultado');
let ejecutarBtn = document.getElementById('ejecutarBtn');
let limpiarBtn = document.getElementById('limpiarBtn');

// Función para ejecutar el ciclo for
function mostrarNumeros() {
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear contenedor para los números
    let contenedor = document.createElement('div');
    contenedor.className = 'numeros-container';
    
    // Título del resultado
    let titulo = document.createElement('h4');
    titulo.textContent = '🔢 Números del 1 al 10:';
    titulo.className = 'resultado-titulo';
    contenedor.appendChild(titulo);
    
    // Crear lista de números
    let lista = document.createElement('div');
    lista.className = 'numeros-lista';
    
    // Ciclo for para mostrar números del 1 al 10
    for (let i = 1; i <= 10; i++) {
        // Crear elemento para cada número
        let numeroElement = document.createElement('span');
        numeroElement.textContent = i;
        numeroElement.className = 'numero-item';
        
        // Agregar animación con delay
        setTimeout(() => {
            numeroElement.classList.add('mostrar');
        }, (i - 1) * 200);
        
        lista.appendChild(numeroElement);
        
        // Agregar separador excepto para el último número
        if (i < 10) {
            let separador = document.createElement('span');
            separador.textContent = ', ';
            separador.className = 'separador';
            lista.appendChild(separador);
        }
    }
    
    contenedor.appendChild(lista);
    
    // Mostrar información adicional
    let info = document.createElement('div');
    info.className = 'info-adicional';
    info.innerHTML = `
        <p><strong>✅ Ciclo completado exitosamente!</strong></p>
        <p>📊 Total de iteraciones: 10</p>
        <p>🔄 Tipo de ciclo: <code>for</code></p>
        <p>📈 Rango: del 1 al 10 (inclusive)</p>
    `;
    
    contenedor.appendChild(info);
    resultado.appendChild(contenedor);
    
    // Mostrar mensaje de éxito
    mostrarMensaje('¡Excelente! El ciclo for se ejecutó correctamente.', 'success');
}

// Función para limpiar el resultado
function limpiarResultado() {
    resultado.innerHTML = '<p class="hint">🔢 Presiona "Ejecutar Ciclo" para ver los números del 1 al 10</p>';
    mostrarMensaje('Resultado limpiado.', 'info');
}

// Función para mostrar mensajes de retroalimentación
function mostrarMensaje(mensaje, tipo) {
    // Crear elemento de mensaje
    let mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje mensaje-${tipo}`;
    mensajeDiv.textContent = mensaje;
    
    // Agregar al resultado temporalmente
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
ejecutarBtn.addEventListener('click', mostrarNumeros);
limpiarBtn.addEventListener('click', limpiarResultado);

// Funcionalidad adicional: Ejecutar al presionar Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        mostrarNumeros();
    }
    if (event.key === 'Escape') {
        limpiarResultado();
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    console.log('🚀 Ejercicio 1 de Ciclos cargado correctamente');
    console.log('📚 Tema: Mostrar números del 1 al 10 con ciclo for');
    
    // Agregar tooltip a los botones
    ejecutarBtn.title = 'Ejecutar el ciclo for (Enter)';
    limpiarBtn.title = 'Limpiar resultado (Escape)';
});

// Función adicional para mostrar el código del ciclo
function mostrarCodigo() {
    const codigo = `
// Ciclo for básico
for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i);
}

// Explicación paso a paso:
// 1. let i = 1         → Inicialización: comenzamos en 1
// 2. i <= 10           → Condición: continuamos mientras i ≤ 10  
// 3. i++               → Incremento: aumentamos i en 1
// 4. console.log(i)    → Acción: mostramos el número actual
`;
    
    console.log(codigo);
    return codigo;
}

// Exportar funciones para uso externo (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mostrarNumeros,
        limpiarResultado,
        mostrarCodigo
    };
}