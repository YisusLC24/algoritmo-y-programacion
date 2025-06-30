// Variables globales
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
    
    // Si el número es 0, terminar
    if (numero === 0) {
        procesoActivo = false;
        mostrarResultadoFinal();
        input.value = '';
        return;
    }
    
    // Agregar el número al contador
    numerosIngresados.push(numero);
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
        <h3>🔢 Contando números...</h3>
        <div class="proceso-info">
            <p><strong>Números ingresados:</strong> ${numerosIngresados.join(', ')}</p>
            <p><strong>Total de números:</strong> ${contador}</p>
            <p><strong>Siguiente paso:</strong> Ingresa otro número (o 0 para terminar)</p>
        </div>
        
        <div class="explicacion">
            <h4>💡 ¿Cómo funciona?</h4>
            <p>El programa cuenta todos los números que ingreses. Cuando ingreses 0, se detendrá y mostrará cuántos números contó.</p>
            <p><strong>Nota:</strong> El 0 no se cuenta, solo sirve para terminar el proceso.</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero === 0) {
        break; // Salir del ciclo
    }
    
    contador++;
}

alert("Total de números: " + contador);</code></pre>
        </div>
    `;
}

// Función para mostrar el resultado final
function mostrarResultadoFinal() {
    const resultado = document.getElementById('resultado');
    
    // Separar números positivos y negativos para estadísticas
    const positivos = numerosIngresados.filter(num => num > 0);
    const negativos = numerosIngresados.filter(num => num < 0);
    
    resultado.innerHTML = `
        <h3>✅ Proceso completado</h3>
        <div class="resultado-final">
            <p><strong>Números ingresados:</strong> ${numerosIngresados.join(', ')}</p>
            <p class="contador-total"><strong>🎯 TOTAL DE NÚMEROS CONTADOS: ${contador}</strong></p>
        </div>
        
        <div class="estadisticas">
            <h4>📊 Estadísticas adicionales:</h4>
            <p>✅ Números positivos: ${positivos.length} (${positivos.join(', ') || 'ninguno'})</p>
            <p>✅ Números negativos: ${negativos.length} (${negativos.join(', ') || 'ninguno'})</p>
            <p>✅ El 0 no se contó (solo sirvió para terminar)</p>
        </div>
        
        <div class="explicacion">
            <h4>📋 Resumen del ejercicio:</h4>
            <p>✅ Se ingresaron <strong>${contador}</strong> números en total</p>
            <p>✅ El proceso terminó al ingresar <strong>0</strong></p>
            <p>✅ El contador no incluye el 0 final</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero === 0) {
        break; // Salir del ciclo
    }
    
    contador++;
}

alert("Total de números: " + contador);</code></pre>
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
            <p><strong>Objetivo:</strong> Contar cuántos números ingresas hasta que escribas 0</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>🔢 Ingresa números uno por uno</li>
                <li>📊 Cada número se cuenta (excepto el 0)</li>
                <li>🛑 Al ingresar 0, el proceso termina</li>
                <li>📈 Se muestra el total de números contados</li>
            </ul>
            <p><strong>Importante:</strong> El 0 no se cuenta, solo sirve para terminar.</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero === 0) {
        break; // Salir del ciclo
    }
    
    contador++;
}

alert("Total de números: " + contador);</code></pre>
        </div>
    `;
}

// Función para limpiar y reiniciar
function limpiar() {
    contador = 0;
    numerosIngresados = [];
    procesoActivo = true;
    
    const input = document.getElementById('numeroInput');
    input.value = '';
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>🔢 Ingresa números para contarlos</h3>
        <p>💡 <strong>¿Cómo funciona este ejercicio?</strong></p>
        <p><strong>¿Qué hace el programa?</strong> Cuenta cuántos números ingresas hasta que escribas 0.</p>
        <p><strong>Proceso:</strong></p>
        <ul>
            <li>🔢 Usar ciclo while para continuar pidiendo números</li>
            <li>📊 Contar cada número ingresado (excepto el 0)</li>
            <li>🛑 Parar cuando se ingrese 0</li>
            <li>📈 Mostrar el total de números ingresados</li>
        </ul>
        <p><strong>Ejemplo:</strong> Si ingresas 5, 10, -3, 7, 0, el contador será 4</p>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número"));
    
    if (numero === 0) {
        break; // Salir del ciclo si es 0
    }
    
    contador++;
}

alert("Total de números ingresados: " + contador);</code></pre>
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