"use client";

import React, { useRef, useEffect } from "react";
import { User, File } from "@prisma/client";
import { format } from 'date-fns';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  name?: string;
  styles?: string;
  tools?: string;
  author: User;
  createdAt: Date;
  files?: File[];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ProjectCard = ({
  id,
  title,
  description,
  name,
  styles,
  tools,
  author,
  createdAt,
  files = [],
  isExpanded,
  onToggleExpand
}: ProjectCardProps) => {
  return (
    <div
      className={`shadow-md rounded-lg p-6 mb-4 border border-white transition-all duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'col-span-1 row-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 h-auto' : 'col-span-1'
      }`}
      onClick={onToggleExpand}
    >
      <h2 className="text-2xl font-semibold font-sub mb-2">{title}</h2>
      <p className={`text-gray-700 font-body mb-4 ${isExpanded ? '' : 'truncate'}`}>{description}</p>
      <div className={`space-y-4 ${isExpanded ? 'block' : 'overflow-hidden'}`}>
        <div>
          <h3 className="font-semibold font-sub">Name:</h3>
          <p className={`text-gray-600 font-body ${isExpanded ? '' : 'truncate'}`}>{name || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Styles:</h3>
          <p className={`text-gray-600 font-body ${isExpanded ? '' : 'truncate'}`}>{styles || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Tools:</h3>
          <p className={`text-gray-600 font-body ${isExpanded ? '' : 'truncate'}`}>{tools || 'N/A'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Author:</h3>
          <p className={`text-gray-600 font-body ${isExpanded ? '' : 'truncate'}`}>{author.username || 'Unknown'}</p>
        </div>
        <div>
          <h3 className="font-semibold font-sub">Created At:</h3>
          <p className={`text-gray-600 font-body ${isExpanded ? '' : 'truncate'}`}>{format(new Date(createdAt), 'MM/dd/yyyy')}</p>
        </div>
        {files.length > 0 && (
          <div>
            <h3 className="font-semibold font-sub">Files:</h3>
            <ul className={`list-disc list-inside text-gray-600 ${isExpanded ? '' : 'truncate'}`}>
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
