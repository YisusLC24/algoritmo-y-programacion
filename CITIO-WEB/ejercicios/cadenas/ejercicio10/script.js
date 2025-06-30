function dividirOracion() {
    const oracion = document.getElementById('oracion').value.trim();
    const resultado = document.getElementById('resultado');

    if (oracion === '') {
        resultado.innerHTML = `
            <div class="error-icon">⚠️</div>
            <div class="error-text">
                <strong>Error: Debes ingresar una oración</strong>
                <p>Por favor, escribe una oración antes de continuar.</p>
            </div>
        `;
        return;
    }

    // Dividir la oración en palabras
    let palabras = oracion.split(' ');
    
    // Filtrar palabras vacías (espacios extra)
    let palabrasLimpias = palabras.filter(palabra => palabra.length > 0);
    
    // Contar diferentes tipos de elementos
    let totalPalabras = palabrasLimpias.length;
    let palabrasConNumeros = palabrasLimpias.filter(palabra => /\d/.test(palabra)).length;
    let palabrasConSignos = palabrasLimpias.filter(palabra => /[.,;:!?¡¿"'()[\]{}]/.test(palabra)).length;
    let palabrasMayores5 = palabrasLimpias.filter(palabra => palabra.length > 5).length;

    // Crear el resultado
    let resultadoHTML = `
        <div class="success-icon">✅</div>
        <div class="success-text">
            <strong>Oración dividida exitosamente</strong>
            
            <div class="estadisticas-grid">
                <div class="stat-item">
                    <div class="stat-number">${totalPalabras}</div>
                    <div class="stat-label">Total de Palabras</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${palabrasConNumeros}</div>
                    <div class="stat-label">Con Números</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${palabrasConSignos}</div>
                    <div class="stat-label">Con Signos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${palabrasMayores5}</div>
                    <div class="stat-label">Mayores a 5 letras</div>
                </div>
            </div>

            <div class="palabras-container">
                <h4>📝 Palabras encontradas:</h4>
                <div class="palabras-grid">
    `;

    // Agregar cada palabra con su información
    palabrasLimpias.forEach((palabra, index) => {
        let tiposPalabra = [];
        
        if (/\d/.test(palabra)) tiposPalabra.push('números');
        if (/[.,;:!?¡¿"'()[\]{}]/.test(palabra)) tiposPalabra.push('signos');
        if (palabra.length > 5) tiposPalabra.push('larga');
        if (/^[A-ZÁÉÍÓÚÑ]/.test(palabra)) tiposPalabra.push('mayúscula');
        
        let descripcionTipos = tiposPalabra.length > 0 ? 
            `<small class="palabra-tipos">(${tiposPalabra.join(', ')})</small>` : '';

        resultadoHTML += `
            <div class="palabra-item">
                <div class="palabra-numero">${index + 1}</div>
                <div class="palabra-contenido">
                    <div class="palabra-texto">"${palabra}"</div>
                    <div class="palabra-info">
                        ${palabra.length} caracteres ${descripcionTipos}
                    </div>
                </div>
            </div>
        `;
    });

    resultadoHTML += `
                </div>
            </div>

            <div class="proceso-detalle">
                <h4>🔍 Proceso de división:</h4>
                <div class="proceso-pasos">
                    <div class="paso">
                        <span class="paso-numero">1</span>
                        <div class="paso-contenido">
                            <strong>Texto original:</strong><br>
                            "${oracion}"
                        </div>
                    </div>
                    <div class="paso">
                        <span class="paso-numero">2</span>
                        <div class="paso-contenido">
                            <strong>División por espacios:</strong><br>
                            [${palabras.map(p => `"${p}"`).join(', ')}]
                        </div>
                    </div>
                    <div class="paso">
                        <span class="paso-numero">3</span>
                        <div class="paso-contenido">
                            <strong>Filtrado (sin espacios vacíos):</strong><br>
                            [${palabrasLimpias.map(p => `"${p}"`).join(', ')}]
                        </div>
                    </div>
                    <div class="paso">
                        <span class="paso-numero">4</span>
                        <div class="paso-contenido">
                            <strong>Total de palabras válidas:</strong> ${totalPalabras}
                        </div>
                    </div>
                </div>
            </div>

            <div class="metodos-usados">
                <h4>⚙️ Métodos JavaScript utilizados:</h4>
                <ul>
                    <li><code>.split(' ')</code> - Divide el string por espacios</li>
                    <li><code>.filter()</code> - Filtra elementos vacíos</li>
                    <li><code>.length</code> - Cuenta caracteres y elementos</li>
                    <li><code>.test()</code> - Verifica patrones con regex</li>
                    <li><code>.forEach()</code> - Itera sobre cada palabra</li>
                    <li><code>.map()</code> - Transforma elementos del array</li>
                </ul>
            </div>
        </div>
    `;

    resultado.innerHTML = resultadoHTML;
}

function limpiar() {
    document.getElementById('oracion').value = '';
    document.getElementById('resultado').innerHTML = `
        <div class="info-icon">💡</div>
        <div class="info-text">
            <strong>Ingresa una oración para dividirla en palabras</strong>
            <div class="explicacion">
                <p><strong>¿Qué es dividir una oración?</strong> Es separar el texto en palabras individuales usando espacios como delimitadores.</p>
                <p><strong>Proceso:</strong></p>
                <ol>
                    <li>🔤 Usar el método .split(" ") para dividir por espacios</li>
                    <li>🧹 Eliminar palabras vacías (espacios extra)</li>
                    <li>📊 Contar el total de palabras</li>
                    <li>📝 Mostrar cada palabra individualmente</li>
                </ol>
                <p><strong>Ejemplo:</strong> "Hola mundo" → ["Hola", "mundo"] → 2 palabras</p>
            </div>
        </div>
    `;
    document.getElementById('oracion').focus();
}

// Enfocar el input al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('oracion').focus();
});