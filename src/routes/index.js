//Nuestra aplicación puede tener muchos módulos:
//Productso > producto.controller > producto.routes
//Clientes > clientes.controller > cliente.routes
//Proveedores > proveedor.controller > proveedor.routes

// todas las rutas se organizan gracias a index.js (indice)
const { Router } = require('express')

// esto se realiza por cada routes
const productoRoutes = require('./producto.routes')
const clienteRoutes = require('./cliente.routes')
const proveedorRoutes = require('./proveedor.routes')
// esto es solo uno para todas las rutas
const router = Router()

// esto es por cada routes
router.use('/productos', productoRoutes)
router.use('/clientes', clienteRoutes)
router.use('/proveedores', proveedorRoutes)

// se exportan todas las rutas
module.exports = router