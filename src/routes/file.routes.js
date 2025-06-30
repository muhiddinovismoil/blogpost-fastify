export default async function fileRoutes(fastify, opts) {
  fastify.post('/login', async (req, reply) => {
    return { message: 'Logged in!' };
  });
}
