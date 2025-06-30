console.log("Script.js cargado");

function compararNumeros() {
    console.log("Comparando números...");
    
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    
    let comparacion = '';
    
    if (num1 == num2 && num1 == num3 && num1 == num4) {
        comparacion = "Todos los números son iguales: " + num1;
    } 
    else if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
        comparacion = "El mayor es: " + num1;
    } 
    else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
        comparacion = "El mayor es: " + num2;
    } 
    else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
        comparacion = "El mayor es: " + num3;
    } 
    else {
        comparacion = "El mayor es: " + num4;
    }
    
    document.getElementById('resultado').innerHTML = comparacion;
}

function limpiar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('num4').value = '';
    document.getElementById('resultado').innerHTML = '👆 Ingresa cuatro números para ver la comparación';
}