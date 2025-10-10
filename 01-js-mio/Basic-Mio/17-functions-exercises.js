/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b){
    return a + b
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function findMax (numbers){
    if(!numbers || numbers.length === 0){
        return undefined
    }
    let maxNumber = numbers [0]

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i]
        }
    }
    return maxNumber
}

const myNumbers = [10, 4, 25, 8, 17]
console.log(findMax(myNumbers))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numberVocals (str){
    const vowels = 'aeiou'
    let count = 0

    for(let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count ++
        }
    }
    return count
}

console.log(numberVocals("Hola Mundo"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const toUpperCase = (stringArray) => {
    return stringArray.map(str => str.toUpperCase()); // map recorremos cada elemento del array y con el str que es otra función flecha ejecutamos el metodo toUpperCase
}

const misPalabras = ["hola","mundo","desde","javascript"]
const palabrasMayus = toUpperCase(misPalabras)
console.log(palabrasMayus)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrimo(number){
    if(number <= 1){
        return false
    }
    //recorremos desde 2 hasta un numero antes del número a comprobar
    for (let i = 2; i < number; i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrimo(7)) //true, es primo
console.log(isPrimo(10)) //false, no es primo

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function findCommonElements(arr1, arr2){
    let arrCommon = arr1.filter(element => arr2.includes(element))
    return arrCommon
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2)); 

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumArr(arrNumber){
    let sumTotal = 0
    for(let numero of arrNumber){
        if(numero % 2 === 0){
            sumTotal += numero
        }
}
    return sumTotal
}

let array7 = [5,4,2,7]
console.log(sumArr(array7))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const arrExp = (arrNumber8) => {
    return arrNumber8.map(num8 => num8 ** 2)
}

let array8 = [2,3,4]
console.log(arrExp(array8))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function reverseString(str){
    let reversedStr = str.split(' ').reverse().join(' '); // se divide el string en un array de palabras, luego inviertes el orden de las palabras y por ultimo las vuelves a unir en un string
    return reversedStr
}

const miFrase = "Hola mundo desde JS"
console.log(reverseString(miFrase))


// 10. Crea una función que calcule el factorial de un número dado
function factorial(number){
    if (number < 0){
        return "El factorial no está definido para números negativos"
    }
    if (number === 0){
        return 1
    }
    let result = 1
    for (let i = number; i > 0; i --){
        result *= i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(0))
