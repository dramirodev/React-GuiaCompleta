const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
router.post('/', [
    check('email', 'El email es necesario').isEmail(),
    check(
        'password',
        'El password tienen que tener como minimo 6 caracteres',
    ).isLength({ min: 6 }),
    authController.autenticarUsuario,
]);

module.exports = router;
