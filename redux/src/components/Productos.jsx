import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { descargarTodosProductosAction } from '../redux/actions/ProductosActions';
import Producto from './Producto';

const Productos = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);
    const productos = useSelector((state) => state.productos.productos);

    useEffect(() => {
        let entrada = true;
        const cargarproductos = () => dispatch(descargarTodosProductosAction());
        if (entrada) {
            cargarproductos();
        }
        return () => {
            entrada = false;
        };
    }, [dispatch]);

    return (
        <>
            {loading && <p>Cargando...</p>}
            {error && (
                <p className='alert alert-danger p2 text-center mt-4'>
                    Error en la creación del producto
                </p>
            )}
            <h2 className='text-center my-5'>Listado de productos</h2>
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length > 0
                        ? productos.map((prod) => (
                              <Producto key={prod.id} producto={prod} />
                          ))
                        : null}
                </tbody>
            </table>
        </>
    );
};

export default Productos;
