// Ejercicio 6: Divisores de un número con while

function encontrarDivisores() {
    // Obtener el número del input
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado un número válido
    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = `
            <div class="error">
                <h3>❌ Error</h3>
                <p>Por favor, ingresa un número válido mayor que 0.</p>
            </div>
        `;
        return;
    }
    
    // Variables para el ciclo while
    let divisor = 1;
    let divisores = [];
    
    // Ciclo while para encontrar divisores
    while (divisor <= numero) {
        if (numero % divisor === 0) {
            divisores.push(divisor);
        }
        divisor++;
    }
    
    // Mostrar resultado
    mostrarResultado(numero, divisores);
}

function mostrarResultado(numero, divisores) {
    const resultadoDiv = document.getElementById('resultado');
    
    let html = `
        <div class="resultado-exitoso">
            <h3>✅ Divisores encontrados</h3>
            <p><strong>Número analizado:</strong> ${numero}</p>
            <p><strong>Cantidad de divisores:</strong> ${divisores.length}</p>
            
            <div class="divisores-lista">
                <h4>📋 Lista de divisores:</h4>
                <div class="divisores-grid">
    `;
    
    // Agregar cada divisor como un elemento visual
    divisores.forEach(div => {
        html += `<span class="divisor-item">${div}</span>`;
    });
    
    html += `
                </div>
                <p class="divisores-texto"><strong>Divisores:</strong> ${divisores.join(', ')}</p>
            </div>
            
            <div class="explicacion-calculo">
                <h4>🔍 Verificación:</h4>
                <div class="verificaciones">
    `;
    
    // Mostrar algunas verificaciones
    divisores.slice(0, 5).forEach(div => {
        html += `<p>${numero} ÷ ${div} = ${numero / div} (resto: ${numero % div})</p>`;
    });
    
    if (divisores.length > 5) {
        html += `<p>... y ${divisores.length - 5} divisores más</p>`;
    }
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    resultadoDiv.innerHTML = html;
}

function limpiar() {
    // Limpiar el campo de entrada
    document.getElementById('numero').value = '';
    
    // Limpiar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    
    // Mensaje temporal de limpieza
    resultadoDiv.innerHTML = `
        <div class="info">
            <p>✨ Campos limpiados. Ingresa un nuevo número para encontrar sus divisores.</p>
        </div>
    `;
    
    // Quitar el mensaje después de 2 segundos
    setTimeout(() => {
        resultadoDiv.innerHTML = '';
    }, 2000);
}

// Permitir ejecutar con Enter
document.getElementById('numero').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        encontrarDivisores();
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="info">
            <h3>👋 ¡Bienvenido al Calculador de Divisores!</h3>
            <p>Ingresa un número para encontrar todos sus divisores usando un ciclo <code>while</code>.</p>
            <p><strong>Ejemplo:</strong> Si ingresas 12, encontrarás: 1, 2, 3, 4, 6, 12</p>
        </div>
    `;
});