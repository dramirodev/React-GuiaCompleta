import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, deleteCitaById }) => {
    const { mascota, propietario, fecha, hora, sintomas, id } = cita;

    const deleteCita = () => {
        deleteCitaById(id);
    };

    return (
        <div className='cita'>
            <p>
                Mascota: <span>{mascota}</span>
            </p>
            <p>
                propietario: <span>{propietario}</span>
            </p>
            <p>
                fecha: <span>{fecha}</span> / <span>{hora}</span>
            </p>
            <p>
                Sintomas: <span>{sintomas}</span>
            </p>
            <button
                className='button eliminar u-full-width'
                onClick={deleteCita}
            >
                Eliminar &times;
            </button>
        </div>
    );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCitaById: PropTypes.func.isRequired,
};

export default Cita;
