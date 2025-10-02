// Desestructuración

myArray = [1,2,3,4]

let person = {
    name : "Fernando",
    age: 27,
    alias: "Fer"
}

myValue = myArray[1]
console.log(myValue)

// Desestructuración
// Sintaxis array

let [myValue0, myValue1, myValue2, myValue3, myValue4 = 0] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Ignorar elementos
let [myValue10, , , myValue13] = myArray
console.log(myValue10)

console.log(myValue13)

// sintaxis objects

/*
let{name,age,alias}=person
console.log(name)
console.log(age)
console.log(alias)
*/

// sintaxis objetos con valores predeterminados
/*
let{name2,age2,alias2,email="fer@gmail.com"} = person
console.log(name2) // no existe
console.log(age2)  // no existe
console.log(alias2) // no existe
console.log(email)
*/

let{name:name3,age:age3,alias:alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)


let person3 = {
    name : "Fernando",
    age : 37,
    alias : "Fer",
    walk: function(){
        console.log("La persona camina")
    },
    job:{
        "name" : "Programador",
        exp : 3,
        work: function(){
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

let {name: name4, job:{name:jobName}} = person3

console.log(name4)
console.log(jobName)



// spreading --> propagación (...)
// sintaxis arrays

let myArray2 = [...myArray]
let myArray3 = [...myArray, 5, 6]
console.log(myArray2)
console.log(myArray3)

// combinacion de array

let myArray4 = [...myArray2,...myArray3]
console.log(myArray4)

// sintaxis objects

let person4 = {...person} // copia
console.log(person4)

let person5={...person, email:"fer@gmail.com"}
console.log(person5)