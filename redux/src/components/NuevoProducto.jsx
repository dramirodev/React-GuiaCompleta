import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../redux/actions/ProductosActions';
import { mostrarAlerta, ocultarAlerta } from '../redux/actions/AlertaAction';

const NuevoProducto = ({ history }) => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);
    const alerta = useSelector(({ alerta }) => alerta.alerta);

    const agregarProducto = (producto) =>
        dispatch(crearNuevoProductoAction(producto));
    const submitNuevoProducto = (e) => {
        e.preventDefault();

        if (nombre.trim() === '' || precio <= 0) {
            const respuesta = {
                msg: 'Ambos campos son obligatorios',
                clases: 'alert alert-danger text-center text-uppercase p-3',
            };
            dispatch(mostrarAlerta(respuesta));
            return;
        }

        dispatch(ocultarAlerta());

        agregarProducto({
            nombre,
            precio,
        });
        history.push('/');
    };
    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        {alerta && (
                            <p className={alerta.clases}>{alerta.msg}</p>
                        )}
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Precio de producto'
                                    name='precio'
                                    value={precio}
                                    onChange={(e) =>
                                        setPrecio(Number(e.target.value, 10))
                                    }
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='submit'
                                    value='Crear'
                                    className='btn btn-primary btn-block'
                                />
                            </div>
                        </form>
                        {loading && <p>Cargando...</p>}
                        {error && (
                            <p className='alert alert-danger p2 text-center mt-4'>
                                Error en la creación del producto
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoProducto;
