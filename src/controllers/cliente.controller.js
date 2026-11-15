const { pool } = require('.../config/database')

const validarCampos = ({apellidos, nombres, telefono, direccion, email} = {}) => {
    const errores = []

    if (!apellidos || apellidos.trim() === '') errores.push('Los apellidos son obligatorios')
    if (!nombres || nombres.trim() === '') errores.push('Los nombres son obligatorios')
    if (!telefono || telefono.length !== 9) errores.push(' El numero de telefono debe tener 9 numeros')
    if (!direccion || direccion.trim() === '') errores.push('La direccion es obligatoria')
    if (!email || !email.includes('@') === '') errores.push('Verifica el gmail')

    //es posible tener mas de un error
    return errores
}