import { Schema, model } from "mongoose";
import { ProyectModel } from "./proyect";
import { UserModel } from "./user";

interface Avance{
    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones: [string],
    creadoPor: Schema.Types.ObjectId,
}


const advancementSchema = new Schema<Avance>({
    fecha: {
        type: Date,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    observaciones: [{
        type: String,
    }],
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProyectModel,
        required: true
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true
    }
});


const AdvanceModel = model('Modelo', advancementSchema);

export { AdvanceModel };