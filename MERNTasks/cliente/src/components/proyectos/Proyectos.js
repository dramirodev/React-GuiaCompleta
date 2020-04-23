import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTareas from '../tareas/FormTareas';
import ListadoTareas from '../tareas/ListadoTareas';
import AutenticationContext from '../../context/autentication/authContext';

const Proyectos = () => {
    const authContext = useContext(AutenticationContext);

    const { obtenerUsuarioAutenticado } = authContext;

    useEffect(() => {
        obtenerUsuarioAutenticado();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='contenedor-app'>
            <Sidebar />
            <div className='seccion-principal'>
                <Barra />
                <main>
                    <FormTareas />
                    <div className='contenedor-tareas'>
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Proyectos;
