import React from 'react';
import './Header.scss';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo tweeter' />
            <h1>Tweets Simulator</h1>
        </div>
    );
};

export default Header;
