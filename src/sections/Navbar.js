import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="my-name">Chris Mollica</h1>
            <div className="navbar-sections">
                <a href="#about-section">About</a>
                <a href="#project-section">Projects</a>
                <a href="#contact-section">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar