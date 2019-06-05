import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="text-center"><Link to="/">B Dashboard</Link></h1>
        </header>
    )
}

export default Header;