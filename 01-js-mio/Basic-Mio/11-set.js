// set

// Declaracion

let mySet = new Set()
//let mySet2 = {} // no es un set

console.log(mySet)


// Inicialización

// mySet = new Set ("Fer","Nando","Castillo",98, true)

mySet = new Set (["Fer","Nando","Castillo",98, true])

console.log(mySet)

mySet.add("https://fer.cas")
console.log(mySet)

console.log(mySet.delete("https://fer.cas"))
console.log(mySet)

// has

console.log(mySet.has("Fer"))
console.log(mySet.has("Lozano"))

// size

console.log(mySet.size)

// convertir un set en array

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)

// añadir elementos --> no admite duplicados

mySet.add("fer@gmail.com")
mySet.add("fer@gmail.com")

console.log(mySet)