// ===== EJERCICIO 1: CLASIFICACIÓN POR EDAD =====
// Archivo: ejercicios/condicionales/ejercicio1/script.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Ejercicio 1 - Sistema cargado correctamente');
    inicializarEjercicio();
});

/**
 * Inicializar el ejercicio y sus eventos
 */
function inicializarEjercicio() {
    const inputEdad = document.getElementById('edad');
    
    if (inputEdad) {
        // Evento para presionar Enter
        inputEdad.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                clasificarEdad();
            }
        });
        
        // Limpiar resultado cuando se borra el input
        inputEdad.addEventListener('input', function() {
            if (this.value === '') {
                limpiarResultado();
            }
        });
        
        // Enfocar el input al cargar
        inputEdad.focus();
    }
}

/**
 * FUNCIÓN PRINCIPAL: Clasificar edad según rangos
 */
function clasificarEdad() {
    console.log('🔍 Iniciando clasificación de edad...');
    
    // Obtener elementos del DOM
    const inputEdad = document.getElementById('edad');
    const resultado = document.getElementById('resultado');
    
    // Validar que existan los elementos
    if (!inputEdad || !resultado) {
        console.error('❌ Error: No se encontraron los elementos del DOM');
        return;
    }
    
    // Obtener y validar la edad
    const edadTexto = inputEdad.value.trim();
    
    if (edadTexto === '') {
        mostrarError('⚠️ Por favor, ingresa una edad');
        inputEdad.focus();
        return;
    }
    
    const edad = parseInt(edadTexto);
    
    // Validaciones de edad
    if (isNaN(edad)) {
        mostrarError('⚠️ Por favor, ingresa un número válido');
        inputEdad.focus();
        return;
    }
    
    if (edad < 0) {
        mostrarError('⚠️ La edad no puede ser negativa');
        inputEdad.focus();
        return;
    }
    
    if (edad > 120) {
        mostrarError('⚠️ Por favor, ingresa una edad realista (máximo 120 años)');
        inputEdad.focus();
        return;
    }
    
    // ===== LÓGICA DE CLASIFICACIÓN POR EDAD =====
    let clasificacion = '';
    let emoji = '';
    let mensaje = '';
    let color = '';
    let rango = '';
    
    if (edad >= 0 && edad <= 12) {
        // NIÑO: 0-12 años
        clasificacion = 'Niño/a';
        emoji = '🧒';
        mensaje = '¡Qué emocionante! Estás en la edad perfecta para jugar, aprender y descubrir el mundo.';
        color = '#4CAF50'; // Verde
        rango = '0-12 años';
        
    } else if (edad >= 13 && edad <= 17) {
        // ADOLESCENTE: 13-17 años
        clasificacion = 'Adolescente';
        emoji = '🧑‍🎓';
        mensaje = '¡Genial! Estás en una etapa increíble llena de oportunidades para crecer y definir tu futuro.';
        color = '#2196F3'; // Azul
        rango = '13-17 años';
        
    } else if (edad >= 18 && edad <= 59) {
        // ADULTO: 18-59 años
        clasificacion = 'Adulto/a';
        emoji = '👩‍💼';
        mensaje = '¡Excelente! Estás en la etapa de la vida donde puedes lograr tus metas y hacer realidad tus sueños.';
        color = '#FF9800'; // Naranja
        rango = '18-59 años';
        
    } else if (edad >= 60) {
        // ADULTO MAYOR: 60+ años
        clasificacion = 'Adulto Mayor';
        emoji = '👴';
        mensaje = '¡Maravilloso! Tienes la sabiduría y experiencia que solo los años pueden dar.';
        color = '#9C27B0'; // Púrpura
        rango = '60+ años';
    }
    
    // Crear el HTML del resultado
    const htmlResultado = `
        <div class="resultado-exitoso" style="border-left: 4px solid ${color};">
            <div class="resultado-header">
                <div class="emoji-resultado">${emoji}</div>
                <div class="texto-resultado">
                    <h3 style="color: ${color}; margin: 0;">
                        Clasificación: <strong>${clasificacion}</strong>
                    </h3>
                    <p style="margin: 5px 0; color: #666;">
                        <strong>Edad:</strong> ${edad} años • <strong>Rango:</strong> ${rango}
                    </p>
                </div>
            </div>
            <div class="mensaje-resultado">
                <p style="margin: 15px 0 0 0; line-height: 1.5;">
                    ${mensaje}
                </p>
            </div>
            <div class="detalle-resultado">
                <small style="color: #888; font-style: italic;">
                    💡 Resultado obtenido usando estructuras condicionales (if-else)
                </small>
            </div>
        </div>
    `;
    
    // Mostrar el resultado con animación
    mostrarResultado(htmlResultado, 'success');
    
    console.log(`✅ Clasificación exitosa: ${edad} años → ${clasificacion}`);
}

/**
 * Mostrar resultado con animación
 */
function mostrarResultado(html, tipo) {
    const resultado = document.getElementById('resultado');
    
    // Animación de salida
    resultado.style.opacity = '0';
    resultado.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        resultado.innerHTML = html;
        resultado.className = `resultado-box ${tipo}`;
        
        // Animación de entrada
        resultado.style.transition = 'all 0.3s ease';
        resultado.style.opacity = '1';
        resultado.style.transform = 'translateY(0)';
        
        // Efecto de destacado
        setTimeout(() => {
            resultado.style.boxShadow = '0 4px 20px rgba(76, 175, 80, 0.2)';
        }, 100);
    }, 150);
}

/**
 * Mostrar mensaje de error
 */
function mostrarError(mensaje) {
    const html = `
        <div class="resultado-error">
            <div class="error-icon">⚠️</div>
            <div class="error-texto">
                <p style="margin: 0; color: #d32f2f; font-weight: 500;">
                    ${mensaje}
                </p>
            </div>
        </div>
    `;
    
    mostrarResultado(html, 'error');
    console.log('❌ Error:', mensaje);
}

/**
 * Limpiar el formulario y resultado
 */
function limpiar() {
    console.log('🧹 Limpiando ejercicio...');
    
    // Limpiar input
    const inputEdad = document.getElementById('edad');
    if (inputEdad) {
        inputEdad.value = '';
        inputEdad.focus();
    }
    
    // Limpiar resultado
    limpiarResultado();
    
    console.log('✅ Ejercicio limpiado correctamente');
}

/**
 * Limpiar solo el resultado
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.style.opacity = '0';
        setTimeout(() => {
            resultado.innerHTML = '<p>👋 Ingresa tu edad para ver la clasificación</p>';
            resultado.className = 'resultado-box';
            resultado.style.opacity = '1';
            resultado.style.boxShadow = 'none';
        }, 200);
    }
}

// ===== FUNCIONES DE UTILIDAD =====

/**
 * Validar si un valor es un número entero positivo
 */
function esNumeroValido(valor) {
    return !isNaN(valor) && parseInt(valor) >= 0 && parseInt(valor) <= 120;
}

/**
 * Obtener información detallada de la edad
 */
function obtenerInfoEdad(edad) {
    const info = {
        numero: edad,
        es_par: edad % 2 === 0,
        digitos: edad.toString().length,
        decada: Math.floor(edad / 10) * 10
    };
    
    return info;
}

// ===== SISTEMA DE DEBUGGING =====
function mostrarDebugInfo() {
    console.log('=== DEBUG INFO - EJERCICIO 1 ===');
    console.log('Input edad:', document.getElementById('edad') ? '✅' : '❌');
    console.log('Div resultado:', document.getElementById('resultado') ? '✅' : '❌');
    console.log('Función clasificarEdad:', typeof clasificarEdad === 'function' ? '✅' : '❌');
    console.log('Función limpiar:', typeof limpiar === 'function' ? '✅' : '❌');
    console.log('==============================');
}

// Ejecutar debug al cargar (opcional)
// mostrarDebugInfo();