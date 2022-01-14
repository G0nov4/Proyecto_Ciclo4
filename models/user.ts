import { Schema, model } from 'mongoose'
import { Enum_Rol, Enum_EstadoUsuario} from './enums'


interface User{
    correo: string,
    identificacion: string,
    nombre: string,
    apellido: string,
    rol: Enum_Rol,
    estado: Enum_EstadoUsuario
}

const userSchema = new Schema<User>({
    correo:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email)=>{
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
            },

            // validator: (email) => (email.includes('@') && email.includes('.'))? true : false,
            message: 'El formato de correo electronico esta mal'
        }
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: Enum_Rol
    },
    estado: {
        type: String,
        required: true,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.pendiente
    }
});

const UserModel = model("User",userSchema);

export { UserModel }; 