import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
            <Link className=' mr-5' to="/">Home</Link>
            <Link className=' mr-5' to="/login">Login</Link>
            <Link className=' mr-5' to="/register">Register</Link>
        </nav>
    );
};

export default Header;