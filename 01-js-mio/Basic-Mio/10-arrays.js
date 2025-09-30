// array

// declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inicialización

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais","Moure","mouredev"]
myArray2 = new Array (1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Fer"
myArray2[1] = "Nando"
myArray2[2] = "Castillo"


// Métodos comunes

myArray = []

// push y pop

myArray.push("Fer")
myArray.push("Nando")

console.log(myArray)

myArray.pop()

console.log(myArray)

// shift y unshift

myArray.shift() //elimina el primer elemento y lo devuelve
myArray.unshift("Castillo") //elimina la lista de elementos que le pases

// length

console.log(myArray.length)

// clear

/*
myArray = []
console.log(myArray)
*/

myArray = []
myArray.length = 0 //alternativa
console.log(myArray)

// slice
myArray.push("Fer","Nando","Castillo",98, true)

let myNewArray = myArray.slice(1,2) // crea un nuevo array pero solo con el fragmento que queremos sin tener en cuenta el indice superio

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1,3) // splice borra esos elementos y hace un array con los resultantes
console.log(myArray)

myArray.push("Fer","Nando","Castillo",98, true)

myArray.splice(1,2,3)
console.log(myArray)