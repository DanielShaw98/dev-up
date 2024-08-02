import React from "react";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/authOptions";
import ClientNavbar from "./clientNavbar";

const ServerNavbar = async () => {
  const session = await getServerSession(authOptions);

  return <ClientNavbar session={session} />;
};

export default ServerNavbar;
