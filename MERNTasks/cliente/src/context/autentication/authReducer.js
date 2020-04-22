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
        case AUTH_LOGIN_EXITO:
        case AUTH_REGISTRO_EXITO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
            };
        case AUTH_LOGIN_ERROR:
        case AUTH_REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                autenticado: false,
                mensaje: action.payload,
                cargando: true,
            };
        case AUTH_OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false,
            };

        case AUTH_CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                autenticado: null,
                usuario: null,
                cargando: true,
            };

        default:
            return state;
    }
};
