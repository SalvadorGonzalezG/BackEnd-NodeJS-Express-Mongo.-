const express = require("express")
const dotenv = require("dotenv").config() // metodo para poder acceder a las variables de entorno

// Asignamos el numero del puerto especificado en las env
const port = process.env.PORT || 5000
const app = express()

app.use('/api/users', require('./routes/usersRoutes'))

// f para que nuestra app este escuchando en el puerto 5000
app.listen(port, ()=>console.log(`Servidor iniciado en el puerto: ${port}`));