// Ejercicio 7: Generar los primeros N términos de la secuencia de Fibonacci con while

function generarFibonacci() {
    // Obtener la cantidad de términos del input
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado un número válido
    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.innerHTML = `
            <div class="error">
                <h3>❌ Error</h3>
                <p>Por favor, ingresa un número válido mayor que 0.</p>
            </div>
        `;
        return;
    }
    
    // Validar que no sea un número demasiado grande
    if (cantidad > 50) {
        resultadoDiv.innerHTML = `
            <div class="error">
                <h3>⚠️ Advertencia</h3>
                <p>Por favor, ingresa un número menor o igual a 50 para mejor visualización.</p>
            </div>
        `;
        return;
    }
    
    // Variables para generar Fibonacci
    let a = 0;  // Primer número
    let b = 1;  // Segundo número
    let contador = 0;
    let fibonacci = [];
    let pasos = [];
    
    // Ciclo while para generar la secuencia
    while (contador < cantidad) {
        fibonacci.push(a);
        
        // Guardar el paso para mostrar el proceso
        if (contador === 0) {
            pasos.push(`Término ${contador + 1}: ${a} (primer número)`);
        } else if (contador === 1) {
            pasos.push(`Término ${contador + 1}: ${a} (segundo número)`);
        } else {
            let anterior = fibonacci[contador - 1];
            let anteanterior = fibonacci[contador - 2];
            pasos.push(`Término ${contador + 1}: ${anteanterior} + ${anterior} = ${a}`);
        }
        
        // Calcular siguiente número
        let temp = a + b;
        a = b;
        b = temp;
        contador++;
    }
    
    // Mostrar resultado
    mostrarResultado(cantidad, fibonacci, pasos);
}

function mostrarResultado(cantidad, fibonacci, pasos) {
    const resultadoDiv = document.getElementById('resultado');
    
    let html = `
        <div class="resultado-exitoso">
            <h3>✅ Secuencia de Fibonacci generada</h3>
            <p><strong>Cantidad de términos solicitados:</strong> ${cantidad}</p>
            
            <div class="fibonacci-resultado">
                <h4>🔢 Secuencia completa:</h4>
                <div class="fibonacci-grid">
    `;
    
    // Mostrar cada término de Fibonacci como elemento visual
    fibonacci.forEach((num, index) => {
        html += `<span class="fibonacci-item" style="animation-delay: ${index * 0.1}s">${num}</span>`;
    });
    
    html += `
                </div>
                <p class="fibonacci-texto"><strong>Fibonacci:</strong> ${fibonacci.join(', ')}</p>
            </div>
            
            <div class="proceso-calculo">
                <h4>🧮 Proceso de cálculo:</h4>
                <div class="pasos-fibonacci">
    `;
    
    // Mostrar algunos pasos del proceso (máximo 10 para no saturar)
    const pasosAMostrar = pasos.slice(0, Math.min(10, pasos.length));
    pasosAMostrar.forEach(paso => {
        html += `<p class="paso-calculo">${paso}</p>`;
    });
    
    if (pasos.length > 10) {
        html += `<p class="mas-pasos">... y ${pasos.length - 10} pasos más</p>`;
    }
    
    html += `
                </div>
            </div>
            
            <div class="datos-interesantes">
                <h4>📊 Datos interesantes:</h4>
                <p><strong>Último término:</strong> ${fibonacci[fibonacci.length - 1]}</p>
                <p><strong>Suma total:</strong> ${fibonacci.reduce((sum, num) => sum + num, 0)}</p>
                <p><strong>Promedio:</strong> ${(fibonacci.reduce((sum, num) => sum + num, 0) / fibonacci.length).toFixed(2)}</p>
            </div>
        </div>
    `;
    
    resultadoDiv.innerHTML = html;
}

function limpiar() {
    // Limpiar el campo de entrada
    document.getElementById('cantidad').value = '';
    
    // Limpiar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    
    // Mensaje temporal de limpieza
    resultadoDiv.innerHTML = `
        <div class="info">
            <p>✨ Campos limpiados. Ingresa la cantidad de términos de Fibonacci que deseas generar.</p>
        </div>
    `;
    
    // Quitar el mensaje después de 2 segundos
    setTimeout(() => {
        resultadoDiv.innerHTML = '';
    }, 2000);
}

// Permitir ejecutar con Enter
document.getElementById('cantidad').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generarFibonacci();
    }
});

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="info">
            <h3>👋 ¡Bienvenido al Generador de Fibonacci!</h3>
            <p>Ingresa cuántos términos de la secuencia de Fibonacci quieres generar usando un ciclo <code>while</code>.</p>
            <p><strong>Ejemplo:</strong> Si ingresas 8, obtendrás: 0, 1, 1, 2, 3, 5, 8, 13</p>
            <p><strong>Recuerda:</strong> Cada número es la suma de los dos anteriores.</p>
        </div>
    `;
});