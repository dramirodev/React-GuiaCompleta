import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: action.payload,
            };
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasProyecto: state.tareasProyecto.concat(action.payload),
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
                    (tarea) => tarea._id !== action.payload,
                ),
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
                    tarea._id === action.payload._id ? action.payload : tarea,
                ),
                tareaActual: null,
            };

        default:
            return state;
    }
};
