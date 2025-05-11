//ENTRADA:
//costo <- para guardar el precio del producto.
//dinero <- para guardar cuánto paga el cliente.
//vuelto <- para guardar la diferencia (si aplica).

//DESARROLLO:	
//Definir las variables necesarias: costo, dinero, vuelto
//Solicitar al usuario el costo del producto
//Solicitar cuánto dinero entregó el cliente
//Verificar si el dinero es suficiente:

//SALIDA:
//Si es suficiente: calcular el vuelto y mostrarlo
//Si no es suficiente: mostrar mensaje de advertencia
Funcion  EJERCICIO_1
	
	Definir costo, dinero, vuelto Como Real
	Escribir "Ingrese el costo del producto:"
	Leer costo
	
	Escribir "Ingrese el dinero recibido:"
	Leer dinero
	
	Si dinero >= costo Entonces
		vuelto <- dinero - costo
		Escribir "El vuelto es: $", vuelto
	Sino
		Escribir "Dinero insuficiente. No se puede completar la compra."
	FinSi
	
FinFuncion




//Conversor de kilogramos a libras y viceversa
//Convertir entre kilogramos y libras. Mostrar el resultado.}
//ENTRADA
//Escribir "Ingrese peso a Calcular:"
//peso (leer)=0
//elegir si esta en kilogramos a libras o su visebersa

//peso: almacena la cantidad que el usuario quiere convertir (tipo Real)
//resultado: almacena el valor convertido (tipo Real)
//opcion: almacena la elección del usuario: "a" o "b" (tipo Caracter)
//Mostrar opciones de conversión al usuario (a: kg <- lb, b: lb <- kg)
//Leer la opción seleccionada
//Según la opción:
//Si elige "a":
//Pedir peso en kilogramos
//Calcular peso en libras
//Mostrar el resultado
//Si elige "b":
//Pedir peso en libras
//Calcular peso en kilogramos
//Mostrar el resultado
//Si no elige ni "a" ni "b":
//Mostrar mensaje de error
Funcion  Ejercicio_2
	Definir peso,resultado Como Real
	Definir opcion Como Caracter
	
	Escribir "a : Kilogramos (kg) a Libras(lb)" ;
	Escribir "b : Libras (lb) a Kilogramos (kg)" ;
	Escribir "Seleccione la opcion que desee convertir" ;
	Leer opcion
	
	
	si opcion = "a" Entonces
		Escribir "Ingese la cantidad en kilogramos"
		leer peso
		resultado <- peso * 2.205
		Escribir "El peso de kilogramos en libras es : " resultado ,"Lb" ;
	SiNo
		si opcion = "b" Entonces
			Escribir "Ingrese la cantidad en Libras: "
			leer peso
			resultado <- peso * 0.453592
			Escribir "El peso en libras a kilogramos es :" resultado ,"Kg" ;
		SiNo
			Escribir " parametros erroneos "
		FinSi
		
	FinSi

FinFuncion




// 1) entender el problema:
// Ejercicio 3: Calculadora de descuentos
// Aplicar 0%, 5% o 10% de descuento según el monto de compra.
// Se debe pedir por consola las opciones aplicar el descuentos según el monto de compra.

// 2) Entrada: opcion_desc(Leer)=0, monto_compra(Leer)=0, desc(Calcular)=0, total_compra(Calcular)=0

// 3) Proceso: opcion_desc(Leer), desc(Calcular)
//    Mostrar opcion_desc
//    1. aplicar 5%
//    2. aplicar 10%
//    3. aplicar 0%
//    Leer opcion_desc

//Segun opcion_desc Hacer
//	1: 
//		desc <- 0
//	2:
//		desc <- monto_compra * 0.05
//	3:
//		desc <- monto_compra * 0.10
//	De Otro Modo:
//		Escribir "No se pudo determinar un descuento establecido"
//Fin Segun

// total_compra <- monto_compra - desc

// 4) Salida: desc, total_compra, mensaje

// 4) Salida:

Funcion  Ejercicio_3_corregido
	Definir opcion_desc, monto_compra, desc, total_compra Como Real // Declaramos las variables
	
	opcion_desc <- 0; monto_compra <- 0; desc <- 0; total_compra <- 0 // Inicializamos las variables
	
	Escribir "********** Calculadora de descuento **********"
	Escribir "1.Aplicar el 0%"
	Escribir "2.Aplicar el 5%"                                  // Solicitamos al usuario que ingrese las opciones requeridas para el descuento
	Escribir "3.Aplicar el 10%"
	Escribir "Ingrese las opciones para aplicar un descuento"
	
	
	Leer opcion_desc                        // Leemos la variables y guardamos los datos solicitados
	
	Escribir "Ingrese el monto de la compra" // solicitamos al usuario el monto de la compra
	Leer monto_compra                           // Leemos la variables y guardamos los datos solicitados
	
	Segun opcion_desc Hacer                // Hacemos un ciclo y pregutamos las opciones que el usuario requirió al hacer un descuento
		1: 
			desc <- 0
		2:
			desc <- monto_compra * 0.05
		3:
			desc <- monto_compra * 0.10
		De Otro Modo:
			Escribir "No se pudo determinar un descuento establecido"      // Mostramos un mensaje de error o que no se pudo determinar los requirimentos establecidos
	Fin Segun
	
	total_compra <- monto_compra - desc  // Calculamos el total de la compra, aplicando las opciones del descuento
	
	Escribir "El monto de la compra con el descuento aplicado es: ", desc, " %"  // Mostamos los resultados por pantalla el descuento y el valor final de la compra
	Escribir "El Valor total de la compra es: ", total_compra
	
FinFuncion





// 1) Entender el problema:
// Ejercicio 4: Cálculo del IVA (12%)
// Pedir un precio sin IVA, hacer un descuento del 30% y calcular el precio con IVA incluido del 15%
//    - Parte de un precio sin IVA
//    - Se aplica un descuento del 30% al precio Sin IVA
//    - Y luego se le aplica un IVA del 15%

// 2) Entrada: precioSinIVA(Leer)=0; descuento(calcular)=0; subtotalConDescuento(Calcular)=0; iva(Calcular)=0; precioFinal(Calcular)=0; 

// 3) Proceso: precioSinIVA(Leer); descuento(Calcular); subtotalConDescuento(Calcular); iva(Calcular); precioFinal(Calcular)
//    descuento <- precioSinIVA * 0.30
//    subtotalConDescuento <- precioSinIVA - descuento
//    iva <- subtotalConDescuento * 0.15
//    precioFinal <- subtotalConDescuento + iva

// 4) Salida: subtotalConDescuento, iva y precioFinal

Funcion  Ejercicio_4
	Definir precioSinIVA, descuento, subtotalConDescuento, iva, precioFinal Como Real // Declaramos las variables
	
	precioSinIVA <- 0; descuento <- 0; subtotalConDescuento <- 0; iva <- 0; precioFinal <- 0 // inicializamos las variables
	
	Escribir "Ingrese el precio sin IVA:" // Solicitamos el precio sin IVA
	Leer precioSinIVA
	
	// Calculamos descuento del 30% sobre el precio original
	descuento <- precioSinIVA * 0.30
	subtotalConDescuento <- precioSinIVA - descuento
	
	// Calculamos IVA del 15% sobre el subtotal con descuento
	iva <- subtotalConDescuento * 0.12
	precioFinal <- subtotalConDescuento + iva
	
	// Mostramos los resultados
	Escribir "Subtotal con descuento: $", subtotalConDescuento
	Escribir "IVA (12%) aplicado: $", iva
	Escribir "Precio final a pagar: $", precioFinal
FinFuncion





//ejercicio5
// El algoritmo se llama "CompararPrecios".
// 1. entrada
//Definir variables precio1,precio2 (se leen).

//2. Proceso 
// Si precio1 es mayor que precio2, determinar que el primer precio es mayor.
//Si no (es decir, precio1 no es mayor que precio2), comparar el valor de precio2 con el valor de precio1.
//Si precio2 es mayor que precio1, determinar que el segundo precio es mayor.
//Si ninguna de las condiciones anteriores es verdadera, determinar que los precios son iguales.

//Salida:
//Mostrar en pantalla uno de los siguientes mensajes, dependiendo del resultado de la comparación:
//"El primer precio ( [valor de precio1] ) es mayor que el segundo ( [valor de precio2] )"
//"El segundo precio ( [valor de precio2] ) es mayor que el primero ( [valor de precio1] )"
//"Los precios son iguales ( [valor de precio1] )"

Funcion  CompararPrecios
    // Definir variables
    Definir precio1, precio2 Como Real
	
    // Entrada de datos
    Escribir "Ingrese el precio del primer producto:"
    Leer precio1
    Escribir "Ingrese el precio del segundo producto:"
    Leer precio2
	
    // Comparar los precios y mostrar el resultado
    Si precio1 > precio2 Entonces
        Escribir "El primer precio (", precio1, ") es mayor que el segundo (", precio2, ")."
    SiNo
        Si precio2 > precio1 Entonces
            Escribir "El segundo precio (", precio2, ") es mayor que el primero (", precio1, ")."
        SiNo
            Escribir "Los precios son iguales (", precio1, ")."
        FinSi
    FinSi
FinFuncion





//ejercicio6
// 1. El algoritmo se llama "ClasificarEdad".
//  Definir variables
// edad (leer).

//2.Proceso 
// se define la variable entera edad
//se muestra el mensaje escribir ingrese la edad del cliente
// se lee el valor ingresado por el usuario y se almacena en la edad (leer edad).
//Se evalúa la condición: (edad \ge 0) Y (edad \le 12).
// Si es verdadero, se ejecuta: Escribir "Es un niño.".
// Si la condición anterior es falsa, se evalúa: (edad \ge 13) Y (edad \le 17).
// Si es verdadero, se ejecuta: Escribir "Es un joven".
// Si la condición anterior es falsa, se evalúa: (edad \ge 18) Y (edad \le 64).
// Si es verdadero, se ejecuta: Escribir "Es un adulto".
//Si la condición anterior es falsa, se evalúa: (edad \ge 65).
// Si es verdadero, se ejecuta: Escribir "Es un adulto mayor".
// Si ninguna de las condiciones anteriores fue verdadera, se ejecuta: Escribir "La edad ingresada no es válida."

//3.salida
// ingrese la edad del cliente para reflejar si es un niño,un joven,un adulto o un adulto mayor
//fin algoritmo
Funcion ClasificarEdad
    // Definir variables
    Definir edad Como Entero
	
    // Entrada de datos
    Escribir "Ingrese la edad del cliente:"
    Leer edad
	
    // Clasificar la edad y mostrar la categoría
    Si edad >= 0 Y edad <= 12 Entonces
        Escribir "Es un niño."
    SiNo
        Si edad >= 13 Y edad <= 17 Entonces
            Escribir "Es un joven."
        SiNo
            Si edad >= 18 Y edad <= 64 Entonces
                Escribir "Es un adulto."
            SiNo
                Si edad >= 65 Entonces
                    Escribir "Es un adulto mayor."
                SiNo
                    Escribir "La edad ingresada no es válida."
                FinSi
            FinSi
        FinSi
    FinSi
FinFuncion





// Identificador de número par o impar 
//Pedir un número y decir si es par  y multiplo de 10. Para el caso de par utilice el mod de PseInt y para el caso de multiplo
//de 10 implemente usted mismo el mod.
//Entrada:
//Definimos las variables que usaremos para poder realizar el Algoritmo 
Funcion  ejercicio_7
	Definir num, residuo Como Entero
	//Proceso:
	//Preguntamos el numero para luego poder leerlo	
	//Escribir "Ingrese un número:"
	//Leer num
	//Realizamos la condicion para verificar si el numero es par o no lo es. 
	//Si num MOD 2 = 0 Entonces
	//Escribir "El número es par"
	//Sino
	//Escribir "El número es impar"
	//FinSi
	//Luego calculamos el residuo para poder validar si es multiplo de 10 o no lo es.
	//residuo = num - (Trunc(num / 10) * 10)
	//Si residuo = 0 Entonces
	Escribir "Ingrese un número:"
	Leer num
	Si num MOD 2 = 0 Entonces
		Escribir "El número es par"
	Sino
		Escribir "El número es impar"
	FinSi
	residuo = num - (Trunc(num / 10) * 10)
	Si residuo = 0 Entonces
		//Salida:
		//Mostrar si el numero es par o impar o si es multiplo de 10 o no.
		Escribir "El número es múltiplo de 10"
	Sino
		Escribir "El número NO es múltiplo de 10"
	FinSi
FinFuncion




// Evaluador de puntuación de servicio 
//Pedir una puntuación del 1 al 10 e interpretar como "Malo", "Regular", "Bueno","Excelente".
Funcion ejercicio_8
	//Entrada:
	//Definimos las variables y pedimos al usuario que ingrese un numero del 1 al 10
	//Proceso:
	//Leemos el numero ingresado
	//Evaluamos todo el rango de numero con una condicion para que se cumpla
	//Si puntuacion >= 1 Y puntuacion <= 3 Entonces
	//Escribir "Malo"
	//Sino
	//Si puntuacion >= 4 Y puntuacion <= 6 Entonces
	//Escribir "Regular"
	//Sino
	//Si puntuacion >= 7 Y puntuacion <= 8 Entonces
	//Escribir "Bueno"
	//Sino
	//Si puntuacion >= 9 Y puntuacion <= 10 Entonces
	//Escribir "Excelente"
	//Sino
	//Escribir "Puntuación fuera de rango"
	//Fin Si
	//Fin Si
	//Fin Si
	//Fin Si
	//Salida:
	//Mostrar el rango de la puntuacion dependiendo el numero ingresado ya sea
	//1 a 3 como malo, 4 a 6 como regular, 7 a 8 como bueno y 9 a 10 como excelente
	Definir puntuacion Como Entero
	Escribir "Ingrese una puntuación del 1 al 10:"
	Leer puntuacion
	
    Si puntuacion >= 1 Y puntuacion <= 3 Entonces
		Escribir "Su puntuación es Mala"
	Sino
		Si puntuacion >= 4 Y puntuacion <= 6 Entonces
			Escribir "Su puntuación es Regular"
		Sino
			Si puntuacion >= 7 Y puntuacion <= 8 Entonces
				Escribir "Su puntuación es Buena"
			Sino
				Si puntuacion >= 9 Y puntuacion <= 10 Entonces
					Escribir "Su puntuación es Excelente"
				Sino
					Escribir "Puntuación fuera de rango"
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinFuncion





//Ejercicio 9: Verificador de múltiplo de 3 o múltiplo de 9 o múltiplo de 12 Pedir un número.
//Entrada:
//	numero(leer)=0
//	
//desarrollo:
//	Definir numero Como Entero
//	numero <- 0;
//    Escribir "VERIFICADOR DE MULTIPLO"
//    Escribir "Ingrese un numero"
//    Leer numero
//	
//    Si numero mod 3 = 0 o numero mod 9 = 0 o numero mod 12 = 0 Entonces
//        Escribir "El número ", numero, " es múltiplo de:"
//        Si numero mod 3 = 0 Entonces
//            Escribir "*) El numero 3"
//        FinSi
//        Si numero mod 9 = 0 Entonces
//            Escribir "*) El numero 9"
//        FinSi
//        Si numero mod 12 = 0 Entonces
//            Escribir "*) El numero 12"
//        FinSi
//    Sino
//        Escribir "El número ", numero, " no es múltiplo de 3, 9 ni 12."
//    FinSi
//	
//Salida:
//	Escribir "El número ", numero, " es múltiplo de:"
Funcion  Multiplo_3_9_12
	Definir numero Como Entero
	numero <- 0;
    Escribir "VERIFICADOR DE MULTIPLO"
    Escribir "Ingrese un numero"
    Leer numero
	
    Si numero mod 3 = 0 o numero mod 9 = 0 o numero mod 12 = 0 Entonces
        Escribir "El número ", numero, " es múltiplo de:"
        Si numero mod 3 = 0 Entonces
            Escribir "*) El numero 3"
        FinSi
        Si numero mod 9 = 0 Entonces
            Escribir "*) El numero 9"
        FinSi
        Si numero mod 12 = 0 Entonces
            Escribir "*) El numero 12"
        FinSi
    Sino
        Escribir "El número ", numero, " no es múltiplo de 3, 9 ni 12."
    FinSi

FinFuncion




//Ejercicio 10: Calculadora de propina: Pedir valor de la cuenta. Calcular propina del 10% o 15% según nivel de servicio.
//entrada:
//	propina(asignar)=0
//	opcion(leer)=""
//	valorcuenta(leer)=0
//	valorpropina(calcular)=0
//	
//Proceso:
//	Definir propina, opcion Como Entero
//	Definir valorcuenta, valorpropina Como Real
//	propina = 0; valorcuenta = 0; valorpropina = 0;
//	Escribir " === CALCULADORA DE PROPINA ==="
//	Escribir "Ingrese el valor de la cuenta"
//	leer valorcuenta
//	Escribir "¿Cuánto desea dejar de propina?"
//	Escribir "1) 10%"
//	Escribir "2) 15%"
//	leer opcion
//	Si opcion = 1 Entonces
//		propina = 10
//		valorpropina = valorcuenta * 0.10
//	SiNo
//		Si opcion = 2 Entonces
//			propina = 15
//			valorpropina = valorcuenta * 0.15
//		SiNo
//			Escribir "Opción inválida. No se calculará propina"
//			propina = 0
//            valorpropina = 0
//		Fin Si
//	Fin Si
//	
//Salida:
//	Escribir "Valor de la cuenta: " valorcuenta " $"
//	Escribir "Propina: " propina " %"
//	Escribir "Valor de la propina: " valorpropina
Funcion  Calculadora_de_propina
	Definir propina, opcion Como Entero
	Definir valorcuenta, valorpropina Como Real
	propina = 0; valorcuenta = 0; valorpropina = 0;
	Escribir " === CALCULADORA DE PROPINA ==="
	Escribir "Ingrese el valor de la cuenta"
	leer valorcuenta
	Escribir "¿Cuánto desea dejar de propina?"
	Escribir "1) 10%"
	Escribir "2) 15%"
	leer opcion
	Si opcion = 1 Entonces
		propina = 10
		valorpropina = valorcuenta * 0.10
	SiNo
		Si opcion = 2 Entonces
			propina = 15
			valorpropina = valorcuenta * 0.15
		SiNo
			Escribir "Opción inválida. No se calculará propina"
			propina = 0
            valorpropina = 0
		Fin Si
	Fin Si
	
	Escribir "Valor de la cuenta: " valorcuenta " $"
	Escribir "Propina: " propina " %"
	Escribir "Valor de la propina: " valorpropina
FinFuncion




//Ejercicio 11: Clasificador de monto de compra
//Categorizar la compra: "baja" (<$10), "media" ($10-30), "alta" (>$30).

//Variable:
// monto -> almacena el valor de la compra (tipo Real)

//Definir variable "monto" como Real
// Pedir al usuario que ingrese el monto de la compra
// Evaluar el monto:
//si es menor a 10 -> Mostrar "categoría Baja"
// Si está entre 10 y 30 (incluidos) ->Mostrar "categoría Media"
// Si es mayor a 30 -> Mostrar "categoría Alta"
Funcion  EJERCICIO_11
	Definir monto  Como Real
	
	Escribir 'Ingrese el monto de la compra:'
	Leer monto
	Si monto<10 Entonces
		Escribir ' Su Compra ingreso en  categoria Baja '
	SiNo
		Si monto>=10 Y monto<=30 Entonces
			Escribir ' Su Compra ingreso en  categoria media '
		SiNo
			Escribir ' Su Compra ingreso en  categoria alta '
		FinSi
	FinSi
	
FinFuncion





//Ejercicio 12: Determinar si un número es positivo deberá presentar el doble del
//número, Si es negativo lo convierte a positivo y lo presenta . Si es cero presenta el
//número es neutro
//Pedir un número y clasificar su signo
// PROCESO
// Pedir al usuario que ingrese un número
// Si el número es mayor que 0:
// - Calcular el doble y mostrarlo
// Si el número es menor que 0:
//- Convertirlo a positivo (valor absoluto) y mostrarlo
// Si el número es igual a 0:
// Mostrar que es un número neutro
Funcion  EJERCICIO_12
	
	Definir numero, resultado Como Real
	
	Escribir "Ingrese un número:"
	
	Leer numero
	
	Si numero > 0 Entonces
		resultado <- numero * 2
		Escribir "El número es positivo. El doble es: ", resultado
	Sino
		Si numero < 0 Entonces
			
			resultado <- Abs(numero)
			Escribir "El número es negativo. Su valor absoluto es: ", resultado
        Sino
			Escribir "El número es neutro (cero)."
		FinSi
	FinSi
FinFuncion




// 1) Entender el problema:
// Ejercicio 13: Verificador de acceso por edad y dinero
// Permitir entrar a la tienda si tiene más de 18 años y al menos $1.
//   - La persona tiene más de 18 años
//   - Y además tiene al menos $1
// En caso contrario, no se le permite el ingreso.

// 2) Entrada: edad(Leer)=0, dinero(Leer)=0

// 3) Proceso: edad(Leer), dinero(Leer)
//    Si edad > 18 Y dinero >= 1 Entonces
//        Mostrar "Acceso permitido a la tienda"
//    Sino
//        Mostrar "Acceso denegado"
//    FinSi

// 4) Salida: Mostramos un mensaje de acceso permitido o denegado

Funcion  Ejercicio_13
	// Declaramos las variables
	Definir edad Como Entero
	Definir dinero Como Real
	
	edad <- 0; dinero <- 0 // Inicializamos las variables
	
	Escribir "Ingrese su edad:" // Solicitamos la edad al usuario
	Leer edad
	
	Escribir "Ingrese la cantidad de dinero que tiene ($):" // Solicitamos la cantidad de dinero al usuario
	Leer dinero
	
	// Verificar condiciones de acceso
	Si edad > 18 Y dinero >= 1 Entonces
		Escribir "¡Acceso permitido a la tienda!"
	Sino
		Escribir "¡Acceso denegado!"
	FinSi
FinFuncion





// 1) Entender el problema:
// Ejercicio 14: Descuento por edad y monto
// Aplicar descuento especial solo si el cliente es mayor de 60 y compra más de $50. Si no lo es
// aplica el iva del 15% con un descuento solo del 5%.
// Luego de aplicamos el descuento, se calcula el IVA del 15% sobre el nuevo monto.

// 2) Entrada: edad(Leer)=0, montoCompra(Leer)=0, descuento(Leer)=0, subtotal(Calcular)=0

// 3) Proceso: edad(Leer), montoCompra(Leer), descuento(Leer), subtotal(Calcular)
//    Si edad > 60 Y montoCompra > 50 Entonces
//        descuento <- montoCompra * 0.20
//    Sino
//        descuento <- montoCompra * 0.05
//    FinSi
//    subtotal <- montoCompra - descuento
//    iva <- subtotal * 0.15
//    total <- subtotal + iva

// 4) Salida: descuento, IVA y total a pagar

Funcion  Ejercicio_14
	// Declaramos las variables
	Definir edad Como Entero
	Definir montoCompra, descuento, subtotal, iva, total Como Real
	
	edad <- 0; montoCompra <- 0; descuento <- 0; subtotal <- 0; iva <- 0; total <- 0 // Inicializamos las variables
	
	// Solicitamos los datos al usuario
	Escribir "Ingrese su edad:"
	Leer edad
	
	Escribir "Ingrese el monto de la compra ($):"
	Leer montoCompra
	
	// Condicionamos y determinamos el descuento por la edad y el monto de compra
	Si edad > 60 Y montoCompra > 50 Entonces
		descuento <- montoCompra * 0.20
	Sino
		descuento <- montoCompra * 0.05
	FinSi
	
	subtotal <- montoCompra - descuento // Calculamos el subtotal luego del descuento
	
	iva <- subtotal * 0.15 // Calculamos el IVA sobre el subtotal de la compra
	
	total <- subtotal + iva // Calculamos el total final a pagar
	
	// Mostramos los resultados por consola
	Escribir "Descuento aplicado: $", descuento
	Escribir "Subtotal después del descuento: $", subtotal
	Escribir "IVA aplicado (15%): $", iva
	Escribir "Total a pagar: $", total
FinFuncion






//Ejercicio15 calcular billetes de 10 y 5
//  El algoritmo se llama "CalcularBilletes".
// 1. Definir variables
//vuelto (se lee).

//cantidadBilletes10, cantidadBilletes5 y remanente (se escribe).
// desarrollo
//se divide la variable vuelto entre 10 y la variable remanente entre 5
//se calcula el residuo de la division entera de veulto entre 10 utilizando el operador mod10

//salida
//se muestra en pantalla dos lineas con la cantidad de billetes de 10 y 5 dependiendo el valor ingresado por el usuario


Funcion   CalcularBilletes
	
    Definir vuelto, cantidadBilletes10, remanente, cantidadBilletes5 Como Entero
	
    Escribir "Ingrese el valor del vuelto:"
	
    Leer vuelto
	
    cantidadBilletes10 = trunc(vuelto / 10)
	
    remanente = vuelto MOD 10
	
	cantidadBilletes5 = trunc(remanente / 5)
	
    Escribir "Billetes de $10: ", cantidadBilletes10
	
    Escribir "Billetes de $5: ", cantidadBilletes5
	
FinFuncion





//ejercicio16
//Algoritmo CategorizarDia
//1.entrada
//Definir variable numeroDia Como Entero
//Escribir "Ingrese un número del 1 al 7:"
//(Leer numeroDia).

//2.proceso
//Si (numeroDia está entre 1 y 7) Entonces
//Según numeroDia Hacer
//Caso 1: // Lunes
//Caso 2: // Martes
//Caso 3: // Miércoles
//Caso 4: // Jueves
//Caso 5: // Viernes
//Caso 6: // Sábado
//Caso 7: // Domingo
//De Otro Modo: // Error interno (no debería ocurrir)
//FinSegun
//Sino
// Número inválido
//FinSi

//3.salida 
//escribir del 1 al 7 va apresentar dias de la semana
//FinAlgoritmo

Funcion CategorizarDia
	Definir numeroDia Como Entero
    Escribir "Ingrese un número del 1 al 7:"
    Leer numeroDia
    Si numeroDia >= 1 Y numeroDia <= 7 Entonces
        Segun numeroDia Hacer
            Caso 1:
                Escribir "Lunes"
            Caso 2:
                Escribir "Martes"
            Caso 3:
                Escribir "Miércoles"
            Caso 4:
                Escribir "Jueves"
            Caso 5:
                Escribir "Viernes"
            Caso 6:
                Escribir "Sábado"
            Caso 7:
                Escribir "Domingo"
            De Otro Modo:
                Escribir "Error interno: número de día fuera de rango"
        FinSegun
    SiNo
        Escribir "Número inválido. Por favor, ingrese un número entre 1 y 7."
    FinSi
FinFuncion





// Clasificador de producto por precio unitario 
//Pedir precio unitario y decir si es "económico", "regular" o "caro". 
Funcion  ejercicio_17
	//Entrada:
	//Definimos variables y pedimos al usuario que ingrese el precio del producto
	//Definir precio Como Real
	//Escribir "Ingrese el precio del producto:"
	Definir precio Como Real
	Escribir "Ingrese el precio del producto:"
    //Proceso:
	//Leemos el precio, aplicamos un rango para poder definir en que casos seria económico, regular o caro
	//en este caso el rango es de 0 a 40 como económico, de 50 a 99 como regular y si se pasa de ese rango el producto es caro
	//Leer precio
    //Si precio < 50 Entonces
	//Escribir "El producto es económico"
    //Sino
	//Si precio <= 100 Entonces
	//  Escribir "El producto es regular"
	//Sino
	//     Escribir "El producto es caro"
	//   FinSi
	// FinSi
	//Salida:
	//Mostrar el rango del producto dependiendo el precio ingresado
	Leer precio
    Si precio < 50 Entonces
        Escribir "El producto es económico"
    Sino
        Si precio <= 100 Entonces
            Escribir "El producto es regular"
        Sino
            Escribir "El producto es caro"
        FinSi
    FinSi
FinFuncion




//Determinador de bisiesto (año) 
//Pedir un año. Indicar si es bisiesto usando regla condicional (mod 4 y mod 100, mod 400).
Funcion  ejercicio_18
	//Entrada:
	//Definir variables y pedir al usuario que ingrese un año
	Definir anio Como Entero
	//Proceso:
	//leemos el año ingresado
	//Aplicamos la condicion para determinar si el año ingresado es bisiesto o no
	//Leer año
    //Si (año MOD 4 = 0 Y año MOD 100 <> 0) O (año MOD 400 = 0) Entonces
	//Escribir "El año ", año, " es bisiesto."
    //Sino
	//Escribir "El año ", año, " no es bisiesto."
    //FinSi
    Escribir "Ingrese un año:"
    Leer anio
    Si (anio MOD 4 = 0 Y anio MOD 100 <> 0) O (anio MOD 400 = 0) Entonces
        //Salida:
		//Mostrar en pantalla si se cumple la condicion o no, si se cumple es año bisiesto si no, no
		Escribir "El año ", anio, " es bisiesto."
    Sino
        Escribir "El año ", anio, " no es bisiesto."
    FinSi
FinFuncion




//Ejercicio 19: Conversor de horas a minutos y segundos: Pedir horas y calcular su equivalencia en minutos y segundos.
//Entrada:
//	horas(leer)=""
//	minutos(Calcular)=0
//	segundos(Calcular)=0
//	conmin(Calcular)=0
//	conseg(Calcular)=0
//	
//Proceso:
//	Definir horas, minutos, segundos, conmin, conseg Como Entero
//	horas=""; minutos=0; segundos=0; conmin=0; conseg=0;
//	Escribir  " == CONVERSOR DE HORAS A MINUTOS Y SEGUNDOS =="
//	Escribir "Digite el número de horas para convertir a minutos y segundos:"
//	leer horas
//	
//	conmin <- horas * (60/1)
//	minutos <- conmin
//	Escribir "CONVERSION DE HORAS A MINUTOS: " minutos
//	
//	conseg <- horas * (3600/1)
//	segundos <- conseg
//	Escribir "CONVERSION DE HORAS A SEGUNDOS: " segundos
//	
//Salida:
//	Escribir "Las ", horas, " horas equivalen a ", minutos, " minutos y ", segundos, " segundos."
Funcion  Conversor_horas_a_minutos_segundos
	Definir horas, minutos, segundos, conmin, conseg Como Entero
	horas=0; minutos=0; segundos=0; conmin=0; conseg=0;
	Escribir  " == CONVERSOR DE HORAS A MINUTOS Y SEGUNDOS =="
	Escribir "Digite el número de horas para convertir a minutos y segundos:"
	leer horas
	
	conmin <- horas * (60/1)
	minutos <- conmin
	Escribir "CONVERSION DE HORAS A MINUTOS: " minutos
	
	conseg <- horas * (3600/1)
	segundos <- conseg
	Escribir "CONVERSION DE HORAS A SEGUNDOS: " segundos
	
	Escribir "Las ", horas, " horas equivalen a ", minutos, " minutos y ", segundos, " segundos."
FinFuncion





//Ejercicio 20: Verificador de triple de un número: Pedir dos números. Verificar si el segundo es el triple del primero.
//Entrada:
//	num1(leer)=0
//	
//Proceso:
//	Definir num1, num2 Como Entero
//	num1<-0; num2<-0;
//	Escribir "== VERIFICADOR DE TRIPLE DE UN NÚMERO =="
//	
//	//Se ingresa el primer numero 
//	Escribir "Ingrese el primer numero"
//	leer num1
//	
//	//Se ingresa el segundo numero 
//	Escribir "Ingrese el segundo numero"
//	leer num2
//	
//	Si num2 = num1 * 3 Entonces
//		Escribir "El numero " num2 " si es el triple del numero " num1
//	SiNo
//		Escribir "El numero " num2 " no es el triple del numero " num1
//	Fin Si
//	
//Salida:
//	Escribir "El numero " num2 " si es el triple del numero " num1
//	Escribir "El numero " num2 " no es el triple del numero " num1
Funcion  Verificador_de_triple_de_un_número
	Definir num1, num2 Como Entero
	num1<-0; num2<-0;
	Escribir "== VERIFICADOR DE TRIPLE DE UN NÚMERO =="
	
	//Se ingresa el primer numero 
	Escribir "Ingrese el primer numero"
	leer num1
	
	//Se ingresa el segundo numero 
	Escribir "Ingrese el segundo numero"
	leer num2
	
	Si num2 = num1 * 3 Entonces
		Escribir "El numero " num2 " si es el triple del numero " num1
	SiNo
		Escribir "El numero " num2 " no es el triple del numero " num1
	Fin Si
FinFuncion





//Ejercicio 21: Determinar riesgo por síntomas múltiples para el efecto tienes
//Escribir "¿Tiene fiebre? (SI/NO):"
//Escribir "¿Tiene dificultad para respirar? (SI/NO):"
//Escribir "¿Tiene dolor en el pecho? (SI/NO):"
//Si los tres síntomas son "SI" muestre un mensaje "Alto riesgo: Derivar a emergencia"
//caso contrario muestre "Riesgo bajo o medio"

//fiebre -> almacena respuesta sobre fiebre (tipo Cadena)
//respirar -> almacena respuesta sobre dificultad para respirar (tipo Cadena)
//pecho -> almacena respuesta sobre dolor en el pecho (tipo Cadena)
//Definir variables "fiebre", "respirar" y "pecho" como tipo Cadena
// Preguntar al usuario si tiene fiebre y guardar la respuesta
//Preguntar si tiene dificultad para respirar y guardar la respuesta
//Preguntar si tiene dolor en el pecho y guardar la respuesta
//Evaluar las respuestas:
//Si las tres son "SI" -> Mostrar "Alto riesgo: Derivar a emergencia"
//Si no ->Mostrar "Riesgo bajo o medio"


Funcion  Ejercicio_21
	Definir fiebre, respirar, pecho Como Cadena
	
    Escribir "¿Tiene fiebre? (SI/NO):"
    Leer fiebre
	
    Escribir "¿Tiene dificultad para respirar? (SI/NO):"
    Leer respirar
	
    Escribir "¿Tiene dolor en el pecho? (SI/NO):"
    Leer pecho
	
    Si fiebre = "SI" Y respirar = "SI" Y pecho = "SI" Entonces
        Escribir "Alto riesgo: Derivar a emergencia"
    Sino
        Escribir "Riesgo bajo o medio"
    FinSi
FinFuncion





//22. La tienda desea implementar una función básica en su sistema para identificar el estado
//de salud de los clientes que se toman la presión arterial en su tienda. Para ello, solicita un
//pequeño algoritmo que reciba la presión sistólica como entrada y muestre una clasificación
//médica básica según la siguiente tabla:
//Presión Sistólica Clasificación
//Menor a 90 Presión baja
//Entre 90 y 120 Presión normal
//Entre 121 y 139 Prehipertensión
//140 o más Hipertensión

//presion ->almacena el valor ingresado de la presión sistólica (tipo Entero)
//Definir la variable "presion" como Entero
//Pedir al usuario que ingrese su presión sistólica
//Leer el valor de presión
//Evaluar el valor ingresado y mostrar la clasificación:
//Si < 90                -> "Presión baja"
//Si entre 90 y 120      -> "Presión normal"
//Si entre 121 y 139     -> "Prehipertensión"
//Si 140 o más           -> "Hipertensión"
Funcion  Ejercicio_22
	Definir presion Como Entero
	Definir opciones Como Caracter
    Escribir "Ingrese su presión sistólica:"
    Leer presion
	
    Si presion < 90 Entonces
        Escribir "Clasificación: Presión baja"
    Sino
        Si presion >= 90 Y presion <= 120 Entonces
            Escribir "Clasificación: Presión normal"
        Sino
            Si presion >= 121 Y presion <= 139 Entonces
                Escribir "Clasificación: Prehipertensión"
            Sino
                Escribir "Clasificación: Hipertensión"
            FinSi
        FinSi
    FinSi
FinFuncion





// 1) Entender el problema:
// Ejercicio 23: Mostrar saludo personalizado
// Ingresar nombre y mostrar saludo: ¡Hola, [nombre]!

// 2) Entrada: nombre(Leer)=""

// 3) Proceso: nombre(Leer)
//    saludo <- "¡Hola, " + nombre + "!"

// 4) Salida: saludo

Funcion Ejercicio_23
	// Declaramos las variables
	Definir nombre, saludo Como Cadena
	
	nombre <- ""; saludo <- "" // Inicializamos las variables
	
	// Solicitamos que ingrese los datos
	Escribir "Ingrese su nombre:"
	Leer nombre
	
	// Construimos el saludo personalizado al usuario
	saludo <- "¡Hola, " + nombre + "!"
	
	// Mostramos un mensaje 
FinFuncion





// 1) Entender el problema:
// Ejercicio 24: Detectar si el carácter ingresado es una vocal
// Ingresar una letra. Verificar si es a, e, i, o, u.
// Vocales válidas: a, e, i, o, u (solo minúsculas en este caso)

// 2) Entrada: letra(Leer)="", mensaje(Mostrar)=""

// 3) Proceso: letra(Leer), mensaje(Mostrar)
//    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
//       mensaje <- "Es una vocal"
//    Sino
//       mensaje <- "No es una vocal"
//    FinSi

// 4) Salida: mensaje

Funcion  Ejercicio_24
	// Declaramos las variables
	Definir letra, mensaje Como Cadena
	
	letra <- ""; mensaje <- "" // Inicializamos las variables
	
	// Solicitamos que ingrese una vocal
	Escribir "Ingrese una letra: "
	Leer letra
	
	letra <- Minusculas(letra) // Convertimos las letras a Minusculas
	
	// Condicionamos y verificar si es vocal o no
	Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
		mensaje <- "Es una vocal"
	Sino
		mensaje <- "No es una vocal"
	FinSi
	
	// Mostrar resultado
	Escribir mensaje
FinFuncion





//ejercicio25
// 1. El algoritmo se llama "DetectorConsonante".
//entrada
//  Definir variable letra (se lee).

// 2. proceso
// Se define la variable letra de tipo Carácter.
// Se solicita al usuario ingresar una letra: Escribir "Ingrese una letra.".
// Se lee el valor ingresado por el usuario y se almacena en la variable letra: Leer letra.
// Se evalúa si la variable letra NO es igual a ninguna de las vocales (mayúsculas o minúsculas): Si letra <> "a" Y letra <> "e" Y letra <> "i" Y letra <> "o" Y letra <> "u" Y letra <> "A" Y letra <> "E" Y letra <> "I" Y letra <> "O" Y letra <> "U" Entonces.
// Si esta condición es verdadera (la letra no es una vocal), se ejecuta: Escribir "Es una consonante.".
// Si esta condición es falsa (la letra es una vocal), se ejecuta el bloque Sino.
// En el bloque Sino, se ejecuta: Escribir "No es una consonante (es una vocal).".

//3.salida
// se muestra en la pantalla uno de los siguientes mensajes dependiendo la letra ingrsada
// es una consonante o no es una consonante( es una vocal).

Funcion   DetectorConsonante
    // Definir variables
    Definir letra Como Caracter
	
    // Entrada de datos
    Escribir "Ingrese una letra:"
    Leer letra
	
    // Verificar si es consonante
    Si letra <> "a" Y letra <> "e" Y letra <> "i" Y letra <> "o" Y letra <> "u" Y letra <> "A" Y letra <> "E" Y letra <> "I" Y letra <> "O" Y letra <> "U" Entonces
        Escribir "Es una consonante."
    SiNo
        Escribir "No es una consonante (es una vocal)."
    FinSi
FinFuncion




//ejercicio26
// El algoritmo se llama "CompararNombres".
// 1. Definir variables
//nombre1 nombre2 (se leen).

//Proceso 
//si nombre1 es = nombre2 compara si es verdadera son iguales
//sino los nombres no son iguales

//salida
//se mostrara si son nombres iguales o si no son iguales

Funcion  CompararNombres
    // Definir variables
    Definir nombre1, nombre2 Como Caracter
	
    // Entrada de datos
    Escribir "Ingrese el primer nombre:"
    Leer nombre1
    Escribir "Ingrese el segundo nombre:"
    Leer nombre2
	
    // Comparar los nombres y mostrar el resultado
    Si nombre1 = nombre2 Entonces
        Escribir "Los nombres son iguales."
    SiNo
        Escribir "Los nombres no son iguales."
    FinSi

FinFuncion





//Verificar si una letra es mayúscula o minúscula 
//Ingresar una letra. Comparar con su versión en mayúscula/minúscula.
Funcion  ejercicio_27
	//Entrada:
	//Definir variables y pedir al usuario que ingrese una letra"
	//Proceso:
	//Leer la letra ingresada
	//Aplicamos la condicion para poder determinar si es una letra mayúscula o es una letra minúscula
    //Escribir "Ingrese una letra:"
    //Leer letra
    //letramayus = Mayusculas(letra)
    //letraminus = Minusculas(letra)
    //Si letra = letramayus Entonces
	//Escribir "La letra es mayúscula."
    //Sino
	//Escribir "La letra es minúscula."
    //FinSi
	//Salida:
	//Mostrar en pantalla al usuario su letra si es o no es mayúscula
	Definir letra, letramayus, letraminus Como Caracter
    Escribir "Ingrese una letra:"
    Leer letra
    letramayus = Mayusculas(letra)
    letraminus = Minusculas(letra)
    Si letra = letramayus Entonces
        Escribir "La letra es mayúscula."
    Sino
        Escribir "La letra es minúscula."
    FinSi
FinFuncion




//Mostrar nombre completo del cliente 
//Pedir nombre y apellido por separado. Mostrar nombre completo.
Funcion  ejercicio_28
	//Entrada:
	//Definimos variables y preguntamos al usuarios sus dos nombres y luego sus dos apellidos
	//Escribir "Ingrese sus 2 nombre:"
	//Escribir "Ingrese sus 2 apellido:"
	//Proceso:
	//Leemos las variables ingresadas
	//Hacemos que se conecten el nombre y el apellido para luego formar el nombre completo
	//Escribir "Ingrese sus 2 nombre:"
    //Leer nombre
    //Escribir "Ingrese sus 2 apellido:"
    //Leer apellido
    //nombreCompleto = nombre + " " + apellido
    //Escribir "El nombre completo del cliente es: ", nombrecompleto
	Definir nombre, apellido, nombrecompleto Como Cadena
    Escribir "Ingrese sus 2 nombre:"
    Leer nombre
    Escribir "Ingrese sus 2 apellido:"
    Leer apellido
    nombreCompleto = nombre + " " + apellido
	//Salida:
	//Mostrar en pantalla al usuaario el nombre completo
    Escribir "El nombre completo del cliente es: ", nombrecompleto
	
FinFuncion





//Ejercicio 29: Verificar si una palabra es corta o larga: Pedir una palabra. Si tiene más de 6 caracteres, decir "larga"; si no, "corta".
//Entrada:
//	palabra(leer)=""
//	longitud_(Calcular)=0
//	
//Proceso:
//	Definir palabra Como Cadena
//    Definir longitud_ Como Entero
//	
//    Escribir "Ingrese una palabra:"
//    Leer palabra
//	
//    longitud_ <- Longitud(palabra)
//	
//    Si longitud_ > 6 Entonces
//        Escribir "La palabra es larga."
//    Sino
//        Escribir "La palabra es corta."
//    FinSi
//	
//Salida:
//	Escribir "La palabra es larga."
//	Escribir "La palabra es corta."
Funcion  Verificar_palabra_corta_larga
	Definir palabra Como Cadena
    Definir longitud_ Como Entero
	palabra=""; longitud_=0;
	
    Escribir "Ingrese una palabra:"
    Leer palabra //Ingresamos la palabra
	
    longitud_ <- Longitud(palabra) //Usamos la instruccion Longitud para calcular Longitud de la palabra incluido los espacios
	
    Si longitud_ > 6 Entonces
        Escribir "La palabra es larga."
    Sino
        Escribir "La palabra es corta."
    FinSi
FinFuncion





//Ejercicio 30: Contadar los caracteres y convertir a mayúsculas cualquier frase (sin recorrer): Pedir frase. Usar funciones de PseInt de cadenas para este ejercicio
//Entrada:
//frase(leer)=""
//longitud_(calculamos)=0
//mayuscula(calculamos)=""
//
//Proceso:
//	Definir frase Como Cadena
//    Definir longitud_ Como Entero
//    Definir mayuscula Como Cadena
//	frase<-""; longitud_<-0; mayuscula<-"";
//	
//    Escribir "Ingrese una frase:"
//    Leer frase //Ingresamos la frase con la calcularemos la Longitud
//	
//    longitud_ <- longitud(frase)
//    mayuscula <- Mayusculas(frase) //La frase se reescribira en Mayusculas por la funcion Mayusculas()
//	
//Salida:
//	Escribir "Cantidad de caracteres: ", longitud_
//    Escribir "Frase en mayúsculas: ", mayuscula
Funcion  Pedir_Frase
	Definir frase Como Cadena
    Definir longitud_ Como Entero
    Definir mayuscula Como Cadena
	frase<-""; longitud_<-0; mayuscula<-"";
	
    Escribir "Ingrese una frase:"
    Leer frase //Ingresamos la frase con la calcularemos la Longitud
	
    longitud_ <- longitud(frase)
    mayuscula <- Mayusculas(frase) //La frase se reescribira en Mayusculas por la funcion Mayusculas()
	
    Escribir "Cantidad de caracteres: ", longitud_
    Escribir "Frase en mayúsculas: ", mayuscula
FinFuncion



Algoritmo MENU_PRINCIPAL
	// Declarar variable donde se guardará la opción del menú elegida
    Definir opc Como entero
	Definir resultado Como Real
	Repetir
		
		// Mostrar el menú por pantalla
		Escribir "           MENU           "
		Escribir "----------------------------"
		Escribir "Opciones Disponibles 0-30"
		Escribir "(0) Salir"
		Escribir "Elige una opción (0 - 30): " Sin Saltar
		Leer opc
		
		// Instrucciones a realizar según la opción elegida
		Segun opc hacer
			1:
				Limpiar Pantalla
				Escribir ""
				Escribir "Calculadora de vuelto"
				EJERCICIO_1
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			2:
				Limpiar Pantalla
				Escribir ""
				Escribir "Conversor de kilogramos a libras y viceversa"
				Ejercicio_2
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			3:
				Limpiar Pantalla
				Escribir ""
				Escribir "Calculadora de descuentos"
				Ejercicio_3_corregido
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			4:
				Limpiar Pantalla
				Escribir ""
				Escribir "Cálculo del IVA (12%)"
				Ejercicio_4
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			5:
				Limpiar Pantalla
				Escribir ""
				Escribir "Comparación de precios entre dos productos"
				CompararPrecios
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			6:
				Limpiar Pantalla
				Escribir ""
				Escribir "Clasificador de edad del cliente"
				ClasificarEdad
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			7:
				Limpiar Pantalla
				Escribir ""
				Escribir "Identificador de número par o impar"
				ejercicio_7
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			8:
				Limpiar Pantalla
				Escribir ""
				Escribir "Evaluador de puntuación de servicio"
				ejercicio_8
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			9:
				Limpiar Pantalla
				Escribir ""
				Escribir "Verificador de múltiplo de 3, 9 o 12"
				Multiplo_3_9_12
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			10:
				Limpiar Pantalla
				Escribir ""
				Escribir "Calculadora de propina"
				Calculadora_de_propina
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			11:
				Limpiar Pantalla
				Escribir ""
				Escribir "Clasificador de monto de compra"
				EJERCICIO_11
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			12:
				Limpiar Pantalla
				Escribir ""
				Escribir "Clasificación de número positivo, negativo o neutro"
				EJERCICIO_12
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			13:
				Limpiar Pantalla
				Escribir ""
				Escribir "Verificador de acceso por edad y dinero"
				Ejercicio_13
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			14:
				Limpiar Pantalla
				Escribir ""
				Escribir "Descuento por edad y monto"
				Ejercicio_14
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			15:
				Limpiar Pantalla
				Escribir ""
				Escribir "Cálculo de cambio exacto con billetes de $10 y $5"
				CalcularBilletes
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			16:
				Limpiar Pantalla
				Escribir ""
				Escribir "Categorizador de día de la semana"
				CategorizarDia
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			17:
				Limpiar Pantalla
				Escribir ""
				Escribir "Clasificador de producto por precio unitario"
				ejercicio_17
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			18:
				Limpiar Pantalla
				Escribir ""
				Escribir "Determinador de bisiesto (año)"
				ejercicio_18
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			19:
				Limpiar Pantalla
				Escribir ""
				Escribir "Conversor de horas a minutos y segundos"
				Conversor_horas_a_minutos_segundos
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			20:
				Limpiar Pantalla
				Escribir ""
				Escribir "Verificador de triple de un número"
				Verificador_de_triple_de_un_número
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			21:
				Limpiar Pantalla
				Escribir ""
				Escribir "Determinar riesgo por síntomas múltiples"
				Ejercicio_21
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			22:
				Limpiar Pantalla
				Escribir ""
				Escribir "Clasificación médica por presión arterial"
				Ejercicio_22
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			23:
				Limpiar Pantalla
				Escribir ""
				Escribir "Mostrar saludo personalizado"
				Ejercicio_23
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			24:
				Limpiar Pantalla
				Escribir ""
				Escribir "Detectar si el carácter ingresado es una vocal"
				Ejercicio_24
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			25:
				Limpiar Pantalla
				Escribir ""
				Escribir "Detectar si el carácter ingresado es una consonante"
				DetectorConsonante
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			26:
				Limpiar Pantalla
				Escribir ""
				Escribir "Comparar si dos nombres ingresados son iguales"
				CompararNombres
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			27:
				Limpiar Pantalla
				Escribir ""
				Escribir "Verificar si una letra es mayúscula o minúscula"
				ejercicio_27
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			28:
				Limpiar Pantalla
				Escribir ""
				Escribir "Mostrar nombre completo del cliente"
				ejercicio_28
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			29:
				Limpiar Pantalla
				Escribir ""
				Escribir "Verificar si una palabra es corta o larga"
				Verificar_palabra_corta_larga
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			30:
				Limpiar Pantalla
				Escribir ""
				Escribir "Contar caracteres y convertir a mayúsculas una frase"
				Pedir_Frase
				Escribir "Pulsa una tecla para continuar..."
				Esperar Tecla
			0:
				Limpiar Pantalla
				Escribir "Gracias por usar el sistema. ¡Hasta luego!"
				Escribir "Pulsa una tecla para continuar...."
				Esperar Tecla
			De Otro Modo:
				Limpiar Pantalla
				Escribir opc, " no es una opción correcta. Intentalo de huevo"
				Escribir "Pulsa una tecla para continuar...."
			Esperar Tecla
	FinSegun
	Limpiar Pantalla
Hasta Que opc = 0
FinAlgoritmo
