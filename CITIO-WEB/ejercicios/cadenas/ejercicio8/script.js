// Ejercicio 8: Comparar Frases
// Función principal para comparar las dos frases
function compararFrases() {
    const frase1 = document.getElementById('frase1').value.trim();
    const frase2 = document.getElementById('frase2').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    const resultadoContent = document.getElementById('resultadoContent');

    // Validar que ambas frases estén ingresadas
    if (!frase1 || !frase2) {
        alert('⚠️ Por favor, ingresa ambas frases para poder compararlas.');
        return;
    }

    // Contar caracteres de cada frase
    const longitud1 = frase1.length;
    const longitud2 = frase2.length;

    // Crear el resultado visual
    let resultado = '';
    
    // Mostrar las frases y sus longitudes
    resultado += `
        <div class="comparacion-container">
            <div class="frase-analisis">
                <h4>📝 Primera Frase:</h4>
                <div class="frase-box">
                    <p class="frase-texto">"${frase1}"</p>
                    <div class="estadisticas">
                        <span class="stat-item">
                            <strong>Longitud:</strong> ${longitud1} caracteres
                        </span>
                    </div>
                </div>
            </div>

            <div class="frase-analisis">
                <h4>📝 Segunda Frase:</h4>
                <div class="frase-box">
                    <p class="frase-texto">"${frase2}"</p>
                    <div class="estadisticas">
                        <span class="stat-item">
                            <strong>Longitud:</strong> ${longitud2} caracteres
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Determinar cuál frase es más larga
    let comparacionResultado = '';
    if (longitud1 > longitud2) {
        const diferencia = longitud1 - longitud2;
        comparacionResultado = `
            <div class="resultado-comparacion ganador">
                <h4>🏆 Resultado de la Comparación:</h4>
                <p class="resultado-principal">
                    <strong>La PRIMERA frase tiene más caracteres</strong>
                </p>
                <div class="detalles-comparacion">
                    <p>📊 Primera frase: <strong>${longitud1} caracteres</strong></p>
                    <p>📊 Segunda frase: <strong>${longitud2} caracteres</strong></p>
                    <p>📏 Diferencia: <strong>${diferencia} caracteres más</strong></p>
                </div>
            </div>
        `;
    } else if (longitud2 > longitud1) {
        const diferencia = longitud2 - longitud1;
        comparacionResultado = `
            <div class="resultado-comparacion ganador">
                <h4>🏆 Resultado de la Comparación:</h4>
                <p class="resultado-principal">
                    <strong>La SEGUNDA frase tiene más caracteres</strong>
                </p>
                <div class="detalles-comparacion">
                    <p>📊 Primera frase: <strong>${longitud1} caracteres</strong></p>
                    <p>📊 Segunda frase: <strong>${longitud2} caracteres</strong></p>
                    <p>📏 Diferencia: <strong>${diferencia} caracteres más</strong></p>
                </div>
            </div>
        `;
    } else {
        comparacionResultado = `
            <div class="resultado-comparacion empate">
                <h4>⚖️ Resultado de la Comparación:</h4>
                <p class="resultado-principal">
                    <strong>¡EMPATE! Ambas frases tienen la misma longitud</strong>
                </p>
                <div class="detalles-comparacion">
                    <p>📊 Ambas frases: <strong>${longitud1} caracteres</strong></p>
                    <p>🎯 Las dos frases son exactamente iguales en longitud</p>
                </div>
            </div>
        `;
    }

    // Análisis adicional
    const analisisAdicional = `
        <div class="analisis-adicional">
            <h4>📋 Análisis Detallado:</h4>
            <div class="analisis-grid">
                <div class="analisis-item">
                    <strong>Palabras en Frase 1:</strong> ${contarPalabras(frase1)}
                </div>
                <div class="analisis-item">
                    <strong>Palabras en Frase 2:</strong> ${contarPalabras(frase2)}
                </div>
                <div class="analisis-item">
                    <strong>Espacios en Frase 1:</strong> ${contarEspacios(frase1)}
                </div>
                <div class="analisis-item">
                    <strong>Espacios en Frase 2:</strong> ${contarEspacios(frase2)}
                </div>
            </div>
        </div>
    `;

    // Mostrar todo el resultado
    resultadoContent.innerHTML = resultado + comparacionResultado + analisisAdicional;
    resultadoDiv.style.display = 'block';
    
    // Scroll suave hacia el resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función auxiliar para contar palabras
function contarPalabras(frase) {
    return frase.split(' ').filter(palabra => palabra.length > 0).length;
}

// Función auxiliar para contar espacios
function contarEspacios(frase) {
    return (frase.match(/ /g) || []).length;
}

// Función para limpiar los campos
function limpiar() {
    document.getElementById('frase1').value = '';
    document.getElementById('frase2').value = '';
    document.getElementById('resultado').style.display = 'none';
    
    // Focus en el primer campo
    document.getElementById('frase1').focus();
}

// Event listeners para mejor UX
document.addEventListener('DOMContentLoaded', function() {
    const frase1Input = document.getElementById('frase1');
    const frase2Input = document.getElementById('frase2');
    const compararBtn = document.getElementById('compararBtn');

    // Permitir ejecutar con Enter
    frase1Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            frase2Input.focus();
        }
    });

    frase2Input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            compararFrases();
        }
    });

    // Contador de caracteres en tiempo real
    frase1Input.addEventListener('input', function() {
        actualizarContadorTiempoReal();
    });

    frase2Input.addEventListener('input', function() {
        actualizarContadorTiempoReal();
    });

    // Auto-focus en el primer campo al cargar
    frase1Input.focus();
});

// Función para mostrar contador en tiempo real (opcional)
function actualizarContadorTiempoReal() {
    const frase1 = document.getElementById('frase1').value;
    const frase2 = document.getElementById('frase2').value;
    
    if (frase1 || frase2) {
        // Puedes agregar aquí un preview del conteo si lo deseas
        console.log(`Frase 1: ${frase1.length} caracteres, Frase 2: ${frase2.length} caracteres`);
    }
}