// funciones

function myFunc(){
    console.log("Hola función")    
}

for(let i = 0; i < 5; i++){
    myFunc()
}

// Con parámetros

function myFuncWithParams(name){
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Fer")


// funciones anónimas

const myFunc2 = function(name){
    console.log(`Hola, ${name}`)
}

myFunc2("Fernando")


// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)



// Parámetros

function sum(a,b){
    console.log(a+b)
}

sum(5,10)

function defaultSum(a = 0,b = 0){
    console.log(a+b)
}

defaultSum ()


// retorno de valores

function mult(a,b){
    return a*b
}

let result = mult(5, 10)
console.log(result)



// funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interno")
    }
    intern()
}

extern()