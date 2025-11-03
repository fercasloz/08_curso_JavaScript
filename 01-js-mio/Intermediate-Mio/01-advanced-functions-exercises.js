/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function makeGreeter(greeting){
    return function(name){
        return `${greeting}, ${name}`
    };
}

const hola = makeGreeter("Hola")
console.log(hola("Fernando"));


// 2. Implementa una función currificada que multiplique 3 números


function curryMul(a){
    return function(b){
        return function(c){
            return a * b * c;
        };
    };
}

console.log(curryMul(2)(3)(4));


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exp){
    if(!Number.isInteger(exp)){
        throw new Error(`El exponente debe ser entero para esta implementación.`);
    }

    if(exp < 0){
        return 1/power(base, -exp);
    }
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp -1); //recursividad
}

console.log(power(2,5));
console.log(power(3,0));
console.log(power(2,-3));


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(),
//  decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(){
    let counter = 0
    return {
        increment(){
            counter += 1;
            return counter;
        },
        decrement(){
            counter -= 1;
            return counter;
        },
        getValue(){
            return counter;
        }
    };
}

const myCounter = createCounter();
console.log(myCounter.increment())
console.log(myCounter.increment())
console.log(myCounter.increment())
console.log(myCounter.decrement())
console.log(`El valor del contador es ${myCounter.getValue()}`)


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest)
//  y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let resultNumber = 0
    for(let number of numbers){
        resultNumber += number
    }
    return resultNumber * multiplier
}

console.log(sumManyTimes(3,1,2,3,4))


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers){
    let resultNumber = 0
    for(let number of numbers){
        resultNumber += number
    }

    return callback(resultNumber)
}

sumWithCallback(result => console.log(`Suma: ${result}`),1,2,3);

function report(result){
    console.log(`Suma: ${result}`)
}

sumWithCallback(report,5,5,5)


// 7. Desarrolla una función parcial  -- este no lo entiendo MUCHO, REPASAR

function partial (fn, ...presetArgs){
    return (...laterArgs) => fn(...presetArgs, ...laterArgs);
}

const multiply3 = (a,b,c) => a*b*c;
const doubleTimes = partial(multiply3,2);
console.log(doubleTimes(3,4)); // 2*3*4

const sum = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);
const sumStartingAt10 = partial(sum, 10);
console.log(sumStartingAt10(1,2,3));


// 8. Implementa un ejemplo que haga uso de Spread

function add3(a,b,c){
    return a+b+c;
}

const trio = [1,2,3];
console.log(add3(...trio));


// Clonar y combinar arrays
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, 99, ...a2];
console.log(merged); // [1, 2, 99, 3, 4]

// Combinar objetos (el último gana en propiedades repetidas)
const o1 = { x: 1, y: 2 };
const o2 = { y: 20, z: 3 };
const combined = { ...o1, ...o2, w: 4 };
console.log(combined); // { x:1, y:20, z:3, w:4 }


// 9. Implementa un retorno implícito

const square = x => x*x;
const isEven = n => n%2 ===0;

const makeUser = name => ({name, active:true})

console.log(square(5));    // 25
console.log(isEven(10));   // true
console.log(makeUser("Ana")); // { name: 'Ana', active: true }



// 10. Haz uso del this léxico


const user = {
  name: "Fer",
  greetLater() {
    // Aquí "this" es "user". La arrow captura este "this" léxico.
    setTimeout(() => {
      console.log(`Hola, ${this.name}`); // "Brais"
    }, 0);
  }
};

user.greetLater();