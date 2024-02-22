import React from 'react';
import Navigation from '../layout/Navigation';

const Header = () => {
    return (
        <div className='header'>
            <img src='/images/LOGO.svg' alt="logo"/>
            <Navigation />
        </div>
    );
};

export default Header;