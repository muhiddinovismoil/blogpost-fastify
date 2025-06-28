export default async function BlogRoutes(fastify, opts) {
  fastify.get('/');
  fastify.get('/:id');
  fastify.post('/');
  fastify.patch('/:id');
  fastify.delete('/:id');
}
