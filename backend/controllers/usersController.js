const jwt = require('jsonwebtoken') // Libreria que permite generar el token
const bcrypt = require('bcryptjs') // libreria que permite utilizar los hashe´s
const asyncHandler = require('express-async-handler') // manejador de rerrores
const User = require('../models/userModel') // aqui ya estamos usando mongoose.

// Registrar un usuario nuevo
const registrarUser = asyncHandler(async (req, res) => {
    // datos obtenidos atravez del req.body
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Faltan datos verificalos porfavor')
    }
// Verificamos si el usuario existe.
    const userExist = await User.findOne({email})
    // Si el usuario existe mandamos un status y un msj de que el usuario ya existe en la base de datos.
    if(userExist){
        res.status(400)
        throw new Error('El usuario ya existe el DB')
    } else {
        // hash password
        // creamos la salt con el metodo de bcrypt con el numero de rondas
        const salt = await bcrypt.genSalt(10)
        // generamos el pasword
        const hashedPassword = await bcrypt.hash(password, salt)
        // creamos el usuario
        const user = await User.create({
            name: name, // nombre del campo en mi modelo
            email: email,
            password: hashedPassword 
        })
        // checamos si se creo el usuario
        if(user){
            res.status(201).json({
                id: user._id,
                name: user.name,
                email: user.email,
                admin: user.esAdmin
            })
        } else {
            res.status(400)
            throw new Error('No se pudo guardar el usuario')
        }
    }
})

// Usuario realizando inicio de sesión
const loginUser =asyncHandler( async(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('Faltan datos porfavor verificalos.')
    }

// verificar si el usuario existe
    const user = await User.findOne({email})
// Si el usuario y el password con el hash son iguales
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin
        })
    } else {
        res.status(400)
        throw new Error('Tu contraseña o @correo son INCORRECTOS.')
    }
})

// Mostrar los datos del usuario
const datosUser = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Mis datos de usuario.'})
})

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}
