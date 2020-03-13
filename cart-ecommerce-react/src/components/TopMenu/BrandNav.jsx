import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponet as Logo } from '../../assets/img/logo.svg';

export default function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
            <h2>La casa de los Helados</h2>
        </Navbar.Brand>
    );
}
