// Ejercicio 2: Contar Elementos Impares
// Contar cuántos elementos impares hay en un arreglo

function contarImpares() {
    let numeros = [];
    
    // Obtener números del input manual
    const numerosInput = document.getElementById('numerosInput').value.trim();
    
    if (numerosInput === '') {
        mostrarResultado('❌ Error: Debes ingresar números o generar números aleatorios', 'error');
        return;
    }
    
    // Convertir string a arreglo de números
    try {
        numeros = numerosInput.split(',').map(num => {
            const numero = parseFloat(num.trim());
            if (isNaN(numero)) {
                throw new Error('Número inválido');
            }
            return numero;
        });
    } catch (error) {
        mostrarResultado('❌ Error: Ingresa números válidos separados por comas (ejemplo: 1, 2, 3, 4, 5)', 'error');
        return;
    }
    
    if (numeros.length === 0) {
        mostrarResultado('❌ Error: Debes ingresar al menos un número', 'error');
        return;
    }
    
    // Contar elementos impares
    let contadorImpares = 0;
    let numerosImpares = [];
    let numerosPares = [];
    
    // Recorrer el arreglo usando un ciclo for
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contadorImpares++;
            numerosImpares.push(numeros[i]);
        } else {
            numerosPares.push(numeros[i]);
        }
    }
    
    // Mostrar el resultado detallado
    mostrarResultado(`
        <h3>✅ Resultado del Análisis</h3>
        <div class="resultado-detalle">
            <div class="arreglo-info">
                <h4>📊 Arreglo analizado:</h4>
                <div class="arreglo-visual">
                    ${numeros.map((num, index) => `
                        <div class="elemento-arreglo ${num % 2 !== 0 ? 'impar' : 'par'}">
                            <div class="indice">índice ${index}</div>
                            <div class="valor">${num}</div>
                            <div class="tipo">${num % 2 !== 0 ? 'IMPAR' : 'PAR'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="conteo-info">
                <h4>🔍 Análisis de elementos:</h4>
                <div class="resultado-principal">
                    <div class="contador-impares">
                        <span class="numero-grande">${contadorImpares}</span>
                        <span class="etiqueta">Números Impares</span>
                    </div>
                    <div class="contador-pares">
                        <span class="numero-grande">${numerosPares.length}</span>
                        <span class="etiqueta">Números Pares</span>
                    </div>
                </div>
            </div>
            
            <div class="detalle-numeros">
                <div class="grupo-numeros">
                    <h4>🔴 Números Impares encontrados:</h4>
                    <div class="lista-numeros impares">
                        ${numerosImpares.length > 0 ? 
                            numerosImpares.map(num => `<span class="numero-item impar">${num}</span>`).join('') 
                            : '<span class="sin-numeros">No hay números impares</span>'
                        }
                    </div>
                </div>
                
                <div class="grupo-numeros">
                    <h4>🔵 Números Pares encontrados:</h4>
                    <div class="lista-numeros pares">
                        ${numerosPares.length > 0 ? 
                            numerosPares.map(num => `<span class="numero-item par">${num}</span>`).join('') 
                            : '<span class="sin-numeros">No hay números pares</span>'
                        }
                    </div>
                </div>
            </div>
            
            <div class="estadisticas">
                <h4>📈 Estadísticas:</h4>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">Total elementos:</span>
                        <span class="stat-value">${numeros.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Números impares:</span>
                        <span class="stat-value">${contadorImpares}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Números pares:</span>
                        <span class="stat-value">${numerosPares.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">% Impares:</span>
                        <span class="stat-value">${((contadorImpares / numeros.length) * 100).toFixed(1)}%</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">% Pares:</span>
                        <span class="stat-value">${((numerosPares.length / numeros.length) * 100).toFixed(1)}%</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Mayor impar:</span>
                        <span class="stat-value">${numerosImpares.length > 0 ? Math.max(...numerosImpares) : 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🔧 Lógica del Ejercicio:</h4>
            <pre><code>// Arreglo analizado
let numeros = [${numeros.join(', ')}];

// Contar elementos impares
let contadorImpares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        contadorImpares++;
        console.log(numeros[i] + " es impar");
    }
}

console.log("Total de números impares: " + contadorImpares);</code></pre>
        </div>
    `, 'success');
}

function generarAleatorio() {
    const cantidad = parseInt(document.getElementById('cantidadNum').value) || 8;
    const rango = parseInt(document.getElementById('rangoNum').value) || 20;
    
    if (cantidad < 3 || cantidad > 20) {
        mostrarResultado('❌ Error: La cantidad debe estar entre 3 y 20', 'error');
        return;
    }
    
    if (rango < 10 || rango > 100) {
        mostrarResultado('❌ Error: El rango debe estar entre 10 y 100', 'error');
        return;
    }
    
    // Generar números aleatorios
    const numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        numerosAleatorios.push(Math.floor(Math.random() * rango) + 1);
    }
    
    // Colocar en el input
    document.getElementById('numerosInput').value = numerosAleatorios.join(', ');
    
    // Calcular automáticamente
    contarImpares();
}

function mostrarResultado(mensaje, tipo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = mensaje;
    resultado.className = 'resultado ' + tipo;
}

function limpiar() {
    // Limpiar todos los inputs
    document.getElementById('numerosInput').value = '';
    document.getElementById('cantidadNum').value = '8';
    document.getElementById('rangoNum').value = '20';
    
    // Mostrar mensaje inicial
    mostrarResultado(`
        <h3>💡 ¿Cómo funciona este ejercicio?</h3>
        <div class="explicacion">
            <p><strong>¿Qué es un número impar?</strong> Un número impar es aquel que NO es divisible entre 2, es decir, al dividirlo entre 2 deja un residuo de 1.</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>📝 Crear un arreglo con números</li>
                <li>🔄 Recorrer cada elemento del arreglo</li>
                <li>🧮 Verificar si cada número es impar (número % 2 !== 0)</li>
                <li>📊 Contar los números impares encontrados</li>
            </ul>
            <p><strong>Ejemplo:</strong> En el arreglo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] hay 5 números impares: 1, 3, 5, 7, 9</p>
            <div class="logica-ejercicio">
                <h4>🔧 Lógica del Ejercicio:</h4>
                <pre><code>let contador = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 !== 0) {
        contador++;
    }
}</code></pre>
            </div>
        </div>
    `, '');
    
    // Enfocar el input principal
    document.getElementById('numerosInput').focus();
}

function cargarEjemplo() {
    // Cargar ejemplo con números del 1 al 10
    document.getElementById('numerosInput').value = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10';
    
    // Calcular automáticamente
    contarImpares();
}

// Permitir calcular con Enter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('numerosInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            contarImpares();
        }
    });
    
    document.getElementById('cantidadNum').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generarAleatorio();
        }
    });
    
    document.getElementById('rangoNum').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generarAleatorio();
        }
    });
    
    // Enfocar el input principal al cargar
    document.getElementById('numerosInput').focus();
});