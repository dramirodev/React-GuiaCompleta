import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: '',
    });

    const [consultar, setConsultar] = useState(false);
    const { nombre, categoria } = busqueda;

    const obtenerRecetas = useCallback(async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const recetas = await axios.get(url);
        setRecetas(recetas.data.drinks);
    }, [busqueda]);

    useEffect(() => {
        try {
            if (consultar) {
                obtenerRecetas();
            }
        } catch (error) {
            setConsultar(false);
            throw new Error('No se pudo obtener la receta');
        }
    }, [busqueda]);

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                setBusqueda,
                setConsultar,
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;
