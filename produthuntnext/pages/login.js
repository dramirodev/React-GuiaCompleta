import React, { useState } from 'react';
import styled from '@emotion/styled';
import Layout from '../components/layout/Layout';
import Router from 'next/router';
import {
    Formulario,
    Campo,
    InputSubmit,
    Error,
} from '../components/ui/Formulario';
import usevalidacion from '../hooks/useValidation';
import validarIniciarSesion from '../validacion/validarIniciarSesion';
import firebase from '../firebase';

const Heading = styled.h1`
    text-align: center;
    margin-top: 5rem;
`;

const STATE_INICIAL = {
    email: '',
    password: '',
};

const Login = () => {
    const [error, setError] = useState('');
    const {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleOnBlur,
    } = usevalidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

    const { email, password } = valores;

    async function iniciarSesion() {
        try {
            await firebase.iniciarSesion(email, password);
            Router.push('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <Layout>
                <Heading>Iniciar Sesión</Heading>
                {error && <Error>{error}</Error>}
                <Formulario onSubmit={handleSubmit} noValidate>
                    <Campo>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Tu email'
                            onChange={handleChange}
                            onBlur={handleOnBlur}
                            value={email}
                        />
                    </Campo>
                    {errores.email && <Error>{errores.email}</Error>}
                    <Campo>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Tu password'
                            onChange={handleChange}
                            onBlur={handleOnBlur}
                            valores={password}
                        />
                    </Campo>
                    {errores.password && <Error>{errores.password}</Error>}
                    <InputSubmit type='submit' value='Iniciar sesión' />
                </Formulario>
            </Layout>
        </div>
    );
};

export default Login;
