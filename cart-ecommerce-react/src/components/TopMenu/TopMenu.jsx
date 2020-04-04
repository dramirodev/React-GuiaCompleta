import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Cart from '../Cart';

import './TopMenu.scss';
export default function TopMenu({ productCart, getProductsCart, productos }) {
    return (
        <Navbar bg='dark' variant='dark' className='top-menu'>
            <Container fluid='lg'>
                <BrandNav />
                {/* <MenuNav /> */}
                <Cart
                    productCart={productCart}
                    getProductsCart={getProductsCart}
                    productos={productos}
                />
            </Container>
        </Navbar>
    );
}

function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
            <h2>La casa de los Helados</h2>
        </Navbar.Brand>
    );
}

// function MenuNav() {
//     return (
//         <Nav className='mr-auto'>
//             <Nav.Link>Aperitivos</Nav.Link>
//             <Nav.Link>Helados</Nav.Link>
//             <Nav.Link>Mascotas</Nav.Link>
//         </Nav>
//     );
// }
