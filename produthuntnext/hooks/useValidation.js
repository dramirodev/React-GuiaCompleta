import React, { useState, useEffect } from 'react';

const usevalidacion = (stateInicial, validar, callback) => {
    const [valores, setValores] = useState(stateInicial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;
            if (noErrores) {
                callback();
            }
        }
        setSubmitForm(false);
    }, [errores]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnBlur = (e) => {
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const erroresValidacion = validar(valores);

        setErrores(erroresValidacion);
        setSubmitForm(true);
    };

    return {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit,
        handleOnBlur,
    };
};

export default usevalidacion;
