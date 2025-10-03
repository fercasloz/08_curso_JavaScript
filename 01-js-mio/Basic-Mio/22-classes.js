// clases

class Person {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis

let person = new Person("Fernando", 27, "Fer")
let person2 = new Person ("Ana", 24, "Anuska")

console.log(person)
console.log(person2)

class DefaultPerson {
    constructor(name="Sin nombre", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Fer",26)
console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Programador"
console.log(person3.alias)


// funciones en clases

class PersonWithMethod {
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("La persona camina")
    }
}

let person4 = new PersonWithMethod("Fernando",27,"Fer")
console.log(person4)
person4.walk()

// propiedades privadas

class PrivatePerson {
    #bank // propiedad privada --> se define antes (no podemos acceder a ella ni se puede modificar)
    constructor(name,age,alias,bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.bank
    }
}



// getter y setters


class GetSetPerson {
    #name // propiedad privada --> se define antes (no podemos acceder a ella ni se puede modificar)
    #age
    #alias
    #bank
    constructor(name,age,alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }
}

let person6 = new GetPerson("Fernando",27,"Fer","IBAN123456789")
console.log(person6)
console.log(person6.name)



// Herencia de clases --> heredar propiedades y comportamiento de una clase


class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal{
    run(){
        console.log("El perro corre")
    }

    sound(){
        console.log("El perro ladra")
    }
}

class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog ("FerDog")
myDog.run()
myDog.sound()


// métodos estáticos

class MathOperations{

    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,10)) // --> al ser un metodo concreto no hace falta instanciar la clase para acceder a la suma