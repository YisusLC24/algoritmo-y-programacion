// Ejercicio 2: Contar cuántas veces se repite la letra 'a' en un texto

function contarLetraA() {
    const textoInput = document.getElementById('textoInput');
    const resultado = document.getElementById('resultado');
    const texto = textoInput.value;

    // Validar que se haya ingresado texto
    if (texto.trim() === '') {
        resultado.innerHTML = `
            <div class="error-box">
                ❌ Por favor ingresa un texto
            </div>
        `;
        return;
    }

    // Contar letras 'a' (mayúsculas y minúsculas)
    let contador = 0;
    let posiciones = [];
    let caracteres = [];

    // Recorrer cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        caracteres.push({
            caracter: caracter,
            posicion: i + 1,
            esLetraA: caracter.toLowerCase() === 'a'
        });
        
        if (caracter.toLowerCase() === 'a') {
            contador++;
            posiciones.push(i + 1);
        }
    }

    // Mostrar resultado
    mostrarResultado(texto, contador, posiciones, caracteres);
}

function mostrarResultado(texto, contador, posiciones, caracteres) {
    const resultado = document.getElementById('resultado');
    
    let mensaje = contador === 0 ? 
        "No se encontró ninguna letra 'a'" :
        contador === 1 ? 
        "Se encontró 1 letra 'a'" : 
        `Se encontraron ${contador} letras 'a'`;

    resultado.innerHTML = `
        <div class="success-box">
            ✅ ${mensaje}
        </div>
        
        <div class="estadisticas-grid">
            <div class="stat-card">
                <h4>📝 Texto Original</h4>
                <p class="texto-original">"${texto}"</p>
            </div>
            
            <div class="stat-card">
                <h4>🔢 Total de Caracteres</h4>
                <p class="numero-grande">${texto.length}</p>
            </div>
            
            <div class="stat-card">
                <h4>🅰️ Letras 'a' encontradas</h4>
                <p class="numero-grande highlight">${contador}</p>
            </div>
            
            <div class="stat-card">
                <h4>📊 Porcentaje</h4>
                <p class="numero-grande">${((contador / texto.length) * 100).toFixed(1)}%</p>
            </div>
        </div>

        ${contador > 0 ? `
        <div class="detalles-box">
            <h4>📍 Posiciones de las letras 'a':</h4>
            <div class="posiciones-container">
                ${posiciones.map(pos => `<span class="posicion-badge">${pos}</span>`).join('')}
            </div>
        </div>
        ` : ''}

        <div class="visualizacion-box">
            <h4>🔍 Visualización carácter por carácter:</h4>
            <div class="caracteres-container">
                ${caracteres.map(item => `
                    <div class="caracter-box ${item.esLetraA ? 'letra-a' : ''}">
                        <div class="caracter">${item.caracter === ' ' ? '␣' : item.caracter}</div>
                        <div class="posicion">${item.posicion}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="analisis-box">
            <h4>📈 Análisis Detallado:</h4>
            <ul>
                <li><strong>Texto:</strong> "${texto}"</li>
                <li><strong>Longitud:</strong> ${texto.length} caracteres</li>
                <li><strong>Letras 'a' minúsculas:</strong> ${contarEspecifica(texto, 'a')}</li>
                <li><strong>Letras 'A' mayúsculas:</strong> ${contarEspecifica(texto, 'A')}</li>
                <li><strong>Total 'a/A':</strong> ${contador}</li>
                <li><strong>Porcentaje del texto:</strong> ${((contador / texto.length) * 100).toFixed(2)}%</li>
            </ul>
        </div>
    `;
}

function contarEspecifica(texto, letra) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }
    return contador;
}

function limpiar() {
    document.getElementById('textoInput').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-box">
            💡 Ingresa un texto para contar las letras 'a'
        </div>
        
        <div class="explicacion-box">
            <h3>💡 ¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué hace?</strong> Cuenta cuántas veces aparece la letra 'a' (mayúscula y minúscula) en un texto</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>🔄 Recorre cada carácter del texto</li>
                <li>🔍 Compara si es 'a' o 'A'</li>
                <li>📊 Cuenta cada coincidencia</li>
                <li>📋 Muestra el resultado final</li>
            </ul>
            <p><strong>Ejemplo:</strong> En "Casa de Ana" hay 4 letras 'a'</p>
            
            <div class="logica-ejercicio">
                <h4>🧠 Lógica del Ejercicio:</h4>
                <pre><code>let texto = prompt("Ingresa un texto");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLowerCase() === 'a') {
        contador++;
    }
}

alert("La letra 'a' aparece " + contador + " veces");</code></pre>
            </div>
        </div>
    `;
    document.getElementById('textoInput').focus();
}

// Permitir ejecución con Enter
document.getElementById('textoInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        contarLetraA();
    }
});

// Auto-focus al cargar la página
window.addEventListener('load', function() {
    document.getElementById('textoInput').focus();
});