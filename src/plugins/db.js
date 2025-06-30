import fp from 'fastify-plugin';
import { PrismaClient } from '@prisma/client';

async function prismaPlugin(fastify, options) {
  if (!fastify.hasDecorator('prisma')) {
    const prisma = new PrismaClient();
    fastify.decorate('prisma', prisma);

    fastify.addHook('onClose', async (instance, done) => {
      await instance.prisma.$disconnect();
      done();
    });

    console.log('✅ Prisma has been decorated and is ready to use.');
  } else {
    console.log('ℹ️ Prisma is already decorated.');
  }
}

export default fp(prismaPlugin);
