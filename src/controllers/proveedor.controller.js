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
