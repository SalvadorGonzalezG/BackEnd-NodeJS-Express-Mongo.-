const asyncHandler = require('express-async-handler')
const Producto = require('../models/productoModel')

// Definimos las funciones que se van a ejecutar al mandar llamar una ruta.

// Funcion asincrona para manejar la solicitud GET la cual tiene un manejador de errores.
const getProductos = asyncHandler( async (req, res)=>{
    const productos = await Producto.find()
    res.status(200).json(productos)
})

const getProducto = asyncHandler( async (req, res) => {
    const {producto}= req.params;
    const nombreProducto = await Producto.findOne(producto)
    res.status(200).json(nombreProducto)
})

// Funcion para manejar la solicitud POST
const crearProducto = asyncHandler( async (req, res)=> {
    if(!req.body.producto || !req.body.descripcion || !req.body.precio){
        res.status(400)
        throw new Error('Te faltan datos por ingresar');
    } 
    const nombreproducto = await Producto.create({
        producto: req.body.producto,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    })

        res.status(200).json(nombreproducto)
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