//Rutas para producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/user

router.post('/', userController.crearUser);
router.get('/', userController.obtenerUsers);
router.put('/:id', userController.actualizarUser);
router.get('/:id', userController.obtenerUser);
router.delete('/:id', userController.eliminarUser);

// router.post('/', () => {
//     console.log('Creando User..');
// })

module.exports = router