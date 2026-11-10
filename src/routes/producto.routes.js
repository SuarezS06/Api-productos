const { Router } = require('express') //Manejador de rutaa
const controller = require('../controllers/producto.controller') // Controlador (logica)

const router = Router() //Considerar los verbo

router.get('/', controller.listasProductos)
router.get('/:id', controller.obtenerProducto)

//Pendiente ... PUT, POST, DELETE

module.exports = router