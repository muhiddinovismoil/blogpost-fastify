export const GetByIdBlogSchema = {
    schema: {
        tags: ['Blogs'],
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: 200 },
                    message: { type: 'string', default: 'OK' },
                    data: {
                        type: 'object',
                        properties: {
                            id: { type: 'string' },
                            title: { type: 'string' },
                            subTitle: { type: 'string' },
                            media: { type: 'string' },
                            userId: { type: 'string' },
                            createdAt: { type: 'string' },
                            updatedAt: { type: 'string' },
                            deletedAt: { type: 'string' },
                            archivedAt: { type: 'string' },
                        },
                    },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: 500 },
                    message: {
                        type: 'string',
                        default: 'Interval Server Error',
                    },
                },
            },
        },
    },
};
