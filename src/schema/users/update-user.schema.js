import { HttpStatusCodes } from '../../utils/index.js';

export const UpdateUserSchema = {
    schema: {
        tags: ['Users'],
        consumes: ['application/json'],
        produces: ['application/json'],
        body: {
            type: 'object',
            properties: {
                email: { type: 'string' },
                fullName: { type: 'string' },
                photo: { type: 'string' },
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
                    message: { type: 'string', default: 'OK' },
                },
            },
            404: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.NOT_FOUND,
                    },
                    message: { type: 'string', default: 'Not found' },
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
