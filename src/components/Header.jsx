import React from 'react';
import { Link } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import Login from './buttons/Login';
import Logout from './buttons/Logout';
import Profile from './Profile';

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                        <Link className="navbar-brand fs-1 fw-bold mx-auto" to="/">eFon</Link>

                    </div>
                    <CartBtn />
                    <Profile />
                    <Login />
                    <Logout />
                </div>
            </nav>
        </>

    );
}

export default Header;