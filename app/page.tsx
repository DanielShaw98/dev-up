// app/page.tsx
import { PrismaClient, User, File } from '@prisma/client';
import ProjectCard from './components/projectCard'; // Import your ProjectCard component

const prisma = new PrismaClient();

interface ProjectWithDetails {
  id: number;
  title: string;
  description: string;
  name: string | null;
  styles: string | null;
  tools: string | null;
  createdAt: Date;
  updatedAt: Date;
  author: User; // Ensure author is included
  files: File[]; // Ensure files are included
}

export default async function Home() {
  // Fetch data directly within the server component
  const projects: ProjectWithDetails[] = await prisma.project.findMany({
    include: {
      author: true, // Include author details
      files: true,  // Include files details
    },
  });

  return (
    <div className="mx-32 my-8">
      <h1 className="text-3xl font-main text-center mb-6">Feed</h1>
      <div className="justify-center flex-wrap space-y-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            name={project.name || 'N/A'}
            styles={project.styles || 'N/A'}
            tools={project.tools || 'N/A'}
            author={project.author}
            createdAt={project.createdAt}
            files={project.files || []}
          />
        ))}
      </div>
    </div>
  );
}
