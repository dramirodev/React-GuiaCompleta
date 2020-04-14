import React, { useReducer } from 'react';
import TareasContext from './tareasContext';
import TareasReducer from './tareasReducer';
import { TAREAS_PROYECTO } from '../../types';

const TareasState = (props) => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma ', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores ', estado: false, proyectoId: 2 },
            {
                nombre: 'Elegir Plataforma de pago ',
                estado: false,
                proyectoId: 3,
            },
            { nombre: 'Elegir Hosting ', estado: true, proyectoId: 4 },
        ],
        tareasProyecto: null,
    };

    const [state, dispatch] = useReducer(TareasReducer, initialState);

    const obtenerTareasByProyecto = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
        });
    };

    return (
        <TareasContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareasByProyecto,
            }}
        >
            {props.children}
        </TareasContext.Provider>
    );
};

export default TareasState;
