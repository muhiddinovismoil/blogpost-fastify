import { HttpStatusCodes } from '../../utils/index.js';

export const UpdateBlogSchema = {
    schema: {
        tags: ['Blogs'],
        consumes: ['application/json'],
        produces: ['application/json'],
        body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subTitle: { type: 'string' },
                media: { type: 'string' },
                content: { type: 'string' },
            },
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.OK,
                    },
                    message: { type: 'string', default: 'OK' },
                },
            },
            404: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.NOT_FOUND,
                    },
                    message: { type: 'string', default: 'Not Found' },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.INTERNAL_SERVER_ERROR,
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
