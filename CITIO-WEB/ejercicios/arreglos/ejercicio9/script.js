function procesarArreglo() {
    const input = document.getElementById('arrayInput').value.trim();
    const resultado = document.getElementById('resultado');
    
    // Validar entrada
    if (!input) {
        mostrarError("Por favor, ingresa algunos números");
        return;
    }
    
    try {
        // Convertir la cadena en arreglo de números
        const arregloOriginal = input.split(',').map(item => {
            const numero = parseFloat(item.trim());
            if (isNaN(numero)) {
                throw new Error(`"${item.trim()}" no es un número válido`);
            }
            return numero;
        });
        
        // Filtrar solo números enteros para verificar paridad
        const numerosEnteros = arregloOriginal.filter(num => Number.isInteger(num));
        
        if (numerosEnteros.length === 0) {
            mostrarError("No hay números enteros en el arreglo para verificar paridad");
            return;
        }
        
        // Copiar solo los números pares
        const arregloPares = [];
        
        for (let i = 0; i < arregloOriginal.length; i++) {
            if (Number.isInteger(arregloOriginal[i]) && arregloOriginal[i] % 2 === 0) {
                arregloPares.push(arregloOriginal[i]);
            }
        }
        
        // Mostrar resultado
        mostrarResultado(arregloOriginal, arregloPares);
        
    } catch (error) {
        mostrarError(error.message);
    }
}

function mostrarResultado(original, pares) {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <div class="resultado-exitoso">
            <h3>✅ Resultado:</h3>
            
            <div class="arreglos-container">
                <div class="arreglo-section">
                    <h4>🔢 Arreglo Original:</h4>
                    <div class="arreglo-visual">
                        ${original.map((num, index) => 
                            `<span class="elemento ${Number.isInteger(num) && num % 2 === 0 ? 'par' : 'impar'}" 
                                   title="${Number.isInteger(num) ? (num % 2 === 0 ? 'Par' : 'Impar') : 'Decimal'}">
                                ${num}
                            </span>`
                        ).join('')}
                    </div>
                    <p class="array-info">Total de elementos: ${original.length}</p>
                </div>
                
                <div class="flecha">➡️</div>
                
                <div class="arreglo-section">
                    <h4>🎯 Números Pares Copiados:</h4>
                    <div class="arreglo-visual">
                        ${pares.length > 0 ? 
                            pares.map(num => 
                                `<span class="elemento par" title="Número par">${num}</span>`
                            ).join('') : 
                            '<span class="no-elementos">No hay números pares</span>'
                        }
                    </div>
                    <p class="array-info">Números pares encontrados: ${pares.length}</p>
                </div>
            </div>
            
            <div class="estadisticas">
                <div class="stat-item">
                    <span class="stat-label">Total Original:</span>
                    <span class="stat-value">${original.length}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Números Pares:</span>
                    <span class="stat-value">${pares.length}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Porcentaje de Pares:</span>
                    <span class="stat-value">${original.length > 0 ? ((pares.length / original.filter(n => Number.isInteger(n)).length) * 100).toFixed(1) : 0}%</span>
                </div>
            </div>
            
            ${pares.length > 0 ? `
                <div class="codigo-resultado">
                    <h4>📝 Código JavaScript:</h4>
                    <pre><code>let arregloOriginal = [${original.join(', ')}];
let arregloPares = [];

for (let i = 0; i < arregloOriginal.length; i++) {
    if (Number.isInteger(arregloOriginal[i]) && arregloOriginal[i] % 2 === 0) {
        arregloPares.push(arregloOriginal[i]);
    }
}

console.log("Arreglo original:", arregloOriginal);
console.log("Números pares:", arregloPares); // [${pares.join(', ')}]</code></pre>
                </div>
            ` : ''}
        </div>
    `;
}

function mostrarError(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <div class="resultado-error">
            <div class="error-icon">❌</div>
            <div class="error-text">${mensaje}</div>
            <div class="error-help">
                <p><strong>Formato correcto:</strong></p>
                <ul>
                    <li>Números separados por comas: 1,2,3,4,5</li>
                    <li>Con espacios: 1, 2, 3, 4, 5</li>
                    <li>Números decimales: 1.5, 2, 3.7, 4</li>
                </ul>
            </div>
        </div>
    `;
}

function limpiar() {
    document.getElementById('arrayInput').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">💡</div>
        <div class="info-text">Ingresa un arreglo para ver los números pares copiados</div>
    `;
    document.getElementById('arrayInput').focus();
}

// Enfocar el input al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('arrayInput').focus();
});

// Ejemplos predefinidos para pruebas rápidas
function cargarEjemplo(ejemplo) {
    const ejemplos = {
        1: "1,2,3,4,5,6,7,8,9,10",
        2: "11,22,33,44,55,66",
        3: "1,3,5,7,9,11,13,15",
        4: "2,4,6,8,10,12,14,16",
        5: "1.5,2,3.7,4,5.2,6,7.8,8"
    };
    
    document.getElementById('arrayInput').value = ejemplos[ejemplo];
    procesarArreglo();
}

// Agregar botones de ejemplo (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const buttonGroup = document.querySelector('.button-group');
    const ejemplosBtn = document.createElement('button');
    ejemplosBtn.innerHTML = '📋 Ejemplos';
    ejemplosBtn.className = 'btn-example';
    ejemplosBtn.onclick = function() {
        const menu = document.createElement('div');
        menu.className = 'ejemplos-menu';
        menu.innerHTML = `
            <button onclick="cargarEjemplo(1); this.parentElement.remove()">1,2,3,4,5,6,7,8,9,10</button>
            <button onclick="cargarEjemplo(2); this.parentElement.remove()">11,22,33,44,55,66</button>
            <button onclick="cargarEjemplo(3); this.parentElement.remove()">1,3,5,7,9,11,13,15</button>
            <button onclick="cargarEjemplo(4); this.parentElement.remove()">2,4,6,8,10,12,14,16</button>
            <button onclick="cargarEjemplo(5); this.parentElement.remove()">1.5,2,3.7,4,5.2,6,7.8,8</button>
        `;
        
        // Remover menú existente
        const existingMenu = document.querySelector('.ejemplos-menu');
        if (existingMenu) existingMenu.remove();
        
        buttonGroup.appendChild(menu);
    };
    
    buttonGroup.appendChild(ejemplosBtn);
});