import React from "react";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* 🔹 SEO */}
      <Helmet>
        <title>Nos services – Béton ciré en Bourgogne & Rhône-Alpes</title>
        <meta
          name="description"
          content="Découvrez nos prestations en béton ciré : sols, murs, douches à l’italienne, plans de travail, crédences et escaliers. Travail artisanal, finitions soignées et accompagnement sur mesure."
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
        à l’italienne, plans de travail, crédences, escaliers et pièces humides.
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

      {/* ✅ ZONE D’INTERVENTION */}
      <section className="bg-gray-50 py-12 mt-10 rounded-lg">
        <div className="px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Zone d’intervention
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Du Béton dans la Maison intervient pour tous vos projets de
            <strong> béton ciré</strong> (sols, salles de bain, douches à
            l’italienne et créations sur mesure) principalement dans les villes
            et secteurs suivants :
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-gray-800 font-medium">
            <li>• Lyon</li>
            <li>• Mâcon</li>
            <li>• Chalon-sur-Saône</li>
            <li>• Dijon</li>
            <li>• Bourg-en-Bresse</li>
            <li>• Bourgogne – Rhône-Alpes</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6">
            Nous nous déplaçons également sur les secteurs alentours pour étudier
            votre projet. N’hésitez pas à nous contacter pour vérifier la
            faisabilité et obtenir un <strong>devis personnalisé</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
export default Services;