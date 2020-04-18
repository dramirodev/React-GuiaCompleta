import React, { useState, useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';
import { v4 as uuidv4 } from 'uuid';

const FormTareas = () => {
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(TareasContext);

    const [tarea, guardarTarea] = useState({
        nombre: '',
    });

    const { proyecto } = proyectosContext;
    const {
        tareaActual,
        actualizarTarea,
        agregarTarea,
        validarTarea,
        errorTarea,
    } = tareasContext;

    useEffect(() => {
        if (tareaActual) {
            guardarTarea(tareaActual);
        } else {
            guardarTarea({
                nombre: '',
            });
        }
    }, [tareaActual]);

    //extraer el nombre del proeycto
    const { nombre } = tarea;

    const handleChange = (e) => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        if (tareaActual) {
            actualizarTarea(tarea);
        } else {
            agregarTarea({
                estado: false,
                proyectoId: proyecto.id,
                nombre: tarea.nombre,
                id: uuidv4(),
            });
        }

        guardarTarea({
            nombre: '',
        });
    };

    return (
        proyecto && (
            <div className='formulario'>
                <form onSubmit={handleOnSubmit}>
                    <div className='contenedor-input'>
                        <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='input-text'
                            placeholder='Nombre de la tarea'
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='contenedor-input'>
                        <input
                            type='submit'
                            value={
                                tareaActual ? 'Editar Tarea' : 'Agregar Tarea'
                            }
                            className='btn btn-block btn-primario'
                        />
                    </div>
                </form>
                {errorTarea && (
                    <p className='mensaje error'>
                        El nombre de la tarea es obligatorio
                    </p>
                )}
            </div>
        )
    );
};

export default FormTareas;
