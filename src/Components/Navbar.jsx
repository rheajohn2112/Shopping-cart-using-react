import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = ({placeholder ,setSearch}) => {
    return (
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
                <li><input className="ss" type="text" placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
