import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">Your Name</h1>
        <div>
          <Link to="/" className="text-white me-3">About</Link>
          <Link to="/projects" className="text-white me-3">Projects</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
