// Ejercicio 5: Iniciales de Nombre
// Pedir un nombre completo y mostrar solo las iniciales

function obtenerIniciales() {
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const resultado = document.getElementById('resultado');
    
    // Validar que el campo tenga contenido
    if (nombreCompleto.trim() === '') {
        resultado.innerHTML = `
            <p>⚠️ Por favor, ingresa un nombre completo para obtener las iniciales</p>
        `;
        return;
    }
    
    // Dividir el nombre en palabras y filtrar espacios vacíos
    const palabras = nombreCompleto.trim().split(' ').filter(palabra => palabra.trim() !== '');
    
    // Generar iniciales
    let iniciales = '';
    let inicialesArray = [];
    
    for (let palabra of palabras) {
        const inicial = palabra[0].toUpperCase();
        iniciales += inicial + '.';
        inicialesArray.push({
            palabra: palabra,
            inicial: inicial
        });
    }
    
    // Análisis del nombre
    const analisis = analizarNombre(nombreCompleto, palabras);
    
    // Mostrar resultado
    resultado.innerHTML = `
        <div class="resultado-activo">
            <div class="iniciales-display">
                <h3>🎯 Iniciales obtenidas:</h3>
                <div class="iniciales-resultado">
                    <span class="iniciales-grandes">${iniciales}</span>
                </div>
            </div>
            
            <div class="nombre-analisis">
                <h4>📝 Análisis del nombre:</h4>
                <div class="nombre-original">
                    <strong>Nombre completo:</strong> "${nombreCompleto}"
                </div>
                
                <div class="estadisticas-nombre">
                    <div class="stat">
                        <span class="stat-label">Total de palabras:</span>
                        <span class="stat-value">${palabras.length}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Total de caracteres:</span>
                        <span class="stat-value">${nombreCompleto.length}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Caracteres sin espacios:</span>
                        <span class="stat-value">${nombreCompleto.replace(/\s/g, '').length}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Palabra más larga:</span>
                        <span class="stat-value">${analisis.palabraMasLarga} (${analisis.longitudMaxima} letras)</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Palabra más corta:</span>
                        <span class="stat-value">${analisis.palabraMasCorta} (${analisis.longitudMinima} letras)</span>
                    </div>
                </div>
            </div>
            
            <div class="palabras-detalle">
                <h4>🔤 Desglose por palabras:</h4>
                <div class="palabras-grid">
                    ${inicialesArray.map((item, index) => `
                        <div class="palabra-item">
                            <div class="palabra-numero">Palabra ${index + 1}</div>
                            <div class="palabra-texto">"${item.palabra}"</div>
                            <div class="palabra-inicial">→ ${item.inicial}</div>
                            <div class="palabra-info">${item.palabra.length} ${item.palabra.length === 1 ? 'letra' : 'letras'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="iniciales-variaciones">
                <h4>🎨 Variaciones de iniciales:</h4>
                <div class="variaciones-grid">
                    <div class="variacion">
                        <span class="variacion-label">Con puntos:</span>
                        <span class="variacion-valor">${iniciales}</span>
                    </div>
                    <div class="variacion">
                        <span class="variacion-label">Sin puntos:</span>
                        <span class="variacion-valor">${iniciales.replace(/\./g, '')}</span>
                    </div>
                    <div class="variacion">
                        <span class="variacion-label">Con espacios:</span>
                        <span class="variacion-valor">${iniciales.replace(/\./g, ' ').trim()}</span>
                    </div>
                    <div class="variacion">
                        <span class="variacion-label">Con guiones:</span>
                        <span class="variacion-valor">${iniciales.replace(/\./g, '-')}</span>
                    </div>
                </div>
            </div>
            
            <div class="iniciales-visuales">
                <h4>🎯 Iniciales visuales:</h4>
                <div class="iniciales-cuadros">
                    ${inicialesArray.map(item => `
                        <div class="inicial-cuadro" title="${item.palabra}">
                            ${item.inicial}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function analizarNombre(nombreCompleto, palabras) {
    let palabraMasLarga = '';
    let palabraMasCorta = palabras[0] || '';
    let longitudMaxima = 0;
    let longitudMinima = palabras[0]?.length || 0;
    
    for (let palabra of palabras) {
        if (palabra.length > longitudMaxima) {
            longitudMaxima = palabra.length;
            palabraMasLarga = palabra;
        }
        if (palabra.length < longitudMinima) {
            longitudMinima = palabra.length;
            palabraMasCorta = palabra;
        }
    }
    
    return {
        palabraMasLarga,
        palabraMasCorta,
        longitudMaxima,
        longitudMinima
    };
}

function limpiar() {
    document.getElementById('nombreCompleto').value = '';
    document.getElementById('resultado').innerHTML = `
        <p>📝 Ingresa un nombre completo para obtener las iniciales</p>
        <div class="info-section">
            <h3>💡 ¿Cómo funciona este ejercicio?</h3>
            <p><strong>¿Qué son las iniciales?</strong> Las iniciales son las primeras letras de cada palabra del nombre, generalmente se muestran en mayúsculas.</p>
            
            <div class="proceso">
                <h4>📋 Proceso:</h4>
                <ul>
                    <li>📝 Leer el nombre completo del usuario</li>
                    <li>✂️ Dividir el nombre en palabras usando <code>split(' ')</code></li>
                    <li>🔤 Obtener la primera letra de cada palabra</li>
                    <li>🔠 Convertir cada inicial a mayúscula</li>
                    <li>🔗 Unir las iniciales con puntos</li>
                </ul>
            </div>
            
            <div class="ejemplo">
                <h4>🌟 Ejemplo:</h4>
                <p>Nombre: "Juan Carlos Pérez González"</p>
                <p>Iniciales: "J.C.P.G."</p>
            </div>
            
            <div class="logica">
                <h4>💻 Lógica del Ejercicio:</h4>
                <pre><code>let nombreCompleto = prompt("Ingresa tu nombre completo");
let palabras = nombreCompleto.split(' ');
let iniciales = '';

for (let palabra of palabras) {
    if (palabra.trim() !== '') {
        iniciales += palabra[0].toUpperCase() + '.';
    }
}

console.log("Iniciales: " + iniciales);</code></pre>
            </div>
        </div>
    `;
}

// Permitir ejecutar con Enter
document.addEventListener('DOMContentLoaded', function() {
    const nombreCompleto = document.getElementById('nombreCompleto');
    
    nombreCompleto.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            obtenerIniciales();
        }
    });
    
    // Auto-capitalizar mientras escribe (opcional)
    nombreCompleto.addEventListener('input', function(e) {
        // Esta funcionalidad es opcional, puedes quitarla si no la quieres
        // Capitaliza automáticamente la primera letra de cada palabra
        let valor = e.target.value;
        let palabras = valor.split(' ');
        let valorCapitalizado = palabras.map(palabra => {
            if (palabra.length > 0) {
                return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
            }
            return palabra;
        }).join(' ');
        
        // Solo actualiza si hay cambios para evitar conflictos con el cursor
        if (valor !== valorCapitalizado) {
            e.target.value = valorCapitalizado;
        }
    });
});