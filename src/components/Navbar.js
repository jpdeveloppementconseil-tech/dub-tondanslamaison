import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-anthracite text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">JP Développement Conseil</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-cuivre">Accueil</Link>
        <Link to="/projects" className="hover:text-cuivre">Réalisations</Link>
        <Link to="/services" className="hover:text-cuivre">Services</Link>
        <Link to="/about" className="hover:text-cuivre">À propos</Link>
        <Link to="/contact" className="hover:text-cuivre">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
