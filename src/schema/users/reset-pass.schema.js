import { HttpStatusCodes } from '../../utils';

const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } = HttpStatusCodes;

export const ResetPassSchema = {
    schema: {
        tags: ['Auth'],
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
                    statusCode: { type: 'integer', default: OK },
                    message: { type: 'string' },
                },
            },
            400: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: BAD_REQUEST },
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
                    message: {
                        type: 'string',
                        default: 'Internal Server Error',
                    },
                },
            },
        },
    },
};
