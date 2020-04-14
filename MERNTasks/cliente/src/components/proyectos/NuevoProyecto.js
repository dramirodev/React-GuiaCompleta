import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
    // Obtener el state del formulario

    const context = useContext(proyectoContext);

    const {
        formulario,
        mostrarFormulario,
        errorformulario,
        agregarNuevoProyecto,
        mostrarError,
    } = context;

    const [proyecto, setProyecto] = useState({
        nombre: '',
    });

    const { nombre } = proyecto;

    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitProyecto = (e) => {
        e.preventDefault();

        // Validar el proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }

        // agregar al state
        agregarNuevoProyecto(proyecto);

        // reiniciar el state
        setProyecto({ nombre: '' });
    };

    const handleOnclickMostrarFormulario = () => {
        mostrarFormulario();
    };

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={handleOnclickMostrarFormulario}
            >
                Nuevo Proyecto
            </button>
            {formulario && (
                <form
                    action=''
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type='text'
                        name='nombre'
                        id='nombre'
                        placeholder='Nombre Proyecto'
                        className='input-text'
                        onChange={onChangeProyecto}
                        value={nombre}
                    />
                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                    />
                </form>
            )}
            {errorformulario && (
                <p className='mensaje error'>
                    El nombre de proyecto es obligatorio
                </p>
            )}
        </>
    );
};

export default NuevoProyecto;
