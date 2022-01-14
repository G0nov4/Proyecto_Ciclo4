import connectDB from './db/db';
import { UserModel } from './models/user';
import { Enum_EstadoProyecto, Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProyectModel } from './models/proyect';
import { ObjetiveModel } from './models/objetivos';

// MEtodologia one to many N°1

const crearProyectoConObjetivos1 = async ()=>{
  
    const usuarioInicial = await UserModel.create({
        nombre: 'Gary',
        apellido: 'Nova',
        correo: 'Gary@gmail.com',
        identificacion: '001',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado
    });


    console.log('Usuarios creado: ',usuarioInicial);
    const proyectoCreado = await ProyectModel.create({
        nombre: 'Proyecto Mision TIC',
        presupuesto: 120000,
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/01/24'),
        lider: usuarioInicial._id,
       
    })
    const objetivoGeneral = await ObjetiveModel.create({
        descripcion: 'este el objetivo general',
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id
    })

    console.log('Objetivo general creado    :',objetivoGeneral)
    const objetivoEspecifico1 = await ObjetiveModel.create({
        descripcion: 'este el objetivo especifico 1',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id
    })
    console.log('Objetivo especifico creado    :',objetivoEspecifico1)
    const objetivoEspecifico2 = await ObjetiveModel.create({
        descripcion: 'este el objetivo especifico 2',
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id
    })
    console.log('Objetivo Especifico creado    :',objetivoEspecifico2)



    console.log('Proyecto creado:',proyectoCreado);
}

const consultaProyectoConObjetivos = async ()=>{
    const usuarioInicial = await UserModel.create({
        nombre: 'Gary',
        apellido: 'Nova',
        correo: 'Gary@gmail.com',
        identificacion: '001',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado
    });
    console.log('Usuarios creado: ',usuarioInicial);
  
    const objetivoGeneral = await ObjetiveModel.create({
        descripcion: 'este el objetivo general',
        tipo: Enum_TipoObjetivo.general,
    })

    console.log('Objetivo general creado    :',objetivoGeneral)
    const objetivoEspecifico1 = await ObjetiveModel.create({
        descripcion: 'este el objetivo especifico 1',
        tipo: Enum_TipoObjetivo.especifico,
    })
    console.log('Objetivo especifico creado    :',objetivoEspecifico1)
    const objetivoEspecifico2 = await ObjetiveModel.create({
        descripcion: 'este el objetivo especifico 2',
        tipo: Enum_TipoObjetivo.especifico,
    })
    console.log('Objetivo Especifico creado    :',objetivoEspecifico2)

    const proyectoCreado = await ProyectModel.create({
        nombre: 'Proyecto Mision TIC',
        presupuesto: 120000,
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/01/24'),
        lider: usuarioInicial._id,
        objetivos: [
            objetivoGeneral._id,
            objetivoEspecifico1._id,
            objetivoEspecifico2._id
        ]
    })

    console.log('Proyecto creado:',proyectoCreado);
}

const consultaProyectoConObjetivos1 = async ()=>{
    const proyecto = await ProyectModel.find({
        id: '61db677261b4967a90b331f7'
    }).populate('objetivos');
    console.log(proyecto)
}

// METODOLOGIA ONE TO MANY #3
const CrearProeyctoConObjetivos3 =async  ()=>{
    const usuarioInicial = await UserModel.create({
        nombre: 'Gary',
        apellido: 'Nova',
        correo: 'Gary@gmail.com',
        identificacion: '010',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado
    });

    const proyectoCreado = await ProyectModel.create({
        nombre: 'Proyecto Mision TIC',
        presupuesto: 120000,
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/01/24'),
        lider: usuarioInicial._id,
        objetivos: [
            {
                descripcion : "objetivo general",
                 tipo: Enum_TipoObjetivo.general 
            },
            {
                descripcion : "objetivo especifico 1",
                 tipo: Enum_TipoObjetivo.especifico 
            },
            {
                descripcion : "objetivo especifico 2",
                 tipo: Enum_TipoObjetivo.especifico 
            }
        ]
    })  
}
const ConsultProyectConObejtivos3 = async () =>{

}
const main = async ()=>{
    await connectDB();
    const proyectoCreado = await ProyectModel.find({_id: '61ddd254a1aa44f60d8b4b29'})
    console.log(proyectoCreado) 
    
};
main();

  /*   const objet = await objetiveModel.create({
        descripcion: "Este el objetivo Especifico",
        tipo: Enum_TipoObjetivo.especifico,

    })
 */

    ////////////////
    //CREATE PROYECT
    ////////////////
    

 

/*     const proyecto = await ProyectModel.find({
        nombre: 'Proyecto 10'
    }).populate('objetivos')

    console.log(JSON.stringify(proyecto)) */
    // BUSCAR PROYECTOS
/*     const proyecto = await proyectModel.find({
        nombre: 'Proyecto 3'
    }).populate('lider');
    console.log(proyecto) ;


    const usuario = await UserModel.find().populate('proyectosLiderados');
    console.log('usuario',usuario) */

/*     const lider = await UserModel.find({
        _id: proyecto[1].lider
    })*/
    // console.log(proyecto) 


// CRUD USUARIOS
    //////////////////
    // Crear usuario
    /////////////////
  /*   await UserModel.create({
        apellido: "Sahoner Mamani",
        correo: "garynova@gmail.net",
        identificacion: "a8173hds3123",
        nombre: "Gary Astrid",
        rol: Enum_Rol.administrador
    }).then((u)=>{
        console.log("usuario creado",u)
    }).catch((e)=>{
        console.log("error creando al usuario: ",e)
    }) */

    ///////////////////////
    // Obtener los usuarios
    /////////////////////// 
 /*    await UserModel.find()
    .then(u => {
        console.log("usuarios",u)
    }).catch(e => {
        console.log("error al obtener usuarios")
    }); */

    ////////////////////
    // EDITAR UN USUARIO
    ////////////////////    
    /* await UserModel.findOneAndUpdate({
        correo: "gary@gmail.com"
    },{
        nombre: 'Gary Omar',
        apellido: 'Nova Mamani'
    })
    .then(user => {
        console.log('usuario actualizado: ',user)
    })
    .catch(err => {
        console.log(err)
    })
 */
    //////////////////////
    // ELIMINAR UN USUARIO  
    //////////////////////
/*     await UserModel.findOneAndDelete({
        correo: 'gary@gmail.com'
    })
    .then(user => {
        console.log('usuario Eliminado: ',user)
    })
    .catch(err => {
        console.log('Error: ',err )
    }) */
    
    ///////////////////////////
    // OBTENER UN SOLO USUARIO
    ///////////////////////////
/*     await UserModel.findOne({
        identificacion: "00002"
    })
    .then(user => {
        console.log('un solo usuario encontrado', user)
    })
    .catch(err => {
        console.log('Error encontrado', err)
    }) */