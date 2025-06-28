export default async function AuthRoutes(fastify, opts) {
  fastify.post('/signup');
  fastify.post('/signin');
  fastify.get('/me');
}
