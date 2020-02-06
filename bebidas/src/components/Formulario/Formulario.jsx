import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../../context/CategoriasContext';
import { RecetasContext } from '../../context/RecetasContext';

const Formulario = () => {
    const { categorias } = useContext(CategoriasContext);
    const { setBusqueda, setConsultar } = useContext(RecetasContext);
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: '',
    });

    // función para leer los contenidos

    const obtenerDatosRecetas = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };
    const realizarBusqueda = (e) => {
        e.preventDefault();
        setBusqueda(busqueda);
        setConsultar(true);
    };
    return (
        <form className='col-md-12' onSubmit={realizarBusqueda}>
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por ingrediente'
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatosRecetas}
                    >
                        <option value=''>---- Seleciona Categoria ---</option>
                        {categorias.map((categoria) => {
                            return (
                                <option
                                    value={categoria.strCategory}
                                    key={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar bebidas'
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;
