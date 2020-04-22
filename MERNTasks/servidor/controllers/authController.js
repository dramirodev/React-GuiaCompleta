const Usuario = require('../models/Usuario');
const bcryptJs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    const errores = validationResult(req.body);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        const passCorrecto = await bcryptJs.compare(password, usuario.password);

        if (!passCorrecto) {
            return res.status(400).json({ msg: 'Password incorrecto' });
        }

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
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un error' });
    }
};

exports.usuarioAutenticado = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select(
            '-password',
        );
        res.status(200).json({ usuario });
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un error' });
    }
};
