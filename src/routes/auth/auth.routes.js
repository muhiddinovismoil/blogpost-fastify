export default async function (fastify, opts) {
  fastify.post('/signup');
  fastify.post('/signin');
  fastify.get('/me');
}
