import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className='navbar-wrapper'>
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdJpvpgr0ex8D_llrc9QSKmyUR5q8Zpd5EQ&usqp=CAU" alt="Logo" />
            </div>
            <div className="left-links">
                <Link to="/">Program</Link>
                <Link to="/hire">Hire from us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/internship">Internship</Link>
                <Link to="/internship" className='orange-round-button'>Get Started</Link>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
