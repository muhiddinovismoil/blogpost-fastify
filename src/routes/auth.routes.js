export default async function authRoutes(fastify, opts) {
  fastify.post('/login', async (req, reply) => {
    return { message: 'Logged in!' };
  });
}
