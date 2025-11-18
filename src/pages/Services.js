import React from "react";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      
      {/* 🔹 SEO */}
      <Helmet>
        <title>Nos services – Béton ciré en Île-de-France</title>
        <meta
          name="description"
          content="Découvrez nos prestations en béton ciré : sols, murs, douches italiennes, cuisines et escaliers. Travail artisanal, finitions haut de gamme et accompagnement personnalisé."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/services" />
      </Helmet>

      {/* 🔹 TITRE */}
      <h1 className="text-4xl font-bold mb-6">Nos services</h1>

      {/* 🔹 PARAGRAPHE 1 */}
      <p className="text-lg mb-8">
        Avec une expertise reconnue dans l’application du béton ciré, nous
        transformons vos espaces en leur donnant une identité moderne, élégante
        et durable. Chaque surface est travaillée avec précision afin d’obtenir
        une finition parfaitement lisse, uniforme et résistante.
      </p>

      {/* 🔹 PARAGRAPHE 2 */}
      <p className="text-lg mb-8">
        Nous intervenons sur une large variété de supports : sols, murs, douches
        italiennes, plans de travail, crédences, escaliers et pièces humides.
        Le béton ciré permet de créer une continuité visuelle sans joints,
        facilitant l’entretien tout en apportant un aspect haut de gamme à votre
        intérieur.
      </p>

      {/* 🔹 PARAGRAPHE 3 */}
      <p className="text-lg mb-8">
        Soucieux de la qualité et de la satisfaction de nos clients, nous
        proposons un accompagnement sur mesure à chaque étape du projet. Du
        choix des teintes aux conseils techniques, nous vous guidons pour vous
        offrir un résultat durable, esthétique et parfaitement adapté à votre
        style de vie.
      </p>
    </div>
  );
}

export default Services;

