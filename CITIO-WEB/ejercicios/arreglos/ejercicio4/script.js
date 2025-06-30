// Ejercicio 4: Buscar un valor en un arreglo
document.addEventListener('DOMContentLoaded', function() {
    const arregloInput = document.getElementById('arregloInput');
    const valorBuscadoInput = document.getElementById('valorBuscado');
    const buscarBtn = document.getElementById('buscarBtn');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const resultado = document.getElementById('resultado');

    // Event listeners
    buscarBtn.addEventListener('click', buscarValor);
    limpiarBtn.addEventListener('click', limpiarCampos);
    
    // Permitir ejecutar con Enter
    arregloInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') buscarValor();
    });
    
    valorBuscadoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') buscarValor();
    });

    function buscarValor() {
        const arregloTexto = arregloInput.value.trim();
        const valorBuscado = valorBuscadoInput.value.trim();

        // Validaciones
        if (!arregloTexto) {
            mostrarError('Por favor ingresa los elementos del arreglo');
            return;
        }

        if (!valorBuscado) {
            mostrarError('Por favor ingresa el valor a buscar');
            return;
        }

        try {
            // Convertir el texto a arreglo
            const arreglo = arregloTexto.split(',').map(item => item.trim());
            
            // Buscar el valor (conversión automática para números)
            let encontrado = false;
            let posicion = -1;
            let posicionesEncontradas = [];
            
            // Buscar todas las ocurrencias
            for (let i = 0; i < arreglo.length; i++) {
                // Comparar como strings y como números
                if (arreglo[i] === valorBuscado || 
                    (isNumerico(arreglo[i]) && isNumerico(valorBuscado) && 
                     parseFloat(arreglo[i]) === parseFloat(valorBuscado))) {
                    encontrado = true;
                    if (posicion === -1) posicion = i; // Primera ocurrencia
                    posicionesEncontradas.push(i);
                }
            }

            mostrarResultado(arreglo, valorBuscado, encontrado, posicion, posicionesEncontradas);

        } catch (error) {
            mostrarError('Error al procesar el arreglo. Verifica el formato.');
        }
    }

    function mostrarResultado(arreglo, valorBuscado, encontrado, posicion, posicionesEncontradas) {
        let html = `
            <div class="resultado-header">
                <h3>📊 Resultado de la Búsqueda</h3>
            </div>
            
            <div class="arreglo-display">
                <h4>Arreglo analizado:</h4>
                <div class="arreglo-visual">
                    ${arreglo.map((elemento, index) => `
                        <div class="elemento-arreglo ${posicionesEncontradas.includes(index) ? 'encontrado' : ''}">
                            <div class="elemento-valor">${elemento}</div>
                            <div class="elemento-indice">índice: ${index}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="busqueda-info">
                <div class="valor-buscado">
                    <strong>Valor buscado:</strong> <span class="highlight">${valorBuscado}</span>
                </div>
            </div>

            <div class="resultado-final ${encontrado ? 'exito' : 'no-encontrado'}">
                <div class="resultado-icono">${encontrado ? '✅' : '❌'}</div>
                <div class="resultado-texto">
                    <h4>${encontrado ? 'VALOR ENCONTRADO' : 'VALOR NO ENCONTRADO'}</h4>
                    ${encontrado ? `
                        <p>El valor <strong>"${valorBuscado}"</strong> SÍ existe en el arreglo</p>
                        <div class="detalles-busqueda">
                            <div class="detalle-item">
                                <span class="detalle-label">Primera posición:</span>
                                <span class="detalle-valor">${posicion}</span>
                            </div>
                            <div class="detalle-item">
                                <span class="detalle-label">Total de coincidencias:</span>
                                <span class="detalle-valor">${posicionesEncontradas.length}</span>
                            </div>
                            ${posicionesEncontradas.length > 1 ? `
                                <div class="detalle-item">
                                    <span class="detalle-label">Todas las posiciones:</span>
                                    <span class="detalle-valor">[${posicionesEncontradas.join(', ')}]</span>
                                </div>
                            ` : ''}
                        </div>
                    ` : `
                        <p>El valor <strong>"${valorBuscado}"</strong> NO existe en el arreglo</p>
                        <div class="sugerencia">
                            <p>💡 <strong>Sugerencia:</strong> Verifica que el valor esté escrito correctamente</p>
                        </div>
                    `}
                </div>
            </div>

            <div class="proceso-detalle">
                <h4>🔍 Proceso de búsqueda:</h4>
                <div class="pasos-busqueda">
                    ${arreglo.map((elemento, index) => `
                        <div class="paso-busqueda ${posicionesEncontradas.includes(index) ? 'paso-exitoso' : 'paso-normal'}">
                            <span class="paso-numero">${index + 1}</span>
                            <span class="paso-descripcion">
                                Comparando "${elemento}" con "${valorBuscado}" 
                                ${posicionesEncontradas.includes(index) ? '→ ✅ COINCIDE' : '→ ❌ No coincide'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="estadisticas">
                <div class="estadistica-item">
                    <span class="estadistica-numero">${arreglo.length}</span>
                    <span class="estadistica-label">Elementos totales</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">${posicionesEncontradas.length}</span>
                    <span class="estadistica-label">Coincidencias</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">${arreglo.length - posicionesEncontradas.length}</span>
                    <span class="estadistica-label">No coincidencias</span>
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
        arregloInput.value = '';
        valorBuscadoInput.value = '';
        resultado.innerHTML = `
            <div class="info-icon">💡</div>
            <div class="info-text">Ingresa un arreglo y un valor para buscar</div>
            
            <div class="explicacion">
                <h3>¿Cómo funciona este ejercicio?</h3>
                <p><strong>¿Qué es buscar en un arreglo?</strong> Buscar significa verificar si un elemento específico existe dentro de un arreglo de datos.</p>
                
                <h4>Proceso:</h4>
                <ul class="proceso-lista">
                    <li>🔢 Crear el arreglo con los elementos ingresados</li>
                    <li>🔍 Recorrer cada elemento del arreglo</li>
                    <li>⚖️ Comparar cada elemento con el valor buscado</li>
                    <li>✅ Si encuentra coincidencia, retornar "encontrado"</li>
                    <li>❌ Si termina sin encontrar, retornar "no encontrado"</li>
                </ul>
                
                <div class="ejemplo">
                    <strong>Ejemplo:</strong> En el arreglo [1, 3, 5, 7, 9] buscar el número 5
                    <br>Resultado: "El valor 5 SÍ existe en el arreglo, en la posición 2"
                </div>
            </div>
        `;
        arregloInput.focus();
    }

    function isNumerico(valor) {
        return !isNaN(parseFloat(valor)) && isFinite(valor);
    }

    // Establecer foco inicial
    arregloInput.focus();
});