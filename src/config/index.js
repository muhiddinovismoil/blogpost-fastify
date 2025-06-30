export const schema = {
  type: 'object',
  required: [
    'PORT',
    'DATABASE_URL',
    'JWT_ACCESS_SECRET',
    'JWT_REFRESH_SECRET',
    'JWT_ACCESS_TIME',
    'JWT_REFRESH_TIME',
    'GMAIL_APP_PASS',
  ],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    DATABASE_URL: {
      type: 'string',
    },
    JWT_ACCESS_SECRET: {
      type: 'string',
    },
    JWT_REFRESH_SECRET: {
      type: 'string',
    },
    JWT_ACCESS_TIME: {
      type: 'string',
    },
    JWT_REFRESH_TIME: {
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
