import React, { useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import { useState } from 'react';

function App() {
    const citasIniciales = JSON.parse(localStorage.getItem('citas'))
        ? JSON.parse(localStorage.getItem('citas'))
        : [];

    const [citas, setCitas] = useState(citasIniciales);

    const crearCita = (cita) => {
        setCitas([...citas, cita]);
    };

    const deleteCitaById = (id) => {
        const nuevasCitas = citas.filter((cita) => cita.id !== id);
        setCitas(nuevasCitas);
    };

    const addToLocalStorage = (listadoCitas) => {
        localStorage.setItem('citas', JSON.stringify(listadoCitas));
    };

    useEffect(() => {
        if (citasIniciales) {
            addToLocalStorage(citas);
        } else {
            addToLocalStorage([]);
        }
    }, [citas]);

    return (
        <>
            <h1>Administrador de pacientes</h1>
            <div className='container'>
                <div className='row'>
                    <div className='one-half column'>
                        <Formulario crearCita={crearCita} />
                    </div>
                    <div className='one-half column'>
                        <h2>Administrar tus citas</h2>
                        {citas.map((cita) => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                deleteCitaById={deleteCitaById}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}



export default App;
