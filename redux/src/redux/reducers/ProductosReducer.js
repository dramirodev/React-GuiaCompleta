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

//cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: false,
    loading: false,
    productoEliminar: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true,
            };
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload],
                loading: false,
            };
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true,
            };
        case COMENZAR_DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                productos: action.payload,
                loading: false,
                error: false,
            };
        case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload,
                loading: true,
                error: false,
            };
        case OBTENER_PRODUCTO_ELIMINAR_EXITO:
            return {
                ...state,
                productos: state.productos.filter(
                    (producto) => producto.id !== state.productoEliminar,
                ),
                loading: false,
                error: false,
                productoEliminar: false,
            };
        case OBTENER_PRODUCTO_ELIMINAR_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
}
