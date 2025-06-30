function calcularCubos() {
    const entrada = document.getElementById('numeros').value.trim();
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

    try {
        // Convertir la entrada en arreglo de números
        const numeros = entrada.split(',').map(n => {
            const numero = parseFloat(n.trim());
            if (isNaN(numero)) {
                throw new Error(`"${n.trim()}" no es un número válido`);
            }
            return numero;
        });

        // Calcular el cubo de cada número
        const cubos = [];
        const operaciones = [];
        
        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            const cubo = Math.pow(numero, 3); // o numero ** 3
            cubos.push(cubo);
            operaciones.push({
                numero: numero,
                cubo: cubo,
                operacion: `${numero}³ = ${numero} × ${numero} × ${numero} = ${cubo}`
            });
        }

        // Mostrar resultado
        resultado.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✅</div>
                <div class="success-text">¡Cubos calculados exitosamente!</div>
            </div>

            <div class="arrays-comparison">
                <div class="array-display">
                    <h4>📊 Arreglo Original:</h4>
                    <div class="array-container">
                        [${numeros.map(n => `<span class="array-element original">${n}</span>`).join(', ')}]
                    </div>
                </div>

                <div class="arrow-down">⬇️</div>

                <div class="array-display">
                    <h4>🔺 Arreglo de Cubos:</h4>
                    <div class="array-container">
                        [${cubos.map(c => `<span class="array-element cubo">${c}</span>`).join(', ')}]
                    </div>
                </div>
            </div>

            <div class="operaciones-detalle">
                <h4>🔢 Operaciones Detalladas:</h4>
                <div class="operaciones-grid">
                    ${operaciones.map((op, index) => `
                        <div class="operacion-item">
                            <div class="operacion-numero">Posición ${index}</div>
                            <div class="operacion-calculo">${op.operacion}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="estadisticas">
                <div class="estadistica-item">
                    <div class="estadistica-label">📏 Cantidad de elementos</div>
                    <div class="estadistica-valor">${numeros.length}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">🔢 Suma original</div>
                    <div class="estadistica-valor">${numeros.reduce((sum, n) => sum + n, 0)}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">🔺 Suma de cubos</div>
                    <div class="estadistica-valor">${cubos.reduce((sum, c) => sum + c, 0)}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📈 Mayor cubo</div>
                    <div class="estadistica-valor">${Math.max(...cubos)}</div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-label">📉 Menor cubo</div>
                    <div class="estadistica-valor">${Math.min(...cubos)}</div>
                </div>
            </div>

            <div class="info-adicional">
                <h4>📚 Información adicional:</h4>
                <ul>
                    <li><strong>Método usado:</strong> Math.pow(numero, 3) o numero ** 3</li>
                    <li><strong>Fórmula:</strong> n³ = n × n × n</li>
                    <li><strong>Números procesados:</strong> ${numeros.length} elementos</li>
                    <li><strong>Tipo de operación:</strong> Potencia cúbica</li>
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
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">💡</div>
        <div class="info-text">Ingresa números separados por coma para ver sus cubos</div>
        
        <div class="info-section">
            <h3>¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué es el cubo de un número?</strong> El cubo de un número es el resultado de multiplicar ese número por sí mismo tres veces (n³ = n × n × n)</p>
            
            <h4>Proceso:</h4>
            <ul>
                <li>🔤 Dividir la cadena de entrada en un arreglo</li>
                <li>🔢 Convertir cada elemento a número</li>
                <li>🎯 Calcular el cubo de cada número (n³)</li>
                <li>📊 Mostrar el arreglo original y el de cubos</li>
            </ul>
            
            <p><strong>Ejemplo:</strong> Los cubos de [1, 2, 3, 4] son [1, 8, 27, 64]</p>
        </div>
    `;
    document.getElementById('numeros').focus();
}

// Enfocar el input al cargar la página
window.onload = function() {
    document.getElementById('numeros').focus();
};