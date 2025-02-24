const id = 3;

getEmpleado(id) 
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then (salario => console.log('El empleado:', nombre, 'tiene un salario de :', salario))

    .catch(err => console.log((err)));