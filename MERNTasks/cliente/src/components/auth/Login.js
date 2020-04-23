import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';
import AutenticationContext from '../../context/autentication/authContext';

const Login = (props) => {
    const alertaContext = useContext(AlertaContext);
    const authContext = useContext(AutenticationContext);

    const { alerta, mostrarAlerta } = alertaContext;
    const { mensaje, autenticado, inicioSesion } = authContext;

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (autenticado) {
            props.history.push('/proyectos');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg.msg, mensaje.categoria);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mensaje, autenticado, props.history]);

    const { email, password } = usuario;

    const handleOnchageForm = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log('onSubmit');

        // validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta(
                'Es necesario rellenar todos los campos',
                'alerta-error',
            );
        }

        // pasarlo al action
        inicioSesion({ email, password });
    };

    return (
        <div className='form-usuario'>
            {alerta && (
                <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
            )}
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={onSubmitForm}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            placeholder='Tu Email'
                            onChange={handleOnchageForm}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Pasword</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            placeholder='Tu Password'
                            onChange={handleOnchageForm}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            value='Iniciar Sesión'
                            className='btn btn-primario btn-block'
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Crear Nueva Cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;
