import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Crear el context
export const CategoriasContext = createContext();

// Provider donde se encuentran lasd funciones y el state
const CategoriasProvider = (props) => {
    const [categorias, setCategorias] = useState([]);
    const obtenerCategorias = useCallback(async () => {
        const url =
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        const categorias = await axios.get(url);
        setCategorias(categorias.data.drinks);
    }, []);

    useEffect(() => {
        try {
            obtenerCategorias();
        } catch (error) {
            throw new Error('Error al traer las categorias');
        }
    }, [obtenerCategorias]);

    // Todo  lo que esté en el return es lo que va a estar disponible
    return (
        <CategoriasContext.Provider value={{ categorias }}>
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;
