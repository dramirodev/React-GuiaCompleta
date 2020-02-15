import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(crearAlertaAction(alerta));
    };
}

export function ocultarAlerta() {
    return (dispatch) => {
        dispatch(eliminarAlertaAction());
    };
}

const crearAlertaAction = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta,
});

const eliminarAlertaAction = () => ({
    type: OCULTAR_ALERTA,
});
