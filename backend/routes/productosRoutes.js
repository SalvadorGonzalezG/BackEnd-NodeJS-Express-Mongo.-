const express = require('express')
const router = express.Router()// Crear un nuevo enrutado para organizar las rutas de forma más eficiente.
const {getProductos, getProducto, crearProducto, updateProducto, deleteProducto} = require('../controllers/productosController')
const protect = require('../middleware/authmiddleware')
// Endpoint para obtener usuarios.
router.get('/', protect, getProductos)

router.get('/:id', protect, getProducto)

// Enpoint para crear un nuevo usuario.
router.post('/', protect, crearProducto)

//Modificar una usuario por medio de su id.
router.put('/:id', protect, updateProducto)
// Eliminar un usuario po su id.
router.delete('/:id', protect, deleteProducto)
module.exports = router