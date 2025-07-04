import * as userController from '../controller/index.js';
import { GetAllSchema, GetUserByIdSchema } from '../schema/users/index.js';

export default async function userRoutes(fastify, opts) {
    fastify.get('', { ...GetAllSchema }, userController.getAllUsers);
    fastify.get('/:id', { ...GetUserByIdSchema }, userController.getUserByID);
    fastify.patch('/:id', userController.updateUserById);
    fastify.delete('/:id', userController.deleteUserById);
}
