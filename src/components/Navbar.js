import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-black/80 shadow-md'
          : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div>
          <Link to="/" className="font-bold text-xl">
            JP Développement Conseil
          </Link>
          <div className="text-cuivre text-sm">by Du Béton dans la Maison</div>
        </div>

        {/* Bouton mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden focus:outline-none"
        >
          <span
            className={`block w-8 h-1 bg-cuivre rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-3' : ''
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-cuivre rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-cuivre rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-3' : ''
            }`}
          ></span>
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8">
          {['Accueil', 'Réalisations', 'Services', 'À propos', 'Contact'].map(
            (item, index) => {
              const paths = ['/', '/projects', '/services', '/about', '/contact'];
              return (
                <Link
                  key={index}
                  to={paths[index]}
                  className="relative group"
                >
                  <span className="hover:text-cuivre transition">{item}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cuivre transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            }
          )}
        </div>
      </div>

      {/* Menu mobile animé */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          menuOpen
            ? 'max-h-64 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-4'
        } bg-black/90 text-center`}
      >
        <div className="py-4 space-y-3">
          {['Accueil', 'Réalisations', 'Services', 'À propos', 'Contact'].map(
            (item, index) => {
              const paths = ['/', '/projects', '/services', '/about', '/contact'];
              return (
                <Link
                  key={index}
                  to={paths[index]}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-cuivre transition"
                >
                  {item}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

