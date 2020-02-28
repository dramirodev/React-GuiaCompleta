import React from 'react';
import Gasto from './Gasto';
const Listado = ({ gastos }) => {
    return (
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map((gasto) => (
                <Gasto
                    key={gasto.id}
                    nombre={gasto.nombre}
                    cantidad={gasto.cantidad}
                />
            ))}
        </div>
    );
};

export default Listado;
