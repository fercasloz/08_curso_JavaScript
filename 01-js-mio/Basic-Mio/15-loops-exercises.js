/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i<21 ; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let valor = 0
for(let i = 1; i < 101; i++){
    valor += i
}
console.log(valor)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1 ; i < 50 ; i++){
    if (i % 2 == 0){
        console.log(i)
    }else{
        continue
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myNames = ["Fer", "Ana", "Mama", "Papa"]
for (let name of myNames){
    console.log(name)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myString = "Hola como estas"
let numbVocal = 0
for(let vocal of myString.toLowerCase()){
    if(vocal=="a"){
        numbVocal ++
    }else if(vocal=="e"){
        numbVocal ++
    }else if (vocal=="i"){
        numbVocal ++
    }else if (vocal=="o"){
        numbVocal ++
    }else if (vocal=="u"){
        numbVocal ++
    }else{
        continue
    }
}
console.log(numbVocal)

/* version mejorada
let myString = "Hola como estas";
let numbVocal = 0;
const vowels = "aeiou";

for(let char of myString.toLowerCase()){
    if (vowels.includes(char)) {
        numbVocal++;
    }
}
console.log(numbVocal);
*/

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let myNumbers = [5,4,3,2,1]
let result = 1
for (let numb of myNumbers){
    result *= numb
}
console.log(result)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let num = 5
for (let i = 0; i<= 10; i++){
    let result_num = num * i;
    console.log(result_num)
}

// 8. Usa un bucle para invertir una cadena de texto
let myString2 = "Hola Fer, como estas"
let reverseString = ""

for(let i = myString2.length -1; i >= 0 ; i--){
    reverseString += myString2[i]
}

console.log(reverseString)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
for(let i = 1 ; i <= 10; i++){
    console.log(a)
    let temp = a + b
    a = b
    b = temp
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNum = [5,12,9,15,20]
let arrayResult = []

for (let numero of arrayNum){
    if(numero > 10){
        arrayResult.push(numero)
    }else{
        continue
    }
}
console.log(arrayResult)
