import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';
import ListaRecetas from './components/ListaRecetas/ListaRecetas';

function App() {
    return (
        <CategoriasProvider>
            <RecetasProvider>
                <ModalProvider>
                    <Header />
                    <div className='container mt-5'>
                        <div className='row'>
                            <Formulario />
                            <ListaRecetas />
                        </div>
                    </div>
                </ModalProvider>
            </RecetasProvider>
        </CategoriasProvider>
    );
}

export default App;
