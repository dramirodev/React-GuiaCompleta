const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');
const auth = require('../middleware/authentication');
const { check } = require('express-validator');

router.post(
    '/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('proyecto', 'El Proyecto es obligatorio').notEmpty(),
    ],
    tareasController.crearTarea,
);

router.get('/', auth, tareasController.obtenerTareasPorProyecto);
router.put('/:id', auth, tareasController.actualizarTarea);
router.delete('/:id', auth, tareasController.deleteTarea);

module.exports = router;
