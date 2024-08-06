import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/authOptions";
import prisma from "../../lib/prisma";

const Profile = async () => {
  // Fetch session data
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    // Redirect to home page if not authenticated
    redirect("/");
  }

  // Fetch user data from the database
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return (
    <div className="mx-32 my-8 h-screen">
      <h1 className="text-3xl font-main text-center mb-6">Profile</h1>
      <h2 className="text-xl mb-4">Details</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Title:</strong> {user?.title}</p>
        <p><strong>Specialty:</strong> {user?.specialty || 'N/A'}</p>
      </div>
    </div>
  );
};

export default Profile;
