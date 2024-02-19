const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// funcion protectora
const protect = asyncHandler(async(req, res, next) =>{
// Debemos obtener el token
    let token
// Si existe un encabezado de autorizacion y ese encabezado empieza con la palabra Bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
// Obtenemos el token
            token = req.headers.authorization.split(' ')[1]
// Verificamos la firma del token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
// Obtener los datos del usuario mientras el token sea valido
         req.user = await User.findById(decoded.idUsuario).select('-password')
// para que continue con la ejecucion del programa
         next()

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Acceso no autorizado.')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('No se proporciono ningun token.')
    }

})

module.exports = protect