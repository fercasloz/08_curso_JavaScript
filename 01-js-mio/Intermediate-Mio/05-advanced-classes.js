// Clases avanzadas

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}


const person = new Person("Fernando",27)
person.greet()


//console.log(Person)


person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()


// Clases Abstractas

class Animal{
    constructor(name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name=name
    }

    makeSound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

/* - Error
const animal = new Animal("perro")
console.log(animal)
animal.makeSound() */

// - Polimorfismo

class Cat extends Animal{
    makeSound(){
        console.log("miau")
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("guau")
    }
}

const cat = new Cat("myCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("myDog")
console.log(dog)
dog.makeSound()


// - Mixins

const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal{}

class Dragon extends Animal{}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("myBird")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("myDragon")
dragon.fly()



// - Patrón singleton --> una clase solo se puede instanciar una sola vez

class Session{
    constructor(name){
        if(Session.instance){
            return Session.instance;
        }    
        this.name = name;
        Session.instance = this;
    }
}

const session1 = new Session("Fer");
const session2 = new Session();

console.log(session1.name);
console.log(session2.name);
console.log(session1 == session2)

const session3 = new Session("Fernando")
console.log(session3.name)



// - Symbol

console.log("--------")

const ID = Symbol("id")

class User{
    constructor(name){
        this.name = name
        this[ID]= Math.random()
    }

    getId(){
        return this[ID]
    }
}

const user = new User("Fer")
console.log(user.name)
console.log(user.ID)
console.log(user.getId)



// - instanceof

class Car{}
const car = new Car()

console.log(car instanceof Car)


// - create

const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car)


// - Proxy

console.log("------------")

const proxy = {
    get(target, property){
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value){
        if(property === "balance" && value < 0){
            throw new Error ("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount{
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

account.balance = -10