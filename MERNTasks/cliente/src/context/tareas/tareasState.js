import React, { useReducer } from 'react';
import TareasContext from './tareasContext';
import TareasReducer from './tareasReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from '../../types';
import clienteAxios from '../../config/axios.config';

const TareasState = (props) => {
    const initialState = {
        tareasProyecto: [],
        tareaActual: null,
        errorTarea: false,
    };

    const [state, dispatch] = useReducer(TareasReducer, initialState);

    const obtenerTareasByProyecto = async (proyecto) => {
        try {
            const respuesta = await clienteAxios.get(
                process.env.REACT_APP_BACKEND_URL_TAREAS,
                { params: { proyecto } },
            );
            dispatch({
                type: TAREAS_PROYECTO,
                payload: respuesta.data.tareas,
            });
        } catch (error) {
            throw error;
        }
    };

    const agregarTarea = async (tarea) => {
        try {
            const respuesta = await clienteAxios.post(
                process.env.REACT_APP_BACKEND_URL_TAREAS,
                tarea,
            );
            dispatch({
                type: AGREGAR_TAREA,
                payload: respuesta.data.tarea,
            });
        } catch (error) {}
    };

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    };

    const eliminarTareaById = async (id, proyecto) => {
        try {
            await clienteAxios.delete(
                process.env.REACT_APP_BACKEND_URL_TAREAS + '/' + id,
                { params: { proyecto } },
            );

            dispatch({
                type: ELIMINAR_TAREA,
                payload: id,
            });
        } catch (error) {
            throw error;
        }
    };

    const extraerTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea,
        });
    };

    const actualizarTarea = async (tarea) => {
        try {
            const respuesta = await clienteAxios.put(
                process.env.REACT_APP_BACKEND_URL_TAREAS + '/' + tarea._id,
                tarea,
            );
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: respuesta.data,
            });
        } catch (error) {
            throw error;
        }
    };

    return (
        <TareasContext.Provider
            value={{
                errorTarea: state.errorTarea,
                tareasProyecto: state.tareasProyecto,
                tareaActual: state.tareaActual,
                actualizarTarea,
                agregarTarea,
                eliminarTareaById,
                extraerTareaActual,
                obtenerTareasByProyecto,
                validarTarea,
            }}>
            {props.children}
        </TareasContext.Provider>
    );
};

export default TareasState;
