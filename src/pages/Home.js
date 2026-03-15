import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main>

      <Helmet>
        <title>Béton ciré à Mâcon | Sols, salle de bain et douche italienne</title>
        <meta
          name="description"
          content="Artisan spécialisé dans le béton ciré à Mâcon. Réalisation de sols, salles de bain et douches italiennes en béton ciré sur mesure. Devis gratuit."
        />
      </Helmet>

      <Hero />

    </main>
  );
}