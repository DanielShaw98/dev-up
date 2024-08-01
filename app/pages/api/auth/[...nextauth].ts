import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id.toString(), // Ensure id is a string
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      console.log('Session Callback', { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string, // Ensure id is a string
        },
      };
    },
    jwt: async ({ token, user }) => {
      console.log('JWT Callback', { token, user });
      if (user) {
        token.id = (user as any).id.toString(); // Ensure id is a string
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
