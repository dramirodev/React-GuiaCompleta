import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas/ListaRecetas';

function App() {
    return (
        <CategoriasProvider>
            <RecetasProvider>
                <Header />
                <div className='container mt-5'>
                    <div className='row'>
                        <Formulario />
                        <ListaRecetas />
                    </div>
                </div>
            </RecetasProvider>
        </CategoriasProvider>
    );
}

export default App;
