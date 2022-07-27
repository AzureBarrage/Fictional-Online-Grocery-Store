import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="App-nav">
            <Link to="/">Homepage</Link>
            <Link to="../stores">StoresPage</Link>
            <Link to="../order">OrderPage</Link>
        </nav>
    );
}

export default Navigation;