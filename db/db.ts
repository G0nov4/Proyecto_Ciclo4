import { connect } from "mongoose";

// cosnt { connect } = require('mongoose')

const connectDB = async () => {
    return await connect(
        'mongodb+srv://admin:admin12345@gestionproyectos.y6cny.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("conecxion exitosa")
    }).catch(()=>{
        console.log("Error de conexion enla BD")
    });
};


export default connectDB
