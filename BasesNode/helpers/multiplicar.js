const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            // Aplicar colores a "X" y "="
            const lineaSalida = `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            const lineaConsola = `${base} X ${i} = ${base * i}\n`;

            salida += lineaSalida;
            consola += lineaConsola;
        }

        if (listar) {
            console.log('====================='.green);
            console.log('Tabla del:', colors.magenta(base));
            console.log('====================='.green);
            console.log(salida); // Mostrar la salida con colores
        }

        fs.writeFileSync(`tabla-${base}.txt`, consola); // Guardar sin colores en el archivo

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};