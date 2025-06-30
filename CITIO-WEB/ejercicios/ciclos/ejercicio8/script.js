// Ejercicio 8: Pedir nombres hasta que el usuario escriba "Messi" con while

// Variables globales para el ejercicio
let contador = 0;
let nombres = [];
let juegoTerminado = false;

function agregarNombre() {
    // Obtener el nombre del input
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value.trim();
    
    // Validar que se haya ingresado algo
    if (nombre === '') {
        mostrarMensaje('⚠️ Por favor, ingresa un nombre válido.', 'warning');
        return;
    }
    
    // Verificar si el juego ya terminó
    if (juegoTerminado) {
        mostrarMensaje('🛑 El juego ya terminó. Presiona "Reiniciar" para empezar de nuevo.', 'error');
        return;
    }
    
    // Lógica del ciclo while simulado
    procesarNombre(nombre);
    
    // Limpiar el input para el siguiente nombre
    nombreInput.value = '';
    nombreInput.focus();
}

function procesarNombre(nombre) {
    // Verificar si es "Messi" (sin importar mayúsculas/minúsculas)
    if (nombre.toLowerCase() === 'messi') {
        // Terminar el ciclo
        juegoTerminado = true;
        mostrarResultadoFinal();
        return;
    }
    
    // Si no es "Messi", agregar a la lista
    nombres.push(nombre);
    contador++;
    
    // Actualizar la interfaz
    actualizarContador();
    actualizarListaNombres();
    
    // Mostrar mensaje de confirmación
    mostrarMensaje(`✅ "${nombre}" agregado correctamente. Total: ${contador}`, 'success');
}

function actualizarContador() {
    const numeroContador = document.querySelector('.numero-contador');
    numeroContador.textContent = contador;
    
    // Efecto visual en el contador
    numeroContador.style.transform = 'scale(1.2)';
    numeroContador.style.color = '#4CAF50';
    
    setTimeout(() => {
        numeroContador.style.transform = 'scale(1)';
        numeroContador.style.color = '';
    }, 300);
}

function actualizarListaNombres() {
    const listaNombres = document.getElementById('listaNombres');
    
    if (nombres.length === 0) {
        listaNombres.innerHTML = '';
        return;
    }
    
    let html = `
        <div class="nombres-ingresados">
            <h4>📋 Nombres ingresados hasta ahora:</h4>
            <div class="nombres-grid">
    `;
    
    nombres.forEach((nombre, index) => {
        html += `<span class="nombre-item" style="animation-delay: ${index * 0.1}s">${index + 1}. ${nombre}</span>`;
    });
    
    html += `
            </div>
        </div>
    `;
    
    listaNombres.innerHTML = html;
}

function mostrarResultadoFinal() {
    const resultadoDiv = document.getElementById('resultado');
    const instruccionP = document.getElementById('instruccion');
    
    // Cambiar la instrucción
    instruccionP.innerHTML = '🎉 ¡Juego terminado! Escribiste "Messi".';
    instruccionP.style.color = '#4CAF50';
    instruccionP.style.fontWeight = 'bold';
    
    // Deshabilitar el input
    const nombreInput = document.getElementById('nombre');
    nombreInput.disabled = true;
    nombreInput.placeholder = 'Juego terminado - Presiona Reiniciar';
    
    let html = `
        <div class="resultado-exitoso">
            <h3>🏆 ¡Juego Completado!</h3>
            <p class="resultado-principal">Has ingresado un total de <strong>${contador} nombres</strong> antes de escribir "Messi".</p>
            
            <div class="estadisticas-finales">
                <h4>📊 Estadísticas finales:</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${contador}</span>
                        <span class="stat-label">Nombres ingresados</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${contador + 1}</span>
                        <span class="stat-label">Total de entradas</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">1</span>
                        <span class="stat-label">Palabra clave ("Messi")</span>
                    </div>
                </div>
            </div>
            
            <div class="lista-final">
                <h4>📝 Lista completa de nombres:</h4>
                <div class="nombres-finales">
    `;
    
    if (nombres.length > 0) {
        nombres.forEach((nombre, index) => {
            html += `<span class="nombre-final">${index + 1}. ${nombre}</span>`;
        });
        html += `<span class="nombre-final messi-final">${contador + 1}. Messi ⭐</span>`;
    } else {
        html += `<p>No se ingresaron nombres antes de "Messi".</p>`;
        html += `<span class="nombre-final messi-final">1. Messi ⭐</span>`;
    }
    
    html += `
                </div>
            </div>
            
            <div class="mensaje-final">
                <p>🎯 <strong>Objetivo cumplido:</strong> El ciclo <code>while</code> se ejecutó ${contador} veces y se detuvo cuando detectó "Messi".</p>
            </div>
        </div>
    `;
    
    resultadoDiv.innerHTML = html;
}

function mostrarMensaje(mensaje, tipo) {
    // Crear un elemento de mensaje temporal
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje-temporal ${tipo}`;
    mensajeDiv.textContent = mensaje;
    
    // Insertarlo después del formulario
    const form = document.querySelector('.ejercicio-form');
    form.appendChild(mensajeDiv);
    
    // Removerlo después de 3 segundos
    setTimeout(() => {
        if (mensajeDiv.parentNode) {
            mensajeDiv.parentNode.removeChild(mensajeDiv);
        }
    }, 3000);
}

function reiniciar() {
    // Reiniciar todas las variables
    contador = 0;
    nombres = [];
    juegoTerminado = false;
    
    // Limpiar la interfaz
    document.getElementById('nombre').value = '';
    document.getElementById('nombre').disabled = false;
    document.getElementById('nombre').placeholder = 'Ejemplo: Juan, María, Pedro...';
    document.querySelector('.numero-contador').textContent = '0';
    document.getElementById('listaNombres').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    
    // Restaurar instrucción original
    const instruccionP = document.getElementById('instruccion');
    instruccionP.innerHTML = '💡 Escribe nombres y presiona "Agregar Nombre" o Enter. Escribe "Messi" para terminar.';
    instruccionP.style.color = '';
    instruccionP.style.fontWeight = '';
    
    // Mensaje de confirmación
    mostrarMensaje('🔄 Juego reiniciado. ¡Puedes comenzar de nuevo!', 'info');
    
    // Enfocar el input
    document.getElementById('nombre').focus();
}

// Permitir ejecutar con Enter
document.getElementById('nombre').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarNombre();
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    const instruccionP = document.getElementById('instruccion');
    document.getElementById('nombre').focus();
    
    // Mostrar mensaje inicial
    setTimeout(() => {
        mostrarMensaje('👋 ¡Bienvenido! Comienza escribiendo nombres. El juego termina cuando escribas "Messi".', 'info');
    }, 500);
});