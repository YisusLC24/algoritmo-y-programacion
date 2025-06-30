// Ejercicio 3: Clasificación de Notas
// Función principal para clasificar la nota

function clasificarNota() {
    // Obtener el valor de la nota
    const notaInput = document.getElementById('nota');
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado una nota
    if (!notaInput.value.trim()) {
        mostrarError("Por favor, ingresa una nota");
        return;
    }
    
    const nota = parseFloat(notaInput.value);
    
    // Validar que la nota esté en el rango correcto
    if (isNaN(nota) || nota < 0 || nota > 10) {
        mostrarError("La nota debe estar entre 0 y 10");
        return;
    }
    
    // Lógica de clasificación
    let clasificacion = "";
    let emoji = "";
    let mensaje = "";
    let colorClass = "";
    
    if (nota >= 7) {
        clasificacion = "Aprobado";
        emoji = "🎉";
        mensaje = "¡Felicitaciones! Has aprobado la materia";
        colorClass = "success";
    } else if (nota >= 5) {
        clasificacion = "Supletorio";
        emoji = "⚠️";
        mensaje = "Tienes derecho a rendir examen supletorio";
        colorClass = "warning";
    } else {
        clasificacion = "Reprobado";
        emoji = "❌";
        mensaje = "Debes repetir la materia";
        colorClass = "error";
    }
    
    // Mostrar el resultado
    mostrarResultado(nota, clasificacion, emoji, mensaje, colorClass);
    
    // Agregar animación
    resultadoDiv.style.animation = 'none';
    setTimeout(() => {
        resultadoDiv.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

function mostrarResultado(nota, clasificacion, emoji, mensaje, colorClass) {
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = `
        <div class="resultado-content ${colorClass}">
            <div class="resultado-header">
                <span class="resultado-emoji">${emoji}</span>
                <h3>Nota: ${nota}</h3>
            </div>
            <div class="resultado-body">
                <h2>Clasificación: ${clasificacion}</h2>
                <p>${mensaje}</p>
            </div>
            <div class="resultado-details">
                <h4>Detalles de la evaluación:</h4>
                <ul>
                    <li><strong>Nota ingresada:</strong> ${nota} puntos</li>
                    <li><strong>Estado:</strong> ${clasificacion}</li>
                    <li><strong>Criterio:</strong> ${getCriterio(nota)}</li>
                </ul>
            </div>
        </div>
    `;
}

function getCriterio(nota) {
    if (nota >= 7) {
        return "Nota >= 7.0 (Aprobado)";
    } else if (nota >= 5) {
        return "5.0 <= Nota < 7.0 (Supletorio)";
    } else {
        return "Nota < 5.0 (Reprobado)";
    }
}

function mostrarError(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="resultado-content error">
            <div class="resultado-header">
                <span class="resultado-emoji">⚠️</span>
                <h3>Error</h3>
            </div>
            <div class="resultado-body">
                <p>${mensaje}</p>
            </div>
        </div>
    `;
}

function limpiar() {
    const notaInput = document.getElementById('nota');
    const resultadoDiv = document.getElementById('resultado');
    
    notaInput.value = '';
    resultadoDiv.innerHTML = `
        <p>📝 Ingresa una nota para ver la clasificación</p>
    `;
    
    // Enfocar el input
    notaInput.focus();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const notaInput = document.getElementById('nota');
    
    // Permitir clasificar con Enter
    notaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            clasificarNota();
        }
    });
    
    // Validación en tiempo real
    notaInput.addEventListener('input', function() {
        const valor = parseFloat(this.value);
        if (valor < 0) {
            this.value = 0;
        } else if (valor > 10) {
            this.value = 10;
        }
    });
});

// Función para mostrar ejemplos
function mostrarEjemplos() {
    const ejemplos = [
        { nota: 9.5, resultado: "Aprobado" },
        { nota: 7.0, resultado: "Aprobado" },
        { nota: 6.5, resultado: "Supletorio" },
        { nota: 5.0, resultado: "Supletorio" },
        { nota: 4.5, resultado: "Reprobado" },
        { nota: 2.0, resultado: "Reprobado" }
    ];
    
    console.log("Ejemplos de clasificación:");
    ejemplos.forEach(ejemplo => {
        console.log(`Nota: ${ejemplo.nota} → ${ejemplo.resultado}`);
    });
}