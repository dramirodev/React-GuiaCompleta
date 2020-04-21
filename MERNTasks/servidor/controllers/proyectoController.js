const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {
    const errores = validationResult(req);
    if (!errores) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const proyecto = new Proyecto(req.body);

        // Guardar el creador via JWT
        proyecto.creador = req.usuario.id;

        // Guardamos el proyecto en la BBDD
        proyecto.save();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en la creación');
    }
};

exports.getAllProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find({
            creador: req.usuario.id,
        }).sort({ creado: -1 });

        res.json({ proyectos });
    } catch (error) {
        console.log('error :', error.message);
        res.status(500).send('Hubo un error');
    }
};

exports.updateProyecto = async (req, res) => {
    const errores = validationResult(req);
    if (!errores) {
        return res.status(400).json({ errores: errores.array() });
    }

    const { nombre } = req.body;
    const nuevoProyecto = {};

    if (nombre) {
        nuevoProyecto.nombre = nombre;
    }

    try {
        // revisar el ID
        let proyecto = await Proyecto.findById(req.params.id);

        // si existe proyecto
        if (!proyecto) {
            return res.status(400).json({ msg: 'Proyecto no encontrado' });
        }
        // verificar el creador del proyecto
        if (proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }
        // actualizar
        proyecto = await Proyecto.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: nuevoProyecto },
            { new: true },
        );

        res.json(proyecto);
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};

exports.deleteProyectoByID = async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id);

        if (!proyecto) {
            return res.status(400).json({ msg: 'El id no es correcto' });
        }

        // verificar el creador del proyecto
        if (proyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }

        await Proyecto.findOneAndRemove({ _id: req.params.id });

        res.json({ msg: 'El proyecto fue borrado con exito' });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};
