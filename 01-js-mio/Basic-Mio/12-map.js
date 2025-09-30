// Map o diccionario
// clave-valor, elementos compuestos por dos elementos

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name","Fernando"],
    ["email","fer@gmail.com"],
    ["age","27"]
])

console.log(myMap)

// Métodos y propiedades
// set

myMap.set("alias","fer")
myMap.set("name","FER")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// delete

myMap.delete("email")
console.log(myMap)

// size

console.log(myMap.size)

// keys y values

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())