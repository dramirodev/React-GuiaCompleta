import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TareasContext from '../../context/tareas/tareasContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({ tarea }) => {
    const tareasContext = useContext(TareasContext);
    const proyectosContext = useContext(proyectoContext);

    const {
        eliminarTareaById,
        cambiaEstadoTarea,
        extraerTareaActual,
    } = tareasContext;
    const { proyecto } = proyectosContext;

    const handleOnclickEliminarTarea = (id) => {
        eliminarTareaById(id);
    };
    const handleEstadoTarea = () => {
        const { estado } = tarea;
        const nuevaTarea = {
            ...tarea,
            estado: !estado,
        };
        cambiaEstadoTarea(nuevaTarea);
    };
    const handleOnClickEditar = () => {
        extraerTareaActual(tarea);
    };

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado ? (
                    <button
                        type='button'
                        className='completo'
                        onClick={handleEstadoTarea}>
                        Completo
                    </button>
                ) : (
                    <button
                        type='button'
                        className='incompleto'
                        onClick={handleEstadoTarea}>
                        Incompleto
                    </button>
                )}
            </div>
            <div className='acciones'>
                <button
                    className='btn btn-primario'
                    onClick={handleOnClickEditar}>
                    Editar
                </button>
                <button
                    className='btn btn-secundario'
                    onClick={() => handleOnclickEliminarTarea(tarea.id)}>
                    Eliminar
                </button>
            </div>
        </li>
    );
};

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired,
};

export default Tarea;
