// Ejercicio 5: Clasificación de Temperatura
// Pedir una temperatura y decir si hace frío (<15), templado (15-25) o calor (>25)

function clasificarTemperatura() {
    // Obtener el valor de la temperatura
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado un número
    if (isNaN(temperatura)) {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">❌ Por favor, ingresa una temperatura válida</p>
        `;
        return;
    }
    
    let clasificacion = "";
    let descripcion = "";
    let emoji = "";
    let color = "";
    
    // Lógica de clasificación de temperatura
    if (temperatura < 15) {
        clasificacion = "Frío";
        descripcion = "Hace frío, abrígate bien y toma algo caliente";
        emoji = "🥶";
        color = "#3498db"; // Azul para frío
    } else if (temperatura >= 15 && temperatura <= 25) {
        clasificacion = "Templado";
        descripcion = "Temperatura agradable, perfecta para salir";
        emoji = "🌤️";
        color = "#f39c12"; // Naranja para templado
    } else {
        clasificacion = "Calor";
        descripcion = "Hace calor, mantente hidratado y busca la sombra";
        emoji = "🔥";
        color = "#e74c3c"; // Rojo para calor
    }
    
    // Mostrar el resultado
    resultadoDiv.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 10px;">${emoji}</div>
            <h3 style="color: ${color}; margin-bottom: 10px;">
                ${temperatura}°C - ${clasificacion}
            </h3>
            <p style="font-size: 1.1rem; margin-bottom: 15px;">
                ${descripcion}
            </p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-top: 15px;">
                <h4 style="margin-bottom: 10px;">📊 Análisis de la temperatura:</h4>
                <p><strong>Temperatura ingresada:</strong> ${temperatura}°C</p>
                <p><strong>Clasificación:</strong> ${clasificacion}</p>
                <p><strong>Recomendación:</strong> ${descripcion}</p>
            </div>
        </div>
    `;
    
    // Agregar clase de animación
    resultadoDiv.classList.add('resultado-mostrado');
}

function limpiar() {
    // Limpiar el campo de entrada
    document.getElementById('temperatura').value = '';
    
    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>🌡️ Ingresa una temperatura para ver la clasificación</p>
    `;
    
    // Remover clase de animación
    document.getElementById('resultado').classList.remove('resultado-mostrado');
    
    // Enfocar el campo de entrada
    document.getElementById('temperatura').focus();
}

// Permitir ejecutar con Enter
document.getElementById('temperatura').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        clasificarTemperatura();
    }
});

// Enfocar el campo de entrada al cargar la página
window.onload = function() {
    document.getElementById('temperatura').focus();
};