import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <Link to="/" className="logo">
                    <span className="symbol">
                        <img src="/images/logo.svg" alt="" />
                    </span>
                    <span className="title">Phantom</span>
                </Link>
                <nav>
                    <ul>
                        <li><a href="#menu">Menu</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};


export default Header;
