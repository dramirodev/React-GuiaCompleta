import React, { useReducer } from 'react';
import authReducer from './authReducer';
import AutenticationContext from './authContext';
import {
    AUTH_REGISTRO_EXITO,
    AUTH_REGISTRO_ERROR,
    AUTH_OBTENER_USUARIO,
    AUTH_LOGIN_EXITO,
    AUTH_LOGIN_ERROR,
    AUTH_CERRAR_SESION,
} from '../../types';
import clienteAxios from '../../config/axios.config';
import tokenAuth from '../../config/tokenAuth';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // funciones

    const registrarUsuario = async ({ nombre, email, password }) => {
        try {
            const respuesta = await clienteAxios.post(
                process.env.REACT_APP_BACKEND_URL_USUARIOS,
                { nombre, email, password },
            );
            dispatch({
                type: AUTH_REGISTRO_EXITO,
                payload: respuesta.data,
            });

            // después de registrarse obtenemos el usuario
            obtenerUsuarioAutenticado();
        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error',
            };
            dispatch({
                type: AUTH_REGISTRO_ERROR,
                payload: alerta,
            });
        }
    };

    const obtenerUsuarioAutenticado = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get(
                process.env.REACT_APP_BACKEND_URL_AUTH,
            );
            dispatch({
                type: AUTH_OBTENER_USUARIO,
                payload: respuesta.data.usuario,
            });
        } catch (error) {
            dispatch({
                type: AUTH_LOGIN_ERROR,
            });
        }
    };

    const inicioSesion = async (datos) => {
        try {
            const respuesta = await clienteAxios.post(
                process.env.REACT_APP_BACKEND_URL_AUTH,
                datos,
            );

            dispatch({
                type: AUTH_LOGIN_EXITO,
                payload: respuesta.data,
            });

            obtenerUsuarioAutenticado();

            console.log('respuesta :>> ', respuesta);
        } catch (error) {
            const alerta = {
                msg: error.response.data,
                categoria: 'alerta-error',
            };
            dispatch({
                type: AUTH_LOGIN_ERROR,
                payload: alerta,
            });
        }
    };

    const cerrarSesion = () => {
        dispatch({
            type: AUTH_CERRAR_SESION,
        });
    };

    return (
        <AutenticationContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                inicioSesion,
                obtenerUsuarioAutenticado,
                cerrarSesion,
            }}>
            {props.children}
        </AutenticationContext.Provider>
    );
};

export default AuthState;
