import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTareas = () => {
    const context = useContext(proyectoContext);

    const { proyecto } = context;

    return (
        proyecto && (
            <div className='formulario'>
                <form action=''>
                    <div className='contenedor-input'>
                        <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='input-text'
                            placeholder='Nombre de la tarea'
                        />
                    </div>
                    <div className='contenedor-input'>
                        <input
                            type='submit'
                            value='Agregar Tarea'
                            className='btn btn-block btn-primario'
                        />
                    </div>
                </form>
            </div>
        )
    );
};

export default FormTareas;
