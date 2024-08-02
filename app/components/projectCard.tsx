// components/ProjectCard.tsx
import React from 'react';
import { User, File } from '@prisma/client';

interface ProjectCardProps {
  title: string;
  description: string;
  name?: string;
  styles?: string;
  tools?: string;
  author: User;
  createdAt: Date;
  files?: File[];
}

const ProjectCard = ({
  title,
  description,
  name,
  styles,
  tools,
  author,
  createdAt,
  files = [],
}: ProjectCardProps) => {
  return (
    <div className="shadow-md rounded-lg p-6 mb-4 border border-white">
      <h2 className="text-2xl font-semibold font-sub mb-2">{title}</h2>
      <p className="text-gray-700 font-body mb-4">{description}</p>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold font-sub">Name:</h3>
          <p className="text-gray-600 font-body">{name || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Styles:</h3>
          <p className="text-gray-600 font-body">{styles || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Tools:</h3>
          <p className="text-gray-600 font-body">{tools || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Author:</h3>
          <p className="text-gray-600 font-body">{author.username || 'Unknown'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Created At:</h3>
          <p className="text-gray-600 font-body">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
        {files.length > 0 && (
          <div>
            <h3 className="font-semibold font-sub">Files:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {files.map((file, index) => (
                <li key={index}>
                  {file.url || 'Unnamed File'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
