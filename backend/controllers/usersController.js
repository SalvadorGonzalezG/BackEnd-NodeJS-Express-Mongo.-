// Registrar un usuario nuevo
const registrarUser = (req, res) => {
    res.status(201).json({message: 'Usuario Creado'})
}

// Usuario realizando inicio de sesión
const loginUser = (req, res) => {
    res.status(200).json({message: 'El usuario a iniciado sesión'})
}

// Mostrar los datos del usuario
const datosUser = (req, res) => {
    res.status(200).json({message: 'Mis datos de usuario.'})
}

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}
