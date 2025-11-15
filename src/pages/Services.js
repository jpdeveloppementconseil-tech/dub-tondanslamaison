import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services en béton ciré – JP Développement Conseil</title>
        <meta
          name="description"
          content="Applications de béton ciré pour sols, murs, salles de bain, cuisines, escaliers et surfaces sur mesure. Prestations premium en Bourgogne et Rhône-Alpes."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Nos services</h1>

        <ul className="space-y-4 text-lg text-gray-700">
          <li>✔ Sols en béton ciré</li>
          <li>✔ Murs décoratifs</li>
          <li>✔ Salles de bain et douches italiennes</li>
          <li>✔ Plan de travail et cuisine</li>
          <li>✔ Escaliers en béton ciré</li>
          <li>✔ Rénovation & reprise de surfaces</li>
        </ul>
      </div>
    </>
  );
}

export default Services;

