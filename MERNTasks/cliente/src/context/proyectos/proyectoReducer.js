import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINR_PROYECTO_ACTUAL,
    PROYECTO_ERROR,
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true,
                mensaje: null
            };
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload,
                mensaje: null,
            };

        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false,
                mensaje: null,
            };

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true,
            };

        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.find(
                    (proyecto) => proyecto._id === action.payload,
                ),
                mensaje: null,
            };

        case ELIMINR_PROYECTO_ACTUAL:
            return {
                ...state,
                proyectos: state.proyectos.filter(
                    (proyecto) => proyecto._id !== action.payload,
                ),
                proyecto: null,
                mensaje: null,
            };

        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }

        default:
            return state;
    }
};
