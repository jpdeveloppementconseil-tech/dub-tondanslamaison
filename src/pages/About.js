import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>À propos – JP Développement Conseil</title>
        <meta
          name="description"
          content="Découvrez JP Développement Conseil, spécialiste du béton ciré en Bourgogne et Rhône-Alpes. Expertise, précision et finitions haut de gamme pour vos projets sur mesure."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          À propos de JP Développement Conseil
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Avec plus de 10 ans d’expérience, JP Développement Conseil est
          spécialisé dans la réalisation de surfaces en béton ciré haut de
          gamme, adaptées aux particuliers comme aux professionnels.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nous travaillons uniquement avec des matériaux premium pour garantir
          une durabilité exceptionnelle, des finitions impeccables et un rendu
          esthétique unique.
        </p>
      </div>
    </>
  );
}

export default About;
