import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/';

const Products = ({ products }) => {
    return (
        <Container>
            <Row>
                {products.map((producto, index) => {
                    return (
                        <Product
                            product={producto}
                            key={`${producto.id}_${index}`}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default Products;
