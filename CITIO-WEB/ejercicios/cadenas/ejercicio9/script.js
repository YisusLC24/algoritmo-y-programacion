// Ejercicio 9: Contar Letra Específica
// Función principal para contar una letra específica en el texto
function contarLetra() {
    const texto = document.getElementById('texto').value;
    const letra = document.getElementById('letra').value;
    const distinguirMayusculas = document.getElementById('distinguirMayusculas').checked;
    const resultadoDiv = document.getElementById('resultado');
    const resultadoContent = document.getElementById('resultadoContent');

    // Validar que ambos campos estén llenos
    if (!texto.trim()) {
        alert('⚠️ Por favor, ingresa un texto para analizar.');
        document.getElementById('texto').focus();
        return;
    }

    if (!letra) {
        alert('⚠️ Por favor, ingresa la letra que quieres buscar.');
        document.getElementById('letra').focus();
        return;
    }

    // Validar que sea solo una letra
    if (letra.length !== 1) {
        alert('⚠️ Por favor, ingresa solo una letra.');
        document.getElementById('letra').focus();
        return;
    }

    // Preparar texto y letra para búsqueda
    let textoAnalizar = distinguirMayusculas ? texto : texto.toLowerCase();
    let letraBuscar = distinguirMayusculas ? letra : letra.toLowerCase();

    // Contar apariciones y guardar posiciones
    let contador = 0;
    let posiciones = [];
    
    for (let i = 0; i < textoAnalizar.length; i++) {
        if (textoAnalizar[i] === letraBuscar) {
            contador++;
            posiciones.push(i + 1); // +1 para mostrar posición humana (no índice)
        }
    }

    // Crear visualización del texto con la letra resaltada
    const textoResaltado = crearTextoResaltado(texto, letra, distinguirMayusculas);

    // Generar resultado
    let resultado = `
        <div class="contador-resultado">
            <div class="resultado-principal">
                <h4>🎯 Resultado del Conteo:</h4>
                <div class="contador-display">
                    <span class="letra-buscada">"${letra}"</span>
                    <span class="contador-numero">${contador}</span>
                    <span class="contador-texto">${contador === 1 ? 'vez' : 'veces'}</span>
                </div>
            </div>

            <div class="detalles-busqueda">
                <div class="info-busqueda">
                    <p><strong>🔍 Letra buscada:</strong> "${letra}"</p>
                    <p><strong>📏 Longitud del texto:</strong> ${texto.length} caracteres</p>
                    <p><strong>⚙️ Sensible a mayúsculas:</strong> ${distinguirMayusculas ? 'Sí' : 'No'}</p>
                    <p><strong>📊 Apariciones encontradas:</strong> ${contador}</p>
                </div>
            </div>
        </div>
    `;

    // Mostrar posiciones si se encontraron apariciones
    if (contador > 0) {
        resultado += `
            <div class="posiciones-section">
                <h4>📍 Posiciones donde aparece:</h4>
                <div class="posiciones-lista">
                    ${posiciones.map(pos => `<span class="posicion-item">Pos ${pos}</span>`).join('')}
                </div>
            </div>
        `;

        // Mostrar texto resaltado
        resultado += `
            <div class="texto-resaltado-section">
                <h4>📝 Texto con letra resaltada:</h4>
                <div class="texto-resaltado">
                    ${textoResaltado}
                </div>
            </div>
        `;
    } else {
        resultado += `
            <div class="no-encontrado">
                <h4>❌ Letra no encontrada</h4>
                <p>La letra "${letra}" no aparece en el texto ingresado.</p>
            </div>
        `;
    }

    // Estadísticas adicionales
    const estadisticas = calcularEstadisticas(texto, letra, distinguirMayusculas);
    resultado += `
        <div class="estadisticas-adicionales">
            <h4>📊 Estadísticas Adicionales:</h4>
            <div class="stats-grid">
                <div class="stat-item">
                    <strong>Total caracteres:</strong> ${texto.length}
                </div>
                <div class="stat-item">
                    <strong>Caracteres sin espacios:</strong> ${texto.replace(/\s/g, '').length}
                </div>
                <div class="stat-item">
                    <strong>Porcentaje de aparición:</strong> ${estadisticas.porcentaje}%
                </div>
                <div class="stat-item">
                    <strong>Frecuencia:</strong> ${estadisticas.frecuencia}
                </div>
            </div>
        </div>
    `;

    // Mostrar resultado
    resultadoContent.innerHTML = resultado;
    resultadoDiv.style.display = 'block';
    
    // Scroll suave hacia el resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función para crear texto con letra resaltada
function crearTextoResaltado(texto, letra, distinguirMayusculas) {
    let resultado = '';
    let letraBuscar = distinguirMayusculas ? letra : letra.toLowerCase();
    
    for (let i = 0; i < texto.length; i++) {
        let caracterActual = texto[i];
        let caracterComparar = distinguirMayusculas ? caracterActual : caracterActual.toLowerCase();
        
        if (caracterComparar === letraBuscar) {
            resultado += `<span class="letra-destacada">${caracterActual}</span>`;
        } else {
            resultado += caracterActual;
        }
    }
    
    return resultado;
}

// Función para calcular estadísticas adicionales
function calcularEstadisticas(texto, letra, distinguirMayusculas) {
    let textoAnalizar = distinguirMayusculas ? texto : texto.toLowerCase();
    let letraBuscar = distinguirMayusculas ? letra : letra.toLowerCase();
    
    let contador = 0;
    for (let char of textoAnalizar) {
        if (char === letraBuscar) contador++;
    }
    
    const porcentaje = texto.length > 0 ? ((contador / texto.length) * 100).toFixed(2) : 0;
    const frecuencia = contador > 0 ? (texto.length / contador).toFixed(2) : 0;
    
    return {
        porcentaje: porcentaje,
        frecuencia: frecuencia
    };
}

// Función para limpiar los campos
function limpiar() {
    document.getElementById('texto').value = '';
    document.getElementById('letra').value = '';
    document.getElementById('distinguirMayusculas').checked = false;
    document.getElementById('resultado').style.display = 'none';
    
    // Focus en el primer campo
    document.getElementById('texto').focus();
}

// Event listeners para mejor UX
document.addEventListener('DOMContentLoaded', function() {
    const textoInput = document.getElementById('texto');
    const letraInput = document.getElementById('letra');
    const contarBtn = document.getElementById('contarBtn');

    // Permitir ejecutar con Enter
    textoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            letraInput.focus();
        }
    });

    letraInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            contarLetra();
        }
    });

    // Validar que solo se ingrese una letra
    letraInput.addEventListener('input', function(e) {
        let valor = e.target.value;
        
        // Mantener solo el último carácter si se ingresa más de uno
        if (valor.length > 1) {
            e.target.value = valor.slice(-1);
        }
        
        // Opcional: validar que sea solo letra
        if (valor && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]$/.test(valor)) {
            // Puedes descomentar esta línea si quieres restringir solo a letras
            // e.target.value = '';
            // alert('⚠️ Por favor, ingresa solo letras.');
        }
    });

    // Contador en tiempo real mientras escribe
    textoInput.addEventListener('input', function() {
        const letra = letraInput.value;
        if (letra && textoInput.value) {
            // Vista previa del conteo (opcional)
            console.log(`Conteo en tiempo real de "${letra}": ${contarEnTiempoReal(textoInput.value, letra)}`);
        }
    });

    letraInput.addEventListener('input', function() {
        const texto = textoInput.value;
        if (letraInput.value && texto) {
            // Vista previa del conteo (opcional)
            console.log(`Conteo en tiempo real de "${letraInput.value}": ${contarEnTiempoReal(texto, letraInput.value)}`);
        }
    });

    // Auto-focus en el primer campo al cargar
    textoInput.focus();
});

// Función auxiliar para conteo en tiempo real
function contarEnTiempoReal(texto, letra) {
    if (!texto || !letra) return 0;
    
    let contador = 0;
    let textoAnalizar = texto.toLowerCase();
    let letraBuscar = letra.toLowerCase();
    
    for (let char of textoAnalizar) {
        if (char === letraBuscar) contador++;
    }
    
    return contador;
}