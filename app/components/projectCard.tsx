"use client";

import React, { useRef, useEffect } from "react";
import { User, File } from "@prisma/client";
import { format } from 'date-fns';
import Link from "next/link";

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
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Scroll the card into view when expanded
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [isExpanded]);

  // Handle card click for expansion only
  const handleCardClick = () => {
    onToggleExpand();
  };

  return (
    <div
      ref={cardRef}
      className={`relative shadow-md rounded-lg p-6 mb-4 border border-white transition-all duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'col-span-1 row-span-1 xs:col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 h-auto' : 'col-span-1'
      }`}
      onClick={handleCardClick}
    >
      <h2 className={`text-2xl font-semibold font-sub mb-2 ${isExpanded ? '' : 'truncate'}`}>{title}</h2>
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
      <Link href={`/projects/${id}`}>
        <p
          className={`absolute bottom-4 right-4 text-blue-500 hover:underline ${
            isExpanded ? 'block' : 'hidden'
          }`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent the card click event from firing
            alert("You need to sign in to view this page"); // Alert message to login
          }}
        >
          View Details
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
