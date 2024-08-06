import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import authOptions from "../../api/auth/authOptions";

const AddProject = async () => {
  // Fetch session data
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    // Redirect to the home page if not authenticated
    redirect("/");
  }

  // Render the page if authenticated
  return (
    <div className="mx-32 my-8 h-screen">
      <h1 className="text-3xl font-main text-center mb-6">Add Project</h1>
    </div>
  );
};

export default AddProject;
