function calcularFactorial(n) {
    if (n === 0 || n === 1) return 1;
    let factorial = 1;
    let proceso = [];
    
    for (let i = 2; i <= n; i++) {
        proceso.push(i);
        factorial *= i;
    }
    
    return {
        resultado: factorial,
        proceso: proceso,
        formula: n === 0 || n === 1 ? `${n}! = 1 (por definición)` : `${n}! = ${proceso.join(' × ')} = ${factorial}`
    };
}

function calcularFactoriales() {
    const entrada = document.getElementById('numeros').value.trim();
    const resultado = document.getElementById('resultado');
    
    if (entrada === '') {
        resultado.innerHTML = `
            <div class="error-message">
                <div class="error-icon">⚠️</div>
                <div class="error-text">Por favor ingresa números enteros positivos separados por coma</div>
            </div>
        `;
        return;
    }

    try {
        // Convertir la entrada en arreglo de números
        const numeros = entrada.split(',').map(n => {
            const numero = parseInt(n.trim());
            if (isNaN(numero)) {
                throw new Error(`"${n.trim()}" no es un número válido`);
            }
            if (numero < 0) {
                throw new Error(`${numero} es negativo. El factorial solo se define para números enteros no negativos`);
            }
            if (numero > 20) {
                throw new Error(`${numero} es demasiado grande. Por rendimiento, el límite es 20`);
            }
            if (!Number.isInteger(numero)) {
                throw new Error(`${numero} no es un número entero`);
            }
            return numero;
        });

        // Calcular el factorial de cada número
        const factoriales = [];
        const calculos = [];
        
        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            const calculoFactorial = calcularFactorial(numero);
            factoriales.push(calculoFactorial.resultado);
            calculos.push({
                numero: numero,
                factorial: calculoFactorial.resultado,
                formula: calculoFactorial.formula,
                proceso: calculoFactorial.proceso
            });
        }

        // Mostrar resultado
        resultado.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✅</div>
                <div class="success-text">¡Factoriales calculados exitosamente!</div>
            </div>

            <div class="arrays-comparison">
                <div class="array-display">
                    <h4>🔢 Arreglo Original:</h4>
                    <div class="array-container">
                        [${numeros.map(n => `<span class="array-element original">${n}</span>`).join(', ')}]
                    </div>
                </div>

                <div class="arrow-down">⬇️</div>

                <div class="array-display">
                    <h4>🎯 Arreglo de Factoriales:</h4>
                    <div class="array-container">
                        [${factoriales.map(f => `<span class="array-element factorial">${f}</span>`).join(', ')}]
                    </div>
                </div>
            </div>

            <div class="calculos-detalle">
                <h4>🔢 Cálculos Detallados:</h4>
                <div class="calculos-grid">
                    ${calculos.map((calc, index) => `
                        <div class="calculo-item">
                            <div class="calculo-header">
                                <span class="posicion">Posición ${index}</span>
                                <span class="numero-original">${calc.numero}!</span>
                            </div>
                            <div class="calculo-formula">${calc.formula}</div>
                            ${calc.proceso.length > 0 ? `
                                <div class="calculo-pasos">
                                    <strong>Pasos:</strong> ${calc.numero} × ${calc.proceso.slice(0, -1).join(' × ')} = ${calc.factorial}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="estadisticas">
                <div class="estadistica-item">
                    <div class="estadistica-label">🔢 Números procesados</div>
                    <div class="estadistica-valor">${numeros.length}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">🎯 Mayor factorial</div>
                    <div class="estadistica-valor">${Math.max(...factoriales).toLocaleString()}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📉 Menor factorial</div>
                    <div class="estadistica-valor">${Math.min(...factoriales)}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📊 Suma total</div>
                    <div class="estadistica-valor">${factoriales.reduce((sum, f) => sum + f, 0).toLocaleString()}</div>
                </div>
            </div>

            <div class="tabla-factoriales">
                <h4>📋 Tabla de Resultados:</h4>
                <div class="tabla-container">
                    <div class="tabla-header-row">
                        <div class="tabla-cell header">Número (n)</div>
                        <div class="tabla-cell header">Factorial (n!)</div>
                        <div class="tabla-cell header">Fórmula</div>
                    </div>
                    ${calculos.map(calc => `
                        <div class="tabla-row">
                            <div class="tabla-cell">${calc.numero}</div>
                            <div class="tabla-cell">${calc.factorial.toLocaleString()}</div>
                            <div class="tabla-cell formula">${calc.formula}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="info-adicional">
                <h4>📚 Información adicional:</h4>
                <ul>
                    <li><strong>Definición:</strong> n! = n × (n-1) × (n-2) × ... × 2 × 1</li>
                    <li><strong>Casos especiales:</strong> 0! = 1, 1! = 1</li>
                    <li><strong>Números procesados:</strong> ${numeros.length} elementos</li>
                    <li><strong>Rango permitido:</strong> 0 ≤ n ≤ 20 (por limitaciones de rendimiento)</li>
                    <li><strong>Aplicaciones:</strong> Combinatoria, probabilidad, análisis matemático</li>
                </ul>
            </div>

            <div class="curiosidades">
                <h4>🤔 Datos Curiosos:</h4>
                <ul>
                    <li>10! = 3,628,800 - ¡Más de 3 millones!</li>
                    <li>20! = 2,432,902,008,176,640,000 - ¡Más de 2 trillones!</li>
                    <li>El factorial crece muy rápidamente (crecimiento factorial)</li>
                    <li>0! = 1 por convención matemática para que las fórmulas funcionen correctamente</li>
                </ul>
            </div>
        `;

    } catch (error) {
        resultado.innerHTML = `
            <div class="error-message">
                <div class="error-icon">❌</div>
                <div class="error-text">Error: ${error.message}</div>
                <div class="error-help">Recuerda: Solo números enteros positivos del 0 al 20, separados por comas</div>
            </div>
        `;
    }
}

function limpiar() {
    document.getElementById('numeros').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">💡</div>
        <div class="info-text">Ingresa números enteros positivos separados por coma para ver sus factoriales</div>
        
        <div class="info-section">
            <h3>¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué es el factorial?</strong> El factorial de un número n (escrito como n!) es el producto de todos los números enteros positivos desde 1 hasta n</p>
            
            <h4>Proceso:</h4>
            <ul>
                <li>🔤 Dividir la cadena de entrada en un arreglo</li>
                <li>🔢 Convertir cada elemento a número entero</li>
                <li>✅ Validar que sean números positivos</li>
                <li>🎯 Calcular el factorial de cada número</li>
                <li>📊 Mostrar el proceso de cálculo</li>
            </ul>
            
            <p><strong>Ejemplos:</strong></p>
            <ul>
                <li>3! = 3 × 2 × 1 = 6</li>
                <li>4! = 4 × 3 × 2 × 1 = 24</li>
                <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
                <li>0! = 1 (por definición)</li>
            </ul>
        </div>
    `;
    document.getElementById('numeros').focus();
}

// Enfocar el input al cargar la página
window.onload = function() {
    document.getElementById('numeros').focus();
};