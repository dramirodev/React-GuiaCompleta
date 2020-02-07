import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <div className='container mt-5'>
                    <Switch>
                        <Route exact path='/' component={Productos} />
                        <Route
                            exact
                            path='/productos/nuevo'
                            component={NuevoProducto}
                        />
                        <Route
                            exact
                            path='/productos/editar/:id'
                            component={EditarProducto}
                        />
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
