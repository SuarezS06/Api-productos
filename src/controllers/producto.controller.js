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
const listasProductos= async(req, res) => {}

const obtenerProducto= async(req, res) => {}

const crearProducto= async(req, res) => {}

const actualizarProducto= async(req, res) => {}

const eliminarProducto= async(req, res) => {}

//Todos los métodos deben ser EXPORTADOS (se utilizarán desde las app)
//el que lo utilizará sera "routes"
module.exports = {
  listasProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
}