const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearTarea = async (req, res) => {
    const errores = validationResult(req);

    if (!errores) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const { proyecto } = req.body;
        const proyectoRequerido = await Proyecto.findById(proyecto);

        // Revisamos que exista el proyecto
        if (!proyectoRequerido) {
            return res.status(404).json({ msg: 'Proyecto no encontrdo' });
        }

        // Revisar si el proyecto actual pertenece al usuaio autenticado
        if (proyectoRequerido.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }
        // Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });
    } catch (error) {
        return res
            .status(500)
            .json({ msg: 'Hubo un error en la creación de la tarea' });
    }
};

exports.obtenerTareasPorProyecto = async (req, res) => {
    const { proyecto } = req.query;
    try {
        const proyectoRequerido = await Proyecto.findById(proyecto);

        // Revisamos que exista el proyecto
        if (!proyectoRequerido) {
            return res.status(404).json({ msg: 'Proyecto no encontrdo' });
        }

        //Obtener las tareas por proyectos
        const tareas = await Tarea.find({ proyecto });
        res.json({ tareas });
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
};

exports.actualizarTarea = async (req, res) => {
    try {
        const { proyecto, nombre, estado } = req.body;
        console.log(proyecto);
        const proyectoRequerido = await Proyecto.findById(proyecto);

        // Revisamos que exista el proyecto
        if (!proyectoRequerido) {
            return res.status(404).json({ msg: 'Proyecto no encontrdo' });
        }
        // verificar el creador del proyecto
        if (proyectoRequerido.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }

        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        const nuevaTarea = {};
        nuevaTarea.nombre = nombre;
        nuevaTarea.estado = estado;

        tarea = await Tarea.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: nuevaTarea },
            { new: true },
        );

        res.json(tarea);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error' });
    }
};

exports.deleteTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if (!tarea) {
            return res.status(404).json({ msg: 'Tarea no encontrada' });
        }

        const { proyecto } = tarea;
        const proyectoDeLaTarea = await Proyecto.findById(proyecto);

        if (!proyectoDeLaTarea) {
            return res
                .status(404)
                .json({ msg: 'El proyecto de la tarea no existe' });
        }

        // verificar el creador del proyecto
        if (proyectoDeLaTarea.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }

        await Tarea.findByIdAndRemove({ _id: req.params.id });
        // Siempre enviar una respuesta
        res.json({ msg: 'La tarea fue eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un Error' });
    }
};
