import { ProjectWithDetails } from "./types/types";
import prisma from "../lib/prisma";
import ProjectCardContainer from "./components/projectCardContainer";

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
      <ProjectCardContainer projects={projects} />
    </div>
  );
}
