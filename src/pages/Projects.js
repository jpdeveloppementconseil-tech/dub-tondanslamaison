import React from 'react';

const projects = [
  { image: '/assets/realisations/photo1.jpg', title: 'Meuble et credence sur mesure' },
  { image: '/assets/realisations/photo2.jpg', title: 'Sol béton ciré' },
  { image: '/assets/realisations/photo3.jpg', title: 'Show-room robes de mariées - Lyon' },
  { image: '/assets/realisations/photo4.jpg', title: 'Sol béton ciré Coton - Lyon' },
  { image: '/assets/realisations/photo5.jpg', title: 'Margelles de piscine et plage de piscine' },
  { image: '/assets/realisations/photo6.jpg', title: 'Sol show-room - Lyon' },
  { image: '/assets/realisations/photo7.jpg', title: 'Sol de bureau' },
  { image: "/assets/realisations/photo8.jpg", title: "Terrasse d'appartement - Narbonne" },
  { image: "/assets/realisations/photo9.jpg", title: "Sol en partie d'une grande villa - Est" },
  { image: '/assets/realisations/photo10.jpg', title: 'Salle de bain design – Chalon' },
  { image: '/assets/realisations/photo11.jpg', title: 'Vasque de suite parentale sur mesure - Ste Maxime' },
  { image: '/assets/realisations/photo12.jpg', title: 'Plan de travail et crédence' },
  { image: '/assets/realisations/photo13.jpg', title: 'Coin cuisine Everest' },
  { image: '/assets/realisations/photo14.jpg', title: 'Escalier moderne - Drôme' },
  { image: "/assets/realisations/photo15.jpg", title: "Partie d'un sol avec les collègues - Drôme" },
  { image: '/assets/realisations/photo16.jpg', title: 'Murs de SDB - Saône et Loire' },
  { image: '/assets/realisations/photo17.jpg', title: 'Douche complète et tablette sur mesure' },
  { image: "/assets/realisations/photo18.jpg", title: "Vue aérienne d'une pièce atypique avec banc arrondi" },
  { image: "/assets/realisations/photo19.jpg", title: "Show-room d'une maison de vins - Saône et Loire" },
  { image: '/assets/realisations/photo20.jpg', title: 'Plage de piscine en cours de réalisation' },
  { image: '/assets/realisations/photo21.jpg', title: 'Sol en cours de finition' },
  { image: '/assets/realisations/photo22.jpg', title: 'Vasque sur-mesure - Bretagne' },
  { image: '/assets/realisations/photo23.jpg', title: 'Meuble vasque avec rangements sur-mesure' },
  { image: "/assets/realisations/photo24.jpg", title: "Coin douche avec tablettes d'angle sur-mesure" },
  { image: '/assets/realisations/photo25.jpg', title: 'Mise en oeuvre de la première couche de mortier fin appliqué à la spatule crantée (effet pouvant être reproduit en murs pour une finition unique)' },
];

function Projects() {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Réalisations</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
            />
            <div className="bg-gray-800 text-white text-center py-2">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

