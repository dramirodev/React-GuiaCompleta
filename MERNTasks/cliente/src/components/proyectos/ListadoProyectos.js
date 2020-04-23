import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertasContext from '../../context/alertas/alertasContext';

const ListadoProyectos = () => {
    const context = useContext(proyectoContext);
    const alertaContext = useContext(AlertasContext);

    const { mensaje, proyectos, obtenerLosProyectos } = context;
    const { mostrarAlerta, alerta } = alertaContext;

    // Obtener proyecto cuando carga el componente
    useEffect(() => {
        if (mensaje) {
            mostrarAlerta(mensaje);
        }
        obtenerLosProyectos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mensaje]);

    return (
        <ul className='listado-proyecto'>
            <TransitionGroup component={null}>
                {alerta && (
                    <div className={`alerta ${alerta.categoria}`}>
                        {alerta.msg}
                    </div>
                )}
                {proyectos.map((proyecto) => (
                    <CSSTransition
                        classNames='proyecto'
                        key={proyecto._id}
                        timeout={500}>
                        <Proyecto proyecto={proyecto} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;
