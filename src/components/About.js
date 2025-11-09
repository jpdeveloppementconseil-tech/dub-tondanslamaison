import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-neutral-100 text-neutral-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
  src={`${process.env.PUBLIC_URL}/images/about.jpg`}
  alt="Salle de bain moderne avec robinet en laiton et mur en béton ciré"
  className="rounded-2xl shadow-lg"
/>



        </motion.div>

        {/* Texte droite */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cuivre">
            À propos
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
  Fort de plus de 15 ans d’expérience dans la rénovation et la décoration intérieure, 
  <strong>JP Développement Conseil</strong> accompagne particuliers et professionnels 
  dans la transformation de leurs espaces de vie ou de travail.  
  <br /><br />
  Spécialisée dans l’utilisation du <strong>béton ciré</strong> et d’enduits décoratifs haut de gamme, 
  notre entreprise met en avant la matière brute comme vecteur de style, d’élégance et de durabilité.  
  Chaque projet est conçu sur mesure, en tenant compte de vos besoins, de votre budget 
  et de l’identité de votre lieu.  
  <br /><br />
  Notre exigence : un travail soigné, des finitions irréprochables et une écoute attentive 
  à chaque étape, de la conception à la réalisation.  
  <br /><br />
  Que vous souhaitiez moderniser une salle de bain, sublimer une cuisine ou créer un espace 
  contemporain unique, nous mettons notre savoir-faire au service de vos envies.  
  <br /><br />
  <em>(Transformer la matière en émotion, c’est notre passion.)</em>
</p>

        </motion.div>
      </div>
    </section>
  );
}

export default About;

