import * as userController from '../controller/index.js';
import { GetAllSchema } from '../schema/users/getall-users.schema.js';

export default async function userRoutes(fastify, opts) {
    fastify.get('', { ...GetAllSchema }, userController.getAllUsers);
    fastify.get('/:id', userController.getUserByID);
    fastify.patch('/:id', userController.updateUserById);
    fastify.delete('/:id', userController.deleteUserById);
}
