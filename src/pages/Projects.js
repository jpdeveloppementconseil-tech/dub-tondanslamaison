import React from "react";
import { Helmet } from "react-helmet-async";

function Projects() {
  const photos = Array.from({ length: 25 }, (_, i) => `/assets/realisations/photo${i + 1}.jpg`);

  return (
    <div className="p-8">

      <Helmet>
        <title>Réalisations – Béton ciré</title>
        <meta
          name="description"
          content="Découvrez nos réalisations en béton ciré : sols, murs, cuisines, salles de bain et escaliers."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/realisations" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-center">Nos réalisations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Réalisation béton ciré ${index + 1}`}
            className="w-full h-64 object-cover rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
