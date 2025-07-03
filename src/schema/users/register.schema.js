import { HttpStatusCodes } from '../../utils/index.js';

const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = HttpStatusCodes;

export const RegisterSchema = {
    schema: {
        tags: ['Auth'],
        security: [],
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                fullname: { type: 'string', minLength: 3 },
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
                            id: {
                                type: 'string',
                                default: '558b7105-c283-4378-9257-cfea03471326',
                            },
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
