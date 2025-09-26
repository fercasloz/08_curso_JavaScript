// condicionales

//if, else if, else

let age = 15

if(age == 37){
    console.log("La edad es 37")
}else if (age <18){
    console.log("Es menor de edad")
}else{
    console.log("La edad no es 37")
}

// operador ternario

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)


// switch --> una unica variable comparados con valores diferentes

let day = 0
dayName

switch (day){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "El dia de la semana introducido no es correcto"
    }       
    
console.log(dayName)