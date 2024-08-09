import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import authOptions from "../../api/auth/authOptions";
import prisma from "../../../lib/prisma";
import { User, File } from "@prisma/client";
import { format } from "date-fns";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    name?: string | null;
    styles?: string | null;
    tools?: string | null;
    createdAt: Date;
    updatedAt: Date;
    author: User;
    files?: File[];
  };
}

const ProjectDetail = async ({ params }: { params: { id: string } }) => {
    // Fetch session data
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      // Redirect to home page if not authenticated
      redirect("/");
    }

  const project = await prisma.project.findUnique({
    where: { id: Number(params.id) },
    include: {
      author: true,
      files: true,
    },
  });

  if (!project) {
    return <div>Project not found</div>; // Handle not found case
  }

  return (
    <div className="mx-32 my-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="space-y-4 mb-6">
        <div>
          <h2 className="font-semibold">Name:</h2>
          <p>{project.name || 'N/A'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Styles:</h2>
          <p>{project.styles || 'N/A'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Tools:</h2>
          <p>{project.tools || 'N/A'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Author:</h2>
          <p>{project.author.username || 'Unknown'}</p>
        </div>
        <div>
          <h2 className="font-semibold">Created At:</h2>
          <p>{format(new Date(project.createdAt), 'MM/dd/yyyy')}</p>
        </div>
        {project.files && project.files.length > 0 && (
          <div>
            <h2 className="font-semibold">Files:</h2>
            <ul>
              {project.files.map((file, index) => (
                <li key={index}>{file.url || 'Unnamed File'}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
