const asyncHandler = require('express-async-handler')

// Definimos las funciones que se van a ejecutar al mandar llamar una ruta.

// Funcion asincrona para manejar la solicitud GET la cual tiene un manejador de errores.
const getProductos = asyncHandler( async (req, res)=>{
    res.status(200).json({message: 'Obtener Productos'})
})

const getProducto = asyncHandler( async (req, res) => {    
    res.status(200).json({message: `Producto con id: ${req.params.id}`})
})

// Funcion para manejar la solicitud POST
const crearProducto = asyncHandler( async (req, res)=> {
    if(!req.body.producto){
        res.status(400)
        throw new Error('No escribiste una descripcion');
    } 
        res.status(200).json({message: `Excelente el producto: ${req.body.producto} fue creado Exitosamente`})
})

// Funcion para manejas la solicitud UPDATE
const updateProducto = asyncHandler( async (req, res)=>{
    res.status(200).json({message: `Se a modificado el producto con id: ${req.params.id}`})
})

// Funcion para manejar la solicitud DELETE.
const deleteProducto = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`Se a eliminado el producto con id: ${req.params.id}`})
})

// Exportamos las cuatro funciones, cada funcion maneja una operacion especificaen una coleccion de usuarios en una APIRESTful
module.exports = {
    getProductos,
    getProducto,
    crearProducto, 
    updateProducto, 
    deleteProducto
}