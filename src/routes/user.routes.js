import * as userController from '../controller/index.js';
import { authMiddleware } from '../middleware/auth.guard.js';
import {
    GetAllSchema,
    GetUserByIdSchema,
    DeleteUserSchema,
    UpdateUserSchema,
} from '../schema/users/index.js';

export default async function userRoutes(fastify, opts) {
    fastify.get(
        '',
        { preHandler: [authMiddleware], ...GetAllSchema },
        userController.getAllUsers
    );
    fastify.get(
        '/me',
        { preHandler: [authMiddleware], ...GetUserByIdSchema },
        userController.getMe
    );
    fastify.get(
        '/:id',
        { preHandler: [authMiddleware], ...GetUserByIdSchema },
        userController.getUserByID
    );
    fastify.patch(
        '/:id',
        { preHandler: [authMiddleware], ...UpdateUserSchema },
        userController.updateUserById
    );
    fastify.delete(
        '/:id',
        { preHandler: [authMiddleware], ...DeleteUserSchema },
        userController.deleteUserById
    );
}
