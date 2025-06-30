// Ejercicio 8: Cálculo de Bono por Hijos
// Pedir el número de hijos y si tiene trabajo, calcular bono: 
// si tiene hijos y trabajo, bono es $50 por hijo; si no tiene trabajo, es $30 por hijo.

function calcularBono() {
    // Obtener los valores de los campos
    const numHijosInput = document.getElementById('numHijos');
    const tieneEmpleoSelect = document.getElementById('tieneEmpleo');
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar el número de hijos
    if (numHijosInput.value === '') {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">⚠️ Por favor, ingresa el número de hijos</p>
        `;
        numHijosInput.focus();
        return;
    }
    
    // Validar la situación laboral
    if (tieneEmpleoSelect.value === '') {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">⚠️ Por favor, selecciona tu situación laboral</p>
        `;
        tieneEmpleoSelect.focus();
        return;
    }
    
    // Convertir a número y validar
    const numHijos = parseInt(numHijosInput.value);
    
    if (isNaN(numHijos) || numHijos < 0) {
        resultadoDiv.innerHTML = `
            <p style="color: #e74c3c;">⚠️ Por favor, ingresa un número válido de hijos (0 o mayor)</p>
        `;
        numHijosInput.focus();
        return;
    }
    
    // Obtener situación laboral
    const tieneEmpleo = tieneEmpleoSelect.value === 'si';
    
    // Variables para el cálculo
    let bono = 0;
    let bonoPorHijo = 0;
    let situacionLaboral = "";
    let emoji = "";
    let color = "";
    let mensaje = "";
    let descripcion = "";
    
    // Lógica principal del ejercicio
    if (numHijos > 0 && tieneEmpleo) {
        // Tiene hijos y trabajo
        bonoPorHijo = 50;
        bono = numHijos * bonoPorHijo;
        situacionLaboral = "Con Empleo";
        emoji = "💼";
        color = "#27ae60";
        mensaje = "¡Excelente! Recibes el bono completo";
        descripcion = "Como tienes empleo y hijos, recibes el máximo beneficio del programa.";
    } else if (numHijos > 0 && !tieneEmpleo) {
        // Tiene hijos pero no trabajo
        bonoPorHijo = 30;
        bono = numHijos * bonoPorHijo;
        situacionLaboral = "Sin Empleo";
        emoji = "🏠";
        color = "#f39c12";
        mensaje = "Recibes apoyo social por desempleo";
        descripcion = "El programa te apoya con un bono especial mientras buscas empleo.";
    } else {
        // No tiene hijos
        bono = 0;
        bonoPorHijo = 0;
        situacionLaboral = tieneEmpleo ? "Con Empleo" : "Sin Empleo";
        emoji = "👤";
        color = "#95a5a6";
        mensaje = "No aplica para bono familiar";
        descripcion = "El bono familiar está destinado únicamente para personas con hijos.";
    }
    
    // Mostrar resultado detallado
    resultadoDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, ${color}15, ${color}05); 
                    border-left: 4px solid ${color}; 
                    padding: 20px; 
                    border-radius: 10px; 
                    text-align: center;">
            <h3 style="color: ${color}; margin: 0 0 15px 0; font-size: 1.5em;">
                ${emoji} ${mensaje}
            </h3>
            
            <div style="background: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        margin: 15px 0; 
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="text-align: center;">
                        <p style="margin: 0; color: #7f8c8d; font-size: 0.9em;">Número de Hijos</p>
                        <p style="margin: 5px 0; font-size: 1.8em; font-weight: bold; color: #2c3e50;">
                            ${numHijos} 👶
                        </p>
                    </div>
                    <div style="text-align: center;">
                        <p style="margin: 0; color: #7f8c8d; font-size: 0.9em;">Situación Laboral</p>
                        <p style="margin: 5px 0; font-size: 1.2em; font-weight: bold; color: ${color};">
                            ${situacionLaboral}
                        </p>
                    </div>
                    <div style="text-align: center;">
                        <p style="margin: 0; color: #7f8c8d; font-size: 0.9em;">Bono por Hijo</p>
                        <p style="margin: 5px 0; font-size: 1.5em; font-weight: bold; color: ${color};">
                            $${bonoPorHijo}
                        </p>
                    </div>
                </div>
                
                <div style="background: ${color}10; 
                            padding: 20px; 
                            border-radius: 8px; 
                            border: 2px solid ${color};">
                    <p style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 0.9em;">BONO TOTAL</p>
                    <p style="margin: 0; font-size: 2.5em; font-weight: bold; color: ${color};">
                        $${bono}
                    </p>
                    ${numHijos > 0 ? `
                        <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 0.9em;">
                            (${numHijos} hijo${numHijos !== 1 ? 's' : ''} × $${bonoPorHijo} = $${bono})
                        </p>
                    ` : ''}
                </div>
            </div>
            
            <div style="background: ${color}10; 
                        padding: 15px; 
                        border-radius: 8px; 
                        margin-top: 15px;">
                <p style="color: #34495e; margin: 0; font-style: italic;">
                    💡 <strong>Información:</strong> ${descripcion}
                </p>
            </div>
        </div>
    `;
    
    // Agregar información adicional sobre el programa
    resultadoDiv.innerHTML += getInfoPrograma(numHijos, tieneEmpleo, bono);
}

function getInfoPrograma(numHijos, tieneEmpleo, bonoCalculado) {
    return `
        <div style="margin-top: 20px; 
                    padding: 20px; 
                    background: #f8f9fa; 
                    border-radius: 8px; 
                    border: 1px solid #dee2e6;">
            <h4 style="color: #495057; margin: 0 0 15px 0;">📊 Detalles del Programa de Bonos:</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                <div style="background: ${tieneEmpleo && numHijos > 0 ? '#27ae6020' : 'white'}; 
                            padding: 15px; 
                            border-radius: 8px; 
                            border: 2px solid ${tieneEmpleo && numHijos > 0 ? '#27ae60' : '#dee2e6'};">
                    <h5 style="color: #27ae60; margin: 0 0 10px 0;">💼 Con Empleo + Hijos</h5>
                    <p style="margin: 0; font-size: 1.1em; font-weight: bold;">$50 por hijo</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #6c757d;">
                        ${tieneEmpleo && numHijos > 0 ? '✅ Tu situación actual' : 'Bono máximo disponible'}
                    </p>
                </div>
                
                <div style="background: ${!tieneEmpleo && numHijos > 0 ? '#f39c1220' : 'white'}; 
                            padding: 15px; 
                            border-radius: 8px; 
                            border: 2px solid ${!tieneEmpleo && numHijos > 0 ? '#f39c12' : '#dee2e6'};">
                    <h5 style="color: #f39c12; margin: 0 0 10px 0;">🏠 Sin Empleo + Hijos</h5>
                    <p style="margin: 0; font-size: 1.1em; font-weight: bold;">$30 por hijo</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #6c757d;">
                        ${!tieneEmpleo && numHijos > 0 ? '✅ Tu situación actual' : 'Apoyo por desempleo'}
                    </p>
                </div>
                
                <div style="background: ${numHijos === 0 ? '#95a5a620' : 'white'}; 
                            padding: 15px; 
                            border-radius: 8px; 
                            border: 2px solid ${numHijos === 0 ? '#95a5a6' : '#dee2e6'};">
                    <h5 style="color: #95a5a6; margin: 0 0 10px 0;">👤 Sin Hijos</h5>
                    <p style="margin: 0; font-size: 1.1em; font-weight: bold;">$0</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #6c757d;">
                        ${numHijos === 0 ? '✅ Tu situación actual' : 'No aplica bono familiar'}
                    </p>
                </div>
            </div>
            
            ${bonoCalculado > 0 ? `
                <div style="margin-top: 15px; 
                            padding: 15px; 
                            background: linear-gradient(135deg, #3498db15, #3498db05); 
                            border-left: 4px solid #3498db; 
                            border-radius: 6px;">
                    <h5 style="color: #3498db; margin: 0 0 8px 0;">📋 Requisitos del Programa:</h5>
                    <ul style="margin: 0; padding-left: 20px; color: #6c757d;">
                        <li>Tener al menos un hijo dependiente</li>
                        <li>Presentar documentación familiar actualizada</li>
                        <li>Declarar situación laboral actual</li>
                        <li>Cumplir con los criterios socioeconómicos</li>
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

// Función para limpiar los campos y el resultado
function limpiar() {
    document.getElementById('numHijos').value = '';
    document.getElementById('tieneEmpleo').value = '';
    document.getElementById('resultado').innerHTML = `
        <p>💰 Ingresa el número de hijos y situación laboral para calcular el bono</p>
    `;
    document.getElementById('numHijos').focus();
}

// Función para ejecutar automáticamente cuando se completen ambos campos
function verificarEjecucionAutomatica() {
    const numHijos = document.getElementById('numHijos').value;
    const tieneEmpleo = document.getElementById('tieneEmpleo').value;
    
    if (numHijos !== '' && tieneEmpleo !== '' && !isNaN(parseInt(numHijos)) && parseInt(numHijos) >= 0) {
        setTimeout(() => {
            // Verificar que los valores no han cambiado
            if (document.getElementById('numHijos').value === numHijos && 
                document.getElementById('tieneEmpleo').value === tieneEmpleo) {
                calcularBono();
            }
        }, 500);
    }
}

// Agregar eventos para ejecución automática
document.getElementById('numHijos').addEventListener('input', verificarEjecucionAutomatica);
document.getElementById('tieneEmpleo').addEventListener('change', verificarEjecucionAutomatica);

// Agregar evento para ejecutar con Enter en el campo numérico
document.getElementById('numHijos').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularBono();
    }
});

// Enfocar el primer campo al cargar la página
window.addEventListener('load', function() {
    document.getElementById('numHijos').focus();
});