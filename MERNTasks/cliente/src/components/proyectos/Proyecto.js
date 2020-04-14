import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';

const Proyecto = ({ proyecto }) => {
    const context = useContext(proyectoContext);
    const tareasContext = useContext(TareasContext);

    const { obtenerProyectoActual } = context;
    const { obtenerTareasByProyecto } = tareasContext;

    const seleccioanrProyecto = () => {
        obtenerProyectoActual(proyecto.id);
        obtenerTareasByProyecto(proyecto.id);
    };

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={seleccioanrProyecto}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
};

export default Proyecto;
