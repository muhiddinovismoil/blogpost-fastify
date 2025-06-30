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
                                type: 'object',
                                properties: {
                                    token: {
                                        type: 'string',
                                        default:
                                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
                                    },
                                    expires: { type: 'string', default: '1d' },
                                },
                            },
                            refreshToken: {
                                type: 'object',
                                properties: {
                                    token: {
                                        type: 'string',
                                        default:
                                            'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.owv7q9nVbW5tqUezF_G2nHTra-ANW3HqW9epyVwh08Y-Z-FKsnG8eBIpC4GTfTVU',
                                    },
                                    expires: { type: 'string', default: '15d' },
                                },
                            },
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
