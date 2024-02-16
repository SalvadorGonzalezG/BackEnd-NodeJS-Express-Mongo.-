// Definimos las funciones que se van a ejecutar al mandar llamar una ruta.

// Funcion para manejar la solicitud GET
const getUsuarios = (req, res)=>{
    res.status(200).json({message: 'Obtener tareas.'})
}

// Funcion para manejar la solicitud POST
const postUsuario = (req, res)=> {
    res.status(201).json({message:'Usuario creado'})
}

// Funcion para manejas la solicitud UPDATE
const updateUsuario = (req, res)=>{
    res.status(200).json({message: `Se a modificado el usuario con id: ${req.params.id}}`})
}
// Funcion para manejar la solicitud DELETE.
const deleteUsuario = (req,res)=>{
    res.status(200).json({message:`Se a eliminado el usuario con id: ${req.params.id}`})
}

// Exportamos las cuatro funciones, cada funcion maneja una operacion especificaen una coleccion de usuarios en una APIRESTful
module.exports = {
    getUsuarios,
    postUsuario, 
    updateUsuario, 
    deleteUsuario
}