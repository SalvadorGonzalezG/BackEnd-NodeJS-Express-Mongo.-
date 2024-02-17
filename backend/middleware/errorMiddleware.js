// creamos una funcion la cual se encargara de manejar los errores
// parametros error, request, response y next para que cuando se termine de ejecutar continue con la ejecucion del programa.
const errorHandler = (err, req, res, next) => {

// Determina el codigo de estado en la respuesta.
    // constante que recibe lo que yo le mande
    const statusCode = res.statusCode ? res.statusCode : 500

// Configura el codigo de estado de la respuesta y envia un objeto JSON con detalles de error.
    res.status(statusCode)
    res.json({
// Mensaje de error.
        message: err.message,
// Seguimiento del error, la cual sera enviada unicamente en desarrollo, de lo contraerio no manda nada.
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = { 
    errorHandler
 }