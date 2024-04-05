// src/app/Project.tsx

import React from 'react';

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Project: React.FC<ProjectData> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4 max-w-xs w-full">
      {/* Image will only be shown if provided */}
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-4 inline-block">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
