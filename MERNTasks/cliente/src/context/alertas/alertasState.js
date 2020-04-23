import React, { useReducer } from 'react';
import AlertasContext from './alertasContext';
import alertasReducer from './alertasReducer';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = (props) => {
    const initialState = { alerta: null };

    const [state, dispatch] = useReducer(alertasReducer, initialState);

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: { msg, categoria },
        });

        setTimeout(ocultarAlerta, 2000);
    };

    const ocultarAlerta = () => {
        dispatch({
            type: OCULTAR_ALERTA,
        });
    };

    return (
        <AlertasContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta,
            }}>
            {props.children}
        </AlertasContext.Provider>
    );
};

export default AlertaState;
