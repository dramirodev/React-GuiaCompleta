const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/authentication');
const { check } = require('express-validator');

router.post(
    '/',
    auth,
    [check('nombre', 'El nombre del proyecto es obligatorio').notEmpty()],
    proyectoController.crearProyecto,
);

router.get('/', auth, proyectoController.getAllProyectos);

router.put(
    '/:id',
    auth,
    [check('nombre', 'El nombre del proyecto es obligatorio').notEmpty()],
    proyectoController.updateProyecto,
);

router.delete('/:id', auth, proyectoController.deleteProyectoByID);

module.exports = router;
