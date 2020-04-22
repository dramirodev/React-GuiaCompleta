import {
    AUTH_REGISTRO_EXITO,
    AUTH_REGISTRO_ERROR,
    AUTH_OBTENER_USUARIO,
    AUTH_LOGIN_EXITO,
    AUTH_LOGIN_ERROR,
    AUTH_CERRAR_SESION,
} from '../../types';
export default (state, action) => {
    switch (action.type) {
        case AUTH_REGISTRO_EXITO:
            return {
                ...state,
            };
        case AUTH_REGISTRO_ERROR:
            return {
                ...state,
            };
        case AUTH_OBTENER_USUARIO:
            return {
                ...state,
            };
        case AUTH_LOGIN_EXITO:
            return {
                ...state,
            };
        case AUTH_LOGIN_ERROR:
            return {
                ...state,
            };
        case AUTH_CERRAR_SESION:
            return {
                ...state,
            };

        default:
            return state;
    }
};
