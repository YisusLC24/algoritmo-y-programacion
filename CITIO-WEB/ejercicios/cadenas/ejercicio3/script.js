// Ejercicio 3: Invertir una cadena ingresada

function invertirCadena() {
    const cadenaInput = document.getElementById('cadenaInput');
    const resultado = document.getElementById('resultado');
    const cadenaOriginal = cadenaInput.value;

    // Validar que se haya ingresado texto
    if (cadenaOriginal.trim() === '') {
        resultado.innerHTML = `
            <div class="error-box">
                ❌ Por favor ingresa una cadena de texto
            </div>
        `;
        return;
    }

    // Método 1: Usando ciclo for (más educativo)
    let cadenaInvertida = "";
    for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
        cadenaInvertida += cadenaOriginal[i];
    }

    // Método 2: Usando métodos de JavaScript (más eficiente)
    const cadenaInvertidaJS = cadenaOriginal.split('').reverse().join('');

    // Crear arrays para visualización
    const caracteresOriginales = [];
    const caracteresInvertidos = [];

    for (let i = 0; i < cadenaOriginal.length; i++) {
        caracteresOriginales.push({
            caracter: cadenaOriginal[i],
            posicion: i + 1
        });
    }

    for (let i = 0; i < cadenaInvertida.length; i++) {
        caracteresInvertidos.push({
            caracter: cadenaInvertida[i],
            posicion: i + 1,
            posicionOriginal: cadenaOriginal.length - i
        });
    }

    // Mostrar resultado
    mostrarResultado(cadenaOriginal, cadenaInvertida, caracteresOriginales, caracteresInvertidos);
}

function mostrarResultado(original, invertida, caracteresOriginales, caracteresInvertidos) {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <div class="success-box">
            ✅ Cadena invertida exitosamente
        </div>
        
        <div class="estadisticas-grid">
            <div class="stat-card">
                <h4>📝 Cadena Original</h4>
                <p class="texto-original">"${original}"</p>
            </div>
            
            <div class="stat-card">
                <h4>🔄 Cadena Invertida</h4>
                <p class="texto-invertido highlight">"${invertida}"</p>
            </div>
            
            <div class="stat-card">
                <h4>🔢 Longitud</h4>
                <p class="numero-grande">${original.length}</p>
            </div>
            
            <div class="stat-card">
                <h4>🔍 ¿Es Palíndromo?</h4>
                <p class="numero-grande ${esPalindromo(original) ? 'palindromo-si' : 'palindromo-no'}">
                    ${esPalindromo(original) ? 'SÍ' : 'NO'}
                </p>
            </div>
        </div>

        <div class="comparacion-box">
            <h4>📊 Comparación Visual:</h4>
            <div class="comparacion-container">
                <div class="cadena-section">
                    <h5>Original:</h5>
                    <div class="caracteres-container">
                        ${caracteresOriginales.map(item => `
                            <div class="caracter-box original">
                                <div class="caracter">${item.caracter === ' ' ? '␣' : item.caracter}</div>
                                <div class="posicion">${item.posicion}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flecha-inversion">
                    <span>🔄</span>
                </div>
                
                <div class="cadena-section">
                    <h5>Invertida:</h5>
                    <div class="caracteres-container">
                        ${caracteresInvertidos.map(item => `
                            <div class="caracter-box invertida">
                                <div class="caracter">${item.caracter === ' ' ? '␣' : item.caracter}</div>
                                <div class="posicion">${item.posicion}</div>
                                <div class="posicion-original">De pos. ${item.posicionOriginal}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="proceso-box">
            <h4>🔄 Proceso de Inversión:</h4>
            <div class="proceso-pasos">
                ${generarPasosInversion(original)}
            </div>
        </div>

        <div class="analisis-box">
            <h4>📈 Análisis Detallado:</h4>
            <ul>
                <li><strong>Cadena original:</strong> "${original}"</li>
                <li><strong>Cadena invertida:</strong> "${invertida}"</li>
                <li><strong>Longitud:</strong> ${original.length} caracteres</li>
                <li><strong>Primer carácter:</strong> '${original[0] || 'N/A'}'</li>
                <li><strong>Último carácter:</strong> '${original[original.length - 1] || 'N/A'}'</li>
                <li><strong>Es palíndromo:</strong> ${esPalindromo(original) ? 'Sí' : 'No'}</li>
                <li><strong>Contiene espacios:</strong> ${original.includes(' ') ? 'Sí' : 'No'}</li>
                <li><strong>Contiene números:</strong> ${/\d/.test(original) ? 'Sí' : 'No'}</li>
            </ul>
        </div>

        <div class="metodos-box">
            <h4>🛠️ Métodos de Inversión:</h4>
            <div class="metodo-card">
                <h5>Método 1: Ciclo For (Educativo)</h5>
                <pre><code>let invertida = "";
for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
}</code></pre>
            </div>
            <div class="metodo-card">
                <h5>Método 2: Métodos JavaScript (Eficiente)</h5>
                <pre><code>let invertida = cadena.split('').reverse().join('');</code></pre>
            </div>
        </div>
    `;
}

function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    return cadenaLimpia === cadenaInvertida;
}

function generarPasosInversion(cadena) {
    let pasos = '';
    for (let i = 0; i < cadena.length; i++) {
        const posicionOriginal = cadena.length - 1 - i;
        const caracter = cadena[posicionOriginal];
        pasos += `
            <div class="paso-inversion">
                <span class="paso-numero">Paso ${i + 1}:</span>
                <span class="paso-descripcion">
                    Tomar carácter en posición ${posicionOriginal + 1} 
                    <span class="caracter-destacado">'${caracter === ' ' ? '␣' : caracter}'</span>
                    → Agregar a posición ${i + 1}
                </span>
            </div>
        `;
    }
    return pasos;
}

function limpiar() {
    document.getElementById('cadenaInput').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-box">
            💡 Ingresa una cadena para ver su inversión
        </div>
        
        <div class="explicacion-box">
            <h3>💡 ¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué hace?</strong> Invierte el orden de los caracteres de una cadena</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>🔄 Recorre la cadena desde el final hacia el inicio</li>
                <li>📝 Va construyendo una nueva cadena con los caracteres invertidos</li>
                <li>📋 Muestra el resultado final</li>
                <li>🔍 Compara carácter por carácter</li>
            </ul>
            <p><strong>Ejemplo:</strong> "Hola" se convierte en "aloH"</p>
            
            <div class="logica-ejercicio">
                <h4>🧠 Lógica del Ejercicio:</h4>
                <pre><code>let cadena = prompt("Ingresa una cadena");
let cadenaInvertida = "";

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
}

alert("Cadena invertida: " + cadenaInvertida);</code></pre>
            </div>
        </div>
    `;
    document.getElementById('cadenaInput').focus();
}

// Permitir ejecución con Enter
document.getElementById('cadenaInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        invertirCadena();
    }
});

// Auto-focus al cargar la página
window.addEventListener('load', function() {
    document.getElementById('cadenaInput').focus();
});