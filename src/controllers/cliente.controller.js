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

//--------------------------------------------------------------
//LISTAR CLIENTES
const listarClientes = async(req, res) => {
    try{
        const [clientes] = await pool.query('SELECT * FROM clientes ORDER BY id')
        res.status(200).json({
            ok: true,
            total: clientes.length,
            data: clientes
        })

    }catch(e){
        console.error(e)
        res.status(500).json({
            ok: false,
            message: 'Error interno en el servidor'
        })

    }
}
//----------------------------------------------------------------
// OBTENER CLIENTES
const obtenerClientes = async(req, res) => {
    try{
      const id = Number(req.params.id)
      if (isNaN(id) || id <= 0){
        return res.status(400).json({
          ok: false,
          message: 'El ID no puede ser negativo o cero'
        })
      }
 
      const [registro] = await pool.execute(`SELECT * FROM productos WHERE id = ?`, [id])
      
      if (registro.length === 0){
        return res.status(404).json({
          ok: false,
          message: 'No existe el cliente'
        })
      }

      res.status(200).json({
        ok: true,
        data: registro[0]
      })
    }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}