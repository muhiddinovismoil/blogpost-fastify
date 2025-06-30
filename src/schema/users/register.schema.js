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
          statusCode: { type: 'integer', default: 200 },
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
          statusCode: { type: 'integer', default: 400 },
        },
      },
      500: {
        type: 'object',
        properties: {
          message: { type: 'string', default: 'Interval Server Error' },
          statusCode: { type: 'integer', default: 500 },
        },
      },
    },
  },
};
