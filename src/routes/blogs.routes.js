export default async function blogsRoutes(fastify, opts) {
  fastify.post('/login', async (req, reply) => {
    return { message: 'Logged in!' };
  });
}
