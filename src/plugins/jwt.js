import app from '../app.js';

export default async function (fastify, opts) {
    fastify.register(import('@fastify/jwt'), {
        secret: app.config.JWT_SECRET,
    });
    fastify.decorate('authenticate', async function (request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            return reply.code(401).send({ message: 'Unauthorized' });
        }
    });
}
