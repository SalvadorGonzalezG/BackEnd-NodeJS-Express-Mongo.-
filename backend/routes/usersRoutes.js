// Importamos Express y creamos un router.
const express = require('express')
const router = express.Router()

// Importamos los controladores para el registro de usuarios, inicio de sesión y obtencion de datos cde usuario.
const {registrarUser, loginUser, datosUser} = require('../controllers/usersController')

router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/datos', datosUser)

module.exports = router