import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
  console.log("Prisma client instantiated in production mode.");
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
    console.log("Prisma client instantiated in development mode.");
  }
  prisma = global.prisma;
  console.log("Using global Prisma client in development mode.");
}

export default prisma;
