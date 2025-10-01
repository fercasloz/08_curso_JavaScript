// Objects

let person = {
    name : "Fernando",
    age : 37,
    alias : "Fer"
}

// Acceso a propiedades

console.log(person.name)

console.log(person["name"])

// Modificación de propiedades

person.name= "Fernando Castillo"
console.log(person.name)
console.log(typeof person.age)
person.age="37"
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.email = "fer@gmail.com"
console.log(person)

person["age"] = 37

console.log(person)

// métodos (funciones)

let person2 = {
    name : "Fernando",
    age : 37,
    alias : "Fer",
    walk: function(){
        console.log("La persona camina")
    }
}

person2.walk()

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

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

let person4 = {
    name: "Fernando",
    alias: "Fer",
    email: "fer@gmail.com",
    age: 37
}

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// iteración

for (let value in person4){
    console.log(value)
}

for (let key in person4){
    console.log(key + ": " + person4[key])
}

// funciones como objetos

function Person (name, age){ // debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Fer", 27)
console.log(person5)