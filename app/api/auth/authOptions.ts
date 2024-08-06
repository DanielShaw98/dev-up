import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../lib/prisma";

const githubClientId = process.env.GITHUB_ID!;
const githubClientSecret = process.env.GITHUB_SECRET!;
const googleClientId = process.env.GOOGLE_CLIENT_ID!;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!;
const nextAuthSecret = process.env.NEXTAUTH_SECRET!;

const authOptions: NextAuthOptions = {
  secret: nextAuthSecret,
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        if (user) {
          // Upsert user in the database
          await prisma.user.upsert({
            where: { email: user.email! },
            update: {
              name: user.name || "",
              username: user.email?.split('@')[0] || "",
            },
            create: {
              email: user.email!,
              name: user.name || "",
              username: user.email?.split('@')[0] || "",
              title: 'DEV',
              specialty: null,
            },
          });
          return true; // Allow sign-in to proceed
        }
        return false; // Deny sign-in if user is undefined
      } catch (error) {
        console.error("Error upserting user:", error);
        return false;
      }
    },
    async session({ session }) {
      if (session.user) {
        const user = await prisma.user.findUnique({
          where: { email: session.user.email! },
        });
        if (user) {
          session.user.id = user.id.toString();
          session.user.name = user.name || "";
          session.user.username = user.username || "";
          session.user.title = user.title || 'DEV';
          session.user.specialty = user.specialty || '';
        }
      }
      return session;
    },
  },
};

export default authOptions;
