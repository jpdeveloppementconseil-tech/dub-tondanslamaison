import React from 'react';

function ServiceCard({ title, description }) {
  return (
    <div className="bg-beton p-6 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
