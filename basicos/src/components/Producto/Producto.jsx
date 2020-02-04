import React from 'react';

const Producto = ({ producto, productos, addCarrito, carrito, setCarrito }) => {
    const { id, nombre, precio } = producto;
    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter((producto) => producto.id === id);
        addCarrito([...carrito, ...producto]);
    };
    // Eliminar producto
    const eliminarProducto = (id) => {
        const productos = carrito.filter((producto) => producto.id !== id);
        setCarrito(productos);
    };
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: {precio}</p>
            {productos?.length ? (
                <button type='button' onClick={() => seleccionarProducto(id)}>
                    Comprando
                </button>
            ) : (
                <button type='button' onClick={() => eliminarProducto(id)}>
                    Eliminar
                </button>
            )}
        </div>
    );
};

export default Producto;
