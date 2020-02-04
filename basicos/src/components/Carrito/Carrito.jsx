import React from 'react';
import './carrito.css';
import Producto from '../Producto';

const Carrito = ({ carrito, setCarrito }) => (
    <div className='carrito'>
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 && <p>No hay Elementos</p>}
        {carrito.map((producto) => (
            <Producto
                producto={producto}
                carrito={carrito}
                setCarrito={setCarrito}
            />
        ))}
    </div>
);

export default Carrito;
