const mongoose = require('mongoose')

// Definimos el esquema del usuario.
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tecle su nombre']
    },
    email: {
        type: String,
        required: [ true, 'Coloque su @correo. '],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Coloque su contraseña' ]
    },
// Indicamos que ningun usuario puede ser administrador.
    esAdmin: {
        type: Boolean,
        default: false // por defecto el usuario no puede ser administrador
        
    }
}, {
// Genera timestamps automaticamente (createdAt & updatedAt )
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)