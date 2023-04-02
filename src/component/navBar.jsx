import React from 'react';
import logo from '../external/logo.png';
const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <h1 className='kp'>Kaif's Portfolio</h1>
        </div>
    );
}

export default NavBar;