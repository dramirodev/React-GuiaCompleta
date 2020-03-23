import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/';

const Products = ({ products, addProductCart }) => {
    return (
        <Container>
            <Row>
                {products.map((producto, index) => {
                    return (
                        <Product
                            product={producto}
                            key={`${producto.id}_${index}`}
                            addProductCart={addProductCart}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default Products;
