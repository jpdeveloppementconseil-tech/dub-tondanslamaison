import React from 'react';

function Footer() {
  return (
    <footer className="bg-anthracite text-white p-6 text-center">
      
      {/* Coordonnées */}
      <div className="text-base">
        📞 06 98 55 66 48 &nbsp;|&nbsp; ✉️ jpdeveloppementconseil@gmail.com
      </div>

      {/* Instagram */}
      <div className="mt-2">
        Instagram :{" "}
        <a
          href="https://www.instagram.com/dbdlm71"
          target="_blank"
          rel="noreferrer"
          className="text-cuivre hover:underline"
        >
          dbdlm71
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-2 text-xs text-gray-400">
        © 2025 JP Développement Conseil
      </div>

    </footer>
  );
}

export default Footer;
