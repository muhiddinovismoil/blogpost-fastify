import { HttpStatusCodes } from '../../utils/index.js';

export const SendOtp = {
    schema: {
        tags: ['Auth'],
        security: [],
        body: {
            type: 'object',
            required: ['email'],
            properties: {
                email: { type: 'string', format: 'email' },
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
