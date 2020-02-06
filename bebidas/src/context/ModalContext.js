import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idDrink, setIdDrink] = useState(null);
    const [informacion, setInformacion] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idDrink) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
            const resultado = await axios.get(url);
            setInformacion(resultado.data.drinks[0]);
        };
        obtenerReceta();
        return () => {
            setInformacion({});
        };
    }, [idDrink]);
    return (
        <ModalContext.Provider
            value={{
                setIdDrink,
                informacion,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
