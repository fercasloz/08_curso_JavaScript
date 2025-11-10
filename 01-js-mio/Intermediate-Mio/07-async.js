// Programación asíncrona

// Código síncrono

console.log("Inicio")

for(let i = 0; i < 1000000000 ;i++){}

console.log("Fin")


// Event Loop (Bucle de Eventon)

// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js: setTimeout()...
// 3. Task Queue (Cola de tareas) y MircotaskQueue

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en task queue o microtask queue
// 4. Si Call Stack vacío  -> Mueve tareas del Microtask queue o task queue al call stack
// 5. El proceso se repite

console.log("------")

// Codigo asíncrono

// - Callbacks


console.log("Inicio")

setTimeout(() =>{
    console.log("Esto se ejecuta despúes de 2 segundos")
},2000)

console.log("Fin")

// - Problema: Callback Hell

function step1(callback){
    setTimeout(()=>{
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback){
    setTimeout(()=>{
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback){
    setTimeout(()=>{
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}


step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("Todos los pasos completados")
        })
    })
})



// - Promesas

const promise = new Promise((resolve,reject) => {
    setInterval(() => {
        const ok = false
        if(ok){
            resolve("Operacion exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
});


//Encadenamiento de promesas

function step1Promise(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Paso 1 con promesa completado")
            resolve()
        },1000)
    })
}

function step2Promise(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Paso 2 con promesa completado")
            resolve()
        },1000)
    })
}

function step3Promise(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Paso 3 con promesa completado")
            resolve()
        },1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(()=>{
        console.log("Todos los pasos con promesa completados")
    })



// 3:56:20