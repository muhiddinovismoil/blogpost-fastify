import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';

async function prismaPlugin(fastify, options) {
  const prisma = new PrismaClient();
  fastify.addHook('onClose', async (instance, done) => {
    await prisma.$disconnect();
    done();
  });
  fastify.decorate('prisma', prisma);
}

export default fp(prismaPlugin);
