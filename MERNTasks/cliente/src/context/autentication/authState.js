import React, { useReducer } from 'react';
import authReducer from './authReducer';
import {
    AUTH_REGISTRO_EXITO,
    AUTH_REGISTRO_ERROR,
    AUTH_OBTENER_USUARIO,
    AUTH_LOGIN_EXITO,
    AUTH_LOGIN_ERROR,
    AUTH_CERRAR_SESION,
} from '../../types';

const AuthState = () => {
    const initialState = {};

    const [state, dispatch] = useReducer(authReducer, initialState);
};
