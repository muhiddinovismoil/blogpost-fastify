export default async function userRoutes(fastify, opts) {
  fastify.post('/login', async (req, reply) => {
    return { message: 'Logged in!' };
  });
}
