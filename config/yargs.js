const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        descripcion: 'Descripcion de tarea por hacer'
    }
};
const completado = {
    completado: {
        alias: 'c',
        default: false,
        descripcion: 'Marca como completado o pendiente la tarea'
    }
};


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', descripcion)
    .command('listar', 'Muestra el estado y las tareas')
    .command('actualizar', 'Cambia el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}