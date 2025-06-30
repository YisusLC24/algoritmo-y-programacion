function sumarArreglos() {
    const input1 = document.getElementById('array1Input').value.trim();
    const input2 = document.getElementById('array2Input').value.trim();
    const resultado = document.getElementById('resultado');
    
    // Validar entradas
    if (!input1 || !input2) {
        mostrarError("Por favor, ingresa ambos arreglos");
        return;
    }
    
    try {
        // Convertir las cadenas en arreglos de números
        const arreglo1 = input1.split(',').map(item => {
            const numero = parseFloat(item.trim());
            if (isNaN(numero)) {
                throw new Error(`"${item.trim()}" no es un número válido en el primer arreglo`);
            }
            return numero;
        });
        
        const arreglo2 = input2.split(',').map(item => {
            const numero = parseFloat(item.trim());
            if (isNaN(numero)) {
                throw new Error(`"${item.trim()}" no es un número válido en el segundo arreglo`);
            }
            return numero;
        });
        
        // Verificar que ambos arreglos tengan la misma longitud
        if (arreglo1.length !== arreglo2.length) {
            mostrarError(`Los arreglos deben tener la misma cantidad de elementos.<br>
                         Primer arreglo: ${arreglo1.length} elementos<br>
                         Segundo arreglo: ${arreglo2.length} elementos`);
            return;
        }
        
        // Sumar los arreglos
        const arregloSuma = [];
        for (let i = 0; i < arreglo1.length; i++) {
            arregloSuma[i] = arreglo1[i] + arreglo2[i];
        }
        
        // Mostrar resultado
        mostrarResultado(arreglo1, arreglo2, arregloSuma);
        
    } catch (error) {
        mostrarError(error.message);
    }
}

function mostrarResultado(arr1, arr2, suma) {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <div class="resultado-exitoso">
            <h3>✅ Resultado de la Suma:</h3>
            
            <div class="suma-visual">
                <div class="arreglo-fila">
                    <h4>🔢 Primer Arreglo:</h4>
                    <div class="arreglo-elementos">
                        ${arr1.map((num, index) => 
                            `<div class="elemento-suma primer" title="Posición ${index}: ${num}">
                                <span class="posicion">[${index}]</span>
                                <span class="valor">${num}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="operador-suma">➕</div>
                
                <div class="arreglo-fila">
                    <h4>🔢 Segundo Arreglo:</h4>
                    <div class="arreglo-elementos">
                        ${arr2.map((num, index) => 
                            `<div class="elemento-suma segundo" title="Posición ${index}: ${num}">
                                <span class="posicion">[${index}]</span>
                                <span class="valor">${num}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="linea-igual">=</div>
                
                <div class="arreglo-fila resultado-fila">
                    <h4>🎯 Arreglo Resultado:</h4>
                    <div class="arreglo-elementos">
                        ${suma.map((num, index) => 
                            `<div class="elemento-suma resultado" title="Posición ${index}: ${arr1[index]} + ${arr2[index]} = ${num}">
                                <span class="posicion">[${index}]</span>
                                <span class="valor">${num}</span>
                                <span class="operacion">${arr1[index]}+${arr2[index]}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
            </div>
            
            <div class="detalles-suma">
                <h4>📊 Detalles de la Operación:</h4>
                <div class="operaciones-detalle">
                    ${suma.map((resultado, index) => 
                        `<div class="operacion-item">
                            <span class="indice">Posición ${index}:</span>
                            <span class="calculo">${arr1[index]} + ${arr2[index]} = <strong>${resultado}</strong></span>
                        </div>`
                    ).join('')}
                </div>
            </div>
            
            <div class="estadisticas-suma">
                <div class="stat-grid">
                    <div class="stat-item">
                        <span class="stat-label">Elementos por arreglo:</span>
                        <span class="stat-value">${arr1.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Suma total del resultado:</span>
                        <span class="stat-value">${suma.reduce((a, b) => a + b, 0)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Promedio del resultado:</span>
                        <span class="stat-value">${(suma.reduce((a, b) => a + b, 0) / suma.length).toFixed(2)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Valor máximo:</span>
                        <span class="stat-value">${Math.max(...suma)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Valor mínimo:</span>
                        <span class="stat-value">${Math.min(...suma)}</span>
                    </div>
                </div>
            </div>
            
            <div class="codigo-resultado">
                <h4>📝 Código JavaScript Generado:</h4>
                <pre><code>let arreglo1 = [${arr1.join(', ')}];
let arreglo2 = [${arr2.join(', ')}];
let arregloSuma = [];

// Verificar que tengan la misma longitud
if (arreglo1.length === arreglo2.length) {
    for (let i = 0; i < arreglo1.length; i++) {
        arregloSuma[i] = arreglo1[i] + arreglo2[i];
    }
    console.log("Arreglo 1:", arreglo1);
    console.log("Arreglo 2:", arreglo2);
    console.log("Resultado:", arregloSuma); // [${suma.join(', ')}]
} else {
    console.log("Error: Los arreglos deben tener la misma longitud");
}</code></pre>
            </div>
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
                <p><strong>Instrucciones:</strong></p>
                <ul>
                    <li>Ambos arreglos deben tener la misma cantidad de elementos</li>
                    <li>Usa números separados por comas: 1,2,3,4,5</li>
                    <li>Puedes usar decimales: 1.5, 2.7, 3.2</li>
                    <li>Ejemplo válido: [1,2,3] + [4,5,6] = [5,7,9]</li>
                </ul>
            </div>
        </div>
    `;
}

function limpiar() {
    document.getElementById('array1Input').value = '';
    document.getElementById('array2Input').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">➕</div>
        <div class="info-text">Ingresa dos arreglos de la misma longitud para sumarlos</div>
    `;
    document.getElementById('array1Input').focus();
}

// Enfocar el primer input al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('array1Input').focus();
});

// Ejemplos predefinidos para pruebas rápidas
function cargarEjemplo(ejemplo) {
    const ejemplos = {
        1: {
            arr1: "1,2,3,4,5",
            arr2: "6,7,8,9,10"
        },
        2: {
            arr1: "10,20,30",
            arr2: "5,15,25"
        },
        3: {
            arr1: "1.5,2.5,3.5,4.5",
            arr2: "0.5,1.5,2.5,3.5"
        },
        4: {
            arr1: "100,200,300,400,500",
            arr2: "50,75,100,125,150"
        },
        5: {
            arr1: "-5,-3,-1,1,3",
            arr2: "5,3,1,-1,-3"
        }
    };
    
    if (ejemplos[ejemplo]) {
        document.getElementById('array1Input').value = ejemplos[ejemplo].arr1;
        document.getElementById('array2Input').value = ejemplos[ejemplo].arr2;
        sumarArreglos();
    }
}

// Agregar botones de ejemplo
document.addEventListener('DOMContentLoaded', function() {
    const buttonGroup = document.querySelector('.button-group');
    const ejemplosBtn = document.createElement('button');
    ejemplosBtn.innerHTML = '📋 Ejemplos';
    ejemplosBtn.className = 'btn-example';
    ejemplosBtn.onclick = function() {
        const menu = document.createElement('div');
        menu.className = 'ejemplos-menu ejemplos-dobles';
        menu.innerHTML = `
            <button onclick="cargarEjemplo(1); this.parentElement.remove()">
                <span class="ejemplo-titulo">Básico:</span>
                <span class="ejemplo-detalle">[1,2,3,4,5] + [6,7,8,9,10]</span>
            </button>
            <button onclick="cargarEjemplo(2); this.parentElement.remove()">
                <span class="ejemplo-titulo">Mediano:</span>
                <span class="ejemplo-detalle">[10,20,30] + [5,15,25]</span>
            </button>
            <button onclick="cargarEjemplo(3); this.parentElement.remove()">
                <span class="ejemplo-titulo">Decimales:</span>
                <span class="ejemplo-detalle">[1.5,2.5,3.5,4.5] + [0.5,1.5,2.5,3.5]</span>
            </button>
            <button onclick="cargarEjemplo(4); this.parentElement.remove()">
                <span class="ejemplo-titulo">Grandes:</span>
                <span class="ejemplo-detalle">[100,200,300,400,500] + [50,75,100,125,150]</span>
            </button>
            <button onclick="cargarEjemplo(5); this.parentElement.remove()">
                <span class="ejemplo-titulo">Negativos:</span>
                <span class="ejemplo-detalle">[-5,-3,-1,1,3] + [5,3,1,-1,-3]</span>
            </button>
        `;
        
        // Remover menú existente
        const existingMenu = document.querySelector('.ejemplos-menu');
        if (existingMenu) existingMenu.remove();
        
        buttonGroup.appendChild(menu);
    };
    
    buttonGroup.appendChild(ejemplosBtn);
});

// Función para intercambiar los arreglos
function intercambiarArreglos() {
    const input1 = document.getElementById('array1Input').value;
    const input2 = document.getElementById('array2Input').value;
    
    document.getElementById('array1Input').value = input2;
    document.getElementById('array2Input').value = input1;
    
    if (input1 && input2) {
        sumarArreglos();
    }
}

// Agregar botón de intercambio
document.addEventListener('DOMContentLoaded', function() {
    const buttonGroup = document.querySelector('.button-group');
    const intercambioBtn = document.createElement('button');
    intercambioBtn.innerHTML = '🔄 Intercambiar';
    intercambioBtn.className = 'btn-secondary';
    intercambioBtn.onclick = intercambiarArreglos;
    intercambioBtn.title = 'Intercambia el primer y segundo arreglo';
    
    // Insertar antes del botón de limpiar
    buttonGroup.insertBefore(intercambioBtn, buttonGroup.lastElementChild);
});