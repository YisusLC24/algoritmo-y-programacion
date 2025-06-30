function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    
    // Validaciones
    if (isNaN(numero) || numero === '') {
        resultado.innerHTML = `
            <div class="resultado-error">
                ❌ <strong>Error:</strong> Por favor ingresa un número válido.
            </div>
        `;
        return;
    }
    
    if (numero < 0) {
        resultado.innerHTML = `
            <div class="resultado-error">
                ❌ <strong>Error:</strong> No se puede calcular el factorial de números negativos.
            </div>
        `;
        return;
    }
    
    if (numero > 15) {
        resultado.innerHTML = `
            <div class="resultado-error">
                ❌ <strong>Error:</strong> Número muy grande. Ingresa un número menor o igual a 15.
            </div>
        `;
        return;
    }
    
    // Casos especiales
    if (numero === 0 || numero === 1) {
        resultado.innerHTML = `
            <div class="resultado-exito">
                🎯 <strong>¿Cómo funciona este ejercicio?</strong>
                <br>Ingresa tu número para ver la clasificación
                <br><br>
                💡 <strong>Resultado:</strong><br>
                ${numero}! = 1<br><br>
                📝 <strong>Explicación:</strong><br>
                Por definición, tanto 0! como 1! son iguales a 1.
                <br><br>
                ✅ <strong>Lógica del Ejercicio:</strong><br>
                <code>
                factorial = 1<br>
                for (i = 1; i <= ${numero}; i++) {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;factorial = factorial * i<br>
                }<br>
                resultado = factorial
                </code>
            </div>
        `;
        return;
    }
    
    // Calcular factorial usando for
    let factorial = 1;
    let proceso = [];
    let pasos = [];
    
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
        proceso.push(i);
        pasos.push(`factorial = ${factorial / i} × ${i} = ${factorial}`);
    }
    
    // Mostrar resultado
    resultado.innerHTML = `
        <div class="resultado-exito">
            🎯 <strong>¿Cómo funciona este ejercicio?</strong>
            <br>Ingresa tu número para ver la clasificación
            <br><br>
            💡 <strong>Resultado:</strong><br>
            ${numero}! = ${factorial.toLocaleString()}
            <br><br>
            📊 <strong>Secuencia del factorial:</strong><br>
            ${numero}! = ${proceso.join(' × ')} = ${factorial.toLocaleString()}
            <br><br>
            📝 <strong>Proceso paso a paso:</strong><br>
            <div class="proceso-pasos">
                factorial = 1 (valor inicial)<br>
                ${pasos.map((paso, index) => 
                    `<span class="paso-${index}" style="opacity: 0; animation: fadeIn 0.5s ease-in-out ${(index + 1) * 0.3}s forwards;">${paso}</span>`
                ).join('<br>')}
            </div>
            <br>
            ✅ <strong>Lógica del Ejercicio:</strong><br>
            <code>
            factorial = 1<br>
            for (i = 1; i <= ${numero}; i++) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;factorial = factorial * i<br>
            }<br>
            resultado = factorial
            </code>
            <br><br>
            🧠 <strong>Concepto:</strong> El factorial de ${numero} es ${factorial.toLocaleString()}
        </div>
    `;
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .proceso-pasos {
            background: #f8f9ff;
            padding: 10px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
        }
    `;
    document.head.appendChild(style);
}

function limpiar() {
    document.getElementById('numero').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="resultado">
            🎯 <strong>¿Cómo funciona este ejercicio?</strong>
            <br>Ingresa un número para ver el cálculo de su factorial
            <br><br>
            💡 <strong>Ejemplos:</strong><br>
            • 3! = 1 × 2 × 3 = 6<br>
            • 4! = 1 × 2 × 3 × 4 = 24<br>
            • 5! = 1 × 2 × 3 × 4 × 5 = 120
        </div>
    `;
}

// Inicializar al cargar la página
window.onload = function() {
    limpiar();
}