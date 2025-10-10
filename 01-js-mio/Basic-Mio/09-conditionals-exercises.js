/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Fernando"
if(myName == "Fernando"){
    console.log(myName)
} 

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "fercasloz"
let password = "fercasloz1"
if(user == "fercasloz" && password == "fercasloz1"){
    console.log("Usuario y contraseña correctos!")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 5
if(num == 0){
    console.log("El numero es 0.")
}else if (num > 0){
    console.log("El numero es positivo")
}else{
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
if(age >= 18){
    console.log("La persona puede votar")
}else{
    let ageForVote = 18 - age
    console.log(`La persona no puede votar, le quedan ${ageForVote} años para votar`)
}



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 18
const valueForAge = age2 >= 18 ? "La persona es adulta" : "La persona es menor"
console.log(valueForAge)



// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// ...existing code...
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "octubre"; // Puedes cambiar este valor para probar

if (mes.toLocaleLowerCase() === "diciembre" || mes.toLocaleLowerCase() === "enero" || mes.toLocaleLowerCase() === "febrero") {
    console.log("Estamos en invierno.");
} else if (mes.toLocaleLowerCase() === "marzo" || mes.toLocaleLowerCase() === "abril" || mes.toLocaleLowerCase() === "mayo") {
    console.log("Estamos en primavera.");
} else if (mes.toLocaleLowerCase() === "junio" || mes.toLocaleLowerCase() === "julio" || mes.toLocaleLowerCase() === "agosto") {
    console.log("Estamos en verano.");
} else if (mes.toLocaleLowerCase() === "septiembre" || mes.toLocaleLowerCase() === "octubre" || mes.toLocaleLowerCase() === "noviembre") {
    console.log("Estamos en otoño.");
} else {
    console.log("El mes introducido no es válido.");
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// ...existing code...
const months31 = ["Enero","Marzo","Mayo","Julio","Agosto","Octubre","Diciembre"]
const months30 = ["Abril","Junio","Septiembre","Noviembre"]
const month28 =  ["Febrero"]

let month = "Abril"

if(months31.includes(month)){
    console.log(`El mes de ${month} tiene 31 días.`)
}else if(months30.includes(month)){
    console.log(`El mes de ${month} tiene 30 días.`)
}else if(month28.includes(month)){
    console.log(`El mes de ${month} tiene 28 ó 29 días.`)
}else{
    console.log(`El mes introducido no es válido.`) 
}



// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "Ingles"
let languageLower = language.toLocaleLowerCase() 

switch(languageLower){
    case "español":
        console.log(`Hola en ${languageLower}`)
        break
    
    case "ingles":
        console.log(`Hello in ${languageLower}`)
        break
    
    case "frances":
        console.log(`Bonjour on ${languageLower}`)
}




// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7