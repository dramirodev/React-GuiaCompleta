import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AutenticationContext from '../../context/autentication/authContext';

const RutasPrivadas = ({ component: Component, ...props }) => {
    const authContext = useContext(AutenticationContext);

    const { autenticado, cargando, obtenerUsuarioAutenticado } = authContext;

    useEffect(() => {
        obtenerUsuarioAutenticado();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Route
            {...props}
            render={(props) =>
                !autenticado && !cargando ? (
                    <Redirect to='/' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default RutasPrivadas;
