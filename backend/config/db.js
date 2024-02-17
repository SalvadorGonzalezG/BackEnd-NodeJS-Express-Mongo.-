const mongoose = require('mongoose')

// funcion para conectarnos a la base de datos
const connectDB = async () =>{
    try {
// Conectar a la base de datos utilizando la URL proporcionada por las variables de entorno.
        const conected = await mongoose.connect(process.env.MONGO_URL)
        console.log(`conectado a MongoDB: ${conected.connection.host}`.bgBrightWhite.italic)
    } catch (error) {
// manejador de errores en caso de que la coneccion falle 
        console.log(error)
// si la coneccion falla termina la ejecucion del programa.
        process.exit(1)
        
    }

}


module.exports = connectDB