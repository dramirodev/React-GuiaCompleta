const Usuario = require('../models/Usuario');
const bcryptJs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {
    // extraer email y password

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errores: error.array() });
    }
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            // return res.status(400).json({ msg: 'El usuario ya existe' });

            throw new Error('El usuario ya existe');
        }
        usuario = new Usuario(req.body);
        const salt = await bcryptJs.genSalt(10);

        usuario.password = await bcryptJs.hash(password, salt);
        await usuario.save();

        // crear y firmar el Token
        const payload = {
            usuario: { id: usuario.id },
        };

        jwt.sign(
            payload,
            process.env.SECRETA,
            {
                expiresIn: 3600,
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            },
        );
        // res.status(200).send('OK');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
