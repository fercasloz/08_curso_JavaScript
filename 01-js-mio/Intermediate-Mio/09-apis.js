// Manejo de APIs

// - APIs REST(HTTP + URLs + JSON)  --> las más usadas

// Métodos HTTP:
// - GET --> solicitar datos
// - POST --> enviar datos
// - PUT --> actualizar un recurso
// - DELETE --> eliminar un recurso

// Códigos de respuesta HTTP
// - 200 OK
// - 201
// - 400 Error por parte del cliente
// - 404 No encontrado (pidiendo un recurso que no esta)
// - 500 Error del lado servidor


// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
        // Transforma la respuesta a JSON
        return response.json()
    })
    .then(data => {
        // Procesa los datos
        console.log(data)
    })
    .catch(error =>{
        // Captura los errores
        console.log("Error", error)
    })

// 4:33:28