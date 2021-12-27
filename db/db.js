import { connect } from "mongoose";

// cosnt { connect } = require('mongoose')

const connectDB = async () => {
    return await connect(
        'mongodb+srv://admin:admin12345@gestionproyectos.y6cny.mongodb.net/GestionProyectoshttps://aur.archlinux.org/telegram-tg-git.githttps://aur.archlinux.org/telegram-tg-git.git?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("conecxion exitosa")
    }).catch(()=>{
        console.log("Error de conexion enla BD")
    });
};
