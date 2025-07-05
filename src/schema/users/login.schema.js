import { HttpStatusCodes } from '../../utils/index.js';

export const LoginSchema = {
    schema: {
        tags: ['Auth'],
        security: [],
        consumes: ['application/json'],
        produces: ['application/json'],
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: { type: 'string', format: 'email' },
                password: { type: 'string', minLength: 8 },
            },
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string', default: 'OK' },
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.OK,
                    },
                    data: {
                        type: 'object',
                        properties: {
                            accessToken: {
                                type: 'string',
                            },
                            expires: { type: 'string', default: '1d' },
                        },
                    },
                },
            },
            400: {
                type: 'object',
                properties: {
                    message: { type: 'string', default: 'Bad Request' },
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.BAD_REQUEST,
                    },
                },
            },
            403: {
                type: 'object',
                properties: {
                    message: { type: 'string', default: 'Forbidden resourse' },
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.FORBIDDEN,
                    },
                },
            },
            500: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        default: 'Internal Server Error',
                    },
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.INTERNAL_SERVER_ERROR,
                    },
                },
            },
        },
    },
};
