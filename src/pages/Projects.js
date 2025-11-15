import { Helmet } from "react-helmet-async";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Réalisations en béton ciré – JP Développement Conseil</title>
        <meta
          name="description"
          content="Découvrez nos réalisations de béton ciré : sols, salles de bain, cuisines, murs décoratifs et créations sur mesure. Travail haut de gamme en Bourgogne et Rhône-Alpes."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nos réalisations
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Voici quelques projets réalisés pour nos clients, illustrant notre
          savoir-faire et la qualité de nos finitions.
        </p>

        {/* Ici tu peux garder ta galerie existante */}
      </div>
    </>
  );
}

export default Projects;
