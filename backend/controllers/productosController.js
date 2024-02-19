const asyncHandler = require('express-async-handler')
const Producto = require('../models/productoModel')
const { default: mongoose } = require('mongoose')

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
// Metodo para buscar y actualizar un documento del schemaProducto en la base de datos por su ID.
const updateProducto = asyncHandler( async (req, res)=>{

// Extrae el ID del producto de los parametros de la solicitud
    const productoId = req.params.id;

// verificamos si el ID del producto es un objeto valido proporcionado por 'mongoo .... ctId' 
    if(!mongoose.Types.ObjectId.isValid(productoId)) {
// de no ser asi devuelve un codigo de estado 
        res.status(400)
        throw new Error('Id del producto invalido')
    }
// cvon el metodo 'findIdAndUpdate' busca y actualiza el producto en la base de datos y que se requiere recibir el documento actualizado
    const updatedProducto = await Producto.findByIdAndUpdate(productoId, req.body, {new:true})
// Devuelve el producto actualizado como respuesta de un 200
    
    res.status(200).json(updatedProducto)
   
})

// Funcion para manejar la solicitud DELETE.
const deleteProducto = asyncHandler( async(req,res)=>{

    const producto = await Producto.findById(req.params.id)

    if(!producto){
        res.status(400)
        throw new Error("Producto no encontrado")
    }
    await Producto.deleteOne(producto)
        res.status(200).json( `El producto con ID: ${req.params.id} a sido eliminado`)

    /*const deleted = await Producto.findByIdAndDelete(req.params.id, {new: true})
    res.status(200).json(deleted)*/
})

// Exportamos las cuatro funciones, cada funcion maneja una operacion especificaen una coleccion de usuarios en una APIRESTful
module.exports = {
    getProductos,
    getProducto,
    crearProducto, 
    updateProducto, 
    deleteProducto
}