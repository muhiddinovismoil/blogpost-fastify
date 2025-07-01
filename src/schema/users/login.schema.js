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
                    statusCode: { type: 'integer', default: 200 },
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
                    statusCode: { type: 'integer', default: 400 },
                },
            },
            403: {
                type: 'object',
                properties: {
                    message: { type: 'string', default: 'Forbidden resourse' },
                    statusCode: { type: 'integer', default: 403 },
                },
            },
            500: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        default: 'Interval Server Error',
                    },
                    statusCode: { type: 'integer', default: 500 },
                },
            },
        },
    },
};
