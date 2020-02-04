import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
    // Crear listado de productos
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Camisa ReactJs', precio: 50 },
        { id: 2, nombre: 'Camisa VueJs', precio: 40 },
        { id: 3, nombre: 'Camisa Node.js', precio: 30 },
        { id: 4, nombre: 'Camisa Angular', precio: 20 },
    ]);

    // Carrito de compras
    const [carrito, setCarrito] = useState([]);

    const fecha = new Date().getFullYear();

    return (
        <>
            <Header titulo='Tienda virtual' />
            {productos.map((prod) => (
                <Producto
                    producto={prod}
                    productos={productos}
                    addCarrito={setCarrito}
                    carrito={carrito}
                />
            ))}
            <Carrito carrito={carrito} setCarrito={setCarrito} />
            <Footer fecha={fecha} />
        </>
    );
}

export default App;
