// Exportación de modulos

// funciones

export function add (a, b){
    return a + b
}

//console.log(add(5,10))

// propiedades

export const PI = 3.1416

export let name = "Fernando"

// exportación de clases

export class Circle{
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius,2)
    }

    perimeter(){
        return 2 * Math.PI * this.radius
    }
}


// exportación por defecto


export default function substract (a, b){ 
    return a - b
}
//export default EMAIL ={email : "fer@gmail.com"} 

export default class MyClass{
    func(){
        console.log("")
    }
}

