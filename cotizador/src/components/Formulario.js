import React, { useState } from 'react';
import {
    Error,
    Campo,
    Label,
    Select,
    InputRadio,
    Boton,
} from '../utils/styles';
import {
    obtenerDiferenciaYear,
    calcularResultadoSegunMarca,
    calcularResultadoSegunPlan,
} from '../utils/helper';

const Formulario = ({ setResumen, setCargando }) => {
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
        const diferenciaYear = obtenerDiferenciaYear(year);

        let result = 2000;
        result -= result * ((diferenciaYear * 3) / 100);

        console.log(result);

        // Por cada año hay que restar el 3%

        // Americano 15%
        // Asiatico 3%
        // Europeo 30%

        result = calcularResultadoSegunMarca(marca, result);

        // Basico aumenta 20%
        // Completo 50 %

        // Total

        const price = parseFloat(
            calcularResultadoSegunPlan(result, plan).toFixed(2),
        );
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
            setResumen({
                ...datos,
                price,
            });
        }, 1500);

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
