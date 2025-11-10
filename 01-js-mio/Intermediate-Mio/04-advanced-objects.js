// Objetos avanzados

// - Prototipos y herencia

// Prototipos

let person = {
    name : "Fer",
    age : 37,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

//console.log(person.__proto__)
//console.log(Object.getPrototypeOf(person))


person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}

//console.log(person)
//person.greet()
//person.sayAge()


// Herencia

console.log("----")

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "Fernando"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)

programmer.greet()
programmer.sayAge()


// - Métodos estáticos y de instancia

function Person (name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person("Brais", 37)
new_person.greet()


// - Métodos avanzados
// assign

let person_core = {name : "Fernando"}
let person_details = {age: 37, alias:"Fer"}

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson)


// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))

