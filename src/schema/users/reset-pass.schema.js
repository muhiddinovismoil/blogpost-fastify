import { HttpStatusCodes } from '../../utils/index.js';

export const ResetPassSchema = {
    schema: {
        tags: ['Auth'],
        consumes: ['application/json'],
        produces: ['application/json'],
        body: {
            type: 'object',
            required: ['email', 'oldPassword', 'newPassword'],
            properties: {
                email: { type: 'string', format: 'email' },
                oldPassword: { type: 'string', minLength: 8 },
                newPassword: { type: 'string', minLength: 8 },
            },
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.OK,
                    },
                    message: { type: 'string' },
                },
            },
            400: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.BAD_REQUEST,
                    },
                    message: { type: 'string', default: 'Bad Request' },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.INTERNAL_SERVER_ERROR,
                    },
                    message: {
                        type: 'string',
                        default: 'Internal Server Error',
                    },
                },
            },
        },
    },
};
