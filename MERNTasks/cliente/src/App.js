import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';
import TareasState from './context/tareas/tareasState';
import AlertaState from './context/alertas/alertasState';
import AuthState from './context/autentication/authState';
import tokenAuth from './config/tokenAuth';
import RutasPrivadas from './components/rutas/rutasPrivadas';

//Para evitar perder la sesion en el servidor

const token = localStorage.getItem('token');

if (token) {
    tokenAuth(token);
}

function App() {
    return (
        <AuthState>
            <ProyectoState>
                <TareasState>
                    <AlertaState>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route
                                    exact
                                    path='/nueva-cuenta'
                                    component={NuevaCuenta}
                                />
                                <RutasPrivadas
                                    exact
                                    path='/proyectos'
                                    component={Proyectos}
                                />
                            </Switch>
                        </Router>
                    </AlertaState>
                </TareasState>
            </ProyectoState>
        </AuthState>
    );
}

export default App;
