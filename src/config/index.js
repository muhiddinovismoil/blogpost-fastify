export const schema = {
  type: 'object',
  required: ['PORT', 'DATABASE_URL'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    DATABASE_URL: {
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
