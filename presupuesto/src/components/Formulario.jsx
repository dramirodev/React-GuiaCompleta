import React, { useState } from 'react';
import { validarNumero } from '../utils';
import Error from './Error';
import { shortid } from 'shortid';

const Formulario = ({ setArrayGastos }) => {
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const guardarGasto = (e) => {
        e.preventDefault();

        if (validarNumero(cantidad) || !nombreGasto) {
            setError(true);
            return;
        }

        setArrayGastos({
            nombre: nombreGasto,
            cantidad,
            id: shortid.uuid(),
        });
    };
    return (
        <form onSubmit={guardarGasto}>
            <h2>Agrega tus gastos</h2>
            {error && <Error mensaje={'Ambos campos son obligatorios'} />}
            <div className='campo'>
                <label htmlFor=''>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Introduce el gasto'
                    onChange={(e) => setNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className='campo'>
                <label htmlFor=''>Cantidad Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
                    value={cantidad.toString()}
                />
                <input
                    type='submit'
                    value='Agregar gasto'
                    className='button-primary u-full-width'
                />
            </div>
        </form>
    );
};

export default Formulario;
