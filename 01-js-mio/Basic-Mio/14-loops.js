// Loops o bucles

// tareas repetitivas, automatizar procesos, grandes estructuras de datos...

// for

for (let i = 0 ; i < 5 ; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0
while(i<5){
    console.log(`Hola ${i}`)
    i++
}
/*
// bucle infinito
while(true){

}
*/

// do-while

//let i = 0. no se puede declarar la variable otra vez

do{
    console.log(`Hola ${i}`)
    i++
}while (i < 5)

// for of --> recorrer valores de algo iterable

myArray = [1,2,3,4]
mySet = new Set (["Fer","Nando","Castillo",98, true, "fer@gmail.com"])
myMap = new Map([
    ["name","Fernando"],
    ["email","fer@gmail.com"],
    ["age","27"]
])

myString = "Hola, JavaScript"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}

// Buenas prácticas

// uso --> break y del continue

for (let i = 0; i<10 ; i++){
    if (i == 5){
        continue
    }else if(i==6){
        break
    }
    console.log(`Hola ${i}`)
}