// Operadores


let a = 5
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a %b ) // modulo
console.log(a ** b) // exponente

a++ // Incremento
b-- // Decremento


// Operadores de asignación

let myVariable = 2
myVariable += 2 
console.log(myVariable)

// Operadores de comparación

console.log(a == b)
console.log(a === a) //igualdad por identidad (por tipo y valor)
console.log(a != 6) // desigualdad



// Operadores lógicos

// and (&&)

console.log(5>2 && 2<6) //que ambas se tienen que cumplir

// or (||)

console.log(5>10 || 15 >20)

// not (!)

console.log(5>10 )

// operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")