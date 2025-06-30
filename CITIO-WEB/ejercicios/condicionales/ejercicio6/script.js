// Ejercicio 6: Saludo Personalizado por Género
// Pedir el nombre y género, y mostrar "Bienvenido" o "Bienvenida" según corresponda

function generarSaludo() {
    // Obtener los valores de entrada
    const nombre = document.getElementById('nombre').value.trim();
    const genero = document.getElementById('genero').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar que se haya ingresado un nombre
    if (!nombre) {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">❌ Por favor, ingresa tu nombre</p>
        `;
        return;
    }
    
    // Validar que se haya seleccionado un género
    if (!genero) {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">❌ Por favor, selecciona tu género</p>
        `;
        return;
    }
    
    let saludo = "";
    let emoji = "";
    let color = "";
    let descripcion = "";
    
    // Lógica de saludo según el género
    if (genero === "masculino") {
        saludo = "¡Bienvenido " + nombre + "!";
        emoji = "👨";
        color = "#3498db"; // Azul
        descripcion = "Saludo dirigido a personas de género masculino";
    } else if (genero === "femenino") {
        saludo = "¡Bienvenida " + nombre + "!";
        emoji = "👩";
        color = "#e91e63"; // Rosa
        descripcion = "Saludo dirigido a personas de género femenino";
    } else {
        saludo = "¡Bienvenido/a " + nombre + "!";
        emoji = "👋";
        color = "#9c27b0"; // Púrpura
        descripcion = "Saludo inclusivo para todas las personas";
    }
    
    // Capitalizar la primera letra del nombre
    const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    const saludoFinal = saludo.replace(nombre, nombreCapitalizado);
    
    // Mostrar el resultado
    resultadoDiv.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 15px;">${emoji}</div>
            <h2 style="color: ${color}; margin-bottom: 15px; font-size: 2rem;">
                ${saludoFinal}
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 20px; color: #2c3e50;">
                Es un placer tenerte aquí, ${nombreCapitalizado}
            </p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin-top: 20px;">
                <h4 style="margin-bottom: 15px; color: #2c3e50;">📊 Información del saludo:</h4>
                <div style="text-align: left;">
                    <p><strong>Nombre ingresado:</strong> ${nombreCapitalizado}</p>
                    <p><strong>Género seleccionado:</strong> ${genero.charAt(0).toUpperCase() + genero.slice(1)}</p>
                    <p><strong>Tipo de saludo:</strong> ${descripcion}</p>
                    <p><strong>Forma de saludo:</strong> ${saludoFinal}</p>
                </div>
            </div>
            <div style="margin-top: 15px; padding: 15px; background: linear-gradient(135deg, ${color}20, ${color}10); border-radius: 10px;">
                <p style="margin: 0; color: #2c3e50; font-style: italic;">
                    💡 Este ejercicio demuestra el uso de condicionales para personalizar mensajes según diferentes criterios
                </p>
            </div>
        </div>
    `;
    
    // Agregar clase de animación
    resultadoDiv.classList.add('resultado-mostrado');
}

function limpiar() {
    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('genero').value = '';
    
    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>👋 Ingresa tu nombre y género para recibir un saludo personalizado</p>
    `;
    
    // Remover clase de animación
    document.getElementById('resultado').classList.remove('resultado-mostrado');
    
    // Enfocar el campo de nombre
    document.getElementById('nombre').focus();
}

// Permitir ejecutar con Enter en el campo de nombre
document.getElementById('nombre').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generarSaludo();
    }
});

// Ejecutar automáticamente cuando se selecciona un género si ya hay nombre
document.getElementById('genero').addEventListener('change', function() {
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre) {
        generarSaludo();
    }
});

// Enfocar el campo de nombre al cargar la página
window.onload = function() {
    document.getElementById('nombre').focus();
};

// Función adicional para validar caracteres del nombre
document.getElementById('nombre').addEventListener('input', function(e) {
    // Permitir solo letras y espacios
    const valor = e.target.value;
    const valorLimpio = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    if (valor !== valorLimpio) {
        e.target.value = valorLimpio;
    }
});