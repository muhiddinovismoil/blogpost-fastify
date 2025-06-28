export default async function (fastify, opts) {
  fastify.get('/');
  fastify.get('/:id');
  fastify.post('/');
  fastify.patch('/:id');
  fastify.delete('/:id');
}
