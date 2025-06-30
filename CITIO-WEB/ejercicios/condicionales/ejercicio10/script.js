function calcularDescuentoMembresia() {
    // Obtener valores de los inputs
    const membresia = document.getElementById('membresia').value;
    const compra = parseFloat(document.getElementById('compra').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validar que se hayan ingresado todos los datos
    if (!membresia) {
        resultadoDiv.innerHTML = '<p style="color: #e74c3c;">⚠️ Por favor selecciona si tienes membresía</p>';
        return;
    }

    if (isNaN(compra) || compra < 0) {
        resultadoDiv.innerHTML = '<p style="color: #e74c3c;">⚠️ Por favor ingresa un monto de compra válido (mayor o igual a 0)</p>';
        return;
    }

    // Convertir membresía a booleano
    const tieneMembresia = membresia === "si";

    // Variables para los cálculos
    let porcentajeDescuento;
    let porcentajeIva;
    let montoDescuento;
    let montoConDescuento;
    let montoIva;
    let total;
    let tipoDescuento;

    // Lógica condicional para determinar descuento e IVA
    if (tieneMembresia && compra > 50) {
        porcentajeDescuento = 30;
        porcentajeIva = 15;
        tipoDescuento = "Membresía + Compra > $50";
    } else {
        porcentajeDescuento = 5;
        porcentajeIva = 10;
        tipoDescuento = "Descuento estándar";
    }

    // Cálculos
    montoDescuento = compra * (porcentajeDescuento / 100);
    montoConDescuento = compra - montoDescuento;
    montoIva = montoConDescuento * (porcentajeIva / 100);
    total = montoConDescuento + montoIva;

    // Determinar el estado de las condiciones
    let estadoCondiciones;
    if (tieneMembresia && compra > 50) {
        estadoCondiciones = "✅ Ambas condiciones cumplidas";
    } else if (tieneMembresia && compra <= 50) {
        estadoCondiciones = "⚠️ Tienes membresía pero compra ≤ $50";
    } else if (!tieneMembresia && compra > 50) {
        estadoCondiciones = "⚠️ Compra > $50 pero sin membresía";
    } else {
        estadoCondiciones = "❌ Ninguna condición especial cumplida";
    }

    // Mostrar resultado detallado
    resultadoDiv.innerHTML = `
        <div style="text-align: left;">
            <h4 style="color: #2c3e50; margin-bottom: 15px;">📋 Detalle del Cálculo:</h4>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>🎫 Membresía:</strong> ${tieneMembresia ? 'Sí' : 'No'}</p>
                <p><strong>💰 Compra:</strong> $${compra.toFixed(2)}</p>
                <p><strong>🔍 Estado:</strong> ${estadoCondiciones}</p>
                <p><strong>🏷️ Tipo de Descuento:</strong> ${tipoDescuento}</p>
            </div>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <p><strong>📉 Descuento Aplicado:</strong> ${porcentajeDescuento}% (-$${montoDescuento.toFixed(2)})</p>
                <p><strong>💵 Subtotal (con descuento):</strong> $${montoConDescuento.toFixed(2)}</p>
                <p><strong>🧾 IVA (${porcentajeIva}%):</strong> +$${montoIva.toFixed(2)}</p>
            </div>

            <div style="background: #2c3e50; color: white; padding: 15px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0; font-size: 1.3em;">
                    💳 Total a Pagar: $${total.toFixed(2)}
                </h3>
            </div>

            <div style="margin-top: 15px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
                <strong>💡 Explicación:</strong><br>
                ${tieneMembresia && compra > 50 
                    ? `Como tienes membresía Y tu compra es mayor a $50, calificas para el descuento especial del 30% y se aplica un IVA del 15%.` 
                    : `No cumples ambas condiciones (membresía + compra > $50), por lo que se aplica el descuento estándar del 5% y un IVA del 10%.`
                }
                <br><br>
                <strong>🔄 Proceso:</strong> Primero se aplica el descuento, luego se calcula el IVA sobre el monto ya descontado.
            </div>

            <div style="margin-top: 10px; padding: 10px; background: #d4edda; border-radius: 8px; font-size: 0.85em;">
                <strong>💾 Ahorro:</strong> 
                ${tieneMembresia && compra > 50 
                    ? `¡Excelente! Con tu membresía ahorraste $${(compra * 0.25 - montoDescuento + compra * 0.05 - montoIva).toFixed(2)} comparado con no tener membresía.`
                    : `Considera obtener una membresía para ahorrar más en compras mayores a $50.`
                }
            </div>
        </div>
    `;
}

function limpiar() {
    // Limpiar todos los campos
    document.getElementById('membresia').value = '';
    document.getElementById('compra').value = '';
    document.getElementById('resultado').innerHTML = '<p>💡 Ingresa si tienes membresía y el monto de compra para ver el cálculo</p>';
    
    // Enfocar el primer campo
    document.getElementById('membresia').focus();
}

// Permitir que la función se ejecute con Enter en el campo de compra
document.addEventListener('DOMContentLoaded', function() {
    const compraInput = document.getElementById('compra');
    
    compraInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcularDescuentoMembresia();
        }
    });
    
    // Enfocar el primer campo al cargar la página
    document.getElementById('membresia').focus();
});