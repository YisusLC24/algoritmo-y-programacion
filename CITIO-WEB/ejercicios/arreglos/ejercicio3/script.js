// Ejercicio 3: Contar Mayores de Edad en un Arreglo
// Elementos del DOM
const edadesInput = document.getElementById('edades-input');
const contarBtn = document.getElementById('contar-btn');
const limpiarBtn = document.getElementById('limpiar-btn');
const resultado = document.getElementById('resultado');

// Event Listeners
contarBtn.addEventListener('click', contarMayoresDeEdad);
limpiarBtn.addEventListener('click', limpiarEjercicio);

// Permitir ejecutar con Enter
edadesInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        contarMayoresDeEdad();
    }
});

// Función principal para contar mayores de edad
function contarMayoresDeEdad() {
    const input = edadesInput.value.trim();
    
    if (input === '') {
        mostrarError('⚠️ Por favor, ingresa algunas edades.');
        return;
    }

    try {
        // Convertir el input en arreglo de números
        const edadesTexto = input.split(',');
        const edades = edadesTexto.map(edad => {
            const numero = parseInt(edad.trim());
            if (isNaN(numero) || numero < 0 || numero > 150) {
                throw new Error(`"${edad.trim()}" no es una edad válida`);
            }
            return numero;
        });

        // Contar mayores de edad
        let mayoresDeEdad = 0;
        let menoresDeEdad = 0;
        const mayores = [];
        const menores = [];

        for (let i = 0; i < edades.length; i++) {
            if (edades[i] >= 18) {
                mayoresDeEdad++;
                mayores.push(edades[i]);
            } else {
                menoresDeEdad++;
                menores.push(edades[i]);
            }
        }

        // Mostrar resultado
        mostrarResultado(edades, mayoresDeEdad, menoresDeEdad, mayores, menores);

    } catch (error) {
        mostrarError(`❌ Error: ${error.message}`);
    }
}

// Función para mostrar el resultado
function mostrarResultado(edades, mayoresDeEdad, menoresDeEdad, mayores, menores) {
    const total = edades.length;
    const porcentajeMayores = ((mayoresDeEdad / total) * 100).toFixed(1);
    const porcentajeMenores = ((menoresDeEdad / total) * 100).toFixed(1);

    resultado.innerHTML = `
        <div class="resultado-exitoso">
            <h3>📊 Resultado del Análisis</h3>
            
            <!-- Arreglo original -->
            <div class="arreglo-display">
                <h4>📋 Arreglo de Edades:</h4>
                <div class="arreglo-visual">
                    ${edades.map((edad, index) => 
                        `<span class="elemento ${edad >= 18 ? 'mayor' : 'menor'}" title="${edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}">
                            ${edad}
                        </span>`
                    ).join('')}
                </div>
                <p class="arreglo-info">Total de elementos: ${total}</p>
            </div>

            <!-- Estadísticas principales -->
            <div class="estadisticas-grid">
                <div class="stat-card mayor-card">
                    <div class="stat-icon">👨‍💼</div>
                    <div class="stat-info">
                        <h4>Mayores de Edad</h4>
                        <p class="stat-number">${mayoresDeEdad}</p>
                        <p class="stat-percent">${porcentajeMayores}%</p>
                    </div>
                </div>
                
                <div class="stat-card menor-card">
                    <div class="stat-icon">👶</div>
                    <div class="stat-info">
                        <h4>Menores de Edad</h4>
                        <p class="stat-number">${menoresDeEdad}</p>
                        <p class="stat-percent">${porcentajeMenores}%</p>
                    </div>
                </div>
            </div>

            <!-- Detalles por categoría -->
            <div class="detalles-categorias">
                ${mayoresDeEdad > 0 ? `
                    <div class="categoria-detalle">
                        <h4>👨‍💼 Mayores de Edad (≥18 años):</h4>
                        <div class="lista-edades">
                            ${mayores.map(edad => `<span class="edad-tag mayor">${edad}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${menoresDeEdad > 0 ? `
                    <div class="categoria-detalle">
                        <h4>👶 Menores de Edad (<18 años):</h4>
                        <div class="lista-edades">
                            ${menores.map(edad => `<span class="edad-tag menor">${edad}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Análisis adicional -->
            <div class="analisis-adicional">
                <h4>📈 Análisis Estadístico:</h4>
                <div class="analisis-grid">
                    <div class="analisis-item">
                        <span class="analisis-label">Edad Promedio:</span>
                        <span class="analisis-valor">${(edades.reduce((sum, edad) => sum + edad, 0) / total).toFixed(1)} años</span>
                    </div>
                    <div class="analisis-item">
                        <span class="analisis-label">Edad Mínima:</span>
                        <span class="analisis-valor">${Math.min(...edades)} años</span>
                    </div>
                    <div class="analisis-item">
                        <span class="analisis-label">Edad Máxima:</span>
                        <span class="analisis-valor">${Math.max(...edades)} años</span>
                    </div>
                    <div class="analisis-item">
                        <span class="analisis-label">Rango de Edades:</span>
                        <span class="analisis-valor">${Math.max(...edades) - Math.min(...edades)} años</span>
                    </div>
                </div>
            </div>

            <!-- Mensaje interpretativo -->
            <div class="mensaje-interpretativo">
                ${interpretarResultados(mayoresDeEdad, menoresDeEdad, total)}
            </div>
        </div>
    `;
}

// Función para interpretar resultados
function interpretarResultados(mayores, menores, total) {
    if (mayores === total) {
        return `<p class="interpretacion exito">🎉 ¡Todos los ${total} individuos son mayores de edad!</p>`;
    } else if (menores === total) {
        return `<p class="interpretacion advertencia">⚠️ Todos los ${total} individuos son menores de edad.</p>`;
    } else if (mayores > menores) {
        return `<p class="interpretacion info">📊 La mayoría (${mayores} de ${total}) son mayores de edad.</p>`;
    } else if (menores > mayores) {
        return `<p class="interpretacion advertencia">📊 La mayoría (${menores} de ${total}) son menores de edad.</p>`;
    } else {
        return `<p class="interpretacion neutral">⚖️ Hay una distribución equilibrada entre mayores y menores de edad.</p>`;
    }
}

// Función para mostrar errores
function mostrarError(mensaje) {
    resultado.innerHTML = `
        <div class="resultado-error">
            <h3>Error en el Ejercicio</h3>
            <p>${mensaje}</p>
            <div class="error-ayuda">
                <h4>💡 Ayuda:</h4>
                <ul>
                    <li>Ingresa las edades separadas por comas</li>
                    <li>Ejemplo: 15, 22, 17, 25, 30</li>
                    <li>Solo números entre 0 y 150</li>
                    <li>No uses letras ni símbolos especiales</li>
                </ul>
            </div>
        </div>
    `;
}

// Función para limpiar el ejercicio
function limpiarEjercicio() {
    edadesInput.value = '';
    resultado.innerHTML = '';
    edadesInput.focus();
}

// CSS adicional para el ejercicio (estilos específicos)
const estilosEjercicio = `
    <style>
        .arreglo-visual {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 10px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border: 2px dashed #dee2e6;
        }
        
        .elemento {
            padding: 8px 12px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 14px;
            transition: transform 0.2s;
        }
        
        .elemento:hover {
            transform: scale(1.1);
        }
        
        .elemento.mayor {
            background: #d4edda;
            color: #155724;
            border: 2px solid #c3e6cb;
        }
        
        .elemento.menor {
            background: #f8d7da;
            color: #721c24;
            border: 2px solid #f5c6cb;
        }
        
        .estadisticas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .stat-card {
            display: flex;
            align-items: center;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        
        .stat-card:hover {
            transform: translateY(-2px);
        }
        
        .mayor-card {
            background: linear-gradient(135deg, #d4edda, #c3e6cb);
            border-left: 4px solid #28a745;
        }
        
        .menor-card {
            background: linear-gradient(135deg, #f8d7da, #f5c6cb);
            border-left: 4px solid #dc3545;
        }
        
        .stat-icon {
            font-size: 2.5em;
            margin-right: 15px;
        }
        
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            margin: 5px 0;
        }
        
        .stat-percent {
            font-size: 1.2em;
            opacity: 0.8;
        }
        
        .lista-edades {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        
        .edad-tag {
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 12px;
        }
        
        .edad-tag.mayor {
            background: #28a745;
            color: white;
        }
        
        .edad-tag.menor {
            background: #dc3545;
            color: white;
        }
        
        .analisis-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }
        
        .analisis-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 15px;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 3px solid #007bff;
        }
        
        .analisis-label {
            font-weight: bold;
            color: #495057;
        }
        
        .analisis-valor {
            color: #007bff;
            font-weight: bold;
        }
        
        .interpretacion {
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-weight: bold;
        }
        
        .interpretacion.exito {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .interpretacion.advertencia {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }
        
        .interpretacion.info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        
        .interpretacion.neutral {
            background: #e2e3e5;
            color: #383d41;
            border: 1px solid #d6d8db;
        }
    </style>
`;

// Agregar estilos al head
document.head.insertAdjacentHTML('beforeend', estilosEjercicio);