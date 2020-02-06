import React, { useContext } from 'react';
import { RecetasContext } from '../../context/RecetasContext';
import Recetas from '../Recetas/Recetas';

const ListaRecetas = () => {
    const { recetas } = useContext(RecetasContext);
    return (
        <div className='row mt-5'>
            {recetas.map((receta) => (
                <Recetas receta={receta} key={receta.idDrink} />
            ))}
        </div>
    );
};

export default ListaRecetas;
