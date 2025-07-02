import { HttpStatusCodes } from '../../utils/index.js';

const { BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = HttpStatusCodes;

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
                    statusCode: { type: 'integer', default: OK },
                    message: { type: 'string' },
                },
            },
            400: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: BAD_REQUEST,
                    },
                    message: { type: 'string', default: 'Bad Request' },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: INTERNAL_SERVER_ERROR,
                    },
                    message: { type: 'string', default: 'Bad Request' },
                },
            },
        },
    },
};
