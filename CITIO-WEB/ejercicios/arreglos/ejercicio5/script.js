// Ejercicio 5: Concatenar todos los elementos de un arreglo de palabras en una sola frase
document.addEventListener('DOMContentLoaded', function() {
    const palabrasInput = document.getElementById('palabrasInput');
    const separadorInput = document.getElementById('separadorInput');
    const separadorCustom = document.getElementById('separadorCustom');
    const concatenarBtn = document.getElementById('concatenarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const resultado = document.getElementById('resultado');

    // Event listeners
    concatenarBtn.addEventListener('click', concatenarPalabras);
    limpiarBtn.addEventListener('click', limpiarCampos);
    
    // Permitir ejecutar con Enter
    palabrasInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') concatenarPalabras();
    });
    
    separadorCustom.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') concatenarPalabras();
    });

    // Mostrar/ocultar input personalizado
    separadorInput.addEventListener('change', function() {
        if (this.value === 'custom') {
            separadorCustom.style.display = 'block';
            separadorCustom.focus();
        } else {
            separadorCustom.style.display = 'none';
        }
    });

    function concatenarPalabras() {
        const palabrasTexto = palabrasInput.value.trim();

        if (!palabrasTexto) {
            mostrarError('Por favor ingresa las palabras a concatenar');
            return;
        }

        try {
            // Convertir el texto a arreglo
            const palabras = palabrasTexto.split(',').map(palabra => palabra.trim()).filter(palabra => palabra !== '');
            
            if (palabras.length === 0) {
                mostrarError('No se encontraron palabras válidas');
                return;
            }

            // Obtener el separador
            let separador = separadorInput.value;
            if (separador === 'custom') {
                separador = separadorCustom.value || '';
            }

            // Concatenar usando diferentes métodos
            const fraseConcatenadaJoin = palabras.join(separador);
            const fraseConcatenadaCiclo = concatenarConCiclo(palabras, separador);
            const fraseConcatenadaReduce = palabras.reduce((acumulador, palabra, index) => {
                return index === 0 ? palabra : acumulador + separador + palabra;
            }, '');

            mostrarResultado(palabras, separador, fraseConcatenadaJoin, fraseConcatenadaCiclo, fraseConcatenadaReduce);

        } catch (error) {
            mostrarError('Error al procesar las palabras. Verifica el formato.');
        }
    }

    function concatenarConCiclo(palabras, separador) {
        let resultado = '';
        for (let i = 0; i < palabras.length; i++) {
            if (i === 0) {
                resultado = palabras[i];
            } else {
                resultado += separador + palabras[i];
            }
        }
        return resultado;
    }

    function mostrarResultado(palabras, separador, fraseJoin, fraseCiclo, fraseReduce) {
        const separadorDisplay = separador === '' ? '(sin separador)' : 
                                separador === ' ' ? '(espacio)' : 
                                `"${separador}"`;

        let html = `
            <div class="resultado-header">
                <h3>🔗 Resultado de la Concatenación</h3>
            </div>
            
            <div class="arreglo-display">
                <h4>Palabras originales:</h4>
                <div class="arreglo-visual">
                    ${palabras.map((palabra, index) => `
                        <div class="elemento-arreglo">
                            <div class="elemento-valor">"${palabra}"</div>
                            <div class="elemento-indice">posición: ${index}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="separador-info">
                <div class="info-item">
                    <strong>Separador utilizado:</strong> <span class="highlight">${separadorDisplay}</span>
                </div>
                <div class="info-item">
                    <strong>Total de palabras:</strong> <span class="highlight">${palabras.length}</span>
                </div>
            </div>

            <div class="resultado-final exito">
                <div class="resultado-icono">✅</div>
                <div class="resultado-texto">
                    <h4>FRASE CONCATENADA</h4>
                    <div class="frase-final">="${fraseJoin}"</div>
                </div>
            </div>

            <div class="proceso-detalle">
                <h4>🔄 Proceso de concatenación paso a paso:</h4>
                <div class="pasos-concatenacion">
                    ${palabras.map((palabra, index) => {
                        let pasoTexto;
                        if (index === 0) {
                            pasoTexto = `Inicializar con: "${palabra}"`;
                        } else {
                            const resultado = palabras.slice(0, index + 1).join(separador);
                            pasoTexto = `Agregar ${separadorDisplay} + "${palabra}" → "${resultado}"`;
                        }
                        
                        return `
                            <div class="paso-concatenacion">
                                <span class="paso-numero">${index + 1}</span>
                                <span class="paso-descripcion">${pasoTexto}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="metodos-comparison">
                <h4>🛠️ Comparación de métodos:</h4>
                <div class="metodo-item">
                    <div class="metodo-nombre">📋 Método join():</div>
                    <div class="metodo-resultado">"${fraseJoin}"</div>
                    <div class="metodo-codigo">palabras.join("${separador}")</div>
                </div>
                
                <div class="metodo-item">
                    <div class="metodo-nombre">🔄 Método ciclo for:</div>
                    <div class="metodo-resultado">"${fraseCiclo}"</div>
                    <div class="metodo-codigo">for loop + concatenación</div>
                </div>
                
                <div class="metodo-item">
                    <div class="metodo-nombre">⚡ Método reduce():</div>
                    <div class="metodo-resultado">"${fraseReduce}"</div>
                    <div class="metodo-codigo">palabras.reduce((acc, palabra) => ...)</div>
                </div>
            </div>

            <div class="estadisticas">
                <div class="estadistica-item">
                    <span class="estadistica-numero">${palabras.length}</span>
                    <span class="estadistica-label">Palabras</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">${fraseJoin.length}</span>
                    <span class="estadistica-label">Caracteres totales</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">${palabras.length - 1}</span>
                    <span class="estadistica-label">Separadores usados</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">${palabras.reduce((total, palabra) => total + palabra.length, 0)}</span>
                    <span class="estadistica-label">Caracteres de palabras</span>
                </div>
            </div>

            <div class="variaciones">
                <h4>🎨 Otras variaciones con diferentes separadores:</h4>
                <div class="variacion-ejemplos">
                    <div class="variacion-item">
                        <span class="variacion-label">Sin separador:</span>
                        <span class="variacion-resultado">"${palabras.join('')}"</span>
                    </div>
                    <div class="variacion-item">
                        <span class="variacion-label">Con espacio:</span>
                        <span class="variacion-resultado">"${palabras.join(' ')}"</span>
                    </div>
                    <div class="variacion-item">
                        <span class="variacion-label">Con guión:</span>
                        <span class="variacion-resultado">"${palabras.join('-')}"</span>
                    </div>
                    <div class="variacion-item">
                        <span class="variacion-label">Con coma:</span>
                        <span class="variacion-resultado">"${palabras.join(', ')}"</span>
                    </div>
                </div>
            </div>
        `;

        resultado.innerHTML = html;
    }

    function mostrarError(mensaje) {
        resultado.innerHTML = `
            <div class="error">
                <div class="error-icon">⚠️</div>
                <div class="error-text">${mensaje}</div>
            </div>
        `;
    }

    function limpiarCampos() {
        palabrasInput.value = '';
        separadorInput.value = ' ';
        separadorCustom.value = '';
        separadorCustom.style.display = 'none';
        
        resultado.innerHTML = `
            <div class="info-icon">💡</div>
            <div class="info-text">Ingresa un arreglo de palabras para concatenar</div>
            
            <div class="explicacion">
                <h3>¿Cómo funciona este ejercicio?</h3>
                <p><strong>¿Qué es concatenar?</strong> Concatenar significa unir o enlazar elementos uno tras otro para formar una secuencia continua.</p>
                
                <h4>Proceso:</h4>
                <ul class="proceso-lista">
                    <li>📝 Crear el arreglo de palabras</li>
                    <li>🔗 Definir el separador a usar</li>
                    <li>🔄 Recorrer cada palabra del arreglo</li>
                    <li>➕ Unir cada palabra con el separador</li>
                    <li>📋 Mostrar la frase final concatenada</li>
                </ul>
                
                <div class="ejemplo">
                    <strong>Ejemplo:</strong> Arreglo ["Hola", "mundo", "desde", "JavaScript"]
                    <br>Con separador espacio: "Hola mundo desde JavaScript"
                    <br>Con separador guión: "Hola-mundo-desde-JavaScript"
                </div>
            </div>
        `;
        palabrasInput.focus();
    }

    // Establecer foco inicial
    palabrasInput.focus();
});