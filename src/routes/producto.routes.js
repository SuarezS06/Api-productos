const { Router } = require('express') //Manejador de rutaa
const controller = require('../controllers/producto.controller') // Controlador (logica)

const router = Router() //Considerar los verbo

router.get('/', controller.listarProductos)
router.get('/:id', controller.obtenerProducto)
router.post('/', controller.crearProducto)
router.put('/:id',controller.actualizarProducto)

//Pendiente ... PUT, POST, DELETE

module.exports = router