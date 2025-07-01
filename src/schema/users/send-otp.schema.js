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
    },
};
