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

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado