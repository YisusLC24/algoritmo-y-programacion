function mostrarPares() {
    const resultado = document.getElementById('resultado');
    
    let numerosPares = [];
    let procesoDetallado = [];
    
    // Ciclo for para encontrar números pares del 1 al 50
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            procesoDetallado.push(`${i} ÷ 2 = ${i/2} (residuo: ${i % 2}) → Es PAR`);
        }
    }
    
    // Mostrar resultado
    resultado.innerHTML = `
        <div class="resultado-exito">
            🎯 <strong>¿Cómo funciona este ejercicio?</strong>
            <br>Presiona el botón para ver todos los números pares del 1 al 50
            <br><br>
            💡 <strong>Resultado:</strong><br>
            <strong>Números pares encontrados:</strong> ${numerosPares.length}<br>
            <div class="numeros-pares">
                ${numerosPares.map((num, index) => 
                    `<span class="numero-par" style="animation: fadeIn 0.3s ease-in-out ${index * 0.1}s forwards; opacity: 0;">${num}</span>`
                ).join('')}
            </div>
            <br>
            📊 <strong>Lista completa:</strong><br>
            ${numerosPares.join(', ')}
            <br><br>
            📝 <strong>Proceso detallado (primeros 10 números):</strong><br>
            <div class="proceso-detallado">
                ${procesoDetallado.slice(0, 10).map((proceso, index) => 
                    `<div class="paso-detalle" style="animation: slideIn 0.4s ease-in-out ${(index + 1) * 0.2}s forwards; opacity: 0;">${proceso}</div>`
                ).join('')}
                ${procesoDetallado.length > 10 ? '<div class="mas-procesos">... y así sucesivamente hasta el 50</div>' : ''}
            </div>
            <br>
            ✅ <strong>Lógica del Ejercicio:</strong><br>
            <code>
            numerosPares = []<br>
            for (i = 1; i <= 50; i++) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;if (i % 2 === 0) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numerosPares.push(i)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            }<br>
            mostrar numerosPares
            </code>
            <br><br>
            🧠 <strong>Concepto:</strong> Hay ${numerosPares.length} números pares entre 1 y 50
            <br><br>
            📈 <strong>Estadísticas:</strong><br>
            • Primer número par: ${numerosPares[0]}<br>
            • Último número par: ${numerosPares[numerosPares.length - 1]}<br>
            • Total de números pares: ${numerosPares.length}<br>
            • Suma de todos los pares: ${numerosPares.reduce((sum, num) => sum + num, 0)}
        </div>
    `;
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .numeros-pares {
            background: #f0f8ff;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .numero-par {
            background: #4CAF50;
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
            min-width: 30px;
            text-align: center;
        }
        .proceso-detallado {
            background: #f8f9ff;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
            font-size: 13px;
        }
        .paso-detalle {
            padding: 3px 0;
            border-left: 3px solid #2196F3;
            padding-left: 10px;
            margin-bottom: 5px;
        }
        .mas-procesos {
            color: #666;
            font-style: italic;
            text-align: center;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);
}

function limpiar() {
    document.getElementById('resultado').innerHTML = `
        <div class="resultado">
            🎯 <strong>¿Cómo funciona este ejercicio?</strong>
            <br>Presiona el botón para mostrar todos los números pares del 1 al 50
            <br><br>
            💡 <strong>¿Qué aprenderás?</strong><br>
            • Cómo usar ciclos for para recorrer rangos de números<br>
            • Cómo identificar números pares usando el operador módulo (%)<br>
            • Cómo almacenar resultados en un arreglo<br>
            <br>
            📚 <strong>Concepto clave:</strong><br>
            Un número es par si: <code>numero % 2 === 0</code>
        </div>
    `;
}

// Inicializar al cargar la página
window.onload = function() {
    limpiar();
}