import React from "react";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div className="p-12">

      {/* 🔥 SEO – Services */}
      <Helmet>
        <title>Nos services – Béton ciré en Île-de-France</title>
        <meta
          name="description"
          content="Application de béton ciré : sols, murs, salles de bains, cuisines, escaliers. Prestations premium en Île-de-France."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/services" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Nos services</h1>
      <p className="mb-4">
        Découvrez nos prestations en béton ciré pour sublimer votre intérieur.
      </p>

    </div>
  );
}

export default Services;
