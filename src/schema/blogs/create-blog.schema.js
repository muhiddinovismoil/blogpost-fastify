import { HttpStatusCodes } from '../../utils/index.js';

export const CreateBlogSchema = {
    schema: {
        tags: ['Blogs'],
        consumes: ['application/json'],
        produces: ['application/json'],
        body: {
            type: 'object',
            required: ['title', 'subTitle', 'content'],
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
                    data: {
                        id: { type: 'string' },
                    },
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
