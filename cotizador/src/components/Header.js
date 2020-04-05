import React from 'react';
import { TextoHeader, ContenedorHeader } from '../utils/styles';

const Header = ({ titulo }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
};

export default Header;
