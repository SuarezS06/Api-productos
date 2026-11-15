const { pool } = require('../config/database')

const validarCampos = ({razonsocial, contacto, ruc, direccion} = {}) => {
    const errores = []
    if (!razonsocial || razonsocial.trim() === '') errores.push('La razon social es obligatoria')
    if (!contacto || contacto.trim() === '') errores.push('La contacto es obligatorio')
    if (!ruc || ruc.length !== 11) errores.push('El ruc debe tener 11 numeros')
    if (!direccion || direccion.trim() === '') errores.push('La direccion es obligatoria')

    return errores
}

//------------------------------------------------------------------------
//LISTAR PROVEEDORES
const listarProveedores = async(req, res) => {
    try{
        const [proveedores] = await pool.query('SELECT * FROM proveedores ORDER BY id')
        res.status(200).json({
            ok: true,
            total: proveedores.length,
            data: proveedores
        })
    }catch(e){
        console.error(e)
        res.status(500).json({
        ok: false,
        message: 'Error interno en el sistema' 
        })
        
    }
}

//---------------------------------------------------------
//OBTENER PROVEEDORES
const obtenerProveedor = async(req, res) => {
    try{
        const id = Number(req.params.id)
        if (isNaN(id) || id <= 0){
            return res.status(400).json({
                ok: false,
                message: 'El ID no puede ser un numero negativo o cero'
            })
        }
    


const [registro] = await pool.execute('SELECT * FROM proveedores WHERE id = ?', [id])

if (registro.length === 0){
    return res.status(404).json({
        ok: false,
        message: 'No existe el proveedor'
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
//------------------------------------------------------------
//CREAR PROVEEDOR
