import React, { useState, useEffect } from 'react';
import './App.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);

    const setArrayGastos = (nuevoGasto) => {
        setGastos([nuevoGasto, ...gastos]);
        setRestante((restante) => {
            if (nuevoGasto.cantidad >= restante) {
                return 0;
            }
            return restante - nuevoGasto.cantidad;
        });
    };

    useEffect(() => {
        const presupuestoStorage = JSON.parse(
            localStorage.getItem('presupuesto'),
        );
        if (Object.keys(presupuestoStorage).length > 0) {
            setPresupuesto(presupuestoStorage[presupuesto]);
            setRestante(presupuestoStorage[restante]);
            setGastos(presupuestoStorage[gastos]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        let actual = true;
        if (actual) {
            if (presupuesto) {
                setMostrarPregunta(false);
            }
        }
        return () => (actual = false);
    }, [presupuesto]);

    useEffect(() => {
        setPresupuesto(restante);
        localStorage.setItem(
            'presupuesto',
            JSON.stringify({ presupuesto, restante, gastos }),
        );
    }, [gastos, presupuesto, restante]);

    return (
        <div className='container'>
            <header>
                <h1>Gasto semanal</h1>

                <div className='contenido-principal contenido'>
                    {mostrarPregunta ? (
                        <Pregunta
                            setRestante={setRestante}
                            setPresupuesto={setPresupuesto}
                        />
                    ) : (
                        <div className='row'>
                            <div className='one-half column'>
                                <Formulario setArrayGastos={setArrayGastos} />
                            </div>
                            <div className='one-half column'>
                                {gastos.map((gasto) => {
                                    return <p>{gasto.nombre}</p>;
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
