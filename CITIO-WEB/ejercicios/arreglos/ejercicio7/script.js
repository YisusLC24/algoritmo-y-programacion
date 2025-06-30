function mostrarTablas() {
    const entrada = document.getElementById('numeros').value.trim();
    const limite = parseInt(document.getElementById('limite').value);
    const resultado = document.getElementById('resultado');
    
    if (entrada === '') {
        resultado.innerHTML = `
            <div class="error-message">
                <div class="error-icon">⚠️</div>
                <div class="error-text">Por favor ingresa números separados por coma</div>
            </div>
        `;
        return;
    }

    if (!limite || limite < 1 || limite > 12) {
        resultado.innerHTML = `
            <div class="error-message">
                <div class="error-icon">⚠️</div>
                <div class="error-text">El límite debe ser un número entre 1 y 12</div>
            </div>
        `;
        return;
    }

    try {
        // Convertir la entrada en arreglo de números
        const numeros = entrada.split(',').map(n => {
            const numero = parseFloat(n.trim());
            if (isNaN(numero)) {
                throw new Error(`"${n.trim()}" no es un número válido`);
            }
            return numero;
        });

        // Generar las tablas de multiplicar
        let tablasHTML = '';
        let totalMultiplicaciones = 0;

        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            let tablaHTML = `
                <div class="tabla-multiplicar">
                    <div class="tabla-header">
                        <h4>📊 Tabla del ${numero}</h4>
                    </div>
                    <div class="tabla-grid">
            `;

            for (let j = 1; j <= limite; j++) {
                const resultado = numero * j;
                tablaHTML += `
                    <div class="multiplicacion-item">
                        <span class="operacion">${numero} × ${j}</span>
                        <span class="igual">=</span>
                        <span class="resultado-mult">${resultado}</span>
                    </div>
                `;
                totalMultiplicaciones++;
            }

            tablaHTML += `
                    </div>
                </div>
            `;
            
            tablasHTML += tablaHTML;
        }

        // Mostrar resultado completo
        resultado.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✅</div>
                <div class="success-text">¡Tablas de multiplicar generadas exitosamente!</div>
            </div>

            <div class="arreglo-info">
                <div class="array-display">
                    <h4>🔢 Arreglo de números:</h4>
                    <div class="array-container">
                        [${numeros.map(n => `<span class="array-element original">${n}</span>`).join(', ')}]
                    </div>
                </div>
                <div class="limite-info">
                    <strong>📏 Multiplicando hasta:</strong> ${limite}
                </div>
            </div>

            <div class="tablas-container">
                ${tablasHTML}
            </div>

            <div class="estadisticas">
                <div class="estadistica-item">
                    <div class="estadistica-label">🔢 Números procesados</div>
                    <div class="estadistica-valor">${numeros.length}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📊 Tablas generadas</div>
                    <div class="estadistica-valor">${numeros.length}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">✖️ Total multiplicaciones</div>
                    <div class="estadistica-valor">${totalMultiplicaciones}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📏 Límite usado</div>
                    <div class="estadistica-valor">${limite}</div>
                </div>
            </div>

            <div class="resumen-resultados">
                <h4>📈 Resumen de Resultados:</h4>
                <div class="resumen-grid">
                    ${numeros.map(numero => {
                        const ultimoResultado = numero * limite;
                        const sumaTabla = Array.from({length: limite}, (_, i) => numero * (i + 1))
                                              .reduce((sum, val) => sum + val, 0);
                        return `
                            <div class="resumen-item">
                                <div class="resumen-numero">Número: ${numero}</div>
                                <div class="resumen-detalle">
                                    <div>Último resultado: ${numero} × ${limite} = ${ultimoResultado}</div>
                                    <div>Suma de la tabla: ${sumaTabla}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="info-adicional">
                <h4>📚 Información adicional:</h4>
                <ul>
                    <li><strong>Operación:</strong> Multiplicación secuencial</li>
                    <li><strong>Rango:</strong> Del 1 al ${limite}</li>
                    <li><strong>Total de operaciones:</strong> ${numeros.length} × ${limite} = ${totalMultiplicaciones}</li>
                    <li><strong>Patrón:</strong> Para cada número n, se calcula n × 1, n × 2, ..., n × ${limite}</li>
                </ul>
            </div>
        `;

    } catch (error) {
        resultado.innerHTML = `
            <div class="error-message">
                <div class="error-icon">❌</div>
                <div class="error-text">Error: ${error.message}</div>
                <div class="error-help">Asegúrate de ingresar solo números separados por comas</div>
            </div>
        `;
    }
}

function limpiar() {
    document.getElementById('numeros').value = '';
    document.getElementById('limite').value = '10';
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">💡</div>
        <div class="info-text">Ingresa números separados por coma para ver sus tablas de multiplicar</div>
        
        <div class="info-section">
            <h3>¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué es una tabla de multiplicar?</strong> Es una lista que muestra el resultado de multiplicar un número por todos los números del 1 al límite establecido</p>
            
            <h4>Proceso:</h4>
            <ul>
                <li>🔤 Dividir la cadena de entrada en un arreglo</li>
                <li>🔢 Convertir cada elemento a número</li>
                <li>📊 Para cada número, generar su tabla de multiplicar</li>
                <li>🎯 Mostrar todas las tablas organizadamente</li>
            </ul>
            
            <p><strong>Ejemplo:</strong> Para el número 3: 3×1=3, 3×2=6, 3×3=9, etc.</p>
        </div>
    `;
    document.getElementById('numeros').focus();
}

// Enfocar el input al cargar la página
window.onload = function() {
    document.getElementById('numeros').focus();
};