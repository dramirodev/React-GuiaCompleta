import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {
    const context = useContext(proyectoContext);

    const { proyectos, obtenerLosProyectos } = context;

    // Obtener proyecto cuando carga el componente
    useEffect(() => {
        obtenerLosProyectos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ul className='listado-proyecto'>
            <TransitionGroup component={null}>
                {proyectos.map((proyecto) => (
                    <CSSTransition
                        classNames='proyecto'
                        key={proyecto.id}
                        timeout={500}>
                        <Proyecto proyecto={proyecto} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;
