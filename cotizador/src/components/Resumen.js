import React from 'react';
import { capitalizeString } from '../utils/helper';
import { ContenedorResumen } from '../utils/styles';

const Resumen = ({ resumen }) => {
    const { marca, year, plan } = resumen;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <ContenedorResumen>
            <h2>Resumen de cotización:</h2>
            <ul>
                <li>Marca: {capitalizeString(marca)}</li>
                <li>Plan: {capitalizeString(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
    );
};

export default Resumen;
