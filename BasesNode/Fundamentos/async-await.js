const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

//Convertiremos esto en una promesa
const getEmpleado = (id, callback) => {

    return new Promise = new Promise ((resolve, reject) => {

    const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
            ?resolve(empleado)
            :reject(`Empleado con id ${id} no existe`);
    }
    
)
}


//Promesa
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

    //tenemos que crear la funcion de geSalario y reolverla con una promesa

    getSalario = (id) => {
        return new Promise((resolve, reject) => {
            const salario = salarios.find(s.id === id)?.salario;

            (salario)
            ? resolve(salario)
            : reject(`No existe salario para el id ${id}`);
        }); 
    }


    const getInfoUsuario = async() => {

        try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return 'El salario del empleadp: ${empleado} es de: ${salario}'
    } catch (error) {
        throw error;

    }
}

    const id = 3;

    getInfoUsuario()
        .then (msg => {
            console.log('TODO BIEN')
            console.log(msg)
        })
        .catch(err => {
            console.log('TODO MAL')
            console.log(err)
        });

