import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      title: 'Application de béton ciré',
      description: 'Pour sols, murs, escaliers, cuisines et salles de bains. Chaque application est unique : teinte, texture, finition.'
    },
    {
      title: 'Rénovation',
      description: 'Nous redonnons vie à vos surfaces existantes sans tout casser : recouvrement, lissage, harmonisation.'
    },
    {
      title: 'Conseil & accompagnement',
      description: 'Étude personnalisée, conseils techniques et esthétiques pour un rendu harmonieux et durable.'
    }
  ];

  return (
    <section className="p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default Services;
