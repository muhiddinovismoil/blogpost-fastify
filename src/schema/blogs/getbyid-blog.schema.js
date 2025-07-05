import { HttpStatusCodes } from '../../utils/index.js';

export const GetByIdBlogSchema = {
    schema: {
        tags: ['Blogs'],
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
                        type: 'object',
                        properties: {
                            id: { type: 'string' },
                            title: { type: 'string' },
                            subTitle: { type: 'string' },
                            media: { type: 'string' },
                            createdAt: { type: 'string' },
                        },
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
