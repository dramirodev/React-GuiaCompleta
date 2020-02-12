import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    eliminarProductoAction,
    obtenerProductoAction,
} from '../redux/actions/ProductosActions';

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
const Producto = ({ producto }) => {
    const { id, nombre, precio } = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    const consfirmarEliminarProducto = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.value) {
                dispatch(eliminarProductoAction(id));
            }
        });
    };

    const redireccionEditar = (producto) => {
        dispatch(obtenerProductoAction(producto));
        history.push(`/productos/editar/${producto.id}`);
    };

    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td>{precio} €</td>
            <td className='acciones'>
                <button
                    type='button'
                    onClick={() => redireccionEditar(producto)}
                    className='btn btn-primary mr-2'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => consfirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;
