// manejo de errores --> excepciones --> evento anomalo


//let myObject
//console.log(myObject.email)

// Tratamiento de errores
// try-catch

try{
    //Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucción sin errores")
}catch(error){
    //Bloque de error
    console.log("Se ha producido un error:", error.message)
}


// finally

try{
    //Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucción sin errores")
}catch(error){
    //Bloque de error
    console.log("Se ha producido un error:", error.message)
}finally{
    // BLoque que se ejecuta siempre
    console.log("Este código se ejecuta siempre")
}


//Lanzamiento de errores

//throw

function sumIntegers(a,b){
    /*
    if(Number.isNaN(a)){
        console.log("No es un número")
    }
        */
    /*   
    if (!Number.isInteger(a)){
        console.log("No es un número")
    }
    */

    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operación solo acepta numeros")
    }

    if(!Number.isInteger(a)||!Number.isInteger(b)){
        throw new Error("Esta operación solo suma números enteros")
    }
    
    if(a == 0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentando sumar cero", a, b)
    }
    return a + b
}

try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("5",10))
    console.log(sumIntegers(5,"10"))
    console.log(sumIntegers("5","10"))
}catch(error){
    console.log(error.message)
}

//Capturar varios tipos de errores


try{
    console.log(sumIntegers(5.5,10))
    console.log(sumIntegers("5",10))
}catch(error){
    if(error instanceof TypeError){
        console.log("Se ha producido un error de tipo:", error.message)
    }else if(error instanceof Error){
        console.log("Se ha producido un error:", error.message)
    }
}


//throw new Error("Se ha producido un error")

// Crear excepciones personalizadas 

class SumZeroIntegerError extends Error{
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a, " + ", this.b)
    }
}


try{
    console.log(sumIntegers(0,10))
}catch(error){
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}