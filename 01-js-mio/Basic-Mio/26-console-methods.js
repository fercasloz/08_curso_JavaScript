// console

// log 

console.log("Hola")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida"))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información")

// table

let data = [
    ["Fer",27],
    ["Ana",24]
]

console.table(data)

data = [
    {name: "Fer", age: 27},
    {name: "Ana", age: 24}
]

console.table(data)


// group

console.group("Usuario:")
console.log("Nombre: Fer")
console.log("Edad: 27")
console.groupEnd()


// time

console.time("tiempo de ejecucción 1")
for(let i = 0; i < 10000; i++){

}

console.time("tiempo de ejecucción 2")
for(let i = 0; i < 10000; i++){

}
console.timeEnd("tiempo de ejecucción 1")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("tiempo de ejecucción 2")


// assert --> mensaje de error si lo que evalua es falso

let age = 12
console.assert( age >= 18, "El usuario debe ser mayor de edad.")


// count

console.count("Click")
console.count("Click")

console.countReset("Click")


// trace --> rastrear la ejeccución

console.trace("Seguimiento de la ejecucción")

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecucción")
}

funcA()



// clear

//console.clear()