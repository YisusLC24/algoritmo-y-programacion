// Variables globales
let suma = 0;
let contador = 0;
let numerosIngresados = [];
let procesoActivo = true;

// Función para agregar números
function agregarNumero() {
    const input = document.getElementById('numeroInput');
    const numero = parseFloat(input.value);
    
    if (isNaN(numero)) {
        mostrarResultado('❌ Por favor ingresa un número válido', 'error');
        return;
    }
    
    if (!procesoActivo) {
        mostrarResultado('❌ El proceso ha terminado. Presiona "Limpiar" para empezar de nuevo.', 'error');
        return;
    }
    
    // Si el número es negativo, terminar
    if (numero < 0) {
        procesoActivo = false;
        mostrarResultadoFinal(numero);
        input.value = '';
        return;
    }
    
    // Agregar el número positivo
    numerosIngresados.push(numero);
    suma += numero;
    contador++;
    
    mostrarProcesoActual();
    
    // Limpiar input
    input.value = '';
    
    // Enfocar el input para continuar
    input.focus();
}

// Función para mostrar el proceso actual
function mostrarProcesoActual() {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <h3>🔢 Proceso en curso...</h3>
        <div class="proceso-info">
            <p><strong>Números ingresados:</strong> ${numerosIngresados.join(', ')}</p>
            <p><strong>Cantidad de números:</strong> ${contador}</p>
            <p><strong>Suma actual:</strong> ${suma}</p>
            <p><strong>Siguiente paso:</strong> Ingresa otro número (o un número negativo para terminar)</p>
        </div>
        
        <div class="explicacion">
            <h4>💡 ¿Cómo funciona?</h4>
            <p>El programa suma todos los números positivos que ingreses. Cuando ingreses un número negativo, se detendrá y mostrará la suma total.</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let suma = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero < 0) {
        break; // Salir del ciclo
    }
    
    suma += numero;
}

alert("Suma total: " + suma);</code></pre>
        </div>
    `;
}

// Función para mostrar el resultado final
function mostrarResultadoFinal(numeroNegativo) {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <h3>✅ Proceso completado</h3>
        <div class="resultado-final">
            <p><strong>Número negativo ingresado:</strong> ${numeroNegativo}</p>
            <p><strong>Números positivos sumados:</strong> ${numerosIngresados.join(', ')}</p>
            <p><strong>Cantidad total de números:</strong> ${contador}</p>
            <p class="suma-total"><strong>🎯 SUMA TOTAL: ${suma}</strong></p>
        </div>
        
        <div class="explicacion">
            <h4>📋 Resumen del ejercicio:</h4>
            <p>✅ Se ingresaron ${contador} números positivos</p>
            <p>✅ La suma de todos los números positivos es: <strong>${suma}</strong></p>
            <p>✅ El proceso terminó al ingresar el número negativo: <strong>${numeroNegativo}</strong></p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let suma = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero < 0) {
        break; // Salir del ciclo
    }
    
    suma += numero;
}

alert("Suma total: " + suma);</code></pre>
        </div>
        
        <p class="reiniciar-mensaje">Para empezar de nuevo, presiona el botón "Limpiar"</p>
    `;
}

// Función para mostrar mensajes de resultado
function mostrarResultado(mensaje, tipo = 'info') {
    const resultado = document.getElementById('resultado');
    const claseColor = tipo === 'error' ? 'error' : 'success';
    
    resultado.innerHTML = `
        <div class="mensaje ${claseColor}">
            <p>${mensaje}</p>
        </div>
        
        <div class="explicacion">
            <h4>💡 ¿Cómo funciona este ejercicio?</h4>
            <p><strong>Objetivo:</strong> Sumar números positivos hasta que se ingrese un número negativo</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>🔢 Ingresa números uno por uno</li>
                <li>➕ Cada número positivo se suma al total</li>
                <li>🛑 Al ingresar un número negativo, el proceso termina</li>
                <li>📊 Se muestra la suma total de todos los números positivos</li>
            </ul>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let suma = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero < 0) {
        break; // Salir del ciclo
    }
    
    suma += numero;
}

alert("Suma total: " + suma);</code></pre>
        </div>
    `;
}

// Función para limpiar y reiniciar
function limpiar() {
    suma = 0;
    contador = 0;
    numerosIngresados = [];
    procesoActivo = true;
    
    const input = document.getElementById('numeroInput');
    input.value = '';
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>📝 Ingresa números para sumarlos</h3>
        <p>💡 <strong>¿Cómo funciona este ejercicio?</strong></p>
        <p><strong>¿Qué hace el programa?</strong> Suma todos los números positivos que ingreses hasta que escribas un número negativo.</p>
        <p><strong>Proceso:</strong></p>
        <ul>
            <li>🔢 Usar ciclo while para continuar pidiendo números</li>
            <li>➕ Sumar cada número positivo ingresado</li>
            <li>🛑 Parar cuando se ingrese un número negativo</li>
            <li>📊 Mostrar la suma total al final</li>
        </ul>
        <p><strong>Ejemplo:</strong> Si ingresas 5, 10, 3, -1, la suma será 18</p>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let suma = 0;
let numero;
let contador = 0;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero < 0) {
        break; // Salir del ciclo si es negativo
    }
    
    suma += numero;
    contador++;
}

alert("Suma total: " + suma);</code></pre>
        </div>
    `;
    
    input.focus();
}

// Permitir usar Enter para agregar números
document.getElementById('numeroInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarNumero();
    }
});

// Enfocar el input al cargar la página
window.addEventListener('load', function() {
    document.getElementById('numeroInput').focus();
});