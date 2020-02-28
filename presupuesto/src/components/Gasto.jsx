import React from 'react';

const Gasto = ({ nombre, cantidad }) => {
    return (
        <li className='gastos'>
            <p>
                {nombre} <span className='gasto'>{cantidad} €</span>
            </p>
        </li>
    );
};

export default Gasto;
