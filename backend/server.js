const express = require("express")
const colors = require('colors')
const dotenv = require("dotenv").config() // metodo para poder acceder a las variables de entorno
const {errorHandler} = require("./middleware/errorMiddleware") // Manejador de errores en la app.
const connectDB = require('./config/db')
// Asignamos el numero del puerto especificado en las env
const port = process.env.PORT || 5000

// funcion que conectara con la base de datos!
connectDB()
const app = express()

// nota: este middleware Analiza el cuerpo de las solicitudes entrantes en formtato json este es convertido en objetos de JS para que sean accesibles atravez de req.body.
app.use(express.json())

// Middlewere que analiza los cuerpos de las solicitudes entrantes con datps codificados en URL y los convierte a objetos de JS accesibles atravez de req.body
app.use(express.urlencoded({ extended: false }))

// Utilizamos el enrutador de productos para manejar las rutas que comienzan con /api/productos 
app.use('/api/productos', require('./routes/productosRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

// Utilizamos el middleware errorHandler para manjear errores en la aplicacion
app.use(errorHandler)
// f para que nuestra app este escuchando en el puerto 5000
app.listen(port, ()=>console.log(`Servidor iniciado en el puerto: ${port}`));