import React, { useReducer } from 'react';
import TareasContext from './tareasContext';
import TareasReducer from './tareasReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from '../../types';

const TareasState = (props) => {
    const initialState = {
        tareas: [
            {
                nombre: 'Elegir plataforma ',
                estado: true,
                proyectoId: 1,
                id: 1,
            },
            { nombre: 'Elegir Colores ', estado: false, proyectoId: 2, id: 2 },
            {
                nombre: 'Elegir Plataforma de pago ',
                estado: false,
                proyectoId: 3,
                id: 4,
            },
            { nombre: 'Elegir Hosting ', estado: true, proyectoId: 4, id: 3 },
        ],
        tareasProyecto: null,
        tareaActual: null,
        errorTarea: false,
    };

    const [state, dispatch] = useReducer(TareasReducer, initialState);

    const obtenerTareasByProyecto = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId,
        });
    };

    const agregarTarea = (tarea) => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea,
        });
        obtenerTareasByProyecto(tarea.proyectoId);
    };

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    };

    const eliminarTareaById = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id,
        });
    };

    const cambiaEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea,
        });
    };

    const extraerTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea,
        });
    };

    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea,
        });
    };

    return (
        <TareasContext.Provider
            value={{
                errorTarea: state.errorTarea,
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                tareaActual: state.tareaActual,
                actualizarTarea,
                agregarTarea,
                cambiaEstadoTarea,
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
