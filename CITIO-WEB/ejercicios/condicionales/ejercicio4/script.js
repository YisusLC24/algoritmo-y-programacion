// Ejercicio 4: Clasificación de Días de la Semana
// Función principal para clasificar el día

function clasificarDia() {
    // Obtener el valor del día
    const diaInput = document.getElementById('dia');
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado un día
    if (!diaInput.value.trim()) {
        mostrarError("Por favor, selecciona o escribe un día de la semana");
        return;
    }
    
    // Normalizar el input (convertir a minúsculas y quitar espacios)
    let dia = diaInput.value.trim().toLowerCase();
    
    // Normalizar acentos y variaciones
    dia = normalizarDia(dia);
    
    // Validar que sea un día válido
    const diasValidos = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    
    if (!diasValidos.includes(dia)) {
        mostrarError("Por favor, ingresa un día válido de la semana");
        return;
    }
    
    // Lógica de clasificación
    let clasificacion = "";
    let emoji = "";
    let mensaje = "";
    let colorClass = "";
    let actividades = [];
    
    if (dia === "sábado" || dia === "domingo") {
        clasificacion = "Fin de Semana";
        emoji = "🎉";
        mensaje = "¡Es fin de semana! Tiempo de descansar y divertirse";
        colorClass = "weekend";
        actividades = ["Descansar", "Pasar tiempo en familia", "Hobbies", "Salir con amigos", "Deportes"];
    } else {
        // lunes, martes, miércoles, jueves, viernes
        clasificacion = "Entre Semana";
        emoji = "💼";
        mensaje = "Es un día entre semana. ¡Hora de trabajar y estudiar!";
        colorClass = "weekday";
        actividades = ["Trabajar", "Estudiar", "Reuniones", "Tareas", "Planificar"];
    }
    
    // Mostrar el resultado
    mostrarResultado(dia, clasificacion, emoji, mensaje, colorClass, actividades);
    
    // Agregar animación
    resultadoDiv.style.animation = 'none';
    setTimeout(() => {
        resultadoDiv.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
    
    // Actualizar calendario visual
    actualizarCalendario(dia);
}

function normalizarDia(dia) {
    // Manejar diferentes formas de escribir los días
    const variaciones = {
        'lun': 'lunes',
        'mar': 'martes',
        'mie': 'miércoles',
        'miercoles': 'miércoles',
        'jue': 'jueves',
        'vie': 'viernes',
        'sab': 'sábado',
        'sabado': 'sábado',
        'dom': 'domingo'
    };
    
    return variaciones[dia] || dia;
}

function mostrarResultado(dia, clasificacion, emoji, mensaje, colorClass, actividades) {
    const resultadoDiv = document.getElementById('resultado');
    
    // Capitalizar el nombre del día para mostrar
    const diaCapitalizado = dia.charAt(0).toUpperCase() + dia.slice(1);
    
    resultadoDiv.innerHTML = `
        <div class="resultado-content ${colorClass}">
            <div class="resultado-header">
                <span class="resultado-emoji">${emoji}</span>
                <h3>${diaCapitalizado}</h3>
            </div>
            <div class="resultado-body">
                <h2>Clasificación: ${clasificacion}</h2>
                <p>${mensaje}</p>
            </div>
            <div class="resultado-details">
                <h4>Detalles de la clasificación:</h4>
                <ul>
                    <li><strong>Día seleccionado:</strong> ${diaCapitalizado}</li>
                    <li><strong>Tipo:</strong> ${clasificacion}</li>
                    <li><strong>Criterio:</strong> ${getCriterio(dia)}</li>
                </ul>
                <h4>Actividades típicas:</h4>
                <div class="actividades-grid">
                    ${actividades.map(actividad => `<span class="actividad-tag">${actividad}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function getCriterio(dia) {
    if (dia === "sábado" || dia === "domingo") {
        return "Sábado o Domingo (Fin de Semana)";
    } else {
        return "Lunes a Viernes (Entre Semana)";
    }
}

function actualizarCalendario(diaSeleccionado) {
    const diasElementos = document.querySelectorAll('.dia-semana');
    const mapaDias = {
        'lunes': 0,
        'martes': 1,
        'miércoles': 2,
        'jueves': 3,
        'viernes': 4,
        'sábado': 5,
        'domingo': 6
    };
    
    // Remover clase activa de todos los días
    diasElementos.forEach(el => el.classList.remove('dia-activo'));
    
    // Agregar clase activa al día seleccionado
    const indice = mapaDias[diaSeleccionado];
    if (indice !== undefined) {
        diasElementos[indice].classList.add('dia-activo');
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
                <p><small>Días válidos: Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo</small></p>
            </div>
        </div>
    `;
}

function limpiar() {
    const diaInput = document.getElementById('dia');
    const diaSelect = document.getElementById('diaSelect');
    const resultadoDiv = document.getElementById('resultado');
    
    diaInput.value = '';
    diaSelect.value = '';
    resultadoDiv.innerHTML = `
        <p>📅 Selecciona o escribe un día para ver si es fin de semana o entre semana</p>
    `;
    
    // Remover clases activas del calendario
    document.querySelectorAll('.dia-semana').forEach(el => el.classList.remove('dia-activo'));
    
    // Enfocar el select
    diaSelect.focus();
}

function actualizarInput() {
    const diaSelect = document.getElementById('diaSelect');
    const diaInput = document.getElementById('dia');
    
    if (diaSelect.value) {
        diaInput.value = diaSelect.value;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const diaInput = document.getElementById('dia');
    const diaSelect = document.getElementById('diaSelect');
    
    // Permitir clasificar con Enter
    diaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            clasificarDia();
        }
    });
    
    // Sincronizar input con select
    diaInput.addEventListener('input', function() {
        const valor = this.value.toLowerCase();
        // Buscar coincidencia en el select
        const opciones = diaSelect.options;
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].value === valor) {
                diaSelect.value = valor;
                break;
            }
        }
    });
    
    // Agregar event listeners a los días del calendario visual
    document.querySelectorAll('.dia-semana').forEach((elemento, indice) => {
        elemento.addEventListener('click', function() {
            const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
            const diaSeleccionado = dias[indice];
            
            diaInput.value = diaSeleccionado;
            diaSelect.value = diaSeleccionado;
            clasificarDia();
        });
    });
});

// Función para mostrar ejemplos
function mostrarEjemplos() {
    const ejemplos = [
        { dia: "lunes", resultado: "Entre Semana" },
        { dia: "martes", resultado: "Entre Semana" },
        { dia: "miércoles", resultado: "Entre Semana" },
        { dia: "jueves", resultado: "Entre Semana" },
        { dia: "viernes", resultado: "Entre Semana" },
        { dia: "sábado", resultado: "Fin de Semana" },
        { dia: "domingo", resultado: "Fin de Semana" }
    ];
    
    console.log("Ejemplos de clasificación:");
    ejemplos.forEach(ejemplo => {
        console.log(`${ejemplo.dia.charAt(0).toUpperCase() + ejemplo.dia.slice(1)} → ${ejemplo.resultado}`);
    });
}