// importación de módulos

import { add ,PI , name, Circle} from "./28-export-modules.js"

import substract from "./28-export-modules.js"


//funciones

console.log(add(5,10))

// propiedades

console.log(PI)

console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))



// importación por defecto

console.log(substract(5, 10))



// Proyecto modular

// import { MyClass } from "./22-classes.js/MyClass"

// Módulos externos

const os = require("os")

console.log(os.platform())
