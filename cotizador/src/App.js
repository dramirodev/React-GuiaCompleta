import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import { Contenedor, ContenedorFormulario } from './utils/styles';

function App() {
    const [resumen, setResumen] = useState({
        marca: '',
        year: '',
        plan: '',
        price: 0,
    });
    const [cargando, setCargando] = useState(false);
    return (
        <>
            <Contenedor>
                <Header titulo={'Cotizador de seguros'} />
                <ContenedorFormulario>
                    <Formulario
                        setResumen={setResumen}
                        setCargando={setCargando}
                    />
                    {cargando ? (
                        <Spinner />
                    ) : (
                        <>
                            <Resumen resumen={resumen} />
                            <Resultado price={resumen.price} />
                        </>
                    )}
                </ContenedorFormulario>
            </Contenedor>
        </>
    );
}

export default App;
