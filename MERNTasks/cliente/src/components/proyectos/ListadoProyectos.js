import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    const context = useContext(proyectoContext);

    const { proyectos, obtenerLosProyectos } = context;

   // Obtener proyecto cuando carga el componente
    useEffect(() => {
        obtenerLosProyectos();
    }, []);

    return (
        <ul className='listado-proyecto'>
            {proyectos &&
                proyectos.map((proyecto) => (
                    <Proyecto proyecto={proyecto} key={proyecto.id} />
                ))}
        </ul>
    );
};

export default ListadoProyectos;
