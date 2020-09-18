import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkSyle} to="/">Home</Link> | <Link style={linkSyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
}

const linkSyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
