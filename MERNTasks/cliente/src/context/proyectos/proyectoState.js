import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINR_PROYECTO_ACTUAL,
} from '../../types';
import { v4 as uuidv4 } from 'uuid';

const ProyectoState = (props) => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio web' },
    ];

    const initialState = {
        formulario: false,
        proyectos,
        proyecto: null,
        errorformulario: false,
    };

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    const obtenerLosProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos,
        });
    };

    const agregarNuevoProyecto = (proyecto) => {
        proyecto.id = uuidv4();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto,
        });
    };

    const mostrarError = () => {
        dispatch({ type: VALIDAR_FORMULARIO });
    };

    const obtenerProyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId,
        });
    };

    const eliminarProyectoActual = (proyectoId) => {
        dispatch({
            type: ELIMINR_PROYECTO_ACTUAL,
            payload: proyectoId,
        });
    };

    return (
        <proyectoContext.Provider
            value={{
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                proyecto: state.proyecto,
                proyectos: state.proyectos,
                agregarNuevoProyecto,
                mostrarError,
                mostrarFormulario,
                obtenerLosProyectos,
                obtenerProyectoActual,
                eliminarProyectoActual,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
