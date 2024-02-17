const express = require('express')
const router = express.Router()// Crear un nuevo enrutado para organizar las rutas de forma más eficiente.
const {getProductos, getProducto, crearProducto, updateProducto, deleteProducto} = require('../controllers/productosController')

// Endpoint para obtener usuarios.
router.get('/', getProductos)

router.get('/:id', getProducto)

// Enpoint para crear un nuevo usuario.
router.post('/', crearProducto)

//Modificar una usuario por medio de su id.
router.put('/:id', updateProducto)
// Eliminar un usuario po su id.
router.delete('/:id', deleteProducto)
module.exports = router