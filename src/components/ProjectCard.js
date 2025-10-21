import React from 'react';

function ProjectCard({ title, image }) {
  return (
    <div className="overflow-hidden rounded shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 bg-anthracite text-white text-center">{title}</div>
    </div>
  );
}

export default ProjectCard;
