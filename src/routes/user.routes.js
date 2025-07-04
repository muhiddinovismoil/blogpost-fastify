import * as userController from '../controller/index.js';
import {
    GetAllSchema,
    GetUserByIdSchema,
    DeleteUserSchema,
    UpdateUserSchema,
} from '../schema/users/index.js';

export default async function userRoutes(fastify, opts) {
    fastify.get('', { ...GetAllSchema }, userController.getAllUsers);
    fastify.get('/:id', { ...GetUserByIdSchema }, userController.getUserByID);
    fastify.patch(
        '/:id',
        { ...DeleteUserSchema },
        userController.updateUserById
    );
    fastify.delete(
        '/:id',
        { ...UpdateUserSchema },
        userController.deleteUserById
    );
}
