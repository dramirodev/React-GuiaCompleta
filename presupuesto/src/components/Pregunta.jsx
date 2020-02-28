import React, { useState } from 'react';
import Error from './Error';
import { validarNumero } from '../utils';
const Pregunta = ({ setPresupuesto, setRestante }) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    };

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //Validar
        if (validarNumero(cantidad)) {
            setError(true);
            return;
        }

        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
    };

    return (
        <>
            <h2>Coloca tu preupuesto</h2>
            {error && <Error mensaje='El presupuesto es incorrecto' />}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    value={cantidad.toString()}
                    onChange={definirPresupuesto}
                />
                <input
                    type='submit'
                    value='Añadir Presupuesto'
                    className='button-primary u-full-width'
                />
            </form>
        </>
    );
};

export default Pregunta;
