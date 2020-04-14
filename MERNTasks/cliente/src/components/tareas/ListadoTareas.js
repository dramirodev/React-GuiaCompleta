import React, { useContext, useState, useEffect } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';

const ListadoTareas = () => {
    const [actualProyecto, setActualProyecto] = useState(null);
    const [tareasProyectoActual, setTareasProyectoActual] = useState([]);
    const proyectoscontext = useContext(proyectoContext);
    const tareasContext = useContext(TareasContext);

    const { proyecto, eliminarProyectoActual } = proyectoscontext;

    useEffect(() => {
        if (proyecto) {
            const [proyectoActual] = proyecto;
            const { tareasProyecto } = tareasContext;
            setActualProyecto(proyectoActual);
            setTareasProyectoActual(tareasProyecto);
        } else {
            setActualProyecto(null);
            setTareasProyectoActual(null);
        }
    }, [proyecto, tareasContext]);

    const handleOnclickEliminarProyecto = () => {
        eliminarProyectoActual(actualProyecto.id);
    };

    return (
        <>
            {actualProyecto ? (
                <div>
                    <h2>Proyecto: {actualProyecto.nombre}</h2>
                    <ul className='listado-tareas'>
                        {tareasProyectoActual.length > 0 ? (
                            tareasProyectoActual.map((tarea) => (
                                <Tarea tarea={tarea} />
                            ))
                        ) : (
                            <li className='tarea sombra'>
                                <p>No hay tareas</p>
                            </li>
                        )}
                        <button
                            className='btn btn-eliminar'
                            onClick={handleOnclickEliminarProyecto}
                        >
                            Eliminar Proyecto &times;
                        </button>
                    </ul>
                </div>
            ) : (
                <h1>No hay proyecto seleccionado</h1>
            )}
        </>
    );
};

export default ListadoTareas;
