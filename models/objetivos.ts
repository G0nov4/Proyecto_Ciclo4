import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { ProyectModel } from "./proyect";


interface Objetive{
    descripcion : string,
    tipo: Enum_TipoObjetivo,
}

const ObjetiveSchema = new Schema<Objetive>({
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true
    }
})

const ObjetiveModel = model('Objetivo', ObjetiveSchema);

export {
    ObjetiveModel
};