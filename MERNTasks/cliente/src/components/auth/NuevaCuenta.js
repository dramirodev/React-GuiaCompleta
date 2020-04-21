import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';

const NuevaCuenta = () => {
    const alertaContext = useContext(AlertaContext);

    const { alerta, mostrarAlerta } = alertaContext;

    const [usuario, guardarUsuario] = useState({
        nombreUsuario: '',
        email: '',
        password: '',
        confirmar: '',
    });

    const { email, password, nombreUsuario, confirmar } = usuario;
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
        if (
            nombreUsuario.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === ''
        ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Validar que password sea de 6 caracteres

        if (password.trim().length < 6) {
            mostrarAlerta(
                'El password debe ser al menos de 6 caracteres',
                'alerta-error',
            );
            return;
        }

        // Validar que los dos passwords sean iguales

        if (password.trim() !== confirmar.trim()) {
            mostrarAlerta(
                'Password y confirmar Password deben de ser iguales',
                'alerta-error',
            );
            return;
        }

        // pasarlo al action
        
    };

    return (
        <div className='form-usuario'>
            {alerta && (
                <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
            )}
            <div className='contenedor-form sombra-dark'>
                <h1>Crear Cuenta</h1>
                <form onSubmit={onSubmitForm}>
                    <div className='campo-form'>
                        <label htmlFor='nombreUsuario'>Nombre de Usuario</label>
                        <input
                            type='text'
                            name='nombreUsuario'
                            id='nombreUsuario'
                            value={nombreUsuario}
                            placeholder='Tu nombre de usuario'
                            onChange={handleOnchageForm}
                        />
                    </div>
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
                        <label htmlFor='password'>Confirmar Pasword</label>
                        <input
                            type='password'
                            name='confirmar'
                            id='confirmar'
                            value={confirmar}
                            placeholder='Confirmar password'
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
                <Link to={'/'} className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;
