export default async function UserRoutes(fastify, opts) {
  fastify.get('/');
  fastify.get('/:id');
  fastify.patch('/:id');
  fastify.delete('/:id');
}
