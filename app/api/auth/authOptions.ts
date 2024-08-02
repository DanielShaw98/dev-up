import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;

console.log('Github Client ID:', githubClientId);
console.log('Google Client ID:', googleClientId);
console.log('NextAuth Secret:', nextAuthSecret);

const authOptions: NextAuthOptions = {
  secret: nextAuthSecret,
  providers: [
    GithubProvider({
      clientId: githubClientId || "",
      clientSecret: githubClientSecret || "",
    }),
    GoogleProvider({
      clientId: googleClientId || "",
      clientSecret: googleClientSecret || "",
    }),
  ],
};

export default authOptions;
