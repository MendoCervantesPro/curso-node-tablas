const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors'); // Opcional: para colores en la consola

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => {
        console.log(colors.rainbow(`Archivo creado: ${nombreArchivo}`));
    })
    .catch(err => {
        console.log(colors.red(`Error: ${err}`));
    });


//Hay muchos inconvenientes con este codigo
//const[ , , arg3 = 'base=5'] = process.argv;
//const[ , base = 5 ] =arg3.split('=');
//console.log(base);