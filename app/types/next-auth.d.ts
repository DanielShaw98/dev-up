import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username?: string | null;
      title?: string | null;
      specialty?: string | null;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    username?: string | null;
    title?: string | null;
    specialty?: string | null;
  }
}
