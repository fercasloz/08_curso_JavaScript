/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ["perro","gato","tortuga","pajaro","caballo"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final
/*
animals.push("leon")
animals.reverse()
animals.push("cabra")
animals.reverse()
*/
animals.push("leon") //se añade leon al final
animals.unshift("cabra") //se añade cabra al principio
console.log(animals)


// 3. Elimina el que se encuentra en tercera posición
/*
animals.unshift("gato")
console.log(animals)
*/
animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
const books = new Set(["El señor de los anillos","1984","Un mundo feliz", "Fahrenheit 451", "Cien años de soledad"])
console.log(books)


// 5. Añade dos más. Uno de ellos repetido
books.add("El hobbit")
books.add("1984") // no lo añadira puesto que un set no acepta repetidos


// 6. Elimina uno concreto a tu elección
books.delete("Fahrenheit 451")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
const months = new Map([
    [1,"Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if(months.has(5)){
    console.log("El mes 5:", months.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
const verano = ["Junio", "Julio", "Agosto"]
months.set("verano", verano)
console.log(months)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
const miArray = [1, 2, 3, 3, 4, "hola", "hola", "mundo"]
const miSet = new Set(miArray)
const miMapa = new Map()
miMapa.set("datosUnicos",miSet)

console.log(miMapa)