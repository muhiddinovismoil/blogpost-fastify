import { HttpStatusCodes } from '../../utils/index.js';

const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR, FORBIDDEN } = HttpStatusCodes;

export const LoginSchema = {
    schema: {
        tags: ['Auth'],
        security: [],
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
                    statusCode: { type: 'integer', default: OK },
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
                    statusCode: { type: 'integer', default: BAD_REQUEST },
                },
            },
            403: {
                type: 'object',
                properties: {
                    message: { type: 'string', default: 'Forbidden resourse' },
                    statusCode: { type: 'integer', default: FORBIDDEN },
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
                        default: INTERNAL_SERVER_ERROR,
                    },
                },
            },
        },
    },
};
