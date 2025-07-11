import { HttpStatusCodes } from '../../utils/index.js';

export const GetAllBlogsSchema = {
    schema: {
        tags: ['Blogs'],
        consumes: ['application/json'],
        produces: ['application/json'],
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
                        type: 'array',
                        items: {
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
