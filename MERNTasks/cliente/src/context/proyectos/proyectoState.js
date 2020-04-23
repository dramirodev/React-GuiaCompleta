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
    PROYECTO_ERROR,
} from '../../types';
import clienteAxios from '../../config/axios.config';

const ProyectoState = (props) => {
    const initialState = {
        formulario: false,
        proyectos: [],
        proyecto: null,
        errorformulario: false,
        mensaje: null,
    };

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,
        });
    };

    const obtenerLosProyectos = async () => {
        try {
            const respuesta = await clienteAxios.get(
                process.env.REACT_APP_BACKEND_URL_PROYECTOS,
            );

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: respuesta.data.proyectos,
            });
        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error',
            };

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            });
            throw error;
        }
    };

    const agregarNuevoProyecto = async (proyecto) => {
        try {
            const resp = await clienteAxios.post(
                process.env.REACT_APP_BACKEND_URL_PROYECTOS,
                proyecto,
            );

            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resp.data,
            });
        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error',
            };

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            });
            throw error;
        }
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

    const eliminarProyectoActual = async (proyectoId) => {
        try {
            await clienteAxios.delete(
                process.env.REACT_APP_BACKEND_URL_PROYECTOS + '/' + proyectoId,
            );
            dispatch({
                type: ELIMINR_PROYECTO_ACTUAL,
                payload: proyectoId,
            });
        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error',
            };

            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta,
            });
            throw error;
        }
    };

    return (
        <proyectoContext.Provider
            value={{
                errorformulario: state.errorformulario,
                formulario: state.formulario,
                proyecto: state.proyecto,
                proyectos: state.proyectos,
                mensaje: state.mensaje,
                agregarNuevoProyecto,
                mostrarError,
                mostrarFormulario,
                obtenerLosProyectos,
                obtenerProyectoActual,
                eliminarProyectoActual,
            }}>
            {props.children}
        </proyectoContext.Provider>
    );
};

export default ProyectoState;
