import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_PRODUCTOS_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    OBTENER_PRODUCTO_ELIMINAR_EXITO,
    OBTENER_PRODUCTO_ELIMINAR_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    OBTENER_PRODUCTO_EDITAR_EXITO,
    OBTENER_PRODUCTO_EDITAR_ERROR,
} from '../types';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            await clienteAxios.post('/productos', producto);
            dispatch(agregarProductoExito(producto));

            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success',
            );
        } catch (error) {
            dispatch(agregarProductoError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error intentalo de nuevo',
            });
        }
    };
}

export function descargarTodosProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try {
            const productos = await clienteAxios.get('/productos');
            dispatch(descargarProductosExito(productos.data));
        } catch (error) {
            dispatch(descargarProductosError(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error en la conexión del servidor' + error,
            });
        }
    };
}

export function eliminarProductoAction(id) {
    return async (dispatch) => {
        dispatch(eliminarProducto(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        } catch {
            dispatch(eliminarProductoEroor(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error en la conexión del servidor',
            });
        }
    };
}

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(obtenerProductoAction(producto));
    };
}

export const obtenerProductoAction = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto,
});

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
});
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
});

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
});
const descargarProductosExito = (productos) => ({
    type: COMENZAR_DESCARGA_PRODUCTOS_EXITO,
    payload: productos,
});

const descargarProductosError = (estado) => ({
    type: COMENZAR_DESCARGA_PRODUCTOS_ERROR,
    payload: estado,
});

const eliminarProducto = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id,
});

const eliminarProductoExito = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR_EXITO,
});

const eliminarProductoEroor = (estado) => {
    return {
        type: OBTENER_PRODUCTO_ELIMINAR_ERROR,
        payload: estado,
    };
};
