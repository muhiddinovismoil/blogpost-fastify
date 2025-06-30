import * as userController from '../controller/index.js';

export default async function userRoutes(fastify, opts) {
  fastify.get('/', userController.getAllUsers);
  fastify.get('/:id', userController.getUserById);
  fastify.patch('/:id', userController.updateUser);
  fastify.delete('/:id', userController.deleteUser);
}
