import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: tareasProyecto(state.tareas, action.payload),
            };
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.concat(action.payload),
                errorTarea: false,
            };
        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true,
            };
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.filter(
                    (tarea) => tarea.id !== action.payload,
                ),
            };
        case ESTADO_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.map((tarea) => {
                    return tarea.id === action.payload.id
                        ? action.payload
                        : tarea;
                }),
            };
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaActual: action.payload,
            };
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea,
                ),
                tareaActual: null,
            };

        default:
            return state;
    }
};
const tareasProyecto = (tareas, id) => {
    let nuevoArrayTareas = [...tareas];

    return nuevoArrayTareas.filter((tarea) => tarea.proyectoId === id);
};
