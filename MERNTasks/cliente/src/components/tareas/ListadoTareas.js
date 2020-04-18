import React, { useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {
    const proyectoscontext = useContext(proyectoContext);
    const tareasContext = useContext(TareasContext);

    const { proyecto, eliminarProyectoActual } = proyectoscontext;
    const { tareasProyecto } = tareasContext;

    const handleOnclickEliminarProyecto = () => {
        eliminarProyectoActual(proyecto.id);
    };

    return (
        <>
            {proyecto ? (
                <div>
                    <h2>Proyecto: {proyecto.nombre}</h2>
                    <ul className='listado-tareas'>
                        {tareasProyecto.length > 0 ? (
                            <TransitionGroup>
                                {tareasProyecto.map((tarea) => (
                                    <CSSTransition
                                        key={tarea.id}
                                        timeout={300}
                                        classNames='tarea'>
                                        <Tarea tarea={tarea} />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        ) : (
                            <li className='tarea sombra'>
                                <p>No hay tareas</p>
                            </li>
                        )}
                        <button
                            className='btn btn-eliminar'
                            onClick={handleOnclickEliminarProyecto}>
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
