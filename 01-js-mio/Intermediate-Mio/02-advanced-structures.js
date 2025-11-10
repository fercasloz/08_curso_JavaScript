//Estructuras avanzadas

// Arrays avanzados

// - Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5]
numbers.forEach(element => console.log(element))


// map

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// - Manipulación

// flat

let nestedArray = [1,[2, [3, [4]]]]
console.log(nestedArray)
let flarArray = nestedArray.flat(3)
console.log(flarArray)


// flatMAp

let phrases = ["Hola Mundo", "Adios Mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)



// - Ordenación

//let unsorted = [3, 4, 1, 6, 10]
let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)


// reverse

sorted.reverse()
console.log(sorted)




// - Búsqueda

console.log(sorted.includes(4))
console.log(sorted.includes(5))


// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

//finIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)



// - Sets Avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA,...setB])
console.log(union)

// Intersección 

const intersection = new Set ([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversion

console.log([...setA])


// - Iteracción

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

let myMap = new Map([
    ["name", "Fer"],
    ["age", "37"]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// Mapa a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)


// Mapa a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)


// Objeto a Mapa

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)

