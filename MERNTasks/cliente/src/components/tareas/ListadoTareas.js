import React from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareas = [
        { nombre: 'Elegir plataforma ', estado: true },
        { nombre: 'Elegir Colores ', estado: false },
        { nombre: 'Elegir Plataforma de pago ', estado: false },
        { nombre: 'Elegir Hosting ', estado: true },
    ];
    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className='listado-tareas'>
                {tareas.length === 0 && (
                    <li className='listado-tareas'>
                        <p>No hay tareas</p>
                    </li>
                )}
                {tareas.map((tarea) => (
                    <Tarea tarea={tarea} />
                ))}
                <button className='btn btn-eliminar'>
                    Eliminar Proyecto &times;
                </button>
            </ul>
        </>
    );
};

export default ListadoTareas;
