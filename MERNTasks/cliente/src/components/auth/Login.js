import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
    });

    const { email, password } = usuario;
    const handleOnchageEmail = () => {};
    const handleOnchagePassword = () => {};
    const handleOnchageForm = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmitForm = (e) => {
        e.preventDefault();

        // validar que no haya campos vacios

        // pasarlo al action
    };

    return (
        <div className='form-usuario'>
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
