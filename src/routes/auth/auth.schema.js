//
// ********************************************************** Auth REGISTER
//
export const registerUserSchema = {
  body: {
    schema: {
      tags: ['Auth API'],
      summary: 'User registration API',
    },
    type: 'object',
    required: ['email', 'password'],
    properties: {
      fullname: { type: 'string' },
      email: { type: 'string', pattern: '^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$' },
      password: { type: 'string', minLength: 8 },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        statusCode: { type: 'integer', default: 201 },
        message: { type: 'string' },
      },
    },
    400: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'integer',
          default: 400,
        },
        message: { type: 'string', default: 'Bad Request' },
      },
    },
    500: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'integer',
          default: 500,
        },
        message: { type: 'string', default: 'Interval Server Error' },
      },
    },
  },
};
//
// ********************************************************** Auth LOGIN
//
export const loginUserSchema = {
  body: {
    schema: {
      tags: ['Auth API'],
      summary: 'User login API',
    },
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', pattern: '^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$' },
      password: { type: 'string', minLength: 8 },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        statusCode: { type: 'integer', default: 200 },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
          },
        },
      },
    },
    400: {
      type: 'object',
      properties: {
        statusCode: { type: 'integer', default: 400 },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
          },
        },
      },
    },
    403: {
      type: 'object',
      properties: {
        statusCode: { type: 'integer' },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
          },
        },
      },
    },
    500: {
      type: 'object',
      properties: {
        statusCode: { type: 'integer' },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
          },
        },
      },
    },
  },
};
