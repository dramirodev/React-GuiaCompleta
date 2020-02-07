import React from 'react';

const Producto = React.memo(
    ({ producto }) => {
        const { id, nombre, precio } = producto;
        return (
            <tr>
                <td>{nombre}</td>
                <td>{precio} €</td>
                <td>Acciones</td>
            </tr>
        );
    },
    (prevProps, nextProps) => {
        return prevProps.producto.id === nextProps.producto.id;
    },
);

export default Producto;
