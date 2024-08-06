import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/authOptions";
import prisma from "../../lib/prisma";
import Link from "next/link";

const Projects = async () => {
  // Fetch session data
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    // Redirect to home page if not authenticated
    redirect("/");
  }

  // Fetch user projects from the database
  const projects = await prisma.project.findMany({
    where: { author: { email: session.user.email } },
    include: { files: true },
  });

  return (
    <div className="mx-32 my-8 h-screen">
      <div className="flex flex-row justify-center items-center space-x-8 mb-6">
        <h1 className="text-3xl font-main text-center">Projects</h1>
        <div className="relative group">
          <Link
            href="/projects/add-project"
            className="px-3 pb-2 font-thin text-4xl transition-all duration-200 ease-in-out text-white hover:text-orange border border-white rounded-lg hover:rounded-3xl hover:border-orange"
          >
            +
          </Link>
          <span className="absolute font-body left-full top-1/2 transform -translate-y-1/2 ml-0 pt-1 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300 ease-in-out whitespace-nowrap">
            Add Project
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
