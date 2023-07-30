import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <NavLink className="navbar-brand" to="/">UMSApp</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
            <Link to="/users/add" className="btn btn-outline-light">Add User</Link>
        </nav>
    );
}

export default NavBar;