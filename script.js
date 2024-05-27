// JAVA != JavaScript
//son cosas distintas

//variables
//espacio en memoria donde se almacena un valor

let nombre = "Esteban";
// let - nombre la variable - = - valor - ;
//si el valor es texto, va entre comillas

let edad = 31 + 1;

console.log("El nombre del profesor es: " + nombre + " y la edad es: " + edad )

// tipos de datos
// number : 1/2/3/-1/-2/-3/0.1/3.11/0
// cadenas de caracteres (string): "Esteban", "Hola", "Varela 269", "11"
// boolean : True y False
let abierto = false
let cerrado = true


function sumarDos(a,b){
    return a+b
}
console.log(sumarDos(2,6))

//Calcular numero primo
/*
Contexto: Definir numero primo: un numero que solo es divisible por si mismo y por uno
Ingreso: un numero a comprobar
Proceso: basica: divir por 2, 3, 5 y 7 / completa: dividir por todos los numeros impares
Salida: es primo O no es primo

*/


function calcularPrimoBasico(numeroAComprobar){
    if( numeroAComprobar % 2 === 0){
        return ("No es primo")
    } else if (numeroAComprobar % 3 === 0){
        return ("No es primo")
    } else if(numeroAComprobar % 5 === 0 ){
        return ("No es primo")
    } else if (numeroAComprobar % 7 === 0){
        return ("No es primo")
    } else {
        return("es primo")
    }
}
console.log(calcularPrimoBasico(9))//No Primo
console.log(calcularPrimoBasico(10))//No Primo
console.log(calcularPrimoBasico(11))//primo
console.log(calcularPrimoBasico(13))//primo
console.log(calcularPrimoBasico(15))//No primo
console.log(calcularPrimoBasico(21))//No primo
console.log(calcularPrimoBasico(19))//No es primo


/*
contexto: divisible por 4 o divisible por 100 y 400 
entrada: el año
proceso: dividir por 4, luego dividir por 100 y 400
salida: es bisiesto o no es bisiesto
*/

function anioEsBisiesto (anio){
    if(anio % 4 === 0){
        return ("Es bisiesto")
    }else if (anio % 100 === 0 && anio % 400 === 0){
        return ("Es bisiesto")
    }else{
        return ("No es bisiesto")
    }
}

console.log(anioEsBisiesto(2024))
console.log(anioEsBisiesto(2023))
console.log(anioEsBisiesto(2028))

//Hacer el primo completo con for


