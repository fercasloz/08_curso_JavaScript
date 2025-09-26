/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let suma = 5+5
    console.log(suma)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let miVariable = 10
    miVariable += 2
    
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(5 == "5")
    console.log(5 > 0)   

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(5 == 0)
    console.log(5 < 0)

// 5. Utiliza el operador lógico and
    console.log(5=="5" && 5>2)
// 6. Utiliza el operador lógico or
    console.log(5=="5" || 5>10)

// 7. Combina ambos operadores lógicos
    console.log(5>2 && 5!=0 || 5>4)

// 8. Añade alguna negación
    console.log(!(5>2))

// 9. Utiliza el operador ternario
    const num = 10
    const mensaje = num >= 5 ? "Es mayor que 5" : "No es mayor que 5"

// 10. Combina operadores aritméticos, de comparáción y lógicas