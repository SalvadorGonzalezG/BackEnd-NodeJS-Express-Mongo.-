const express = require('express')
const router = express.Router()// Crear un nuevo enrutado para organizar las rutas de forma más eficiente.
const {getUsuarios, postUsuario, deleteUsuario, updateUsuario} = require('../controllers/usuariosController')

// Endpoint para obtener usuarios.
router.get('/', getUsuarios)

// Enpoint para crear un nuevo usuario.
router.post('/', postUsuario)

//Modificar una usuario por medio de su id.
router.put('/:id', updateUsuario)
// Eliminar un usuario po su id.
router.delete('/:id', deleteUsuario)
module.exports = router