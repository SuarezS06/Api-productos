//Este archivo contiene la lógica de la aplicación
//5 procedimientos: buscar, listar, registrar, actualizar, eliminar

//PASO 1
//const objeto = require('') //TODAS LAS FUNCIONES
//const { otroObjeto} = require('') //SOLO ALGUNAS FUNCIONES

const { pool } = require('../config/database')
const CAMPOS = 'id, marca, descripcion, precio, stock' //Dato común

//todas las funciones serán ASÍNCRONAS (tardaran un tiempo en ser resultas...)
//milisegundos, segundos (1000 = 1seg)
//Todas las funciones reciben y envian datos (pasarelas)
//red (require - solicitar >>>), res (result - <<< resultado)
const listasProductos= async(req, res) => {
  //Se utiliza try - cacth porq existe una probabilidad de error
  try{
    //Deserealización (obtener el primer elemento del arrreglo)
    const [productos] = await pool.query('SELECT * FROM productos ORDER BY id')
    res.status(200).json({
      ok: true,
      total: productos.length,
      data: productos
    })
  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const obtenerProducto= async(req, res) => {
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const crearProducto= async(req, res) => {
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const actualizarProducto= async(req, res) => {
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

const eliminarProducto= async(req, res) => {
  try{

  }catch(e){
    console.error(e)
    res.status(500).json({
      ok: false,
      message: 'Error interno en el servidor'
    })
  }
}

//Todos los métodos deben ser EXPORTADOS (se utilizarán desde las app)
//el que lo utilizará sera "routes"
module.exports = {
  listasProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
}