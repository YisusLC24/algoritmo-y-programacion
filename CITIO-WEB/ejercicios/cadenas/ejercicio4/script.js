// Ejercicio 4: Comparación de Textos
// Pedir dos textos y decir cuál tiene más letras

function compararTextos() {
    const texto1 = document.getElementById('texto1').value;
    const texto2 = document.getElementById('texto2').value;
    const resultado = document.getElementById('resultado');
    
    // Validar que ambos campos tengan contenido
    if (texto1.trim() === '' || texto2.trim() === '') {
        resultado.innerHTML = `
            <p>⚠️ Por favor, ingresa ambos textos para poder compararlos</p>
        `;
        return;
    }
    
    // Calcular longitudes
    const longitud1 = texto1.length;
    const longitud2 = texto2.length;
    
    let mensaje = '';
    let comparacion = '';
    
    // Comparar textos
    if (longitud1 > longitud2) {
        mensaje = '🏆 El primer texto tiene más letras';
        comparacion = 'mayor';
    } else if (longitud2 > longitud1) {
        mensaje = '🏆 El segundo texto tiene más letras';
        comparacion = 'mayor';
    } else {
        mensaje = '⚖️ Ambos textos tienen la misma cantidad de letras';
        comparacion = 'igual';
    }
    
    // Análisis detallado
    const analisisTexto1 = analizarTexto(texto1);
    const analisisTexto2 = analizarTexto(texto2);
    
    // Mostrar resultado
    resultado.innerHTML = `
        <div class="resultado-activo">
            <h3>${mensaje}</h3>
            
            <div class="comparacion-grid">
                <div class="texto-analisis ${comparacion === 'mayor' && longitud1 > longitud2 ? 'ganador' : comparacion === 'igual' ? 'empate' : ''}">
                    <h4>📝 Primer Texto</h4>
                    <div class="texto-muestra">"${texto1}"</div>
                    <div class="estadisticas">
                        <div class="stat">
                            <span class="stat-label">Total de caracteres:</span>
                            <span class="stat-value">${longitud1}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Solo letras:</span>
                            <span class="stat-value">${analisisTexto1.soloLetras}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Vocales:</span>
                            <span class="stat-value">${analisisTexto1.vocales}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Consonantes:</span>
                            <span class="stat-value">${analisisTexto1.consonantes}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Espacios:</span>
                            <span class="stat-value">${analisisTexto1.espacios}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Números:</span>
                            <span class="stat-value">${analisisTexto1.numeros}</span>
                        </div>
                    </div>
                </div>
                
                <div class="vs-separator">
                    <span class="vs-text">VS</span>
                    <div class="diferencia">
                        Diferencia: ${Math.abs(longitud1 - longitud2)} ${Math.abs(longitud1 - longitud2) === 1 ? 'carácter' : 'caracteres'}
                    </div>
                </div>
                
                <div class="texto-analisis ${comparacion === 'mayor' && longitud2 > longitud1 ? 'ganador' : comparacion === 'igual' ? 'empate' : ''}">
                    <h4>📝 Segundo Texto</h4>
                    <div class="texto-muestra">"${texto2}"</div>
                    <div class="estadisticas">
                        <div class="stat">
                            <span class="stat-label">Total de caracteres:</span>
                            <span class="stat-value">${longitud2}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Solo letras:</span>
                            <span class="stat-value">${analisisTexto2.soloLetras}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Vocales:</span>
                            <span class="stat-value">${analisisTexto2.vocales}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Consonantes:</span>
                            <span class="stat-value">${analisisTexto2.consonantes}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Espacios:</span>
                            <span class="stat-value">${analisisTexto2.espacios}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Números:</span>
                            <span class="stat-value">${analisisTexto2.numeros}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="caracteres-detalle">
                <div class="texto-caracteres">
                    <h4>🔤 Caracteres del Primer Texto:</h4>
                    <div class="caracteres-grid">
                        ${texto1.split('').map((char, index) => 
                            `<span class="caracter" title="Posición ${index + 1}">${char === ' ' ? '␣' : char}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="texto-caracteres">
                    <h4>🔤 Caracteres del Segundo Texto:</h4>
                    <div class="caracteres-grid">
                        ${texto2.split('').map((char, index) => 
                            `<span class="caracter" title="Posición ${index + 1}">${char === ' ' ? '␣' : char}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function analizarTexto(texto) {
    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    const consonantes = 'bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ';
    
    let contadores = {
        soloLetras: 0,
        vocales: 0,
        consonantes: 0,
        espacios: 0,
        numeros: 0,
        otros: 0
    };
    
    for (let char of texto) {
        if (vocales.includes(char)) {
            contadores.vocales++;
            contadores.soloLetras++;
        } else if (consonantes.includes(char)) {
            contadores.consonantes++;
            contadores.soloLetras++;
        } else if (char === ' ') {
            contadores.espacios++;
        } else if (!isNaN(char) && char !== ' ') {
            contadores.numeros++;
        } else {
            contadores.otros++;
        }
    }
    
    return contadores;
}

function limpiar() {
    document.getElementById('texto1').value = '';
    document.getElementById('texto2').value = '';
    document.getElementById('resultado').innerHTML = `
        <p>🔤 Ingresa dos textos para ver la comparación</p>
        <div class="info-section">
            <h3>💡 ¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué es comparar textos?</strong> Comparar dos textos significa verificar cuál de ellos tiene más caracteres usando la propiedad <code>.length</code>.</p>
            
            <div class="proceso">
                <h4>📋 Proceso:</h4>
                <ul>
                    <li>🔤 Leer dos textos del usuario</li>
                    <li>📏 Calcular la longitud de cada texto</li>
                    <li>⚖️ Comparar las longitudes</li>
                    <li>📊 Mostrar cuál tiene más letras</li>
                </ul>
            </div>
            
            <div class="ejemplo">
                <h4>🌟 Ejemplo:</h4>
                <p>Texto 1: "Hola" (4 letras) vs Texto 2: "JavaScript" (10 letras)</p>
                <p>Resultado: "JavaScript" tiene más letras</p>
            </div>
            
            <div class="logica">
                <h4>💻 Lógica del Ejercicio:</h4>
                <pre><code>let texto1 = prompt("Ingresa el primer texto");
let texto2 = prompt("Ingresa el segundo texto");

if (texto1.length > texto2.length) {
    console.log("El primer texto tiene más letras");
} else if (texto2.length > texto1.length) {
    console.log("El segundo texto tiene más letras");
} else {
    console.log("Ambos textos tienen la misma cantidad de letras");
}</code></pre>
            </div>
        </div>
    `;
}

// Permitir ejecutar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const texto1 = document.getElementById('texto1');
    const texto2 = document.getElementById('texto2');
    
    texto1.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            compararTextos();
        }
    });
    
    texto2.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            compararTextos();
        }
    });
});