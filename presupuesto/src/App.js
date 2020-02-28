import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [mostrarPregunta, setMostrarPregunta] = useState(true);
    const [gastos, setGastos] = useState([]);
    const [gasto, setGasto] = useState(0);

    const updateGastos = useCallback(() => {
        setGastos([gasto, ...gastos]);
    }, [gasto, gastos]);
    useEffect(() => {
        if (gasto !== 0 && !gastos.some((g) => g.id === gasto.id)) {
            updateGastos();
        }
        setRestante((restante) => {
            if (gasto.cantidad >= restante) {
                return 0;
            }
            return restante - gasto.cantidad;
        });
    }, [gasto, gastos, updateGastos]);

    useEffect(() => {
        if (presupuesto && restante) {
            setMostrarPregunta(false);
        }
    }, [presupuesto, restante]);

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
                                <Formulario setArrayGastos={setGasto} />
                            </div>
                            <div className='one-half column'>
                                <Listado gastos={gastos} />
                                <ControlPresupuesto
                                    presupuesto={presupuesto}
                                    restante={restante}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
