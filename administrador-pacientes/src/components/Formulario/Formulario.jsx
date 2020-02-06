import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
    const [cita, setCita] = useState({
        id: '',
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, setError] = useState(false);

    const { mascota, propietario, fecha, hora, sintomas, id } = cita;

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value,
        });
    };

    const submitCita = (e) => {
        e.preventDefault();

        // Validar
        if (
            !mascota.trim() ||
            !propietario.trim() ||
            !fecha.trim() ||
            !hora.trim() ||
            !sintomas.trim()
        ) {
            setError(true);
            return;
        }

        setError(false);

        // Asignar un ID

        setCita(() => ({ ...cita, id: uuid().toString() }));
    };

    useEffect(() => {
        if (id) {
            crearCita(cita);
        }
        return () => {
            setCita({
                id: '',
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: '',
            });
        };
    }, [id]);

    return (
        <>
            <h2>Crear Cita</h2>
            {error && (
                <p className='alerta-error'>
                    Todos los campos son obligatorios
                </p>
            )}
            <form onSubmit={submitCita}>
                <label htmlFor=''>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={handleChange}
                    value={mascota}
                />
                <label htmlFor=''>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                    onChange={handleChange}
                    value={propietario}
                />
                <label htmlFor=''>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                    value={fecha}
                />
                <label htmlFor=''>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                    value={hora}
                />
                <label htmlFor=''>
                    Sintomas
                    <span aria-label='dog' role='img'>
                        🐶
                    </span>
                </label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    cols='30'
                    rows='10'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button type='submit' className='u-full-width button-primary'>
                    Agregar citas
                </button>
            </form>
        </>
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
};

export default Formulario;
