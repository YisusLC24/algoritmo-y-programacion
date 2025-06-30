// Ejercicio 6: Reemplazar todas las "a" por "@"

// Referencias a elementos del DOM
const textoInput = document.getElementById('textoInput');
const reemplazarBtn = document.getElementById('reemplazarBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const resultado = document.getElementById('resultado');
const textoOriginal = document.getElementById('textoOriginal');
const textoModificado = document.getElementById('textoModificado');
const cantidadReemplazos = document.getElementById('cantidadReemplazos');
const totalCaracteres = document.getElementById('totalCaracteres');

// Función principal para reemplazar texto
function reemplazarLetras() {
    const texto = textoInput.value.trim();
    
    // Validar que se haya ingresado texto
    if (texto === '') {
        alert('⚠️ Por favor, ingresa un texto para reemplazar.');
        textoInput.focus();
        return;
    }
    
    // Realizar el reemplazo
    const textoReemplazado = texto.replaceAll('a', '@').replaceAll('A', '@');
    
    // Contar cuántas letras "a" se reemplazaron
    const contadorA = (texto.match(/[aA]/g) || []).length;
    
    // Mostrar resultados
    mostrarResultado(texto, textoReemplazado, contadorA);
}

// Función para mostrar los resultados
function mostrarResultado(original, modificado, reemplazos) {
    // Mostrar textos
    textoOriginal.textContent = original;
    textoModificado.textContent = modificado;
    
    // Mostrar estadísticas
    cantidadReemplazos.textContent = reemplazos;
    totalCaracteres.textContent = original.length;
    
    // Mostrar la sección de resultado
    resultado.style.display = 'block';
    
    // Hacer scroll hacia el resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
    
    // Agregar clase de animación
    resultado.classList.add('resultado-animado');
    setTimeout(() => {
        resultado.classList.remove('resultado-animado');
    }, 600);
}

// Función para limpiar todo
function limpiarTodo() {
    textoInput.value = '';
    resultado.style.display = 'none';
    textoOriginal.textContent = '';
    textoModificado.textContent = '';
    cantidadReemplazos.textContent = '0';
    totalCaracteres.textContent = '0';
    textoInput.focus();
}

// Event Listeners
reemplazarBtn.addEventListener('click', reemplazarLetras);
limpiarBtn.addEventListener('click', limpiarTodo);

// Permitir ejecutar con Enter
textoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        reemplazarLetras();
    }
});

// Enfocar el input al cargar la página
window.addEventListener('load', function() {
    textoInput.focus();
});

// Funciones adicionales para mejorar la experiencia

// Función para resaltar las diferencias (opcional)
function resaltarDiferencias(original, modificado) {
    const originalArray = original.split('');
    const modificadoArray = modificado.split('');
    
    let originalHTML = '';
    let modificadoHTML = '';
    
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] === 'a' || originalArray[i] === 'A') {
            originalHTML += `<span class="letra-resaltada">${originalArray[i]}</span>`;
            modificadoHTML += `<span class="letra-reemplazada">${modificadoArray[i]}</span>`;
        } else {
            originalHTML += originalArray[i];
            modificadoHTML += modificadoArray[i];
        }
    }
    
    textoOriginal.innerHTML = originalHTML;
    textoModificado.innerHTML = modificadoHTML;
}

// Actualizar el contador en tiempo real mientras se escribe
textoInput.addEventListener('input', function() {
    const texto = this.value;
    const contadorA = (texto.match(/[aA]/g) || []).length;
    
    // Mostrar preview del conteo
    if (texto.length > 0) {
        const preview = document.querySelector('.input-preview');
        if (!preview) {
            const previewElement = document.createElement('div');
            previewElement.className = 'input-preview';
            previewElement.style.cssText = `
                font-size: 0.9em;
                color: #666;
                margin-top: 5px;
                padding: 5px;
                background: #f8f9fa;
                border-radius: 4px;
            `;
            textoInput.parentNode.insertBefore(previewElement, textoInput.nextSibling);
        }
        document.querySelector('.input-preview').innerHTML = 
            `📝 Caracteres: ${texto.length} | 🎯 Letras "a" encontradas: ${contadorA}`;
    } else {
        const preview = document.querySelector('.input-preview');
        if (preview) preview.remove();
    }
});