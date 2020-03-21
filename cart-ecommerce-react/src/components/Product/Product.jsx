import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BASE_PATH } from '../../utils/constants';
import './Product.scss';

const Product = ({ product }) => {
    return (
        <Col xs={3} className='product'>
            <Card>
                <Card.Img variant='top' src={`${product.image}`} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.extraInfo}</Card.Text>
                    <Card.Text>{product.price} € /ud</Card.Text>
                    <Button>Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
