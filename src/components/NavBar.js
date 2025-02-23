import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AZ CLOTHES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/BUZOS">BUZOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/REMERAS">REMERAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/PANTALONES">PANTALONES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/ZAPATILLAS">ZAPATILLAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias/accesorios">ACCESORIOS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
