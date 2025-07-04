export const schema = {
    type: 'object',
    required: [
        'PORT',
        'DATABASE_URL',
        'JWT_SECRET',
        'JWT_SECRET_TIME',
        'GMAIL_APP_PASS',
        'GMAIL',
    ],
    properties: {
        PORT: {
            type: 'string',
            default: 3000,
        },
        DATABASE_URL: {
            type: 'string',
        },
        JWT_SECRET: {
            type: 'string',
        },
        JWT_SECRET_TIME: {
            type: 'string',
        },
        GMAIL: {
            type: 'string',
        },
        GMAIL_APP_PASS: {
            type: 'string',
        },
    },
};

export const options = {
    confKey: 'config',
    schema: schema,
    dotenv: true,
};
// exporting other config files
export * from './swagger.js';
export * from './pino-logs.js';
