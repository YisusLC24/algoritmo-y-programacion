// Ejercicio 7: Saludos por Horario
// Función principal para saludar según la hora

function saludarPorHorario() {
    const horaInput = document.getElementById('hora');
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado una hora
    if (!horaInput.value.trim()) {
        mostrarError("Por favor, ingresa una hora válida", resultadoDiv);
        return;
    }
    
    const hora = parseInt(horaInput.value);
    
    // Validar rango de hora (0-23)
    if (isNaN(hora) || hora < 0 || hora > 23) {
        mostrarError("La hora debe estar entre 0 y 23", resultadoDiv);
        return;
    }
    
    // Determinar el saludo según la hora
    let saludo = "";
    let emoji = "";
    let colorClass = "";
    let periodo = "";
    let descripcion = "";
    
    if (hora >= 0 && hora <= 11) {
        saludo = "¡Buenos días!";
        emoji = "🌅";
        colorClass = "morning";
        periodo = "Mañana";
        descripcion = "Es hora de comenzar el día con energía";
    } else if (hora >= 12 && hora <= 17) {
        saludo = "¡Buenas tardes!";
        emoji = "☀️";
        colorClass = "afternoon";
        periodo = "Tarde";
        descripcion = "Momento perfecto para ser productivo";
    } else if (hora >= 18 && hora <= 23) {
        saludo = "¡Buenas noches!";
        emoji = "🌙";
        colorClass = "night";
        periodo = "Noche";
        descripcion = "Tiempo de relajarse y descansar";
    }
    
    // Formatear la hora para mostrar
    const horaFormateada = formatearHora(hora);
    
    // Mostrar resultado
    resultadoDiv.innerHTML = `
        <div class="resultado-exitoso ${colorClass}">
            <div class="saludo-principal">
                <h2>${emoji} ${saludo}</h2>
                <p class="hora-display">Son las <strong>${horaFormateada}</strong></p>
            </div>
            <div class="info-horario">
                <div class="periodo-info">
                    <span class="periodo-badge">${periodo}</span>
                    <p>${descripcion}</p>
                </div>
                <div class="rango-info">
                    <small>
                        ${getRangoHorario(hora)}
                    </small>
                </div>
            </div>
        </div>
    `;
    
    // Efecto visual
    resultadoDiv.classList.add('animate-result');
    setTimeout(() => {
        resultadoDiv.classList.remove('animate-result');
    }, 600);
}

// Función para formatear la hora
function formatearHora(hora) {
    if (hora === 0) return "12:00 AM (medianoche)";
    if (hora === 12) return "12:00 PM (mediodía)";
    if (hora < 12) return `${hora}:00 AM`;
    return `${hora - 12}:00 PM`;
}

// Función para obtener el rango horario
function getRangoHorario(hora) {
    if (hora >= 0 && hora <= 11) {
        return "Rango: 0:00 - 11:59 (Madrugada y Mañana)";
    } else if (hora >= 12 && hora <= 17) {
        return "Rango: 12:00 - 17:59 (Mediodía y Tarde)";
    } else {
        return "Rango: 18:00 - 23:59 (Noche)";
    }
}

// Función para obtener la hora actual del sistema
function horaActual() {
    const ahora = new Date();
    const horaActual = ahora.getHours();
    
    // Establecer la hora actual en el input
    document.getElementById('hora').value = horaActual;
    
    // Ejecutar automáticamente el saludo
    saludarPorHorario();
    
    // Mostrar información adicional
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    
    setTimeout(() => {
        const resultadoDiv = document.getElementById('resultado');
        const infoAdicional = document.createElement('div');
        infoAdicional.className = 'info-tiempo-real';
        infoAdicional.innerHTML = `
            <p style="font-size: 0.9em; color: #666; margin-top: 10px;">
                ⏰ Hora exacta del sistema: ${horaActual}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}
            </p>
        `;
        resultadoDiv.appendChild(infoAdicional);
    }, 300);
}

// Función para validar entrada en tiempo real
function validarHora() {
    const horaInput = document.getElementById('hora');
    const valor = parseInt(horaInput.value);
    
    // Cambiar color del input según la validez
    if (horaInput.value === '') {
        horaInput.style.borderColor = '#ddd';
    } else if (isNaN(valor) || valor < 0 || valor > 23) {
        horaInput.style.borderColor = '#e74c3c';
    } else {
        horaInput.style.borderColor = '#27ae60';
        // Auto-ejecutar si la hora es válida
        setTimeout(() => {
            saludarPorHorario();
        }, 500);
    }
}

// Función para mostrar errores
function mostrarError(mensaje, elemento) {
    elemento.innerHTML = `
        <div class="resultado-error">
            <p>❌ ${mensaje}</p>
            <small>Ingresa un número entre 0 y 23</small>
        </div>
    `;
}

// Función para limpiar
function limpiar() {
    document.getElementById('hora').value = '';
    document.getElementById('hora').style.borderColor = '#ddd';
    document.getElementById('resultado').innerHTML = `
        <p>🕐 Ingresa una hora para ver el saludo apropiado</p>
    `;
    
    // Focus en el input
    document.getElementById('hora').focus();
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Focus automático en el input
    document.getElementById('hora').focus();
    
    // Mensaje de bienvenida con hora actual
    const ahora = new Date();
    const horaActual = ahora.getHours();
    let saludoInicial = "";
    
    if (horaActual >= 0 && horaActual <= 11) {
        saludoInicial = "¡Buenos días! 🌅";
    } else if (horaActual >= 12 && horaActual <= 17) {
        saludoInicial = "¡Buenas tardes! ☀️";
    } else {
        saludoInicial = "¡Buenas noches! 🌙";
    }
    
    console.log(`${saludoInicial} Son las ${horaActual}:00`);
});

// CSS adicional para los estilos específicos de este ejercicio
const estilosEjercicio7 = `
    .morning {
        background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
        color: #2d3436;
    }
    
    .afternoon {
        background: linear-gradient(135deg, #fdcb6e, #e17055);
        color: #2d3436;
    }
    
    .night {
        background: linear-gradient(135deg, #6c5ce7, #a29bfe);
        color: #2d3436;
    }
    
    .saludo-principal h2 {
        font-size: 2em;
        margin-bottom: 10px;
    }
    
    .hora-display {
        font-size: 1.2em;
        margin-bottom: 15px;
    }
    
    .periodo-badge {
        background: rgba(255,255,255,0.3);
        padding: 5px 15px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9em;
    }
    
    .info-horario {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255,255,255,0.3);
    }
    
    .rango-info {
        margin-top: 10px;
        opacity: 0.8;
    }
    
    .animate-result {
        animation: slideIn 0.6s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateY(-10px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .info-tiempo-real {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .btn-info {
        background: linear-gradient(135deg, #00b894, #00cec9);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1em;
        transition: all 0.3s ease;
    }
    
    .btn-info:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0,184,148,0.3);
    }
`;

// Insertar estilos
const styleSheet = document.createElement('style');
styleSheet.textContent = estilosEjercicio7;
document.head.appendChild(styleSheet);