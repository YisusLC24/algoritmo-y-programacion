// Ejercicio 1: Promedio de Arreglo
// Crear un arreglo con 5 números y mostrar el promedio

function calcularPromedio() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    
    // Validar que todos los campos estén llenos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        mostrarResultado('❌ Error: Debes ingresar los 5 números', 'error');
        return;
    }
    
    // Crear el arreglo con los 5 números
    const numeros = [num1, num2, num3, num4, num5];
    
    // Calcular la suma usando un ciclo for
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    // Calcular el promedio
    const promedio = suma / numeros.length;
    
    // Mostrar el resultado detallado
    mostrarResultado(`
        <h3>✅ Resultado del Cálculo</h3>
        <div class="resultado-detalle">
            <div class="arreglo-info">
                <h4>📊 Arreglo creado:</h4>
                <div class="arreglo-visual">
                    ${numeros.map((num, index) => `
                        <div class="elemento-arreglo">
                            <div class="indice">índice ${index}</div>
                            <div class="valor">${num}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="calculo-info">
                <h4>🧮 Proceso de cálculo:</h4>
                <div class="paso">
                    <strong>1. Suma de elementos:</strong> ${numeros.join(' + ')} = ${suma}
                </div>
                <div class="paso">
                    <strong>2. Cantidad de elementos:</strong> ${numeros.length}
                </div>
                <div class="paso resultado-final">
                    <strong>3. Promedio:</strong> ${suma} ÷ ${numeros.length} = <span class="promedio-resultado">${promedio.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="estadisticas">
                <h4>📈 Estadísticas adicionales:</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">Suma total:</span>
                        <span class="stat-value">${suma}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Promedio:</span>
                        <span class="stat-value">${promedio.toFixed(2)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Número mayor:</span>
                        <span class="stat-value">${Math.max(...numeros)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Número menor:</span>
                        <span class="stat-value">${Math.min(...numeros)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Elementos:</span>
                        <span class="stat-value">${numeros.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Tipo de dato:</span>
                        <span class="stat-value">Array</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🔧 Lógica del Ejercicio:</h4>
            <pre><code>// Crear arreglo con los 5 números
let numeros = [${numeros.join(', ')}];

// Calcular suma usando ciclo for
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calcular promedio
let promedio = suma / numeros.length;
console.log("El promedio es: " + promedio);</code></pre>
        </div>
    `, 'success');
}

function mostrarResultado(mensaje, tipo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje;
    resultado.className = 'resultado ' + tipo;
}

function limpiar() {
    // Limpiar todos los inputs
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('num4').value = '';
    document.getElementById('num5').value = '';
    
    // Mostrar mensaje inicial
    mostrarResultado(`
        <h3>💡 ¿Cómo funciona este ejercicio?</h3>
        <div class="explicacion">
            <p><strong>¿Qué es un promedio?</strong> El promedio es la suma de todos los números dividida entre la cantidad de números.</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>📝 Crear un arreglo con los 5 números</li>
                <li>➕ Sumar todos los elementos del arreglo</li>
                <li>➗ Dividir la suma entre la cantidad de elementos (5)</li>
                <li>📊 Mostrar el resultado</li>
            </ul>
            <p><strong>Ejemplo:</strong> Los números [10, 20, 30, 40, 50] tienen un promedio de 30</p>
            <div class="logica-ejercicio">
                <h4>🔧 Lógica del Ejercicio:</h4>
                <pre><code>let numeros = [num1, num2, num3, num4, num5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
let promedio = suma / numeros.length;</code></pre>
            </div>
        </div>
    `, '');
    
    // Enfocar el primer input
    document.getElementById('num1').focus();
}

function cargarEjemplo() {
    // Cargar números de ejemplo
    document.getElementById('num1').value = '10';
    document.getElementById('num2').value = '20';
    document.getElementById('num3').value = '30';
    document.getElementById('num4').value = '40';
    document.getElementById('num5').value = '50';
    
    // Calcular automáticamente
    calcularPromedio();
}

// Permitir calcular con Enter en cualquier input
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['num1', 'num2', 'num3', 'num4', 'num5'];
    
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularPromedio();
            }
        });
        
        // Auto-focus al siguiente input cuando se llena uno
        document.getElementById(id).addEventListener('input', function() {
            if (this.value && id !== 'num5') {
                const currentIndex = inputs.indexOf(id);
                const nextInput = inputs[currentIndex + 1];
                if (nextInput) {
                    document.getElementById(nextInput).focus();
                }
            }
        });
    });
    
    // Enfocar el primer input al cargar
    document.getElementById('num1').focus();
});