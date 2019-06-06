import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1><Link to="/">B</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Employees</Link></li>
                    <li><Link to="/titles">Titles Rank</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;