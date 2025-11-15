import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <Helmet>
        <title>L’élégance du béton ciré – JP Développement Conseil</title>
        <meta
          name="description"
          content="Béton ciré haut de gamme sur mesure en Bourgogne et Rhône-Alpes. Sols, murs, salles de bain, cuisines – prestations professionnelles par JP Développement Conseil."
        />
      </Helmet>

      <section
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "contrast(1.05) brightness(0.9)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-xl max-w-lg mx-auto mt-40 mb-32 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            L’élégance du béton ciré
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-white/90 text-center text-lg md:text-xl mb-6 drop-shadow"
          >
            Sur mesure pour vos espaces en{" "}
            <span className="text-cuivre font-semibold">Bourgogne</span> et{" "}
            <span className="text-cuivre font-semibold">Rhône-Alpes</span>
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="inline-block bg-cuivre px-6 py-3 font-semibold rounded-md shadow-lg hover:bg-cuivre/90 transition"
          >
            Demander un devis
          </motion.a>
        </motion.div>

        {/* Effet zoom lent du fond */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.9) contrast(1.05)",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "easeOut" }}
        ></motion.div>
      </section>
    </>
  );
}

export default Hero;
