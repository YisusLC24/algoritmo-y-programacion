function calcularDescuento() {
    // Obtener valores de los inputs
    const tipoCliente = document.getElementById('tipoCliente').value;
    const gasto = parseFloat(document.getElementById('gasto').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validar que se hayan ingresado todos los datos
    if (!tipoCliente) {
        resultadoDiv.innerHTML = '<p style="color: #e74c3c;">⚠️ Por favor selecciona el tipo de cliente</p>';
        return;
    }

    if (isNaN(gasto) || gasto < 0) {
        resultadoDiv.innerHTML = '<p style="color: #e74c3c;">⚠️ Por favor ingresa un gasto válido (mayor o igual a 0)</p>';
        return;
    }

    // Variables para los cálculos
    let porcentajeDescuento;
    let montoDescuento;
    let montoConDescuento;
    let iva;
    let total;

    // Lógica condicional para determinar el descuento
    if (tipoCliente === "VIP" && gasto > 100) {
        porcentajeDescuento = 20;
    } else {
        porcentajeDescuento = 10;
    }

    // Cálculos
    montoDescuento = gasto * (porcentajeDescuento / 100);
    montoConDescuento = gasto - montoDescuento;
    iva = montoConDescuento * 0.15; // 15% de IVA
    total = montoConDescuento + iva;

    // Determinar el mensaje de tipo de descuento
    let tipoDescuentoMensaje;
    if (tipoCliente === "VIP" && gasto > 100) {
        tipoDescuentoMensaje = "Cliente VIP con gasto mayor a $100";
    } else {
        tipoDescuentoMensaje = "Descuento estándar";
    }

    // Mostrar resultado detallado
    resultadoDiv.innerHTML = `
        <div style="text-align: left;">
            <h4 style="color: #2c3e50; margin-bottom: 15px;">📋 Detalle del Cálculo:</h4>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>👤 Tipo de Cliente:</strong> ${tipoCliente}</p>
                <p><strong>💰 Gasto Original:</strong> $${gasto.toFixed(2)}</p>
                <p><strong>🏷️ Tipo de Descuento:</strong> ${tipoDescuentoMensaje}</p>
                <p><strong>📉 Descuento Aplicado:</strong> ${porcentajeDescuento}% (-$${montoDescuento.toFixed(2)})</p>
            </div>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>💵 Subtotal (con descuento):</strong> $${montoConDescuento.toFixed(2)}</p>
                <p><strong>🧾 IVA (15%):</strong> +$${iva.toFixed(2)}</p>
            </div>

            <div style="background: #2c3e50; color: white; padding: 15px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0; font-size: 1.3em;">
                    💳 Total a Pagar: $${total.toFixed(2)}
                </h3>
            </div>

            <div style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
                <strong>💡 Resumen:</strong> 
                ${tipoCliente === "VIP" && gasto > 100 
                    ? "Como eres cliente VIP y tu gasto es mayor a $100, obtienes un 20% de descuento." 
                    : "Se aplicó el descuento estándar del 10%."
                } 
                Luego se agregó el 15% de IVA sobre el monto con descuento.
            </div>
        </div>
    `;
}

function limpiar() {
    // Limpiar todos los campos
    document.getElementById('tipoCliente').value = '';
    document.getElementById('gasto').value = '';
    document.getElementById('resultado').innerHTML = '<p>💡 Ingresa el tipo de cliente y el gasto para ver el cálculo</p>';
    
    // Enfocar el primer campo
    document.getElementById('tipoCliente').focus();
}

// Permitir que la función se ejecute con Enter en el campo de gasto
document.addEventListener('DOMContentLoaded', function() {
    const gastoInput = document.getElementById('gasto');
    
    gastoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularDescuento();
        }
    });
    
    // Enfocar el primer campo al cargar la página
    document.getElementById('tipoCliente').focus();
});