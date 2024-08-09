"use client";

import React, { useState } from "react";
import ProjectCard from "./projectCard";
import { User, File } from "@prisma/client";

interface ProjectCardContainerProps {
  projects: {
    id: number;
    title: string;
    description: string;
    name: string | null;
    styles: string | null;
    tools: string | null;
    createdAt: Date;
    updatedAt: Date;
    author: User;
    files: File[];
  }[];
}

const ProjectCardContainer: React.FC<ProjectCardContainerProps> = ({ projects }) => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleToggleExpand = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          name={project.name || 'N/A'}
          styles={project.styles || 'N/A'}
          tools={project.tools || 'N/A'}
          author={project.author}
          createdAt={project.createdAt}
          files={project.files || []}
          isExpanded={expandedCardId === project.id}
          onToggleExpand={() => handleToggleExpand(project.id)}
        />
      ))}
    </div>
  );
};

export default ProjectCardContainer;
