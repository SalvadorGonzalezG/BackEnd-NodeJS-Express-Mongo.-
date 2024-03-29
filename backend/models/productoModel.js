const mongoose = require('mongoose')

//
const productoSchema = mongoose.Schema({

// Campo para almacenar la referencia al usuario asociado.
    user:{
// Tipo de dato: Object Id de MongoDB
        type: mongoose.Schema.Types.ObjectId,
        required: true, // campo obligatorio
        ref: 'User' // Referencia al modelo User de la base de datos.
    },
// colocamos cada uno de los campos que queremos que tenga nuestra coleccion.

    producto:{
        type: String,
        required: [true, 'Porfavor ingresa el nombre del producto']
    },
    descripcion: {
        type: String,
        required: [true, 'Coloca una brebe descripcion de tu producto']
    },
    precio:{
        type: String,
        required: [true, 'Coloca el precio de tu producto']
    },

},{
// Propiedad que cada vez que yo realice un registro, me va a crear un campo que se llama createdAt y otro adicional que se llama updatedAt.
    timestamps: true
})

// exportamos el modelo mongoose llamado 'producto' que utilizara el esquema 'productoSchema', modelo que representara la coleccion de MongoDb con el nombre 'productos'
module.exports = mongoose.model('Producto', productoSchema)