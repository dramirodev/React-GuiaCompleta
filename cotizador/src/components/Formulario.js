import React, { useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: none;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = () => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });
    const [error, setError] = useState(false);

    const guardarDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    const cotizarSeguro = (e) => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        // Obtener la diferencia de años

        // Por cada año hay que restar el 3%

        // Americano 15%
        // Asiatico 3%
        // Europeo 30%

        // Basico aumenta 20%
        // Completo 50 %

        // Total

        setError(false);
    };

    const { marca, year, plan } = datos;
    return (
        <form onSubmit={cotizarSeguro}>
            {error && (
                <Error>
                    <p>Todos los campos son obligatorios</p>
                </Error>
            )}
            <Campo>
                <Label htmlFor='marca'>Marca</Label>
                <Select name='marca' value={marca} onChange={guardarDatos}>
                    <option value=''>--- Seleccione ---</option>
                    <option value='americano'>Americano</option>
                    <option value='asiatico'>Asiatico </option>
                    <option value='europeo'>Europeo</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor='year'>Año</Label>
                <Select name='year' onChange={guardarDatos} value={year}>
                    <option value=''>-- Seleccione --</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value='2012'>2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={guardarDatos}
                />{' '}
                Básico
                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={guardarDatos}
                />{' '}
                Completo
            </Campo>
            <Boton type='submit'>Cotizar</Boton>
        </form>
    );
};

export default Formulario;
