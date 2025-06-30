// Función principal para contar letras
function contarLetras() {
    const input = document.getElementById('palabraInput');
    const palabra = input.value.trim();
    
    if (palabra === '') {
        mostrarResultado('❌ Por favor ingresa una palabra', 'error');
        return;
    }
    
    // Contar letras usando .length
    const totalCaracteres = palabra.length;
    
    // Análisis adicional de la palabra
    const soloLetras = palabra.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
    const cantidadLetras = soloLetras.length;
    const cantidadEspacios = (palabra.match(/\s/g) || []).length;
    const cantidadNumeros = (palabra.match(/\d/g) || []).length;
    const cantidadEspeciales = totalCaracteres - cantidadLetras - cantidadEspacios - cantidadNumeros;
    
    // Conteo de vocales y consonantes
    const vocales = soloLetras.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || [];
    const consonantes = soloLetras.match(/[bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ]/g) || [];
    
    mostrarResultadoCompleto(palabra, totalCaracteres, cantidadLetras, cantidadEspacios, 
                           cantidadNumeros, cantidadEspeciales, vocales.length, consonantes.length);
}

// Función para mostrar el resultado completo
function mostrarResultadoCompleto(palabra, total, letras, espacios, numeros, especiales, vocales, consonantes) {
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `
        <h3>✅ Análisis completado</h3>
        <div class="resultado-principal">
            <p><strong>Palabra ingresada:</strong> "${palabra}"</p>
            <p class="resultado-destacado"><strong>🎯 TOTAL DE CARACTERES: ${total}</strong></p>
        </div>
        
        <div class="analisis-detallado">
            <h4>🔍 Análisis detallado:</h4>
            <div class="estadisticas-grid">
                <div class="estadistica">
                    <span class="numero">${letras}</span>
                    <span class="descripcion">Letras</span>
                </div>
                <div class="estadistica">
                    <span class="numero">${vocales}</span>
                    <span class="descripcion">Vocales</span>
                </div>
                <div class="estadistica">
                    <span class="numero">${consonantes}</span>
                    <span class="descripcion">Consonantes</span>
                </div>
                <div class="estadistica">
                    <span class="numero">${espacios}</span>
                    <span class="descripcion">Espacios</span>
                </div>
                <div class="estadistica">
                    <span class="numero">${numeros}</span>
                    <span class="descripcion">Números</span>
                </div>
                <div class="estadistica">
                    <span class="numero">${especiales}</span>
                    <span class="descripcion">Especiales</span>
                </div>
            </div>
        </div>
        
        <div class="palabra-visual">
            <h4>📝 Visualización por caracteres:</h4>
            <div class="caracteres-grid">
                ${palabra.split('').map((char, index) => 
                    `<span class="caracter" title="Posición ${index + 1}">${char === ' ' ? '␣' : char}</span>`
                ).join('')}
            </div>
            <p class="info-visual">Total: ${palabra.length} caracteres (los espacios se muestran como ␣)</p>
        </div>
        
        <div class="explicacion">
            <h4>💡 ¿Cómo funciona?</h4>
            <p>✅ Se usa la propiedad <code>.length</code> para obtener la longitud total</p>
            <p>✅ Se analizan diferentes tipos de caracteres</p>
            <p>✅ Se visualiza cada carácter individualmente</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let palabra = prompt("Ingresa una palabra");
let cantidadLetras = palabra.length;

alert("La palabra '" + palabra + "' tiene " + cantidadLetras + " letras");</code></pre>
        </div>
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
            <p><strong>Objetivo:</strong> Contar la cantidad de letras de una palabra</p>
            <p><strong>Proceso:</strong></p>
            <ul>
                <li>📝 Recibir una palabra del usuario</li>
                <li>🔢 Usar la propiedad .length para obtener la longitud</li>
                <li>📊 Mostrar el total de caracteres</li>
                <li>🔍 Proporcionar análisis detallado</li>
            </ul>
            <p><strong>Importante:</strong> Se cuentan todos los caracteres, incluyendo espacios y símbolos.</p>
        </div>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let palabra = prompt("Ingresa una palabra");
let cantidadLetras = palabra.length;

alert("La palabra '" + palabra + "' tiene " + cantidadLetras + " letras");</code></pre>
        </div>
    `;
}

// Función para limpiar
function limpiar() {
    const input = document.getElementById('palabraInput');
    input.value = '';
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>🔤 Ingresa una palabra para contar sus letras</h3>
        <p>💡 <strong>¿Cómo funciona este ejercicio?</strong></p>
        <p><strong>¿Qué hace el programa?</strong> Cuenta la cantidad de letras que tiene una palabra.</p>
        <p><strong>Proceso:</strong></p>
        <ul>
            <li>📝 Recibir una palabra del usuario</li>
            <li>🔢 Usar la propiedad .length para obtener la longitud</li>
            <li>📊 Mostrar el total de caracteres</li>
            <li>🔍 Análisis detallado de la palabra</li>
        </ul>
        <p><strong>Ejemplo:</strong> "Programación" tiene 12 letras</p>
        
        <div class="logica-ejercicio">
            <h4>🧠 Lógica del Ejercicio:</h4>
            <pre><code>let palabra = prompt("Ingresa una palabra");
let cantidadLetras = palabra.length;

alert("La palabra '" + palabra + "' tiene " + cantidadLetras + " letras");</code></pre>
        </div>
    `;
    
    input.focus();
}

// Permitir usar Enter para contar letras
document.getElementById('palabraInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        contarLetras();
    }
});

// Contador en tiempo real mientras escribe
document.getElementById('palabraInput').addEventListener('input', function(e) {
    const palabra = e.target.value;
    if (palabra.length > 0) {
        const contador = document.querySelector('.contador-tiempo-real');
        if (!contador) {
            const div = document.createElement('div');
            div.className = 'contador-tiempo-real';
            div.style.cssText = 'margin-top: 10px; padding: 10px; background: #f0f8ff; border-radius: 5px; font-size: 14px;';
            e.target.parentNode.appendChild(div);
        }
        document.querySelector('.contador-tiempo-real').innerHTML = 
            `📊 Caracteres actuales: <strong>${palabra.length}</strong>`;
    } else {
        const contador = document.querySelector('.contador-tiempo-real');
        if (contador) contador.remove();
    }
});

// Enfocar el input al cargar la página
window.addEventListener('load', function() {
    document.getElementById('palabraInput').focus();
});