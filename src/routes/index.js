import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';
import blogsRoutes from './blogs.routes.js';
import fileRoutes from './file.routes.js';

export default async function mainRoutes(fastify, opts) {
  fastify.register(authRoutes, { prefix: '/auth' });
  fastify.register(blogsRoutes, { prefix: '/blogs' });
  fastify.register(userRoutes, { prefix: '/users' });
  fastify.register(fileRoutes, { prefix: '/files' });
}
